import type { NextPage } from "next";
import { useRouter } from "next/router";
import LandingPage from "../components/LandingPage/LandingPage";

import { GooglePay } from "../components/GooglePay/GooglePay";
import { PayPal } from "../components/PayPal/PayPal";
import { Stripe } from "../components/Stripe/Stripe";
import Wrapper from "../components/Wrapper/Wrapper";
import { Category } from "../model/category";
import { mockCart, mockOrder } from "../utils/mock";
import { Footer } from "../components/Footer/Footer";

const Home: NextPage = (props: any) => (
  <Wrapper>
    <>
      <LandingPage addToCart={props.addToCart} />
    </>
  </Wrapper>
);


export default Home;
