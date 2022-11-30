import React, { ReactElement, useEffect, useState } from "react";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import sourceImage from "../../public/images/default-image.jpg";
import { AiOutlinePlus } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { BiPencil } from "react-icons/bi";
import startIcon from "../../public/images/star.svg";
import { Menu, Transition } from "@headlessui/react";

const AddAdress = (props: any) => {
  const addressArray = [
    {
      title: "Primary",
      name: "Name Lastname",
      streetname: "Street Name 45",
      city: "City, Code 110000, Country",
    },
  ];
  return (
    <div className="p-16 w-full">
      <p className="font-unica text-[30px] py-5">SHIPPING ADDRESSES</p>
      <div className="max-w-[900px] font-comfortaa">
        {addressArray.map((ele, index) => {
          return (
            <div key={index}>
              <div className="flex justify-between max-w-[450px] w-full">
                <p>{ele.title}</p>
                <div className="flex">
                  <button className="px-2 py-1 rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer">
                    <BiPencil className="text-[20px] text-gray-400" />
                  </button>
                </div>
              </div>
              <p>{ele.name}</p>
              <p>{ele.streetname}</p>
              <p>{ele.city}</p>
            </div>
          );
        })}
        <div className="mt-12">
          <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
            Add New Address
          </label>
          <Link
            href="/profile/NewAddress"
            className="w-[60px] h-[60px] rounded-lg border-2 border-gray-300 border-dashed flex items-center justify-center cursor-pointer"
          >
            <AiOutlinePlus className="text-[20px] text-gray-400" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddAdress;
