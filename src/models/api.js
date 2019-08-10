import { Get } from "../statics/js/ajax.js";

export const getList = (params)=>{
  return Get('mock/832/hr/test',params)

}

export const getArticleList = (params)=>{
  return Get('mock/832/hr/articlList',params);
}