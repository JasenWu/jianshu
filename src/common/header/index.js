import React from 'react'
import { HeaderWraper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWraper } from './style'
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';

const Header = (props)=>{
  return (
    <HeaderWraper>
        <Logo href='/' />
        <Nav>
          <NavItem className='left'>首页</NavItem>
          <NavItem className='left'>下载APP</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className='iconfont icon-Aa'></i>
          </NavItem>

          <SearchWraper>
            <CSSTransition
              in={props.focused}
              timeout={300}
              classNames="slide"
            >
             <div>
             <NavSearch
                onFocus={props.handleInputFocues}
                onBlur={props.handleInputBlur}
                className={props.focused ? 'focused' : ''}
              ></NavSearch>
              <i className={props.focused ? 'iconfont icon-fangdajing focused' : 'iconfont icon-fangdajing'} ></i>
             </div>
            </CSSTransition>

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


const mapStateToProps = (state)=>{
  return {
    focused:state.header.focused
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    handleInputFocues(){
      const action = {
        type:'search-focus'
      }
      dispatch(action)
    },
    handleInputBlur(){
      const action = {
        type:'search-blur'
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);