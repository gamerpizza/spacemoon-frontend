import { useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

import SearchBar from '../SearchBar/SearchBar';
import whiteLogo from '../../public/images/logo_black.png';
import blackLogo from '../../public/images/bg_black_logo.png';
import shoppingCartIcon from '../../public/images/shopping-cart.svg';
import Category from '../Dropdowns/Category';

export const Navbar = (props: any) => {

  const [cartClicked, setCartClicked] = useState(false);
  const [isSignOut, setIsSignOut] = useState(false);
  const [yScroll, setYScroll] = useState(0)
  const session = useSession()
  const router = useRouter()

  const handleNavigation = useCallback((e:any) => {
    const window = e.currentTarget;
    setYScroll(window.scrollY);
  }, [yScroll]
  );

  useEffect(() => {
    setYScroll(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

   useEffect(() => {
    if(!localStorage.getItem("data") && session.status === 'authenticated')
      localStorage.setItem("data", JSON.stringify(session.data))
  }, [session])
  const loggedInContent = (
    <>
      <a
        href='/profile'
        className={`flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium font-unica no-underline text-white border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 ${yScroll > 722 || router.pathname !== '/' ? 'text-[#1C1F22]': 'text-[#F5F8FA]'}`}
      >
        PROFILE
      </a>
      <li
        onClick={(e) => {
          e.preventDefault();
          localStorage.removeItem('cart');
          localStorage.removeItem('data');
          setIsSignOut(true)
          signOut({ callbackUrl: '/' });
        }}
        className={`flex justify-between items-center py-2 pr-4 pl-3  w-full font-medium font-unica text-white border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 px-4 md:px-5 md:p-0 dark:text-gray-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 ${yScroll > 722 || router.pathname !== '/' ? 'text-[#1C1F22]': 'text-[#F5F8FA]'}`}
      >
        SIGN OUT
      </li>




      <div
        id='drawer-example'
        className='flex-col drawer fixed right-0 top-40 z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800'
        tab-index={-1}
        aria-labelledby='drawer-label'
      >
        <style jsx>{`
          .drawer {
            display: ${cartClicked ? 'flex' : 'none'};
          }
        `}</style>
        <>
          <button
            onClick={() => setCartClicked(false)}
            type='button'
            data-drawer-dismiss='drawer-example'
            aria-controls='drawer-example'
            className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
          >
            <svg
              aria-hidden='true'
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
            <span className='sr-only'>Close menu</span>
          </button>

          {props.cart &&
            Object.keys(props.cart).map((item) => {
              return (
                <div key={item}>
                  <li className='flex  py-6'>
                    <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                      <img
                        src='https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg'
                        alt='Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.'
                        className='h-full w-full object-cover object-center'
                      />
                    </div>

                    <div className='ml-4 flex flex-1 flex-col'>
                      <div>
                        <div className='flex justify-between text-base font-medium text-gray-900'>
                          <h3>
                            <p>{props.cart[item].name}</p>
                          </h3>
                          <p className='ml-4'>{props.cart[item].price}</p>
                        </div>
                        <p className='mt-1 text-sm text-gray-500'>Blue</p>
                      </div>
                      <div className='flex flex-1 items-end justify-between text-sm'>
                        <p className='text-gray-500'>
                          {props.cart[item].quantity}
                        </p>

                        <div className='flex'>
                          <button
                            onClick={() => props.removeFromCart(item)}
                            type='button'
                            className='font-medium text-indigo-600 hover:text-indigo-500'
                          >
                            Remove
                          </button>
                        </div>
                        <div className='flex'>
                          <button
                            onClick={() =>
                              props.addToCart(item, '', 1, 249, 'usman')
                            }
                            type='button'
                            className='font-medium text-indigo-600 hover:text-indigo-500'
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>

                  <br />
                </div>
              );
            })}
          <div className='border-t border-gray-200 py-6 px-4 sm:px-6'>
            <div className='flex justify-between text-base font-medium text-gray-900'>
              <p>Subtotal</p>
              <p>{props.subTotal}</p>
            </div>
            <p className='mt-0.5 text-sm text-gray-500'>
              Shipping and taxes calculated at checkout.
            </p>
            <div className='mt-6'>
              <Link
                href='/checkout'
                className='flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
              >
                Checkout
              </Link>
            </div>
            <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
              <p>
                or
                <Link href='/product'>
                  <button
                    type='button'
                    className='font-medium text-indigo-600 hover:text-indigo-500'
                  >
                    Continue Shopping
                    <span aria-hidden='true'> &rarr;</span>
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </>
      </div>
    </>
  );

  const notLoggedInContent = (
    <>
      <a
        href='#'
        onClick={(e) => {
          e.preventDefault();
          signIn('keycloak', { callbackUrl: '/' });
        }}
        className={` font-unica hover:bg-gray-800  font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2  focus:outline-none dark:focus:ring-gray-800 ${ yScroll > 722 || router.pathname !== '/' ? 'text-[#1C1F22]': 'text-[#F5F8FA]'}`}
      >
        LOGIN
      </a>
      <a
        href='#'
        className={` hover:bg-gray-800 font-unica  font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2  focus:outline-none dark:focus:ring-blue-800 ${ yScroll > 722 || router.pathname !== '/' ? 'text-[#1C1F22]': 'text-[#F5F8FA]'}`}
      >
        Sign up
      </a>

    </>
  );

  return (
    <nav className={`sticky top-0 z-10  border-b border-gray-200 px-2 md:px-4 py-0.5 ${yScroll > 722 || router.pathname !== '/'? 'bg-[#F5F8FA]' : 'backdrop-filter backdrop-blur-lg' } `}>
      <div className=' flex flex-wrap items-center lg:justify-between sm:justify-around  lg:pt-0 max-w-screen-3xl'>
        <div className='flex h-10 items-center sm:order-1'>
          <a href='/' className='flex items-center'>
            <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
              {yScroll < 722 && router.pathname === '/'?
                <Image src={whiteLogo} width={140} height={10} alt='logo' /> :
                <Image src={blackLogo} width={150} height={10} alt='logo' />
              }
            </span>
          </a>
        </div>
        <div className='sm:order-3 lg:order-2 sm:pb-5 lg:pb-0'>
        <SearchBar
              categories={props.categories}
              addToCart={props.addToCart}
              yScroll={yScroll}
              path={router.pathname}
              searchHandler={(searchItem: any, categoryId: any) =>
              props.searchHandler(searchItem, categoryId)
              }
            />
        </div>
        <div
          id='mega-menu-icons'
          className=' justify-between items-center w-full sm:flex sm:w-auto sm:order-2 lg:order-3 p-4'
        >

          <ul className='flex flex-col items-center mt-4 text-sm font-medium sm:flex-row sm:space-x-8 sm:mt-0'>

            <Category path={router.pathname} yScroll={yScroll} categories= {props.categories}/>

            {/* <Languages /> */}

              { session.data ? <> {loggedInContent} </> : <> {notLoggedInContent} </> }

            <div
              onClick={() => setCartClicked(!cartClicked)}
              className='text-gray-800  rounded-lg  px-4 py-2 sm:px-5 sm:py-2.5 mr-1 sm:mr-2'
            >
              <Image
                src={shoppingCartIcon}
                width={32}
                height={32}
                alt='Icon'
                className='rounded-full'
              />
            </div>
          <button
            data-collapse-toggle='mega-menu-icons'
            type='button'
            className='inline-flex items-center pt-2 pb-2 ml-0 text-sm text-white rounded-lg sm:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='mega-menu-icons'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              aria-hidden='true'
              className='w-9 h-8'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};
