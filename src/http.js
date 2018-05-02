import axios from 'axios'
import store from './store'
// 超时时间
axios.defaults.timeout = 5000

axios.interceptors.request.use(config => {
  console.log(store.state.sessionName)
  return config
}, error => {
  return Promise.reject(error)
})
export default axios
