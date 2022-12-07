import Image from "next/image";

import Quantity from "../../components/Products/Quantity";

import defaultImage from "../../public/images/default-image.jpg";
import cartIcon from "../../public/images/cart.svg";
import Products from "../../components/Products/Products";
import { Category } from "../../model/category";
import Rating from "../../components/Products/Rating";

const Product = (props: any) => {
  return (
    <>
      <div>
        <div className="flex w-full flex-wrap">
          <div className="flex mt-20 ml-auto mr-auto lg:w-[600px] lg:h-[600px] w-min-[400px] md:w-[400px] md:h-[400px] sm:w-[300px] sm:h-[300px] bg-[url(/images/default-image.jpg)] bg-no-repeat bg-contain  rounded-3xl"></div>
          <div className="md:w-full md:m-auto lg:w-1/2 flex flex-col m-auto sm:pl-10 md:pt-24">
            <div className="flex flex-col">
              <h1 className="text-[#1C1F22] text-3xl mb-[16px] font-comfortaa">
                Product Title
              </h1>
              <h3 className="text-[#687B8B] text-sm mb-[16px] font-comfortaa">
                sold by Selling party name
              </h3>
              <div className="flex mb-[20px]">
                <Rating />
                <span className="ml-4 mr-4">|</span>
                <p className="font-comfortaa text-[#1C1F22]">32 ratings</p>
              </div>
              <div className="flex mb-[40px] gap-x-[8px]">
                <div className="font-unica text-[#1C1F22] bg-[#F5F8FA] rounded-full p-1 pl-3 pr-3">
                  FREE DELIVERY ON ORDERS MORE THAN $39.99
                </div>
                <div className="font-unica bg-[#F5F8FA] rounded-full p-1 pl-3 pr-3">
                  HOT SALE
                </div>
              </div>
            </div>
            <div className="flex mb-[40px] gap-x-[24px]">
              <div className="text-[#687B8B] font-unica text-3xl underline-offset-2 line-through">
                $12.90
              </div>
              <div className=" text-[#1C1F22] font-unica text-3xl">$8.90</div>
            </div>
            <div className="flex flex-col mb-[59px]">
              <div className="mb-[20px]">
                <h1 className="font-unica text-2xl">COLOR</h1>
              </div>
              <div className="flex gap-x-[16px]">
                <div>
                  <p className="font-comfortaa">Brown</p>
                </div>

                <div>
                  <p className="font-comfortaa">Black</p>
                </div>

                <div>
                  <p className="font-comfortaa">Gold</p>
                </div>

                <div>
                  <p className="font-comfortaa">Bronze</p>
                </div>
              </div>
            </div>
            <div className="mb-[40px]">
              <h1 className="font-unica">QUANTITY</h1>
              <div className="mt-[21px]">
                <Quantity quantity={1} />
              </div>
            </div>
            <button className="bg-[#A042E1] p-2 pl-4 pr-4 font-comfortaa text-[#F5F8FA] rounded-lg w-[300px] h-[60px]">
              <div className="flex justify-center gap-x-2">
                <Image src={cartIcon} alt="cart icon" />
                <p>Add to Cart</p>
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-col ml-20 mt-20">
          <div className="flex w-[300px] flex-col gap-y-[20px]">
            <h1 className="font-unica text-2xl ">PRODUCT SPECIFICATION</h1>
            <div className="flex justify-between">
              <h3 className="font-comfortaa text-sm  text-[#687B8B]">
                CATEGORY
              </h3>
              <p className="font-comfortaa text-sm ">Spacemoon</p>
            </div>
            <div className="flex justify-between">
              <h3 className="font-comfortaa text-sm  text-[#687B8B]">TYPE</h3>
              <p className="font-comfortaa text-sm">Product Type</p>
            </div>
            <div className="flex justify-between">
              <h3 className="font-comfortaa text-sm  text-[#687B8B]">
                IN STOCK
              </h3>
              <p className="font-comfortaa text-sm">18</p>
            </div>
            <div className="flex justify-between">
              <h3 className="font-comfortaa text-sm  text-[#687B8B]">
                SHIPS FROM
              </h3>
              <p className="font-comfortaa text-sm">USA</p>
            </div>
            <div className="flex justify-between">
              <h3 className="font-comfortaa text-sm  text-[#687B8B]">
                WHO IS SELLING
              </h3>
              <p className="font-comfortaa text-sm">User Profile Name</p>
            </div>
          </div>

          <div className="mt-[60px]">
            <h1 className="font-unica text-2xl">PRODUCT DESCRIPTION</h1>
            <p className="font-comfortaa text-sm w-3/4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
              laudantium, est voluptatum illo ea dolor magni ullam aliquam
              inventore veniam reprehenderit dolorem, nulla beatae deleniti
              consectetur tenetur iure? Reiciendis, quasi.
            </p>
          </div>

          <div className="flex mt-[60px] gap-x-8 mb-[40px]">
            <div className="flex gap-x-2">
              <h1 className="font-unica text-2xl">PRODUCT RATINGS</h1>
              <div className="flex items-center bg-[#F5F8FA] rounded-full p-1 pr-3 pl-3 font-comfortaa text-sm">
                32
              </div>
            </div>
            <div className="flex gap-x-2">
              <h1 className="font-unica text-2xl">SELLER RATINGS</h1>
              <div className="flex items-center bg-[#F5F8FA] rounded-full p-1 pr-3 pl-3 font-comfortaa text-sm">
                15
              </div>
            </div>
            <hr />
          </div>

          <div className="flex flex-col gap-y-[40px] mb-[60px]">
            <div className="flex">
              <div className="rounded-lg mr-[24px]">
                <Image
                  src={defaultImage}
                  width={120}
                  height={80}
                  alt="profile image"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-comfortaa text-[#41484D] mb-[6px] text-xl">
                  Profile Name
                </h1>
                <div className="mb-[24px]">
                  <Rating />
                </div>
                <p className="font-comfortaa text-[#1C1F22] mb-[25px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus quibusdam optio perspiciatis autem nam quos ea
                  omnis, architecto reprehenderit, ad dolore repellat rem itaque
                  dolores! Perspiciatis magnam suscipit ea beatae!
                </p>
                <hr></hr>
              </div>
            </div>

            <div className="flex">
              <div className="rounded-lg mr-[24px]">
                <Image
                  src={defaultImage}
                  width={120}
                  height={80}
                  alt="profile image"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-comfortaa text-[#41484D] mb-[6px] text-xl">
                  Profile Name
                </h1>
                <div className="mb-[24px]">
                  <Rating />
                </div>
                <p className="font-comfortaa text-[#1C1F22] mb-[25px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus quibusdam optio perspiciatis autem nam quos ea
                  omnis, architecto reprehenderit, ad dolore repellat rem itaque
                  dolores! Perspiciatis magnam suscipit ea beatae!
                </p>
                <hr></hr>
              </div>
            </div>

            <div className="flex">
              <div className="rounded-lg mr-[24px]">
                <Image
                  src={defaultImage}
                  width={120}
                  height={80}
                  alt="profile image"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-comfortaa text-[#41484D] mb-[6px] text-xl">
                  Profile Name
                </h1>
                <div className="mb-[24px]">
                  <Rating />
                </div>
                <p className="font-comfortaa text-[#1C1F22] mb-[25px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus quibusdam optio perspiciatis autem nam quos ea
                  omnis, architecto reprehenderit, ad dolore repellat rem itaque
                  dolores! Perspiciatis magnam suscipit ea beatae!
                </p>
                <hr></hr>
              </div>
            </div>

            <div className="flex">
              <div className="rounded-lg mr-[24px]">
                <Image
                  src={defaultImage}
                  width={120}
                  height={80}
                  alt="profile image"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-comfortaa text-[#41484D] mb-[6px] text-xl">
                  Profile Name
                </h1>
                <div className="mb-[24px]">
                  <Rating />
                </div>
                <p className="font-comfortaa text-[#1C1F22] mb-[25px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus quibusdam optio perspiciatis autem nam quos ea
                  omnis, architecto reprehenderit, ad dolore repellat rem itaque
                  dolores! Perspiciatis magnam suscipit ea beatae!
                </p>
                <hr></hr>
              </div>
            </div>
          </div>

          <div>
            <h1 className="font-unica text-2xl">PEOPLE ALSO BOUGHT</h1>
            {props.categories &&
              props.categories.slice(0, 2).map((category: any) => {
                return (
                  <>
                    <div key={category.categoryId}></div>
                      {Object.keys(category) !== null && (
                    <div>
                      <Products
                        categoryName={category.name}
                        products={
                          category[Object.keys(category)[0]].products !== null ? category[Object.keys(category)[0]].products : []
                        }
                        width={"90%"}
                        gap={false}
                      />
                    </div>
                  )}
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
