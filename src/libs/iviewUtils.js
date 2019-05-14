import axios from "axios"

let iViewUtil = {}

iViewUtil.ajax = axios.create({
  baseURL: "https://easy-mock.com/mock/5b962af7e0d1a17c279c8870/iview",
  timeout: 3000
})

export default iViewUtil

