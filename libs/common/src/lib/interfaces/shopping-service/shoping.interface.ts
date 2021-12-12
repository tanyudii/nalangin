export interface IShopping {
  id?: string;
  userId: string;
  date: string;
  store: string;
  isPpn: boolean;
  delivery: number;
  discount: number;
  ppn: number;
  subtotal: number;
  grandTotal: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
