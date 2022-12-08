import { Formik, Field } from "formik"
import Image from "next/image"

import InputField from "../../components/Fields/InputField"
import { loginSchema } from "../../validations/loginSchema"

import logo from "../../public/images/logo_black.png"
import AuthAPI from "../../api/auth/auth"
import { useState } from "react"
import {  useRouter } from "next/router"

const Login = () => {
  const [error, setError] = useState()
  const router=useRouter()
  return (
    <>
      <Formik
        onSubmit={async (data: any) => {
          try {
            const response = await  AuthAPI.login(data)
            const textResponse = await response.text()
            const extractedToken = textResponse.split(" ")
            localStorage.setItem('token', JSON.stringify(extractedToken[1]))
            router.push('/')
          } catch (error: any) {
            setError(error.message)
          }
        }}
        validationSchema={loginSchema}
        initialValues={{
          username: "",
          password: "",
        }}
      >
        {({ handleSubmit }) => (



            <div className="flex items-center flex-wrap h-full g-6 text-gray-800">

              <div className=" bg-[url(/images/sidetile_bck.png)] bg-cover bg-no-repeat bg-[65%] md:hidden lg:block  w-[640px] h-[100vh]  mb-12 md:mb-0">
                <div className="mt-[160px] ml-[80px]">
                    <Image src={logo} width={200} height={200} alt="logo"></Image>
                    <h1 className="font-unica mt-[50px] text-[60px] uppercase text-white drop-shadow-[rgba(245,248,250,0.5)]" >The best products in the galaxy </h1>
                  </div>
              </div>
              <div className="md:w-full lg:w-1/2 h-[780px] flex flex-col items-center">
                <div className="w-[480px] flex flex-col items-center">
                <h1 className="font-unica text-3xl mb-[30px]">LOG IN TO CONTINUE</h1>
                <div className="flex items-center self-stretch  mb-[30px] my-4 before:flex-1 before:border-t before:border-[#1C1F22] before:mt-0.5 after:flex-1 after:border-t after:border-[#1C1F22] after:mt-0.5">

                </div>
                <a
                    className="px-7 py-3 text-white font-comfortaa text-sm leading-snug  rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                    style={{ backgroundColor: "#DF4930" }}
                    href="#!"
                    role="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-3.5 h-3.5 mr-2"
                    >

                    </svg>
                    Continue with Google
                  </a>
                  <div className="flex items-center self-stretch mt-[30px] mb-[30px] my-4 before:flex-1 before:border-t before:border-[#1C1F22] before:mt-0.5 after:flex-1 after:border-t after:border-[#1C1F22] after:mt-0.5">
                    <p className="text-center font-semibold mx-4 mb-0">OR</p>
                  </div>
                  </div>
                   <form onSubmit={handleSubmit} className=" w-[480px]">
                  <div className="mb-[40px]">
                    <label className="font-comfortaa">Email</label>
                    <Field
                      component={InputField}
                      name="username"
                      type="text"
                      className="form-control border-[#1C1F22] font-comfortaa block w-full px-4 py-2 text-xl font-normal text-gray-700  bg-[#F5F8FA] bg-clip-padding border border-solid  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Email address"
                    />
                  </div>

                  <div className="mb-[20px]">
                    <label className="font-comfortaa">Password</label>
                    <Field
                      component={InputField}
                      name="password"
                      type="password"
                      className="form-control border-[#1C1F22] font-comfortaa block w-full px-4 py-2 text-xl font-normal bg-[#F5F8FA] text-gray-700  bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Password"
                    />
                  </div>


                  <div className="flex justify-between items-center mb-[60px]">
                    <div className="form-group form-check">

                      <label
                        className="form-check-label inline-block text-gray-800"
                        htmlFor="exampleCheck2"
                      >

                      </label>
                    </div>
                    <a
                      href="#!"
                      className="text-[#A042E1]  duration-200 transition ease-in-out"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="inline-block font-comfortaa px-7 py-3 mb-[40px] bg-[#BFC9D0] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Sign in
                  </button>
                  </form>
                  <div className="flex items-center my-4 before:flex-1 before:border-t before:border-white before:mt-0.5 after:flex-1 after:border-t after:border-white after:mt-0.5">
                    <p className="text-center font-comfortaa mx-4 mb-0">Dont have an account?</p>
                    <span className="font-comfortaa text-[#A042E1]">SIGN UP</span>
                  </div>
              {error}
              </div>

            </div>


        )}
      </Formik>
    </>
  )
}

export default Login
