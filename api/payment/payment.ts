import { Order, OrderCart } from "../../model/order";
import { Payment } from "../../model/payment";
import { fullUrl } from "../api";

export const paymentRoute = "/api/order";

const PaymentAPI = Object.freeze({
  paypalCreateOrder: (payment: Payment) => paypalCreateOrder(payment),
  stripeCreateOrder: (payment: Payment) => stripeCreateOrder(payment),
  googlePayCreateOrder: (payment: Payment) => googlePayCreateOrder(payment),
  paypalCheckout: (id: string) => paypalCheckout(id),
});

const paypalCreateOrder = (order: Payment) =>
  fetch(`${fullUrl}${paymentRoute}/paypal/createOrder`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });

const stripeCreateOrder = (order: Payment) =>
  fetch(`${fullUrl}${paymentRoute}/stripe/createOrder`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });

const googlePayCreateOrder = (order: Payment) =>
  fetch(`${fullUrl}${paymentRoute}/googlePay/createOrder`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });

const paypalCheckout = (id: string) =>
  fetch(`${fullUrl}${paymentRoute}/paypal/${id}/checkout`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "text/plain",
    },
    body: id,
  });

export default PaymentAPI;
