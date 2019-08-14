import { Get,Post } from "../statics/js/ajax.js";

export const getList = (params)=>{
  return Get('test',params)

}

export const getArticleList = (params)=>{
  return Get('news',params);
}

export const login =  (params)=>{
  return Post('login-user',params);
}
export const getUser =  (params)=>{
  return Post('get-user',params);
}

 