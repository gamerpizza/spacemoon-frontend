import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { SessionData } from '../types/auth';
import { useEffect, useState } from 'react';

import { Product } from '../model/product';
import '../styles/globals.css';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';

function MyApp({ Component, pageProps }: AppProps<SessionData>) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [searching, setSearching] = useState(false);
  console.log('app', pageProps);
  useEffect(() => {
    try {
      if (localStorage.getItem('cart'))
        setCart(JSON.parse(localStorage.getItem('cart') || '{}'));
    } catch (error) {
      localStorage.clear();
    }
  }, []);

  const saveCart = (newCart: any) => {
    localStorage.setItem('cart', JSON.stringify(newCart));
    let subtotal = 0;
    for (let i = 0; i < Object.keys(cart).length; i++) {
      subtotal +=
        newCart[Object.keys(cart)[i]].price *
        newCart[Object.keys(cart)[i]].quantity;
    }
    setSubTotal(subtotal);
  };

  const addToCart = (
    id: number,
    product: Product,
    quantity: number,
    price: number,
    name: string,
  ) => {
    let newCart: any = cart;

    if (id in cart) newCart[id].quantity = newCart[id].quantity + 1;
    else newCart[id] = { product, price, quantity, name };

    setCart(newCart);
    saveCart(newCart);
  };

  const removeFromCart = (id: number) => {
    let newCart: any = cart;
    if (id in cart) newCart[id].quantity = newCart[id].quantity - 1;

    if (newCart[id].quantity <= 0) delete newCart[id];

    setCart(newCart);
    saveCart(newCart);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  const searchHandler = async (searchValue: string, categoryId: number) => {
    if(categoryId !== null){
      setSearching(true);
      setSearchResults([]);
      const response = await fetch(
        `http://localhost:8000/api/product/${categoryId}/get/0/1000`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'text/plain',
          },
        },
      );
      const products: Product[] = await response.json();
      products.forEach((product: Product) => {
        if (product.name === searchValue)
          setSearchResults([...searchResults, product]);
      });
    }
  };
  console.log('app', pageProps);
  return (
    <SessionProvider
      session={pageProps.session}
      baseUrl='/realms/spacemoon/protocol/openid-connect/auth'
    >
      <Navbar
        pageProps={pageProps}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
        searchHandler={searchHandler}
      />

      <Component
        searchResults={searchResults}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
        {...pageProps}
      />
      <Footer/>
      </SessionProvider>
  );
}

export default MyApp;
