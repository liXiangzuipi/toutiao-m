// 存储
export const setItem=(key,value)=>{
  if (typeof value ==='object'){
    value=JSON.stringify(value)
  }
  window.localStorage.setItem(key,value)
}

//获取
export const getItem=(key)=>{
  const data=window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  }catch (e) {
    return data
  }
}

//删除
export const delItem=(key)=>{
  return window.localStorage.removeItem(key)
}
