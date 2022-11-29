import Image from "next/image"
import Link from "next/link"

import startIcon from "../../public/images/star.svg"
import addIcon from "../../public/images/add.svg"

const Products = (props: any) => {
  return (
    <div>

            <div className="flex flex-wrap sm:justify-center 2xl:justify-between mt-10">
              <div className="m-auto w-[90%]">
                <div className="flex pl-12">
                  <h1 className="text-3xl mb-4 font-unica w-[80%]">
                    {props.categoryName}
                  </h1>
                  <br />
                </div>
                <div className="flex flex-wrap gap-x-28 justify-center ">
                  {props.products.length > 0 ? (
                    props.products.map((product: any) => {
                      return (
                        <div
                          key={product.productId}
                          className="lg:w-auto md:w-auto p-4 w-full"
                        >
                          <div className="">
                            <div className="bg-[url(/images/default-image.jpg)] bg-no-repeat bg-contain h-64 w-[15rem] items-end">
                              <div className="flex justify-between h-[90%] mr-2 ml-2 items-end">
                                <div className="flex bg-[#F5F8FA] ">
                                  <Image src={startIcon} alt={"Icon"} />
                                  <p className="ml-2 font-comfortaa text-[14px]">
                                    4.6
                                  </p>
                                </div>
                                <button>
                                  <Image
                                    onClick={() =>
                                      props.addToCart("2", "", 1, 250, "UNIGMA")
                                    }
                                    src={addIcon}
                                    alt={"Icon"}
                                    className="rounded-full"
                                    width={20}
                                    height={20}
                                  />
                                </button>
                              </div>
                            </div>
                            <p className="font-comfortaa">Name of Product</p>
                            <p className="font-thin font-comfortaa text-[#687B8B]">
                              Name of selling party
                            </p>
                            <p className="font-comforta text-xl text-[#1C1F22]">
                              $ 8.45
                            </p>
                          </div>
                        </div>
                      )
                    })
                  ) : (
                    <p>No Products found</p>
                  )}
                </div>
              </div>
            </div>
          </div>

  )
}

export default Products
