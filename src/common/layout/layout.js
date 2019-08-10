import React, {Component} from 'react';
import {  Route,Link } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';

//import { renderRoutes } from "react-router-config";

const { Header, Sider, Content } = Layout;

class CommonLayout extends Component {
  state = {
    collapsed: false,
    height:window.innerHeight
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

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
            />
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