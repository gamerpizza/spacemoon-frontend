import { useSession } from 'next-auth/react';
import Image from 'next/image';
const OrderSummary = ({ cart, subTotal }: any) => {
  const session = useSession();
  return (
    <>
      <div className='flex justify-start item-start space-y-2 flex-col'>
        <h1 className='text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800'>
          Order #13432
        </h1>
        <p className='text-base dark:text-gray-300 font-medium leading-6 text-gray-600'>
          21st Mart 2021 at 10:34 PM
        </p>
      </div>
      <div className='mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0'>
        <div className='flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8'>
          <div className='flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full'>
            <>
              <p className='text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800'>
                Customer’s Cart
              </p>
              {Object.keys(cart).map((item) => {
                <div className='mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full'>
                  <div className='pb-4 md:pb-8 w-full md:w-40'>
                    <Image
                      className='w-full hidden md:block'
                      src='https://i.ibb.co/84qQR4p/Rectangle-10.png'
                      alt='dress'
                    />
                    <Image
                      className='w-full md:hidden'
                      src='https://i.ibb.co/L039qbN/Rectangle-10.png'
                      alt='dress'
                    />
                  </div>
                  <div className='border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0'>
                    <div className='w-full flex flex-col justify-start items-start space-y-8'>
                      <h3 className='text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800'>
                        Premium Quaility Product
                      </h3>
                      <div className='flex justify-start items-start flex-col space-y-2'>
                        <p className='text-sm dark:text-white leading-none text-gray-800'>
                          <span className='dark:text-gray-400 text-gray-300'>
                            Name:{' '}
                          </span>{' '}
                          {cart[item].name}
                        </p>
                        <p className='text-sm dark:text-white leading-none text-gray-800'>
                          <span className='dark:text-gray-400 text-gray-300'>
                            Price:{' '}
                          </span>{' '}
                          {cart[item].price}
                        </p>
                        <p className='text-sm dark:text-white leading-none text-gray-800'>
                          <span className='dark:text-gray-400 text-gray-300'>
                            Quantity:{' '}
                          </span>
                          {cart[item].quantity}
                        </p>
                      </div>
                    </div>
                    <div className='flex justify-between space-x-8 items-start w-full'>
                      <p className='text-base dark:text-white xl:text-lg leading-6'>
                        $36.00{' '}
                        <span className='text-red-300 line-through'>
                          {' '}
                          $45.00
                        </span>
                      </p>
                      <p className='text-base dark:text-white xl:text-lg leading-6 text-gray-800'>
                        01
                      </p>
                      <p className='text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800'>
                        $36.00
                      </p>
                    </div>
                  </div>
                </div>;
              })}
            </>
          </div>
          <div className='flex justify-center  md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8'>
            <div className='flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6'>
              <h3 className='text-xl dark:text-white font-semibold leading-5 text-gray-800'>
                Summary
              </h3>
              <div className='flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4'>
                <div className='flex justify-between w-full'>
                  <p className='text-base dark:text-white leading-4 text-gray-800'>
                    Sub Total
                  </p>
                  <p className='text-base dark:text-gray-300 leading-4 text-gray-600'>
                    {subTotal}
                  </p>
                </div>
                <div className='flex justify-between items-center w-full'>
                  <p className='text-base dark:text-white leading-4 text-gray-800'>
                    Discount{' '}
                    <span className='bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800'>
                      STUDENT
                    </span>
                  </p>
                  <p className='text-base dark:text-gray-300 leading-4 text-gray-600'>
                    00 ()
                  </p>
                </div>
                <div className='flex justify-between items-center w-full'>
                  <p className='text-base dark:text-white leading-4 text-gray-800'>
                    Shipping
                  </p>
                  <p className='text-base dark:text-gray-300 leading-4 text-gray-600'>
                    $0.00
                  </p>
                </div>
              </div>
              <div className='flex justify-between items-center w-full'>
                <p className='text-base dark:text-white font-semibold leading-4 text-gray-800'>
                  Total
                </p>
                <p className='text-base dark:text-gray-300 font-semibold leading-4 text-gray-600'>
                  {subTotal}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col'>
          <h3 className='text-xl dark:text-white font-semibold leading-5 text-gray-800'>
            Customer
          </h3>
          <div className='flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0'>
            <div className='flex flex-col justify-start items-start flex-shrink-0'>
              <div className='flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200'>
                <Image
                  src='https://i.ibb.co/5TSg7f6/Rectangle-18.png'
                  alt='avatar'
                />
                <div className='flex justify-start items-start flex-col space-y-2'>
                  <p className='text-base dark:text-white font-semibold leading-4 text-left text-gray-800'>
                    {session?.data?.user?.name}
                  </p>
                  <p className='text-sm dark:text-gray-300 leading-5 text-gray-600'>
                    10 Previous Orders
                  </p>
                </div>
              </div>

              <div className='flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M3 7L12 13L21 7'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
                <p className='cursor-pointer text-sm leading-5 '>
                  {session?.data?.user?.email}
                </p>
              </div>
            </div>
            <div className='flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0'>
              <div className='flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start'>
                <div className='flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8'>
                  <p className='text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800'>
                    Shipping Address
                  </p>
                  <p className='w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600'>
                    180 North King Street, Northhampton MA 1060
                  </p>
                </div>
                <div className='flex justify-center md:justify-start items-center md:items-start flex-col space-y-4'>
                  <p className='text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800'>
                    Billing Address
                  </p>
                  <p className='w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600'>
                    180 North King Street, Northhampton MA 1060
                  </p>
                </div>
              </div>
              <div className='flex w-full justify-center items-center md:justify-start md:items-start'>
                <button className='mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 w-96 2xl:w-full text-base font-medium leading-4 text-gray-800'>
                  Edit Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
