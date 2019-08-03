import styled from 'styled-components'
import logoPic from '../../statics/logo.png'
export const HeaderWraper = styled.div`
  height:58px;
  border-bottom:1px solid #f0f0f0;
`

export const Logo = styled.a`
  position:absolute;
  top:0;
  left:0;
  display:block;
  width:100px;
  height:56px;
  background:url('${logoPic}');
  background-size:contain;
  
`
export const Nav = styled.div`
  width:960px;
  height:100%;
  margin:0 auto;
 
`


export const NavItem = styled.div`
  line-height:56px;
  padding:0 15px;
  color:#333;
  &.left{
    float:left;
  }

  &.right{
    float:right;
    color:#9696965;
  }

  &.active{
    color:yellow;
  }

`

export const SearchWraper = styled.div`
  position:relative;
  float:left;
  .iconfont{
    position:absolute;
    right:10px;
    top:20px;
  }
`

export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
  width:160px;
  height:38px;
  margin-top:9px;
  margin-left:20px;
  padding:0 20px;
  box-sizing:border-box;
  border:1px solid #ccc;
  outline:none;
  border-radius:19px;
  background:#eee;
  font-size:14px;
`
export const Addition = styled.div`
  position:absolute;
  right:0;
  top:0;

  .reg{
    color:#ec6149;
  }

  .writting{
    color:#fff;
    background:#ec6149;
  }

`
export const Button = styled.div`
  float:right;
  margin-top:9px;
  padding:0 20px;
  line-height:38px;
  border-radius:19px;
  border:1px solid #ec6139;
  margin-right:15px;
`
