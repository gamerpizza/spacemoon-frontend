import { Product } from "./product";

export interface Cart {
  id: string;
  userId: string;
  products: Product[];
  subTotal: number;
  quantity: number;
  createdAt: number;
  updatedAt: number;
}
