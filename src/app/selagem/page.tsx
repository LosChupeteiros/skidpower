import { ComingSoon } from "@/components/splits/ComingSoon";

export default function SelagemPage() {
  return (
    <ComingSoon
      title="Selagem industrial"
      description="Soluções de selagem mecânica para equipamentos rotativos críticos. Catálogo completo em desenvolvimento — fale com nosso time para especificação imediata."
      imageSrc="/images/selagem.webp"
      imageAlt="Selagem INPRO-SEAL Skid Power"
      partner={{
        logoSrc: "/images/inpro.svg",
        alt: "INPRO-SEAL",
        label: "Distribuidor oficial",
        description: (
          <>
            <span style={{ color: "#ffffff", fontWeight: 700 }}>
              Distribuidor oficial INPRO-SEAL no Brasil.
            </span>
            <br />
            Selos de não-contato e bearing isolators que prolongam a vida útil
            de equipamentos rotativos críticos.
          </>
        ),
      }}
      backHref="/"
      backLabel="Voltar para início"
    />
  );
}
