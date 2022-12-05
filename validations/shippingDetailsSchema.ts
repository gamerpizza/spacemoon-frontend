import * as yup from "yup";

export const shippingDetailsSchema = yup.object({
  full_name: yup.string().required("Name is Required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  country: yup.string().required("Country is required"),
  province: yup.string().required("Province is required"),
  zip_code: yup.number().required("Zip Code is required"),
});

