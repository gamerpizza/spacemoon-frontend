import { fullUrl } from "../api"


const AuthAPI = Object.freeze({
  login: (data: any) =>
  login(data)
})

const login = (data: any) =>
  fetch(`${fullUrl}/login`, {

    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      username: "admin",
      password: "sp4c3m00n!"
    }),
  })


export default AuthAPI
