import { useRouter } from 'next/router';
import Image from 'next/image';

import arrowIcon from '../../public/images/right-arrow.png'
import startIcon from '../../public/images/star.svg'
import addIcon from '../../public/images/add.svg'
import { Footer } from '../Footer/Footer';

const LandingPage = (props:any) => {
  const router = useRouter();
  let greeting =
    router.locale === 'en-US'
      ? 'Hello World'
      : router.locale === 'es'
      ? 'Hallo weit'
      : router.locale === 'fr'
      ? 'Bonjour le mande'
      : '';


  return (
    <>
    <div>
      <div className='bg-[url(/images/hero_bck.png)] bg-no-repeat relative lg:top-[-180px] sm:top-[-250px] h-screen bg-[100%] bg-cover'>
        <div className='grid grid-cols-3 h-full gap-4'>
          <div className='col-span-full lg:col-span-2 md:col-span-2 lg:w-3/4 p-20 relative top-80'>
            <h1 className='text-white text-4xl md:text-5xl lg:text-5xl items-center font-unica'> THE BEST PRODUCTS IN THE GALAXY.</h1>
            <button className='text-white font-thin border-white bg-gradient-to-r from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.1)] mt-4 pt-3 pb-3 pl-5 pr-5 rounded-lg '>Explore the Best Deals</button>
          </div>
        </div>
        </div>
        <div className='flex flex-col h-auto justify-center'>
          <div className='m-auto w-[90%]'>
        <div className='flex justify-center'>
          <h1 className='text-4xl  pt-16 font-unica w-[80%] m-auto '> EXPLORE THE PRODUCTS BY CATEGORIES </h1>
        </div>
        <div className='flex flex-row flex-wrap justify-center '>
          <div className='bg-[url(/images/multiverse.png)] bg-no-repeat w-96 bg-contain h-[30rem] mt-14 p-8'>
            <h1 className='text-white text-2xl font-unica'> MULTIVERSE</h1>
                <button className='text-white font-thin  mt-4 pt-3  rounded-lg '>
                  <div className='flex'>
                    <p> Explore the best deals </p>
                    <Image src={arrowIcon} height={20} width={20} className="ml-2" alt="arrowIcon"></Image>
                  </div>
                </button>
          </div>
          <div className=' flex flex-wrap lg:p-10'>
            <div className='p-4'>
              <div className='bg-[url(/images/magia.png)] bg-no-repeat bg-contain h-[15rem] w-96 p-8'>
                 <h1 className='text-white text-2xl font-unica'>AWARA</h1>
                <button className='text-white font-thin border-white bg-gradient-to-r from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.1)] mt-4 pt-3 pb-3 pl-5 pr-5 rounded-lg '>
                  <div className='flex'>
                    <p>Check it out</p>
                    <Image src={arrowIcon} height={20} width={20} className="ml-2" alt="arrowIcon"></Image>
                  </div>
                </button>
              </div>

              <div className='bg-[url(/images/magia.png)] bg-no-repeat bg-contain h-[15rem] w-96 p-8'>
                 <h1 className='text-white text-2xl font-unica'>LU</h1>
                <button className='text-white font-thin border-white bg-gradient-to-r from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.1)] mt-4 pt-3 pb-3 pl-5 pr-5 rounded-lg '>
                  <div className='flex'>
                    <p>Check it out</p>
                    <Image src={arrowIcon} height={20} width={20} className="ml-2" alt="arrowIcon"></Image>
                  </div>
                </button>
              </div>
            </div>
            <div className='p-4'>
              <div className='bg-[url(/images/magia.png)] bg-no-repeat bg-contain h-[15rem] w-96 p-8'>
                 <h1 className='text-white text-2xl font-unica'>ASTRO</h1>
                <button className='text-white font-thin border-white bg-gradient-to-r from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.1)] mt-4 pt-3 pb-3 pl-5 pr-5 rounded-lg '>
                  <div className='flex'>
                    <p>Check it out</p>
                    <Image src={arrowIcon} height={20} width={20} className="ml-2" alt="arrowIcon"></Image>
                  </div>
                </button>
              </div>

              <div className='bg-[url(/images/magia.png)] bg-no-repeat bg-contain h-[15rem] w-96 p-8'>
                 <h1 className='text-white text-2xl font-unica'>MAGNA</h1>
                <button className='text-white font-thin border-white bg-gradient-to-r from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.1)] mt-4 pt-3 pb-3 pl-5 pr-5 rounded-lg '>
                  <div className='flex'>
                    <p>Check it out</p>
                    <Image src={arrowIcon} height={20} width={20} className="ml-2" alt="arrowIcon"></Image>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>


        <div className='flex flex-wrap sm:justify-center 2xl:justify-between mt-10'>
          <div className='m-auto w-[90%]'>
          <div className='flex justify-center'>
            <h1 className='text-3xl mb-4 font-unica w-[80%] m-auto'>STARNIGHT</h1>
            <br/>
          </div>
          <div className='flex flex-wrap gap-x-28 justify-center '>
            <div className=''>
              <div className='bg-[url(/images/default-image.jpg)] bg-no-repeat bg-contain h-64 w-[15rem] items-end'>
                <div className='flex justify-between h-[90%] mr-2 ml-2 items-end'>
                  <div className='flex bg-[#F5F8FA] '>
                    <Image src={startIcon} alt={'Icon'}/>
                    <p className='ml-2 font-comfortaa text-[14px]'>4.6</p>
                  </div>
                 <button>
                    <Image onClick = {() => props.addToCart('2', '', 1, 250, 'UNIGMA')} src={addIcon} alt={'Icon'} className='rounded-full' width={20} height={20}/>
                  </button>
                </div>
              </div>
              <p className='font-comfortaa'>Name of Product</p>
              <p className='font-thin font-comfortaa text-[#687B8B]'>Name of selling party</p>
              <p className='font-comforta text-xl text-[#1C1F22]'>$ 8.45</p>
            </div>

            <div className=''>
              <div className='bg-[url(/images/default-image.jpg)] bg-no-repeat bg-contain h-64 w-[15rem]'>
                <div className='flex justify-between h-[90%] mr-1 ml-1 items-end'>
                  <div className='flex bg-[#F5F8FA] '>
                    <Image src={startIcon} alt={'Icon'}/>
                    <p className='ml-2 font-comfortaa_bold text-[14px]'>4.6</p>
                  </div>
                  <button>
                    <Image onClick = {() => props.addToCart('1', '', 1, 250, 'STARNIGHT')} src={addIcon} alt={'Icon'} className='rounded-full' width={20} height={20}/>
                  </button>
                </div>
              </div>
              <p className='font-comfortaa_regular'>Name of Product</p>
              <p className='font-thin font-comfortaa_regular text-[#687B8B]'>Name of selling party</p>
              <p className='font-unica text-xl text-[#1C1F22]'>$ 8.45</p>
            </div>

            <div className=''>
              <div className='bg-[url(/images/default-image.jpg)] bg-no-repeat bg-contain h-64 w-[15rem]'>
                <div className='flex justify-between h-[90%] mr-1 ml-1 items-end'>
                  <div className='flex bg-[#F5F8FA] '>
                    <Image src={startIcon} alt={'Icon'}/>
                    <p className='ml-2 font-comfortaa_bold text-[14px]'>4.6</p>
                  </div>
                  <button>
                    <Image onClick = {() => props.addToCart('1', '', 1, 250, 'STARNIGHT')} src={addIcon} alt={'Icon'} className='rounded-full' width={20} height={20}/>
                  </button>
                </div>
              </div>
              <p className='font-comfortaa_regular'>Name of Product</p>
              <p className='font-thin font-comfortaa_regular text-[#687B8B]'>Name of selling party</p>
              <p className='font-unica text-xl text-[#1C1F22]'>$ 8.45</p>
            </div>

            <div className=''>
              <div className='bg-[url(/images/default-image.jpg)] bg-no-repeat bg-contain h-64 w-[15rem]'>
                <div className='flex justify-between h-[90%] mr-1 ml-1 items-end'>
                  <div className='flex bg-[#F5F8FA] '>
                    <Image src={startIcon} alt={'Icon'}/>
                    <p className='ml-2 font-comfortaa_bold text-[14px]'>4.6</p>
                  </div>
                  <button>
                    <Image onClick = {() => props.addToCart('1', '', 1, 250, 'STARNIGHT')} src={addIcon} alt={'Icon'} className='rounded-full' width={20} height={20}/>
                  </button>
                </div>
              </div>
              <p className='font-comfortaa_regular'>Name of Product</p>
              <p className='font-thin font-comfortaa_regular text-[#687B8B]'>Name of selling party</p>
              <p className='font-unica text-xl text-[#1C1F22]'>$ 8.45</p>
            </div>

          </div>
          </div>
        </div>


       <div className='flex flex-wrap sm:justify-center 2xl:justify-between mt-20'>
          <div className='m-auto w-[90%]'>
          <div className='flex justify-center'>
            <h1 className='text-3xl mb-4 font-unica w-[80%] m-auto'>STARNIGHT</h1>
            <br/>
          </div>
          <div className='flex flex-wrap gap-x-28 justify-center '>
            <div className=''>
              <div className='bg-[url(/images/default-image.jpg)] bg-no-repeat bg-contain h-64 w-[15rem] items-end'>
                <div className='flex justify-between h-[90%] mr-2 ml-2 items-end'>
                  <div className='flex bg-[#F5F8FA] '>
                    <Image src={startIcon} alt={'Icon'}/>
                    <p className='ml-2 font-comfortaa text-[14px]'>4.6</p>
                  </div>
                  <button>
                    <Image onClick = {() => props.addToCart('1', '', 1, 250, 'STARNIGHT')} src={addIcon} alt={'Icon'} className='rounded-full' width={20} height={20}/>
                  </button>
                </div>
              </div>
              <p className='font-comfortaa'>Name of Product</p>
              <p className='font-thin font-comfortaa text-[#687B8B]'>Name of selling party</p>
              <p className='font-comforta text-xl text-[#1C1F22]'>$ 8.45</p>
            </div>

            <div className=''>
              <div className='bg-[url(/images/default-image.jpg)] bg-no-repeat bg-contain h-64 w-[15rem]'>
                <div className='flex justify-between h-[90%] mr-1 ml-1 items-end'>
                  <div className='flex bg-[#F5F8FA] '>
                    <Image src={startIcon} alt={'Icon'}/>
                    <p className='ml-2 font-comfortaa_bold text-[14px]'>4.6</p>
                  </div>
                  <button>
                    <Image onClick = {() => props.addToCart('1', '', 1, 250, 'STARNIGHT')} src={addIcon} alt={'Icon'} className='rounded-full' width={20} height={20}/>
                  </button>
                </div>
              </div>
              <p className='font-comfortaa_regular'>Name of Product</p>
              <p className='font-thin font-comfortaa_regular text-[#687B8B]'>Name of selling party</p>
              <p className='font-unica text-xl text-[#1C1F22]'>$ 8.45</p>
            </div>

            <div className=''>
              <div className='bg-[url(/images/default-image.jpg)] bg-no-repeat bg-contain h-64 w-[15rem]'>
                <div className='flex justify-between h-[90%] mr-1 ml-1 items-end'>
                  <div className='flex bg-[#F5F8FA] '>
                    <Image src={startIcon} alt={'Icon'}/>
                    <p className='ml-2 font-comfortaa_bold text-[14px]'>4.6</p>
                  </div>
                  <button>
                    <Image onClick = {() => props.addToCart('1', '', 1, 250, 'STARNIGHT')} src={addIcon} alt={'Icon'} className='rounded-full' width={20} height={20}/>
                  </button>
                </div>
              </div>
              <p className='font-comfortaa_regular'>Name of Product</p>
              <p className='font-thin font-comfortaa_regular text-[#687B8B]'>Name of selling party</p>
              <p className='font-unica text-xl text-[#1C1F22]'>$ 8.45</p>
            </div>

            <div className=''>
              <div className='bg-[url(/images/default-image.jpg)] bg-no-repeat bg-contain h-64 w-[15rem]'>
                <div className='flex justify-between h-[90%] mr-1 ml-1 items-end'>
                  <div className='flex bg-[#F5F8FA] '>
                    <Image src={startIcon} alt={'Icon'}/>
                    <p className='ml-2 font-comfortaa_bold text-[14px]'>4.6</p>
                  </div>
                  <button>
                    <Image onClick = {() => props.addToCart('1', '', 1, 250, 'STARNIGHT')} src={addIcon} alt={'Icon'} className='rounded-full' width={20} height={20}/>
                  </button>
                </div>
              </div>
              <p className='font-comfortaa_regular'>Name of Product</p>
              <p className='font-thin font-comfortaa_regular text-[#687B8B]'>Name of selling party</p>
              <p className='font-unica text-xl text-[#1C1F22]'>$ 8.45</p>
            </div>

          </div>
          </div>
        </div>

        <div className='flex flex-wrap sm:justify-center 2xl:justify-between mt-20 mb-20'>
          <div className='m-auto w-[90%]'>
          <div className='flex justify-center'>
            <h1 className='text-3xl mb-4 font-unica w-[80%] m-auto'>STARNIGHT</h1>
            <br/>
          </div>
          <div className='flex flex-wrap gap-x-28 justify-center '>
            <div className=''>
              <div className='bg-[url(/images/default-image.jpg)] bg-no-repeat bg-contain h-64 w-[15rem] items-end'>
                <div className='flex justify-between h-[90%] mr-2 ml-2 items-end'>
                  <div className='flex bg-[#F5F8FA] '>
                    <Image src={startIcon} alt={'Icon'}/>
                    <p className='ml-2 font-comfortaa text-[14px]'>4.6</p>
                  </div>
                  <button>
                    <Image onClick = {() => props.addToCart('1', '', 1, 250, 'STARNIGHT')} src={addIcon} alt={'Icon'} className='rounded-full' width={20} height={20}/>
                  </button>
                </div>
              </div>
              <p className='font-comfortaa'>Name of Product</p>
              <p className='font-thin font-comfortaa text-[#687B8B]'>Name of selling party</p>
              <p className='font-comforta text-xl text-[#1C1F22]'>$ 8.45</p>
            </div>

            <div className=''>
              <div className='bg-[url(/images/default-image.jpg)] bg-no-repeat bg-contain h-64 w-[15rem]'>
                <div className='flex justify-between h-[90%] mr-1 ml-1 items-end'>
                  <div className='flex bg-[#F5F8FA] '>
                    <Image src={startIcon} alt={'Icon'}/>
                    <p className='ml-2 font-comfortaa_bold text-[14px]'>4.6</p>
                  </div>
                 <button>
                    <Image onClick = {() => props.addToCart('1', '', 1, 250, 'STARNIGHT')} src={addIcon} alt={'Icon'} className='rounded-full' width={20} height={20}/>
                  </button>
                </div>
              </div>
              <p className='font-comfortaa_regular'>Name of Product</p>
              <p className='font-thin font-comfortaa_regular text-[#687B8B]'>Name of selling party</p>
              <p className='font-unica text-xl text-[#1C1F22]'>$ 8.45</p>
            </div>

            <div className=''>
              <div className='bg-[url(/images/default-image.jpg)] bg-no-repeat bg-contain h-64 w-[15rem]'>
                <div className='flex justify-between h-[90%] mr-1 ml-1 items-end'>
                  <div className='flex bg-[#F5F8FA] '>
                    <Image src={startIcon} alt={'Icon'}/>
                    <p className='ml-2 font-comfortaa_bold text-[14px]'>4.6</p>
                  </div>
                  <button>
                    <Image onClick = {() => props.addToCart('1', '', 1, 250, 'STARNIGHT')} src={addIcon} alt={'Icon'} className='rounded-full' width={20} height={20}/>
                  </button>
                </div>
              </div>
              <p className='font-comfortaa_regular'>Name of Product</p>
              <p className='font-thin font-comfortaa_regular text-[#687B8B]'>Name of selling party</p>
              <p className='font-unica text-xl text-[#1C1F22]'>$ 8.45</p>
            </div>

            <div className=''>
              <div className='bg-[url(/images/default-image.jpg)] bg-no-repeat bg-contain h-64 w-[15rem]'>
                <div className='flex justify-between h-[90%] mr-1 ml-1 items-end'>
                  <div className='flex bg-[#F5F8FA] '>
                    <Image src={startIcon} alt={'Icon'}/>
                    <p className='ml-2 font-comfortaa_bold text-[14px]'>4.6</p>
                  </div>
                 <button>
                    <Image onClick = {() => props.addToCart('1', '', 1, 250, 'STARNIGHT')} src={addIcon} alt={'Icon'} className='rounded-full' width={20} height={20}/>
                  </button>
                </div>
              </div>
              <p className='font-comfortaa_regular'>Name of Product</p>
              <p className='font-thin font-comfortaa_regular text-[#687B8B]'>Name of selling party</p>
              <p className='font-unica text-xl text-[#1C1F22]'>$ 8.45</p>
            </div>

          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
