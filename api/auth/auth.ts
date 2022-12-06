import { fullUrl } from "../api"


const AuthAPI = Object.freeze({
  createCategory: (data: any) =>
  createCategory(data)
})

const createCategory = (data: any) =>
  fetch(`${fullUrl}/login`, {
    method: "POST",
    body: data,
  })


export default AuthAPI
