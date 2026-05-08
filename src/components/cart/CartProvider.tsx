"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import type {
  CartAction,
  CartItem,
  CartState,
} from "@/lib/cart-types";
import { CartDrawer } from "./CartDrawer";

const STORAGE_KEY = "skidpower.cart.v1";

const initialState: CartState = { items: [], isOpen: false };

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "HYDRATE":
      return { ...state, items: action.items };
    case "ADD": {
      const i = state.items.findIndex(
        (x) =>
          x.sku === action.item.sku && x.threadType === action.item.threadType,
      );
      const items =
        i >= 0
          ? state.items.map((x, k) =>
              k === i ? { ...x, qty: x.qty + action.item.qty } : x,
            )
          : [...state.items, action.item];
      return { ...state, items, isOpen: true };
    }
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter((_, k) => k !== action.index),
      };
    case "UPDATE_QTY":
      return {
        ...state,
        items: state.items.map((x, k) =>
          k === action.index ? { ...x, qty: Math.max(1, action.qty) } : x,
        ),
      };
    case "CLEAR":
      return { ...state, items: [] };
    case "OPEN":
      return { ...state, isOpen: true };
    case "CLOSE":
      return { ...state, isOpen: false };
    case "TOGGLE":
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
}

type CartContextValue = {
  items: CartItem[];
  isOpen: boolean;
  count: number;
  add: (item: CartItem) => void;
  remove: (index: number) => void;
  updateQty: (index: number, qty: number) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // hydrate from localStorage once on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        dispatch({ type: "HYDRATE", items: parsed as CartItem[] });
      }
    } catch {
      // corrupt storage; ignore
    }
  }, []);

  // persist on items change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch {
      // quota or private mode; ignore
    }
  }, [state.items]);

  // close drawer on Escape
  useEffect(() => {
    if (!state.isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dispatch({ type: "CLOSE" });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [state.isOpen]);

  // lock scroll when open
  useEffect(() => {
    if (!state.isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [state.isOpen]);

  const add = useCallback((item: CartItem) => dispatch({ type: "ADD", item }), []);
  const remove = useCallback(
    (index: number) => dispatch({ type: "REMOVE", index }),
    [],
  );
  const updateQty = useCallback(
    (index: number, qty: number) =>
      dispatch({ type: "UPDATE_QTY", index, qty }),
    [],
  );
  const clear = useCallback(() => dispatch({ type: "CLEAR" }), []);
  const open = useCallback(() => dispatch({ type: "OPEN" }), []);
  const close = useCallback(() => dispatch({ type: "CLOSE" }), []);
  const toggle = useCallback(() => dispatch({ type: "TOGGLE" }), []);

  const value = useMemo<CartContextValue>(
    () => ({
      items: state.items,
      isOpen: state.isOpen,
      count: state.items.reduce((acc, i) => acc + i.qty, 0),
      add,
      remove,
      updateQty,
      clear,
      open,
      close,
      toggle,
    }),
    [state.items, state.isOpen, add, remove, updateQty, clear, open, close, toggle],
  );

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartDrawer />
    </CartContext.Provider>
  );
}

export function useCart() {
  const v = useContext(CartContext);
  if (!v) throw new Error("useCart must be used within <CartProvider>");
  return v;
}
