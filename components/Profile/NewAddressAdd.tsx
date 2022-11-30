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

const NewProductAdd = (props: any) => {
  const [files, setFiles] = useState<any[]>([]);
  const [filters, setFilters] = useState<any[]>([]);
  const filterArray = [{ name: "color" }, { name: "material" }];
  const classNames = (...classes: any[]) => {
    return classes.filter(Boolean).join(" ");
  };
  const handleUploadClick = (e: any) => {
    let temp: any[] = [];
    [...e.target.files].forEach((file) => {
      var reader = new FileReader();
      reader.onload = function (evt: any) {
        temp.push({ name: file.name, data: evt.target.result });
        if (temp.length === e.target.files.length)
          setFiles([...files, ...temp]);
      };
      reader.readAsDataURL(file);
    });
  };
  const addFilter = (ele: string) => {
    if (!filters.find((el) => el.name === ele))
      setFilters([...filters, { name: ele, content: ["black", "white"] }]);
  };
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
            placeholder="Use 3-50 characters"
            required
          />
        </div>
        <div className="mt-12">
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
      </div>
    </div>
  );
};

export default NewProductAdd;
