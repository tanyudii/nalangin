export interface IShoppingItem {
  id?: string;
  shoppingId: string;
  borrowerId: string;
  description: string;
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
