export interface IPaymentItem {
  id?: string;
  paymentId: string;
  shoppingId: string;
  price: number;
  percentage: number;
  delivery: number;
  discount: number;
  ppn: number;
  total: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
