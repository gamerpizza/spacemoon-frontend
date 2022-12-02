import { OrderCart } from "./order";

export interface Payment {
  order: OrderCart;
  paymentData: any;
}
