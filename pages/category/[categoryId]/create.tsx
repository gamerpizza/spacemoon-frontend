import { Formik, Field } from "formik";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Product } from "../../../model/product";
import { productSchema } from "../../../validations/productSchema";
import InputField from "../../../components/Fields/InputField";
import ProductAPI from "../../../api/product/product";
import Link from "next/link";

const CreateProduct = ({ product }: { product: Product }) => {
  const [errors, setErrors] = useState<any>();
  const [token, setToken] = useState<any>();
  const [image, setImage] = useState<any>();
  const [disabled, setDisabled] = useState<any>(false);

  const router = useRouter();
  const { categoryId } = router.query;

  useEffect(() => {
    if(localStorage.getItem("data"))
    setToken(
      JSON.parse(localStorage.getItem("data") || "")?.token.token.account
        .access_token
    );
    else{
      setErrors('Please Login to create a new product')
      setDisabled(true)
    }
  }, []);

  return (
    <>
      <Formik
        validationSchema={productSchema}
        onSubmit={async (data: Product) => {
          const formData: any = new FormData();
          formData.append("categoryId", categoryId);
          formData.append("name", data.name);
          formData.append("price", data.price);
          formData.append("rating", data.rating);
          formData.append("description", data.description);
          formData.append("image", image);
          try {
            const response = await ProductAPI.createProduct(categoryId, formData, token);
            router.push("/category");
            setErrors("");
          } catch (error: any) {
            setErrors(error.message);
          }
        }}
        initialValues={{
          categoryId: "63742e2ce8cd8d0648d50e1f",
          name: "",
          price: 0,
          rating: 0,
          description: "",
          image: "",
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-1 p-4">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Name
                </label>
                <Field
                  component={InputField}
                  type="name"
                  name="name"
                  placeholder="Enter name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Price
                </label>
                <Field
                  component={InputField}
                  type="number"
                  name="price"
                  placeholder="Enter Price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <Field
                  component={InputField}
                  type="hidden"
                  value=""
                  name="categoryId"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Rating
                </label>

                <Field
                  component={InputField}
                  type="number"
                  name="rating"
                  placeholder="Enter Rating"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Description
                </label>
                <Field
                  component={InputField}
                  type="text"
                  name="description"
                  placeholder="Enter Description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2  p-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mb-6">
                <div className="flex items-center justify-start w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-1/2 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        aria-hidden="true"
                        className="w-10 h-10 mb-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <Field
                      component={InputField}
                      type="file"
                      name="image"
                      onChange={(e: any) => setImage(e.target.files[0])}
                      placeholder="Enter name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-6">
          <Link
            href="/checkout"
            className="flex items-center justify-center rounded-md border border-transparent bg-[#A042E1] px-6 py-3 text-base font-comfortaa text-white shadow-sm hover:bg-[#a45ed7]"
          >
            <button type="submit" disabled={disabled}> Create Product </button>
          </Link>
        </div>
            {errors}
          </form>
        )}
      </Formik>
    </>
  );
};

export default CreateProduct;
