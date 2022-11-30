import Image from "next/image"
import Link from "next/link"

import defaultImage from "../../public/images/default-image.jpg"
import deleteIcon from "../../public/images/delete.svg"

const Cart = (props: any) => {
  console.log("length", props.cart)
  return (
    <>
      <div className="ml-20 mt-10 relative" >
        <div className="flex">
          <h1 className="font-unica text-3xl">SHOPPING CART</h1>
          <div className="flex justify-center items-center bg-[#F5F8FA] ml-4 p-2 pl-4 pr-4 rounded-full">
            <p className="font-comfortaa text-sm text-[#1C1F22]">
              {Object.keys(props.cart).length} items
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div
            className="flex-col  p-4  bg-white dark:bg-gray-800"

          >
            {props.cart &&
              Object.keys(props.cart).map((item) => {
                return (
                  <div key={item}>
                    <li className="flex  flex-wrap py-6">
                      <div className="h-52 w-608 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={defaultImage}
                          alt="product image"
                          className="h-full w-full "
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="flex">
                        <div>
                          <div className="flex text-2xl justify-between lg:ml-12 md:ml-2 font-comfortaa mb-6 text-gray-900">
                            <h3>
                              <p>{props.cart[item].name}</p>
                            </h3>
                          </div>
                          <div className="lg:ml-12 md:ml-2 xl:w-80 lg:w-44 flex flex-col gap-y-[1.5rem] justify-center">
                            <div>
                              <div className="flex h-[18px] justify-between">
                                <p className="mt-1 text-sm font-comfortaa text-[#687B8B]">
                                  COLOR
                                </p>
                                <p className="mt-1 text-sm font-comfortaa text-black">
                                  Blue
                                </p>
                              </div>
                            </div>
                            <div className="flex font-comfortaa h-[40px] items-end justify-between align-center text-sm">
                              <div className="flex">
                                <p className="mt-1 text-sm font-comfortaa text-[#687B8B]">
                                  QUANTITY
                                </p>
                              </div>
                              <div className="flex">
                                <div className="flex mr-2">
                                  <button
                                    onClick={() =>
                                      props.addToCart(item, "", 1, 249, "usman")
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
                                    onClick={() => props.removeFromCart(item)}
                                    type="button"
                                    className="font-medium text-black w-5 h-5 bg-[#F5F8FA] hover:text-indigo-500"
                                  >
                                    -
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="">
                              <button className="text-[#E62744] border-[#E62744] font-comfortaa text-sm rounded-lg w-auto border-[1px] p-2 flex">
                                <Image
                                  src={deleteIcon}
                                  width={20}
                                  height={20}
                                  alt="Icon"
                                  className="mr-2"
                                />
                                <p>Remove from Cart</p>
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="ml-4 text-end font-unica text-[34px] xl:w-60 lg:w-40 flex justify-end items-start">
                          <p>${props.cart[item].price}</p>
                        </div>
                      </div>
                    </li>

                    <br />
                  </div>
                )
              })}
          </div>
          <div className="2xl:ml-10 md:ml-12 h-80 flex justify-center items-center">
            <div className="bg-[#F5F8FA] sm: w-[350px] md:w-[450px] lg:w-[500px] p-12   rounded-xl">
              <div className="flex justify-between">
                <h1 className="text-xl font-comfortaa">Cart Subtotal</h1>
                <h1 className="text-3xl font-unica">${props.subTotal}</h1>
              </div>
              <div className="mt-6">
                <Link
                  href="/checkout"
                  className="flex items-center justify-center rounded-md border border-transparent bg-[#A042E1] px-6 py-3 text-base font-comfortaa text-white shadow-sm hover:bg-[#a45ed7]"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
