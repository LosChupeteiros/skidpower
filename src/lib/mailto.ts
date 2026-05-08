import type { CartItem, ClientData } from "./cart-types";

const VENDAS_EMAIL = "vendas@skidpower.com";

export function formatQuoteEmail(items: CartItem[], data: ClientData): string {
  const totalQty = items.reduce((acc, i) => acc + i.qty, 0);
  const subject = `Cotação Skid Power — ${items.length} ${items.length === 1 ? "item" : "itens"} (${totalQty} pç)`;

  const body = [
    `Olá,`,
    ``,
    `Solicito cotação dos seguintes itens:`,
    ``,
    ...items.map(
      (i, idx) =>
        `${String(idx + 1).padStart(2, "0")}. ${i.sku} | OD ${i.tuboOd} | Rosca ${i.threadType} ${i.rosca} | Qtd: ${i.qty}`,
    ),
    ``,
    `--- Dados do solicitante ---`,
    `Nome: ${data.nome}`,
    `Empresa: ${data.empresa}`,
    `Email: ${data.email}`,
    `Telefone: ${data.telefone}`,
    data.mensagem ? `\nMensagem:\n${data.mensagem}` : "",
    ``,
    `Aguardo retorno.`,
    `Obrigado.`,
  ].join("\n");

  const params = new URLSearchParams({
    subject,
    body,
  });

  return `mailto:${VENDAS_EMAIL}?${params.toString()}`;
}
