import { fullUrl } from "../api"


const AuthAPI = Object.freeze({
  login: (data: any) =>
  login(data)
})

const login = (data: any) =>
  fetch(`${fullUrl}/login`, {
    method: "POST",
    body: data,
  })


export default AuthAPI
