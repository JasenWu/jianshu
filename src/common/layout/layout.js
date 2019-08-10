import React, {Component} from 'react';
import { Layout, Menu, Icon } from 'antd';

import { renderRoutes } from "react-router-config";

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
    console.log('router1111',renderRoutes(route.routes));

    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>发起会议</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>预约会议</span>
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
            123
            {
               
             
            }
             
          </Content>
        </Layout>
      </Layout>
    );
  }
}


export default CommonLayout;