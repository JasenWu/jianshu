import React, {Component} from 'react';
import {  Route,Link } from "react-router-dom";
import { Layout, Menu, Icon,Popover,Button } from 'antd';
import { Avatar,Title } from './style.js'
import "./style.scss"



 

//import { renderRoutes } from "react-router-config";

const { Header, Sider, Content } = Layout;

class CommonLayout extends Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      collapsed: false,
      height:window.innerHeight,
      visible: false,
    };
  
  }
  
 

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  logout(){
   
    this.setState({
      hide: !this.state.hide,
    },()=>{
      console.log('logout');

    });
  }

  render() {
    

    
    const { route } = this.props;
    //console.log('router1111',renderRoutes(route.routes));

    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            
            <Menu.Item key="1">
             
              <Link to="/root/home">
                <Icon type="user" />
                <span>发起会议</span>
              </Link>
              
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/root/details/12">
                <Icon type="video-camera" />
                <span>预约会议</span>
              </Link>
             
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>在线会议</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
              className="trigger"
              
            />

            <Title>
                ZOOM账号管理系统
            </Title>

            <Avatar>

                <Popover
                  placement="bottomLeft" 
                  content={<a onClick={this.logout}>退出登录</a>}
                  title=""
                  trigger="click"
                  visible={this.state.visible}
                  onVisibleChange={this.handleVisibleChange}
                > 
                        <img src='https://yn-oa.oss-cn-shanghai.aliyuncs.com/test/banner.png' />
                </Popover>
             
            </Avatar>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: this.state.height - 115,
            }}
          >
            {
                 route.routes.map((route, i) => (
                    <Route
                    path={route.path}
                    key={i}
                    render={props => (
                  
                      // pass the sub-routes down to keep nesting
                      <route.component {...props} />
                    )}
                  />
                )) 
            }
          </Content>
        </Layout>
      </Layout>
    );
  }
}


export default CommonLayout;