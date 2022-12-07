import React, { ReactElement, useEffect, useState } from "react"
import { Fragment } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { IoCloseSharp } from "react-icons/io5"
import { Menu, Transition } from "@headlessui/react"
import { Field, Formik } from "formik"

import InputField from "../Fields/InputField"
import Select from "./element/Select"
import { productSchema } from "../../validations/productSchema"
import ProductAPI from "../../api/product/product"

const NewProductAdd = (props: any) => {

  const [image, setImage] = useState<any[]>([])
  const [filters, setFilters] = useState<any[]>([])
  const [token, setToken] = useState<any>()
  const filterArray = [{ name: "color" }, { name: "material" }]
  useEffect(() => {
    setToken(
      '~170RLQ8NDOt1IH8x0Oyt2x8qklOkafPqNW5o7ufCn'
    );
  }, []);
  const categoryArray = props.props.categories.map((category:any) => {
    return {
      label: category[Object.keys(category)[0]].name,
      value: category[Object.keys(category)[0]].name,
    }
  })
  categoryArray.unshift({
      label: "Select your Category",
      value: "",
    },)
  const [category, setCategory] = useState(categoryArray[0])
  const subCategoryArray = [
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
  ]
  const [subCategory, setSubCategory] = useState(subCategoryArray[0])

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
  ]
  const [quantity, setQuantity] = useState(quantityArray[0])
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
  ]
  const [ship, setShip] = useState(shipArray[0])

  const classNames = (...classes: any[]) => {
    return classes.filter(Boolean).join(" ")
  }

  const addFilter = (ele: string) => {
    if (!filters.find((el) => el.name === ele))
      setFilters([...filters, { name: ele, content: ["black", "white"] }])
  }
  return (
    <Formik
      onSubmit={async (data: any) => {
        try {
          const response = await ProductAPI.createProduct( data, token);
          const jsonResponse = await response?.json();
          const productResponse = await ProductAPI.addProductToCategory(jsonResponse?.id, data.category, token)
        } catch (error: any) {
          console.error("error" , error)
        }
      }}
      validationSchema={productSchema}
      initialValues={{
          name: "",
          price: 0,
          rating: 0,
          description: "",
          image: "",
          sub:"",
      }}
    >
      {({ handleSubmit, setFieldValue, values }) => (
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          method="post"
        >
          <div className="p-16 w-full">
            <p className="font-unica text-[30px] py-5">LIST NEW PRODUCT</p>
            <div className="max-w-[900px] font-comfortaa">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Product Name
                </label>
                <Field
                  component={InputField}
                  type="text"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Use 3-50 characters"
                />
              </div>
              <div className="mt-12">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Product Description
                </label>
                <Field
                  component={InputField}
                  type="text"
                  name="description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[160px]"
                  placeholder="Write a description of your product, max 200 characters"
                />
              </div>
             {/*  <div className="max-w-[300px] mt-12">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Product Price
                </label>
                <span className="absolute p-2.5">$</span>
                <Field
                  component={InputField}
                  type="text"

                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-8"
                  placeholder="Add numerical value"
                />
              </div> */}
              <div className="mt-12">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Product Image
                </label>
                <span className="text-gray-400">
                  Use .png or .jpg format, max 7 photos, 25mb per photo
                </span>
                <div className="flex mt-2">
                  {/* display image here */}
                  <label
                    htmlFor="contained-button-file"
                    className="w-[60px] h-[60px] rounded-lg border-2 border-gray-300 border-dashed flex items-center justify-center cursor-pointer"
                  >
                    <Field
                      component={InputField}
                      type="file"
                      name="image"
                      onChange={(e: any) => setImage(e.target.files[0])}
                      style={{ display: "none" }}
                    />
                    <AiOutlinePlus className="text-[20px] text-gray-400" />
                  </label>
                </div>
              </div>
              <div className="mt-12 flex">
                <div className="max-w-[300px] w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Product Category
                  </label>
                   <Select
                    options={categoryArray}
                    onChange={(value:any) => {
                      setFieldValue('category', value.value)
                      setCategory(value)
                    }}
                    selectedOption={category}
                  />
                </div>
                <div className="max-w-[300px] w-full ml-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Product Subcategory
                  </label>
                  <Select
                    options={subCategoryArray}
                    onChange={(value:any) => {
                      setFieldValue('sub', value.value)
                      setSubCategory(value)
                    }}
                    selectedOption={subCategory}
                  />
                </div>
              </div>
              <div className="mt-12 flex">
                <div className="max-w-[300px] w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Available Quantity
                  </label>
                  <Select
                    options={quantityArray}
                    selectedOption={quantity}
                    onChange={(event: any) => setQuantity(event)}
                  />
                </div>
                <div className="max-w-[300px] w-full ml-5">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Ships from
                  </label>
                  <Select
                    options={shipArray}
                    selectedOption={ship}
                    onChange={(event: any) => setShip(event)}
                  />
                </div>
              </div>
              <div className="mt-12">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Product Filters
                </label>
                <span className="text-gray-400">
                  Use .png or .jpg format, max 7 photos, 25mb per photo
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
                                      addFilter(ele.name)
                                    }}
                                  >
                                    {ele.name}
                                  </div>
                                )}
                              </Menu.Item>
                            )
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
                      {ele.content.map((element: any, index: any) => {
                        return (
                          <div key={index} className="relative mx-2">
                            <button className="rounded-[15px] bg-gray-100 hover:bg-gray-300 py-2 px-3">
                              {element}
                            </button>
                            <IoCloseSharp className="bg-gray-200 hover:bg-gray-300 text-[30px] absolute -right-3 -top-3 rounded-full p-1.5" />
                          </div>
                        )
                      })}
                      <div className="flex">
                        <div className="relative ml-2 ">
                          <input
                            type="text"
                            className="pr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Add value"
                          />
                          <IoCloseSharp className="bg-gray-transparent text-[30px] absolute right-0 top-2 p-1.5 cursor-pointer" />
                        </div>
                        <button className="flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 ml-3 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                          <AiOutlinePlus />
                          &nbsp; Add option
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
              <div className="mt-16">
                <button
                  type="submit"
                  className="justify-center min-w-[300px] bg-gray-200 hover:bg-[#A042E1] hover:text-white text-gray-600 font-comfortaa inline-flex font-semibold py-2 px-4 rounded-lg shadow"
                >
                  Save and List
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>
  )
}

export default NewProductAdd
function setImage(arg0: any) {
  throw new Error("Function not implemented.")
}

