export type ThreadType = "NPT" | "BSP";

export type CartItem = {
  sku: string;
  tuboOd: string;
  rosca: string;
  threadType: ThreadType;
  qty: number;
};

export type CartState = {
  items: CartItem[];
  isOpen: boolean;
};

export type CartAction =
  | { type: "ADD"; item: CartItem }
  | { type: "REMOVE"; index: number }
  | { type: "UPDATE_QTY"; index: number; qty: number }
  | { type: "CLEAR" }
  | { type: "OPEN" }
  | { type: "CLOSE" }
  | { type: "TOGGLE" }
  | { type: "HYDRATE"; items: CartItem[] };

export type ClientData = {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  mensagem: string;
};
