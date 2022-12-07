import { fullUrl } from "../api"


const AuthAPI = Object.freeze({
  login: (data: any) =>
  login(data)
})

const login = (data: any) => {
  const credentials = btoa(`${data.username}:${data.password}`)
return fetch(`${fullUrl}/login`, {

    method: "GET",
     headers: {
                Authorization: `Basic ${credentials}`
            },
  })
}
export default AuthAPI
