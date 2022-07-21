import request from "@/utils/request";

export const login = (data) => {
  return request({
    url:'/v1_0/authorizations',
    method:'post',
    data
  })
}
export default login
