import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import PaymentAPI from "../../api/payment/payment";
import { Order } from "../../model/order";

interface IProps {
  order: Order;
}

export const PayPal = ({ order }: IProps) => {
  const paymentBody = {
    order,
    paymentData: null,
  };

  return (
    <PayPalScriptProvider
      options={{
        "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? "",
      }}
    >
      <PayPalButtons
        style={{
          layout: "vertical",
          shape: "pill",
        }}
        createOrder={(data, actions) => {
          return PaymentAPI.paypalCreateOrder(paymentBody)
            .then((resp) => {
              const x = resp.json();
              return x;
            })
            .then((order) => order.id);
        }}
        onApprove={(data, actions) => {
          return PaymentAPI.paypalCheckout(data.orderID).then((resp) =>
            resp.json()
          );
        }}
      />
    </PayPalScriptProvider>
  );
};
