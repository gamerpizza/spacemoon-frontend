import { Cart } from "./cart";

export interface Order {
  orderId: string;
  cart: Cart;
  createdBy: string;
  createdAt: number;
  updatedBy: number;
  status: number;
}

export type OrderCart = Pick<Order, "cart"> | Omit<Order, "orderId">;
