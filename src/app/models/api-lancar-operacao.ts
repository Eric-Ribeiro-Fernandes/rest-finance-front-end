export interface Compras {
  compras: Compra[];
}

export interface Compra {
  id: string;
  data: Date;
  ticker: string;
  precoAtivo: number;
  quantidade: number;
  totalCompra: number;
}
