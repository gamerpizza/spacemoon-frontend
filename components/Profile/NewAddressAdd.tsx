import React, { ReactElement, useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";
import Select from "./element/Select";

import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import sourceImage from "../../public/images/default-image.jpg";
import { AiOutlinePlus } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { BiPencil } from "react-icons/bi";
import startIcon from "../../public/images/star.svg";
import { Menu, Transition } from "@headlessui/react";

const NewAddressAdd = (props: any) => {
  const courtries = [
    {
      label: "Choose country",
      value: "",
      unavailable: true,
    },
    {
      label: "United States",
      value: "US",
      unavailable: false,
    },
    {
      label: "Italy",
      value: "it",
      unavailable: false,
    },
  ];
  const [coutry, setCountry] = useState(courtries[0]);
  const provinceArray = [
    {
      label: "Choose Province",
      value: "",
      unavailable: true,
    },
    {
      label: "Province-1",
      value: "US",
      unavailable: false,
    },
    {
      label: "Province-2",
      value: "it",
      unavailable: false,
    },
  ];
  const [province, setProvince] = useState(provinceArray[0]);
  return (
    <div className="p-16 w-full">
      <p className="font-unica text-[30px] py-5">ADD NEW ADDRESS</p>
      <div className="max-w-[900px] font-comfortaa">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Full Name
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="First Name and Last Name"
            required
          />
        </div>
        <div className="mt-8 grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Address
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Street Name and Number"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Apt, Suite &nbsp;&nbsp;
              <span className="text-gray-300">optional</span>
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter apt number"
            />
          </div>
        </div>
        <div className="mt-8 ">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            City
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="City Name"
            required
          />
        </div>
        <div className="mt-8 grid grid-cols-3 gap-8">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Country
            </label>
            <Select
              //className="flex-1"
              options={courtries}
              selectedOption={coutry}
              handelChange={(event: any) => setCountry(event)}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Province
            </label>
            <Select
              //className="flex-1"
              options={provinceArray}
              selectedOption={province}
              handelChange={(event: any) => setProvince(event)}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              ZIP Code
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter ZIP Code"
            />
          </div>
          <div className="mt-16">
            <button
              type="button"
              className="justify-center min-w-[300px] bg-gray-200 hover:bg-[#A042E1] hover:text-white text-gray-600 font-comfortaa inline-flex font-semibold py-2 px-4 rounded-lg shadow"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAddressAdd;
