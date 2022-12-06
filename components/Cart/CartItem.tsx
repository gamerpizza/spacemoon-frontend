import Image from "next/image";

import Quantity from "../Products/Quantity";

import defaultImage from "../../public/images/default-image.jpg";
import deleteIcon from "../../public/images/delete.svg";

const CartItem = (props: any) => {
  return (
    <>
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
                <p>{props.name}</p>
              </h3>
            </div>
            <div className="lg:ml-12 md:ml-2 xl:w-80 lg:w-44 flex flex-col gap-y-[1.5rem] justify-center">
              <div>
                <div className="flex h-[18px] justify-between">
                  <p className="mt-1 text-sm font-comfortaa text-[#687B8B]">
                    COLOR
                  </p>
                  <p className="mt-1 text-sm font-comfortaa text-black">Blue</p>
                </div>
              </div>
              <div className="flex font-comfortaa h-[40px] items-end justify-between align-center text-sm">
                <div className="flex">
                  <p className="mt-1 text-sm font-comfortaa text-[#687B8B]">
                    QUANTITY
                  </p>
                </div>
                <Quantity
                  addToCart={() =>
                    props.addToCart(props.item, "", 1, 249, "usman")
                  }
                  removeFromCart={() => props.removeFromCart(props.item)}
                  quantity={props.quantity}
                />
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
            <p>${props.price}</p>
          </div>
        </div>
      </li>
    </>
  );
};

export default CartItem;
