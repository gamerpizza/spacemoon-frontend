import Link from "next/link";
import Image from "next/image";

import defaultImage from "../../public/images/default-image.jpg";
import * as path from "../../constants/paths";

const Cart = ({cartClicked, setCartClicked, props}: any) => {
  return (
    <>
      <div
        id="drawer-example"
        className="flex-col drawer  fixed right-0 top-[90px] z-40 h-screen p-4 overflow-y-auto shadow-2xl bg-white w-80 dark:bg-gray-800"
        tab-index={-1}
        aria-labelledby="drawer-label"
      >
        <style jsx>{`
          .drawer {
            display: ${cartClicked ? "flex" : "none"};
          }
        `}</style>
        <>
          <button
            onClick={() => setCartClicked(false)}
            type="button"
            data-drawer-dismiss="drawer-example"
            aria-controls="drawer-example"
            className="text-gray-400 bg-transparent hover:bg-gray-800  rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-6  "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close menu</span>
          </button>

          {props.cart &&
            Object.keys(props.cart).map((item) => {
              return (
                <div key={item}>
                  <li className="flex  py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <Image
                        src={defaultImage}
                        alt="product image"
                        className="h-full w-full object-cover object-center"
                        width={50}
                        height={50}
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-comfortaa text-gray-900">
                          <h3>
                            <p>{props.cart[item].name}</p>
                          </h3>
                          <p className="ml-4 font-unica">
                            ${props.cart[item].price}
                          </p>
                        </div>
                        <p className="mt-1 text-sm font-comfortaa text-gray-500">
                          Blue
                        </p>
                      </div>
                      <div className="flex font-comfortaa flex-1 items-end justify-start text-sm">
                        <div className="flex mr-2">
                          <button
                            onClick={() =>
                              props.props.addToCart(item, "", 1, 249, "usman")
                            }
                            type="button"
                            className="font-medium text-black w-5 h-5 bg-[#F5F8FA] hover:text-indigo-500"
                          >
                            +
                          </button>
                        </div>
                        <p className="text-[#1C1F22] font-comfortaa">
                          {props.cart[item].quantity}
                        </p>
                        <div className="flex ml-2">
                          <button
                            onClick={() => props.props.removeFromCart(item)}
                            type="button"
                            className="font-medium text-black w-5 h-5 bg-[#F5F8FA] hover:text-indigo-500"
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>

                  <br />
                </div>
              );
            })}
          <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
            <div className="flex justify-between text-base font-comfortaa text-gray-900">
              <p>Subtotal</p>
              <p>{props.subTotal}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500 font-comfortaa">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <Link
                href="/checkout"
                className="flex items-center justify-center rounded-md border border-transparent bg-[#A042E1] px-6 py-3 text-base font-comfortaa text-white shadow-sm hover:bg-[#a45ed7]"
              >
                Checkout
              </Link>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                <Link href={`${path.CART}`}>
                  <button
                    type="button"
                    className="font-comfortaa text-black hover:text-indigo-500"
                  >
                    View Cart
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Cart;
