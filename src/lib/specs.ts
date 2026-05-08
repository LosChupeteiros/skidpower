export type Spec = {
  code: string;
  label: string;
  value: number;
  unit: string;
};

export const PRODUCT = {
  code: "S68",
  family: "Industrial Fittings",
  name: "Dupla-Anilha",
  fullName: "Industrial Fittings — Dupla-Anilha S68",
  material: "Aço inox AISI 316L",
  finish: "Polido espelhado",
  marking: "Identificação gravada a laser",
  standard: "ISO 8434-1",
} as const;

export type CatalogEntry = {
  sku: string;
  tuboOd: string;
  rosca: string;
  D: number;
  W: number;
  N: number;
  L: number;
  I: number;
};

export const S68_CATALOG: readonly CatalogEntry[] = [
  { sku: "S68-4x1/8",   tuboOd: "5/32\"", rosca: "1/8\"", D:  2.4, W: 12, N: 24.6, L: 31.2, I: 13.7 },
  { sku: "S68-4x1/4",   tuboOd: "5/32\"", rosca: "1/4\"", D:  2.4, W: 14, N: 29.7, L: 36.3, I: 13.7 },
  { sku: "S68-6x1/8",   tuboOd: "1/4\"",  rosca: "1/8\"", D:  4.8, W: 14, N: 25.4, L: 32.8, I: 15.3 },
  { sku: "S68-6x1/4",   tuboOd: "1/4\"",  rosca: "1/4\"", D:  4.8, W: 14, N: 30.5, L: 37.9, I: 15.3 },
  { sku: "S68-6x3/8",   tuboOd: "1/4\"",  rosca: "3/8\"", D:  4.8, W: 18, N: 31.0, L: 38.4, I: 15.3 },
  { sku: "S68-6x1/2",   tuboOd: "1/4\"",  rosca: "1/2\"", D:  4.8, W: 22, N: 37.3, L: 44.7, I: 15.3 },
  { sku: "S68-8x1/8",   tuboOd: "5/16\"", rosca: "1/8\"", D:  4.8, W: 15, N: 26.7, L: 34.2, I: 16.2 },
  { sku: "S68-8x1/4",   tuboOd: "5/16\"", rosca: "1/4\"", D:  6.4, W: 15, N: 31.2, L: 38.7, I: 16.2 },
  { sku: "S68-8x3/8",   tuboOd: "5/16\"", rosca: "3/8\"", D:  6.4, W: 18, N: 31.8, L: 39.3, I: 16.2 },
  { sku: "S68-8x1/2",   tuboOd: "5/16\"", rosca: "1/2\"", D:  6.4, W: 22, N: 38.1, L: 45.6, I: 16.2 },
  { sku: "S68-10x1/8",  tuboOd: "3/8\"",  rosca: "1/8\"", D:  4.8, W: 18, N: 28.7, L: 36.3, I: 17.2 },
  { sku: "S68-10x1/4",  tuboOd: "3/8\"",  rosca: "1/4\"", D:  7.9, W: 18, N: 33.3, L: 40.9, I: 17.2 },
  { sku: "S68-10x3/8",  tuboOd: "3/8\"",  rosca: "3/8\"", D:  7.9, W: 18, N: 33.3, L: 40.9, I: 17.2 },
  { sku: "S68-10x1/2",  tuboOd: "3/8\"",  rosca: "1/2\"", D:  7.9, W: 22, N: 38.9, L: 46.5, I: 17.2 },
  { sku: "S68-10x3/4",  tuboOd: "3/8\"",  rosca: "3/4\"", D:  7.9, W: 27, N: 40.4, L: 48.0, I: 17.2 },
  { sku: "S68-12x1/8",  tuboOd: "1/2\"",  rosca: "1/8\"", D:  4.8, W: 22, N: 28.7, L: 38.8, I: 22.8 },
  { sku: "S68-12x1/4",  tuboOd: "1/2\"",  rosca: "1/4\"", D:  7.1, W: 22, N: 33.3, L: 43.4, I: 22.8 },
  { sku: "S68-12x3/8",  tuboOd: "1/2\"",  rosca: "3/8\"", D:  9.5, W: 22, N: 33.3, L: 43.4, I: 22.8 },
  { sku: "S68-12x1/2",  tuboOd: "1/2\"",  rosca: "1/2\"", D:  9.5, W: 22, N: 38.9, L: 49.0, I: 22.8 },
  { sku: "S68-12x3/4",  tuboOd: "1/2\"",  rosca: "3/4\"", D:  9.5, W: 27, N: 40.4, L: 50.5, I: 22.8 },
  { sku: "S68-16x1/2",  tuboOd: "5/8\"",  rosca: "1/2\"", D: 11.9, W: 24, N: 38.9, L: 49.0, I: 24.4 },
  { sku: "S68-20x1/2",  tuboOd: "3/4\"",  rosca: "1/2\"", D: 11.9, W: 30, N: 42.2, L: 52.3, I: 26.0 },
  { sku: "S68-20x3/4",  tuboOd: "3/4\"",  rosca: "3/4\"", D: 15.9, W: 30, N: 42.2, L: 52.3, I: 26.0 },
  { sku: "S68-22x3/4",  tuboOd: "7/8\"",  rosca: "3/4\"", D: 15.9, W: 30, N: 42.2, L: 52.3, I: 26.0 },
  { sku: "S68-22x1",    tuboOd: "7/8\"",  rosca: "1\"",   D: 18.3, W: 35, N: 47.0, L: 57.1, I: 26.0 },
  { sku: "S68-25x3/4",  tuboOd: "1\"",    rosca: "3/4\"", D: 15.9, W: 35, N: 45.2, L: 57.5, I: 31.3 },
  { sku: "S68-25x1",    tuboOd: "1\"",    rosca: "1\"",   D: 21.8, W: 35, N: 50.0, L: 62.3, I: 31.3 },
] as const;

export const APPLICATIONS = [
  { name: "Óleo & Gás", iconKey: "fuel" },
  { name: "Química & Petroquímica", iconKey: "flask-conical" },
  { name: "Alimentício & Bebidas", iconKey: "wheat" },
  { name: "Naval & Offshore", iconKey: "ship" },
  { name: "Sucroenergético", iconKey: "leaf" },
  { name: "Celulose & Papel", iconKey: "trees" },
] as const;

export const MATERIALS = [
  { title: "Aço inox AISI 316L", desc: "Resistência superior à corrosão em ambientes agressivos." },
  { title: "Acabamento polido espelhado", desc: "Superfície lisa, sem porosidades, padrão sanitário." },
  { title: "Identificação gravada a laser", desc: "Rastreabilidade permanente, sem tinta ou etiquetas." },
  { title: "Vedação dupla anilha cônica", desc: "Estanqueidade confiável em alta e baixa pressão." },
] as const;

export const QUALITY_BADGES = [
  { key: "iso9001",  title: "ISO 9001",        desc: "Sistema de gestão da qualidade certificado." },
  { key: "iso8434",  title: "ISO 8434-1",      desc: "Conexões em conformidade com a norma internacional." },
  { key: "aisi316l", title: "AISI 316L",       desc: "Aço inox austenítico de baixo teor de carbono." },
  { key: "inpro",    title: "INPRO-SEAL",      desc: "Distribuidor oficial de selagem industrial." },
] as const;
