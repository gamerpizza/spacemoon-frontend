import Image from "next/image";

import arrowIcon from "../../public/images/right-arrow.png";

const ExploreCategories = () => {
  return (
    <>
      <div className="m-auto w-[90%]">
        <div className="flex justify-center">
          <h1 className="text-4xl  pt-16 font-unica w-[80%] m-auto ">
            EXPLORE THE PRODUCTS BY CATEGORIES{" "}
          </h1>
        </div>
        <div className="flex flex-row flex-wrap justify-center ">
          <div className="bg-[url(/images/multiverse.png)] bg-no-repeat w-[1210px] bg-contain h-[681px] mt-14 p-8">
            <h1 className="text-white text-2xl font-unica"> MULTIVERSE</h1>
            <button className="text-white font-thin  mt-4 pt-3  rounded-lg ">
              <div className="flex">
                <p> Explore the best deals </p>
                <Image
                  src={arrowIcon}
                  height={20}
                  width={20}
                  className="ml-2"
                  alt="arrowIcon"
                ></Image>
              </div>
            </button>
          </div>
          <div className=" flex flex-wrap lg:p-10">
            <div className="p-4">
              <div className="bg-[url(/images/magia.png)] bg-no-repeat bg-contain h-[260px] w-[500px] p-8">
                <h1 className="text-white text-2xl font-unica">AWARA</h1>
                <button className="text-white font-thin border-white bg-gradient-to-r from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.1)] mt-4 pt-3 pb-3 pl-5 pr-5 rounded-lg ">
                  <div className="flex">
                    <p>Check it out</p>
                    <Image
                      src={arrowIcon}
                      height={20}
                      width={20}
                      className="ml-2"
                      alt="arrowIcon"
                    ></Image>
                  </div>
                </button>
              </div>

              <div className="bg-[url(/images/magia.png)] bg-no-repeat bg-contain h-[260px] w-[500px] p-8">
                <h1 className="text-white text-2xl font-unica">LU</h1>
                <button className="text-white font-thin border-white bg-gradient-to-r from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.1)] mt-4 pt-3 pb-3 pl-5 pr-5 rounded-lg ">
                  <div className="flex">
                    <p>Check it out</p>
                    <Image
                      src={arrowIcon}
                      height={20}
                      width={20}
                      className="ml-2"
                      alt="arrowIcon"
                    ></Image>
                  </div>
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-[url(/images/magia.png)] bg-no-repeat bg-contain h-[260px] w-[500px] p-8">
                <h1 className="text-white text-2xl font-unica">ASTRO</h1>
                <button className="text-white font-thin border-white bg-gradient-to-r from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.1)] mt-4 pt-3 pb-3 pl-5 pr-5 rounded-lg ">
                  <div className="flex">
                    <p>Check it out</p>
                    <Image
                      src={arrowIcon}
                      height={20}
                      width={20}
                      className="ml-2"
                      alt="arrowIcon"
                    ></Image>
                  </div>
                </button>
              </div>

              <div className="bg-[url(/images/magia.png)] bg-no-repeat bg-contain h-[260px] w-[500px] p-8">
                <h1 className="text-white text-2xl font-unica">MAGNA</h1>
                <button className="text-white font-thin border-white bg-gradient-to-r from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.1)] mt-4 pt-3 pb-3 pl-5 pr-5 rounded-lg ">
                  <div className="flex">
                    <p>Check it out</p>
                    <Image
                      src={arrowIcon}
                      height={20}
                      width={20}
                      className="ml-2"
                      alt="arrowIcon"
                    ></Image>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreCategories;
