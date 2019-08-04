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
    top:15px;
    padding:5px;
    
    &.focused{
      background:#777;
      border-radius:10px;
    }
  }

  
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width:160px;
  height:38px;
  margin-top:9px;
  margin-left:20px;
  padding:0 30px 0 20px;
  box-sizing:border-box;
  border:1px solid #ccc;
  outline:none;
  border-radius:19px;
  background:#eee;
  font-size:14px;
  color:#666;
  &.focused{
    width:200px;

  }

  &.slide-enter{
    transition:all .2s ease-out;
  }
  &.slide-enter-active{
    width:200px;
  }
  &.slide-exit{
    transition:all .2s ease-out;
  }
  &.slide-exit-active{
    width:160px;
  }
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
export const SeachInfo = styled.div`
  position:absolute;
  left:0;
  top:56px;
  width:240px;
  padding:0 20px;
 
  height:100px;
  box-shadow:0 0 8px rgba(0,0,0,.2);
`

export const SeachInfoTitle = styled.div`
  margin-top:20px;
  margin-bottom:15px;
  line-height:20px;
  font-size:14px;
  color:#969696;
`

export const SearchInfoSwitch = styled.span`
  float:right;
  font-size:13px;
`
export const SearchInfoList = styled.div`
  overflow:hidden;
  margin-top:10px;
`
export const SearchInfoItem = styled.a`
  display:block;
  float:left;
  margin-right:10px;
  line-height:18px;
  padding:0 5px;
  font-size:12px;
  border:1px solid #777;
  border-radius:12px;
  color:#333;

`