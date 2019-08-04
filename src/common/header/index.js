import React , {Component} from 'react'
import { HeaderWraper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWraper,SeachInfo,SeachInfoTitle,SearchInfoSwitch,SearchInfoItem ,
  SearchInfoList


} from './style'

import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import {getList,searchBlurAction,searchFocusAction} from './store/actionCreater'




class Header extends Component{
  constructor(props){
    super(props);

  }
  componentDidMount(){
    this.props.getList();
  }
  getListArea(show,list){
    if(show){
      return (
        <SeachInfo>
        <SeachInfoTitle>
          热门搜索
          <SearchInfoSwitch>
              换一批
          </SearchInfoSwitch>
  
          <SearchInfoList>
            {
                list.map((v,i)=>{
                  return <SearchInfoItem key={i}>{v}</SearchInfoItem>
                })

            }
 
          </SearchInfoList>
         
        </SeachInfoTitle>
      </SeachInfo>
      )
    }else{
      return null
    }
  }
  render(){
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
              in={this.props.focused}
              timeout={300}
              classNames="slide"
            >
             <div>
             <NavSearch
                onFocus={this.props.handleInputFocues}
                onBlur={this.props.handleInputBlur}
                className={this.props.focused ? 'focused' : ''}
              ></NavSearch>
              <i className={this.props.focused ? 'iconfont icon-fangdajing focused' : 'iconfont icon-fangdajing'} ></i>
             </div>
            </CSSTransition>
            {
              this.getListArea(this.props.focused,this.props.list)
            }

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

 


 


const mapStateToProps = (state)=>{
  return {
    focused:state.getIn(['header','focused']),
    list:state.getIn(['header','list'])
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    handleInputFocues(){
      const action = searchFocusAction()
      dispatch(action)
    },
    handleInputBlur(){
      const action = searchBlurAction()
      dispatch(action)
    },
    getList(){
      const action = getList();
      
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);