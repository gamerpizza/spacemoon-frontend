import React from "react";
import GooglePayButton from "@google-pay/button-react";
import { toArray, toNumber } from "../../utils/envVariableUtils";
import { Cart } from "../../model/cart";
import PaymentAPI from "../../api/payment/payment";
import { Payment } from "../../model/payment";

interface IProps {
  cart: Cart;
}

export const GooglePay = ({ cart }: IProps) => {
  const env: google.payments.api.Environment =
    (process.env.NEXT_PUBLIC_ENV as google.payments.api.Environment) ?? "TEST";
  const apiVMajor = toNumber(process.env.NEXT_PUBLIC_GP_API_V);
  const apiVMinor = toNumber(process.env.NEXT_PUBLIC_GP_API_V_M);
  const paymentMethods = toArray(
    process.env.NEXT_PUBLIC_GP_CARD_NETWORKS
  ) as google.payments.api.CardNetwork[];
  const authMethods = toArray(
    process.env.NEXT_PUBLIC_GP_AUTH_METHODS
  ) as google.payments.api.CardAuthMethod[];

  const allowedPaymentMethods = [
    {
      type: "CARD",
      parameters: {
        allowedAuthMethods: authMethods,
        allowedCardNetworks: paymentMethods,
      },
      tokenizationSpecification: {
        type: "PAYMENT_GATEWAY",
        parameters: {
          gateway: process.env.NEXT_PUBLIC_GP_GATEWAY ?? "",
          gatewayMerchantId:
            process.env.NEXT_PUBLIC_GP_GATEWAY_MERCHANT_ID ?? "",
        },
      },
    },
  ] as google.payments.api.PaymentMethodSpecification[];

  const merchantInfo = {
    merchantId: process.env.NEXT_PUBLIC_GP_MERCHANT_ID ?? "",
    merchantName: process.env.NEXT_PUBLIC_GP_MERCHANT_NAME ?? "",
  };

  const allShippingOptions: google.payments.api.ShippingOptionParameters = {
    defaultSelectedOptionId: "shipping-001",
    shippingOptions: [
      {
        id: "shipping-001",
        label: "Free",
        description: "Free shipping. Arrives in 5 business days.",
      },
      {
        id: "shipping-002",
        label: "$1.99: Standard shipping",
        description: "Standard shipping delivered in 3 business days.",
      },
      {
        id: "shipping-003",
        label: "$10: Express shipping",
        description: "Express shipping delivered in 1 business day.",
      },
    ],
  };

  type ShippingOptions = "shipping-001" | "shipping-002" | "shipping-003";

  const getShippingPrices = (option: ShippingOptions): string => {
    switch (option) {
      case "shipping-001":
        return "0.00";
      case "shipping-002":
        return "1.99";
      case "shipping-003":
        return "10.00";
    }
  };

  const calculateTransactionInfo = (
    shippingId: ShippingOptions
  ): google.payments.api.TransactionInfo => {
    let totalPrice = 0;

    const shippingDetails: google.payments.api.DisplayItem[] =
      cart.products.map((p) => {
        totalPrice += p.price;

        return {
          label: p.name,
          price: p.price.toFixed(2),
          type: "LINE_ITEM",
          status: "FINAL",
        };
      });

    if (shippingId) {
      shippingDetails.push({
        label: "Shipping",
        price: getShippingPrices(shippingId),
        type: "LINE_ITEM",
        status: "FINAL",
      });

      totalPrice += Number.parseFloat(getShippingPrices(shippingId));
    }

    return {
      currencyCode: "USD",
      totalPrice: totalPrice.toFixed(2),
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total: ",
      displayItems: shippingDetails,
      checkoutOption: "DEFAULT",
      countryCode: "US",
    };
  };

  const paymentRequest = {
    apiVersion: apiVMajor,
    apiVersionMinor: apiVMinor,
    allowedPaymentMethods,
    merchantInfo,
    transactionInfo: calculateTransactionInfo("shipping-001"),
    callbackIntents: [
      "SHIPPING_ADDRESS",
      "SHIPPING_OPTION",
      "PAYMENT_AUTHORIZATION",
    ],
    shippingAddressParameters: {
      phoneNumberRequired: true,
    },
    shippingAddressRequired: true,
    shippingOptionRequired: true,
    emailRequired: true,
  } as google.payments.api.PaymentDataRequest;

  return (
    <GooglePayButton
      environment={env}
      buttonColor={"black"}
      paymentRequest={paymentRequest}
      buttonSizeMode={"fill"}
      buttonType={"checkout"}
      onPaymentAuthorized={(x) => {
        const paymentBody: Payment = {
          order: {
            cart,
          },
          paymentData: x,
        };
        return PaymentAPI.googlePayCreateOrder(paymentBody).then(() => ({
          transactionState: "SUCCESS",
          error: undefined,
        }));
      }}
      onPaymentDataChanged={(ipd) =>
        new Promise((resolve, reject) => {
          const shippingOptions = ipd.shippingOptionData;
          const intermediaryPaymentRequest: google.payments.api.PaymentDataRequestUpdate =
            {};

          if (
            ipd.callbackTrigger == "INITIALIZE" ||
            ipd.callbackTrigger == "SHIPPING_ADDRESS"
          ) {
            intermediaryPaymentRequest.newShippingOptionParameters =
              allShippingOptions;
            let selectedShippingOptionId =
              intermediaryPaymentRequest.newShippingOptionParameters
                .defaultSelectedOptionId;
            intermediaryPaymentRequest.newTransactionInfo =
              calculateTransactionInfo(
                selectedShippingOptionId as ShippingOptions
              );
          } else if (
            ipd.callbackTrigger == "SHIPPING_OPTION" &&
            shippingOptions
          ) {
            intermediaryPaymentRequest.newTransactionInfo =
              calculateTransactionInfo(shippingOptions.id as ShippingOptions);
          }

          return resolve(intermediaryPaymentRequest);
        })
      }
    />
  );
};
