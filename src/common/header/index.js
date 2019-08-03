import React , {Component} from 'react'
import { HeaderWraper,Logo ,Nav , NavItem ,NavSearch,Addition,Button,SearchWraper} from './style'
class Header extends Component{
  render(){
    return (
      <HeaderWraper>
            <Logo href='/' />
            <Nav>
              <NavItem className='left'>首页</NavItem>
              <NavItem  className='left'>下载APP</NavItem>
              <NavItem  className='right'>登录</NavItem>
              <NavItem  className='right'>
                <i className='iconfont icon-Aa'></i>
              </NavItem>
              <SearchWraper>
                <NavSearch></NavSearch>
                <i className='iconfont icon-fangdajing'></i>
              </SearchWraper>
             
            </Nav>
            <Addition>
              <Button className='writting'>
                    <i className='iconfont icon-penwrite'></i>
                    写文章
                </Button>
              <Button className='reg'>注册</Button>
            </Addition>
      </HeaderWraper>
    )
  }
}


export default Header;