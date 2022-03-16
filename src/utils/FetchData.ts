import axios from 'axios'

const BACKEND_API_URL =  ""
export const postAPI = async (url: string, post: object, token?:string) => {
  const res = await axios.post(`${BACKEND_API_URL}/api/${url}`, post, {
    headers: { Authorization: token! }
  })

  return res;
}


export const getAPI = async (url: string, token?:string) => {
  const res = await axios.get(`${BACKEND_API_URL}/api/${url}`, {
    headers: { Authorization: token! }
  })

  return res;
}

export const patchAPI = async (url: string, post: object, token?:string) => {
  const res = await axios.patch(`${BACKEND_API_URL}/api/${url}`, post, {
    headers: { Authorization: token! }
  })

  return res;
}