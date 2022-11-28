import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import LandingPage from '../components/LandingPage/LandingPage';

import { GooglePay } from '../components/GooglePay/GooglePay';
import { PayPal } from '../components/PayPal/PayPal';
import { Stripe } from '../components/Stripe/Stripe';
import Wrapper from '../components/Wrapper/Wrapper';
import { Category } from '../model/category';
import { mockCart, mockOrder } from '../utils/mock';
import { Footer } from '../components/Footer/Footer';

const Home: NextPage = (props: any) => (
  <Wrapper>

    <>
      <LandingPage categories = {props.categories} addToCart={props.addToCart} />
      {/* <PayPal order={mockOrder} />

      <div style={{ width: '30%', marginLeft: '10px' }}>
        <Stripe currencySymbol='$' cart={mockCart} />
      </div>

      <div style={{ width: '30%', marginLeft: '10px', marginTop: '10px' }}>
        <GooglePay cart={mockCart}/>
      </div> */}

    </>
  </Wrapper>
);

export const getStaticProps = async () => {




  try {
    const response = await fetch(`http://localhost:8000/api/category/get/0/16`, {
    const response = await fetch(`http://localhost:8000/api/category/get/0/1000`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'text/plain',
      },
    });
    const category: Category = await response.json();
    return {
      props: {
        categories: category,
      },
    };
  } catch (error: any) {
    return {
      props: { errCode: 500, message: error },
    };
  }
};

export default Home;
