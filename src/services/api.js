import axios from "axios"

export * from "./routes.constants"

// export const baseURL = "https://vms-app-api.herokuapp.com/api/v1"
export const baseURL = "https://jojolo.herokuapp.com/api/v1"

const axiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json ",
    "Access-Control-Allow-Headers": "Content-Type",
  },
})

const addTokenToRequest = async req => {
  const token = localStorage.getItem("11#221#")
  req.headers.Authorization = `Bearer ${token}`
  return req
}

axiosInstance.interceptors.request.use(addTokenToRequest)

export default axiosInstance
