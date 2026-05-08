"use client";

import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { clamp } from "@/lib/clamp";

type UseSliderOptions = {
  initial?: number;
  animateTo?: number;
  duration?: number;
  hoverFollow?: boolean;
  dragOnly?: boolean;
  /** Also writes the value to document.documentElement (--hero-split) so other elements can react. */
  publishGlobal?: boolean;
};

type UseSliderReturn = {
  containerRef: React.RefObject<HTMLElement | null>;
  setSplit: (v: number) => void;
  getSplit: () => number;
};

const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useSlider(options: UseSliderOptions = {}): UseSliderReturn {
  const {
    initial = 0,
    animateTo = 50,
    duration = 1200,
    hoverFollow = true,
    dragOnly = false,
    publishGlobal = false,
  } = options;
  const effectiveHoverFollow = dragOnly ? false : hoverFollow;

  const containerRef = useRef<HTMLElement | null>(null);
  const splitRef = useRef<number>(initial);
  const draggingRef = useRef<boolean>(false);
  const animRef = useRef<number | null>(null);
  const removeDragListenersRef = useRef<(() => void) | null>(null);

  const writeSplit = useCallback(
    (value: number) => {
      const v = clamp(value, 0, 100);
      splitRef.current = v;

      const el = containerRef.current;
      if (el) {
        el.style.setProperty("--split", `${v}%`);
        el.setAttribute("aria-valuenow", String(Math.round(v)));
      }
      if (publishGlobal && typeof document !== "undefined") {
        document.documentElement.style.setProperty("--hero-split", `${v}%`);
      }
    },
    [publishGlobal],
  );

  const setSplit = useCallback((v: number) => writeSplit(v), [writeSplit]);
  const getSplit = useCallback(() => splitRef.current, []);

  const pctFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return splitRef.current;

    const rect = el.getBoundingClientRect();
    if (rect.width <= 0) return splitRef.current;

    return ((clientX - rect.left) / rect.width) * 100;
  }, []);

  const cancelEntry = useCallback(() => {
    if (animRef.current != null) {
      cancelAnimationFrame(animRef.current);
      animRef.current = null;
    }
  }, []);

  const stopDrag = useCallback(() => {
    if (!draggingRef.current && !removeDragListenersRef.current) return;

    draggingRef.current = false;
    removeDragListenersRef.current?.();
    removeDragListenersRef.current = null;
  }, []);

  useIsomorphicLayoutEffect(() => {
    writeSplit(initial);
  }, [initial, writeSplit]);

  useEffect(() => {
    if (!publishGlobal) return;

    return () => {
      if (typeof document !== "undefined") {
        document.documentElement.style.removeProperty("--hero-split");
      }
    };
  }, [publishGlobal]);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      writeSplit(50);
      return;
    }

    if (dragOnly) {
      writeSplit(initial);
      return;
    }

    const start = performance.now();
    const from = initial;
    const to = animateTo;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      writeSplit(from + (to - from) * easeOutQuint(t));

      if (t < 1) {
        animRef.current = requestAnimationFrame(tick);
      } else {
        animRef.current = null;
      }
    };

    animRef.current = requestAnimationFrame(tick);
    return cancelEntry;
  }, [initial, animateTo, duration, dragOnly, writeSplit, cancelEntry]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWindowMove = (event: PointerEvent) => {
      if (!draggingRef.current) return;
      event.preventDefault();
      writeSplit(pctFromClientX(event.clientX));
    };

    const onWindowUp = () => {
      stopDrag();
    };

    const startDrag = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;

      event.preventDefault();
      cancelEntry();
      removeDragListenersRef.current?.();
      draggingRef.current = true;
      writeSplit(pctFromClientX(event.clientX));

      window.addEventListener("pointermove", onWindowMove, { passive: false });
      window.addEventListener("pointerup", onWindowUp);
      window.addEventListener("pointercancel", onWindowUp);

      removeDragListenersRef.current = () => {
        window.removeEventListener("pointermove", onWindowMove);
        window.removeEventListener("pointerup", onWindowUp);
        window.removeEventListener("pointercancel", onWindowUp);
      };
    };

    const trackHover = (event: PointerEvent) => {
      if (draggingRef.current) return;
      if (event.pointerType === "mouse" && effectiveHoverFollow) {
        writeSplit(pctFromClientX(event.clientX));
      }
    };

    el.addEventListener("pointerdown", startDrag, {
      capture: true,
      passive: false,
    });
    el.addEventListener("pointermove", trackHover, { capture: true });

    return () => {
      el.removeEventListener("pointerdown", startDrag, { capture: true });
      el.removeEventListener("pointermove", trackHover, { capture: true });
      stopDrag();
    };
  }, [cancelEntry, effectiveHoverFollow, pctFromClientX, stopDrag, writeSplit]);

  return { containerRef, setSplit, getSplit };
}
