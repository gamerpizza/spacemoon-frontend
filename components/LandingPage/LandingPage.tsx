import { useRouter } from "next/router";
import Image from "next/image";

import startIcon from "../../public/images/star.svg";
import addIcon from "../../public/images/add.svg";
import ExploreCategories from "../Categories/ExploreCategories";

const LandingPage = (props: any) => {
  const router = useRouter();

  return (
    <>
      <div>
        <div className="bg-[url(/images/hero_bck.png)] bg-no-repeat relative lg:top-[-180px] sm:top-[-250px] h-screen bg-[100%] bg-cover">
          <div className="grid grid-cols-3 h-full gap-4">
            <div className="col-span-full lg:col-span-2 md:col-span-2 lg:w-3/4 p-20 relative top-80">
              <h1 className="text-white text-4xl md:text-5xl lg:text-5xl items-center font-unica">
                THE BEST PRODUCTS IN THE GALAXY.
              </h1>
              <button className="text-white font-thin border-white bg-gradient-to-r from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.1)] mt-4 pt-3 pb-3 pl-5 pr-5 rounded-lg ">
                Explore the Best Deals
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-auto justify-center">
          <ExploreCategories />
        </div>

        <div className="flex flex-wrap sm:justify-center 2xl:justify-between mt-10">
          <div className="m-auto">
            <div className="flex justify-center">
              <h1 className="text-3xl mb-4 font-unica w-[95%] m-auto">
                STARNIGHT
              </h1>
              <br />
            </div>
            <div className="flex flex-wrap gap-x-6 justify-center ">
              <div className="h-[380px]">
                <div className="bg-[url(/images/default-image.jpg)] bg-no-repeat bg-cover bg-center h-[260px] w-[360px] items-end">
                  <div className="flex justify-between h-[90%] mr-2 ml-2 items-end">
                    <div className="flex bg-[#F5F8FA]">
                      <Image src={startIcon} alt={"Icon"} />
                      <p className="ml-2 font-comfortaa text-[14px]">4.6</p>
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
                <p className="font-comfortaa mt-[20px]">Name of Product</p>
                <p className="font-thin font-comfortaa text-[#687B8B] mt-[12px]">
                  Name of selling party
                </p>
                <p className="font-comforta text-xl text-[#1C1F22] mt-[12px]">$ 8.45</p>
              </div>

             <div className="h-[380px]">
                <div className="bg-[url(/images/default-image.jpg)] bg-no-repeat bg-cover bg-center h-[260px] w-[360px] items-end">
                  <div className="flex justify-between h-[90%] mr-2 ml-2 items-end">
                    <div className="flex bg-[#F5F8FA]">
                      <Image src={startIcon} alt={"Icon"} />
                      <p className="ml-2 font-comfortaa text-[14px]">4.6</p>
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
                <p className="font-comfortaa mt-[20px]">Name of Product</p>
                <p className="font-thin font-comfortaa text-[#687B8B] mt-[12px]">
                  Name of selling party
                </p>
                <p className="font-comforta text-xl text-[#1C1F22] mt-[12px]">$ 8.45</p>
              </div>

              <div className="h-[380px]">
                <div className="bg-[url(/images/default-image.jpg)] bg-no-repeat bg-cover bg-center h-[260px] w-[360px] items-end">
                  <div className="flex justify-between h-[90%] mr-2 ml-2 items-end">
                    <div className="flex bg-[#F5F8FA]">
                      <Image src={startIcon} alt={"Icon"} />
                      <p className="ml-2 font-comfortaa text-[14px]">4.6</p>
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
                <p className="font-comfortaa mt-[20px]">Name of Product</p>
                <p className="font-thin font-comfortaa text-[#687B8B] mt-[12px]">
                  Name of selling party
                </p>
                <p className="font-comforta text-xl text-[#1C1F22] mt-[12px]">$ 8.45</p>
              </div>

              <div className="h-[380px]">
                <div className="bg-[url(/images/default-image.jpg)] bg-no-repeat bg-cover bg-center h-[260px] w-[360px] items-end">
                  <div className="flex justify-between h-[90%] mr-2 ml-2 items-end">
                    <div className="flex bg-[#F5F8FA]">
                      <Image src={startIcon} alt={"Icon"} />
                      <p className="ml-2 font-comfortaa text-[14px]">4.6</p>
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
                <p className="font-comfortaa mt-[20px]">Name of Product</p>
                <p className="font-thin font-comfortaa text-[#687B8B] mt-[12px]">
                  Name of selling party
                </p>
                <p className="font-comforta text-xl text-[#1C1F22] mt-[12px]">$ 8.45</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap sm:justify-center 2xl:justify-between mt-20">
          <div className="m-auto">
            <div className="flex justify-center">
              <h1 className="text-3xl mb-4 font-unica w-[95%] m-auto">
                STARNIGHT
              </h1>
              <br />
            </div>
            <div className="flex flex-wrap gap-x-6 justify-center ">
              <div className="h-[380px]">
                <div className="bg-[url(/images/default-image.jpg)] bg-no-repeat bg-cover bg-center h-[260px] w-[360px] items-end">
                  <div className="flex justify-between h-[90%] mr-2 ml-2 items-end">
                    <div className="flex bg-[#F5F8FA]">
                      <Image src={startIcon} alt={"Icon"} />
                      <p className="ml-2 font-comfortaa text-[14px]">4.6</p>
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
                <p className="font-comfortaa mt-[20px]">Name of Product</p>
                <p className="font-thin font-comfortaa text-[#687B8B] mt-[12px]">
                  Name of selling party
                </p>
                <p className="font-comforta text-xl text-[#1C1F22] mt-[12px]">$ 8.45</p>
              </div>

              <div className="h-[380px]">
                <div className="bg-[url(/images/default-image.jpg)] bg-no-repeat bg-cover bg-center h-[260px] w-[360px] items-end">
                  <div className="flex justify-between h-[90%] mr-2 ml-2 items-end">
                    <div className="flex bg-[#F5F8FA]">
                      <Image src={startIcon} alt={"Icon"} />
                      <p className="ml-2 font-comfortaa text-[14px]">4.6</p>
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
                <p className="font-comfortaa mt-[20px]">Name of Product</p>
                <p className="font-thin font-comfortaa text-[#687B8B] mt-[12px]">
                  Name of selling party
                </p>
                <p className="font-comforta text-xl text-[#1C1F22] mt-[12px]">$ 8.45</p>
              </div>

              <div className="h-[380px]">
                <div className="bg-[url(/images/default-image.jpg)] bg-no-repeat bg-cover bg-center h-[260px] w-[360px] items-end">
                  <div className="flex justify-between h-[90%] mr-2 ml-2 items-end">
                    <div className="flex bg-[#F5F8FA]">
                      <Image src={startIcon} alt={"Icon"} />
                      <p className="ml-2 font-comfortaa text-[14px]">4.6</p>
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
                <p className="font-comfortaa mt-[20px]">Name of Product</p>
                <p className="font-thin font-comfortaa text-[#687B8B] mt-[12px]">
                  Name of selling party
                </p>
                <p className="font-comforta text-xl text-[#1C1F22] mt-[12px]">$ 8.45</p>
              </div>

              <div className="h-[380px]">
                <div className="bg-[url(/images/default-image.jpg)] bg-no-repeat bg-cover bg-center h-[260px] w-[360px] items-end">
                  <div className="flex justify-between h-[90%] mr-2 ml-2 items-end">
                    <div className="flex bg-[#F5F8FA]">
                      <Image src={startIcon} alt={"Icon"} />
                      <p className="ml-2 font-comfortaa text-[14px]">4.6</p>
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
                <p className="font-comfortaa mt-[20px]">Name of Product</p>
                <p className="font-thin font-comfortaa text-[#687B8B] mt-[12px]">
                  Name of selling party
                </p>
                <p className="font-comforta text-xl text-[#1C1F22] mt-[12px]">$ 8.45</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap sm:justify-center 2xl:justify-between mt-20 mb-20">
          <div className="m-auto ">
            <div className="flex justify-center">
              <h1 className="text-3xl mb-4 font-unica w-[95%] m-auto">
                STARNIGHT
              </h1>
              <br />
            </div>
            <div className="flex flex-wrap gap-x-6 justify-center ">
              <div className="h-[380px]">
                <div className="bg-[url(/images/default-image.jpg)] bg-no-repeat bg-cover bg-center h-[260px] w-[360px] items-end">
                  <div className="flex justify-between h-[90%] mr-2 ml-2 items-end">
                    <div className="flex bg-[#F5F8FA]">
                      <Image src={startIcon} alt={"Icon"} />
                      <p className="ml-2 font-comfortaa text-[14px]">4.6</p>
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
                <p className="font-comfortaa mt-[20px]">Name of Product</p>
                <p className="font-thin font-comfortaa text-[#687B8B] mt-[12px]">
                  Name of selling party
                </p>
                <p className="font-comforta text-xl text-[#1C1F22] mt-[12px]">$ 8.45</p>
              </div>

              <div className="h-[380px]">
                <div className="bg-[url(/images/default-image.jpg)] bg-no-repeat bg-cover bg-center h-[260px] w-[360px] items-end">
                  <div className="flex justify-between h-[90%] mr-2 ml-2 items-end">
                    <div className="flex bg-[#F5F8FA]">
                      <Image src={startIcon} alt={"Icon"} />
                      <p className="ml-2 font-comfortaa text-[14px]">4.6</p>
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
                <p className="font-comfortaa mt-[20px]">Name of Product</p>
                <p className="font-thin font-comfortaa text-[#687B8B] mt-[12px]">
                  Name of selling party
                </p>
                <p className="font-comforta text-xl text-[#1C1F22] mt-[12px]">$ 8.45</p>
              </div>

              <div className="h-[380px]">
                <div className="bg-[url(/images/default-image.jpg)] bg-no-repeat bg-cover bg-center h-[260px] w-[360px] items-end">
                  <div className="flex justify-between h-[90%] mr-2 ml-2 items-end">
                    <div className="flex bg-[#F5F8FA]">
                      <Image src={startIcon} alt={"Icon"} />
                      <p className="ml-2 font-comfortaa text-[14px]">4.6</p>
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
                <p className="font-comfortaa mt-[20px]">Name of Product</p>
                <p className="font-thin font-comfortaa text-[#687B8B] mt-[12px]">
                  Name of selling party
                </p>
                <p className="font-comforta text-xl text-[#1C1F22] mt-[12px]">$ 8.45</p>
              </div>

              <div className="h-[380px]">
                <div className="bg-[url(/images/default-image.jpg)] bg-no-repeat bg-cover bg-center h-[260px] w-[360px] items-end">
                  <div className="flex justify-between h-[90%] mr-2 ml-2 items-end">
                    <div className="flex bg-[#F5F8FA]">
                      <Image src={startIcon} alt={"Icon"} />
                      <p className="ml-2 font-comfortaa text-[14px]">4.6</p>
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
                <p className="font-comfortaa mt-[20px]">Name of Product</p>
                <p className="font-thin font-comfortaa text-[#687B8B] mt-[12px]">
                  Name of selling party
                </p>
                <p className="font-comforta text-xl text-[#1C1F22] mt-[12px]">$ 8.45</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
