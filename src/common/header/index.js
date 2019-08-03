import React, { Component } from 'react'
import { HeaderWraper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWraper } from './style'
import { CSSTransition } from 'react-transition-group';
class Header extends Component {
  constructor(props) {
    super(props);
    this.handleInputFocues = this.handleInputFocues.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
    this.state = {
      focused: false
    }
  }
  render() {
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
              in={this.state.focused}
              timeout={300}
              classNames="slide"
            >
             <div>
             <NavSearch
                onFocus={this.handleInputFocues}
                onBlur={this.handleInputBlur}
                className={this.state.focused ? 'focused' : ''}
              ></NavSearch>
              <i className={this.state.focused ? 'iconfont icon-fangdajing focused' : 'iconfont icon-fangdajing'} ></i>
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
  handleInputFocues() {
    this.setState({
      focused: true
    })
  }
  handleInputBlur() {
    this.setState({
      focused: false
    })
  }
}


export default Header;