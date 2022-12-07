import React, { useState } from "react"
import { Formik, Field } from "formik"
import Select from "./element/Select";

import InputField from "../Fields/InputField"
import { shippingDetailsSchema } from "../../validations/shippingDetailsSchema"
import { Router, useRouter } from "next/router"

const NewAddressAdd = (props: any) => {
  const router = useRouter()
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
  ]
  const [coutry, setCountry] = useState(courtries[0])
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
  ]
  const [province, setProvince] = useState(provinceArray[0])
  return (

    <Formik
      onSubmit={async (data: any) => {
        try {
          const formData = new FormData()
          formData.append("name", data.name)
          router.push('/payment')
        } catch (error: any) {}
      }}
      validationSchema={shippingDetailsSchema}
      initialValues={{
        full_name:"",
        address:"",
        zip_code:"",
        city:"",
        province:"",
        country:"",
      }}
    >
      {({ handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          method="post"
        >
          <div className="p-16 w-full">
            <p className="font-unica text-[30px] py-5">ADD NEW ADDRESS</p>
            <div className="max-w-[900px] font-comfortaa">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Full Name
                </label>
                <Field
                  component={InputField}
                  type="text"
                  name="full_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="First Name and Last Name"

                />
              </div>
              <div className="mt-8 grid grid-cols-3 gap-8">
                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Address
                  </label>
                  <Field
                    component={InputField}
                    type="text"
                    name="address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Street Name and Number"

                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Apt, Suite &nbsp;&nbsp;
                    <span className="text-gray-300">optional</span>
                  </label>
                  <Field
                    component={InputField}
                    type="text"
                    name="apt"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter apt number"
                  />
                </div>
              </div>
              <div className="mt-8 ">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  City
                </label>
                <Field
                  component={InputField}
                  type="text"
                  name="city"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="City Name"
                />
              </div>
              <div className="mt-8 grid grid-cols-3 gap-8">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Country
                  </label>
                  <Select
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
                    type="submit"
                    className="justify-center min-w-[300px] bg-gray-200 hover:bg-[#A042E1] hover:text-white text-gray-600 font-comfortaa inline-flex font-semibold py-2 px-4 rounded-lg shadow"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>
  )
}

export default NewAddressAdd
