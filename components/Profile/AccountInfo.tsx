import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import sourceImage from '../../public/images/default-image.jpg';
import {AiOutlinePlus} from 'react-icons/ai';
import { BiPencil } from "react-icons/bi";
import startIcon from '../../public/images/star.svg'

const AccountInfo = (props:any) => {
  return (
    <div className='p-16 w-full'>
      <p className='font-unica text-[30px] py-5'>LIST NEW PRODUCT</p>
      <div className='max-w-[600px] font-comfortaa'>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
          <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Use 3-50 characters" required />
        </div>
        <div className='mt-12'>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
          <textarea className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Use 3-50 characters" required />
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
