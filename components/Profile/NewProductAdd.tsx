import React, { ReactElement, useEffect, useState } from "react";
import { Fragment } from "react";
import Select from "./element/Select";

import Link from "next/link";
import Image from "next/image";
import sourceImage from "../../public/images/default-image.jpg";
import { AiOutlinePlus } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import startIcon from "../../public/images/star.svg";
import { Menu, Transition } from "@headlessui/react";
import {
  DropDownList,
  DropDownListChangeEvent,
  DropDownListFilterChangeEvent,
} from "@progress/kendo-react-dropdowns";
import {
  CompositeFilterDescriptor,
  filterBy,
  FilterDescriptor,
} from "@progress/kendo-data-query";

const NewProductAdd = (props: any) => {
  const [files, setFiles] = useState<any[]>([]);
  const [filters, setFilters] = useState<any[]>([]);
  const filterArray = [{ name: "color" }, { name: "material" }];
  const allData = [
    { id: 1, text: "Black" },
    { id: 2, text: "White" },
    { id: 3, text: "Gold" },
  ];
  const defaultItem = { text: "+ Add Option" };
  const [data, setData] = useState(allData.slice());
  const [selectedFillter, setSelectedFillter] = useState("");
  const filterData = (filter: FilterDescriptor | CompositeFilterDescriptor) => {
    const data = allData.slice();
    return filterBy(data, filter);
  };

  const filterChange = (event: DropDownListFilterChangeEvent) => {
    setData(filterData(event.filter));
  };
  const filterClick = (value: any, index: any) => {
    let buffer = [...filters];
    buffer[index].content.push(value.text);
    setFilters(buffer);
  };
  const deleteFilter = (ind: any, index: any) => {
    let buffer = [...filters];
    buffer[ind].content.splice(index, 1);
    setFilters(buffer);
  };
  const deleteFilters = (ind: any) => {
    let buffer = [...filters];
    buffer.splice(ind, 1);
    setFilters(buffer);
  };
  const addFilter = (ele: string) => {
    if (!filters.find((el) => el.name === ele))
      setFilters([...filters, { name: ele, content: [] }]);
  };

  const categoryArray = [
    {
      label: "Select your Category",
      value: "",
      unavailable: true,
    },
    {
      label: "Category-1",
      value: "c-1",
      unavailable: false,
    },
    {
      label: "Category-2",
      value: "c-2",
      unavailable: false,
    },
  ];
  const [category, setCategory] = useState(categoryArray[0]);
  const subCategoryArray = [
    {
      label: "Select your Subcategory",
      value: "",
      unavailable: true,
    },
    {
      label: "SubCategory-1",
      value: "sc-1",
      unavailable: false,
    },
    {
      label: "SubCategory-2",
      value: "sc-2",
      unavailable: false,
    },
  ];
  const [subCategory, setSubCategory] = useState(subCategoryArray[0]);
  const quantityArray = [
    {
      label: "Select your Quantity",
      value: "",
      unavailable: true,
    },
    {
      label: "Quantity-1",
      value: "q-1",
      unavailable: false,
    },
    {
      label: "Quantity-2",
      value: "q-2",
      unavailable: false,
    },
  ];
  const [quantity, setQuantity] = useState(quantityArray[0]);
  const shipArray = [
    {
      label: "Select Country",
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
  const [ship, setShip] = useState(shipArray[0]);

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
  return (
    <div className="p-16 w-full">
      <p className="font-unica text-[30px] py-5">LIST NEW PRODUCT</p>
      <div className="max-w-[900px] font-comfortaa">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Name
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
            Product Description
          </label>
          <textarea
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[160px]"
            placeholder="Write a description of your product, max 200 characters"
            required
          />
        </div>
        <div className="max-w-[300px] mt-12">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Price
          </label>
          <span className="absolute p-2.5">$</span>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-8"
            placeholder="Add numerical value"
            required
          />
        </div>
        <div className="mt-12">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Image
          </label>
          <span className="text-gray-400">
            Use .png or .jpg format, max 7 photos, 25mb per photo
          </span>
          <div className="flex mt-2">
            {files.map((ele, index) => {
              return (
                <img
                  src={ele.data}
                  key={index}
                  className="w-[60px] h-[60px] mx-2 rounded-lg"
                />
              );
            })}
            <label
              htmlFor="contained-button-file"
              className="w-[60px] h-[60px] rounded-lg border-2 border-gray-300 border-dashed flex items-center justify-center cursor-pointer"
            >
              <input
                accept=".png,.jpg"
                id="contained-button-file"
                multiple
                type="file"
                style={{ display: "none" }}
                onChange={handleUploadClick}
              />
              <AiOutlinePlus className="text-[20px] text-gray-400" />
            </label>
          </div>
        </div>
        <div className="mt-12 flex">
          <div className="max-w-[300px] w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Product Price
            </label>
            <Select
              //className="flex-1"
              options={categoryArray}
              selectedOption={category}
              handelChange={(event: any) => setCategory(event)}
            />
          </div>
          <div className="max-w-[300px] w-full ml-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Product Subcategory
            </label>
            <Select
              //className="flex-1"
              options={subCategoryArray}
              selectedOption={subCategory}
              handelChange={(event: any) => setSubCategory(event)}
            />
          </div>
        </div>
        <div className="mt-12 flex">
          <div className="max-w-[300px] w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Available Quantity
            </label>
            <Select
              //className="flex-1"
              options={quantityArray}
              selectedOption={quantity}
              handelChange={(event: any) => setQuantity(event)}
            />
          </div>
          <div className="max-w-[300px] w-full ml-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Ships from
            </label>
            <Select
              //className="flex-1"
              options={shipArray}
              selectedOption={ship}
              handelChange={(event: any) => setShip(event)}
            />
          </div>
        </div>
        <div className="mt-12">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Filters
          </label>
          <span className="text-gray-400">
            Add any additional filters you want to apply to your product
          </span>
          <div className="flex mt-2">
            <Menu
              as="div"
              className="relative inline-block text-left w-[60px] h-[60px] rounded-lg border-2 border-gray-300 border-dashed "
            >
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                  <AiOutlinePlus className="text-[40px] text-gray-400" />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {filterArray.map((ele, index) => {
                      return (
                        <Menu.Item key={index}>
                          {({ active }) => (
                            <div
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                              onClick={(e: React.MouseEvent) => {
                                addFilter(ele.name);
                              }}
                            >
                              {ele.name}
                            </div>
                          )}
                        </Menu.Item>
                      );
                    })}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        {filters.map((ele, ind) => {
          return (
            <div className="w-full mt-12" key={ind}>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {ele.name}
              </label>
              <div className="flex">
                {ele.content.map((element, index) => {
                  return (
                    <div key={index} className="relative mx-2">
                      <button className="rounded-[15px] bg-gray-100 hover:bg-gray-300 py-2 px-3">
                        {element}
                      </button>
                      <IoCloseSharp
                        className="bg-gray-200 hover:bg-gray-300 text-[30px] absolute -right-3 -top-3 rounded-full p-1.5"
                        onClick={() => {
                          deleteFilter(ind, index);
                        }}
                      />
                    </div>
                  );
                })}
                <div className="flex">
                  <style>{`
                    .k-animation-container{
                      font-family:Comfortaa;
                      border-radius:15px;
                    }
                  `}</style>
                  <DropDownList
                    className="bg-white rounded-lg ml-3"
                    style={{ width: "200px" }}
                    data={data}
                    textField="text"
                    filterable={true}
                    defaultItem={defaultItem}
                    onFilterChange={filterChange}
                    onChange={(event: DropDownListChangeEvent) => {
                      filterClick(event.value, ind);
                    }}
                  />
                  <button
                    className="ml-2 px-2 py-1 rounded-full border-2 border-[#E62744] flex items-center justify-center cursor-pointer"
                    onClick={() => {
                      deleteFilters(ind);
                    }}
                  >
                    <RiDeleteBin5Line className="text-[20px] text-[#E62744]" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <div className="mt-16">
          <button
            type="button"
            className="justify-center min-w-[300px] bg-gray-200 hover:bg-[#A042E1] hover:text-white text-gray-600 font-comfortaa inline-flex font-semibold py-2 px-4 rounded-lg shadow"
          >
            Save and List
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProductAdd;
