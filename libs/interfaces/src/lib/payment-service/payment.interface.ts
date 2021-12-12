export interface IPayment {
  id?: string;
  userId: string;
  date: string;
  lenderId: string;
  lenderBankId: string;
  delivery: number;
  discount: number;
  ppn: number;
  subtotal: number;
  grandTotal: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
