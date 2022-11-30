import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  HomeOutlined,
  PlusOutlined,
  CheckCircleOutlined,
  LogoutOutlined,
  PlusSquareOutlined,
  LoginOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Filter from './Filter';
const { Header, Sider, Content } = Layout;
const DefaultLayout = (props) => {
  console.log(props)
  const [collapsed, setCollapsed] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"))
  console.log(user)
  


  const logout = () => {
    localStorage.removeItem('user');
    window.location.href = "/login"
  }



  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}
        style={{ position: 'sticky', overflow: 'auto', height: '100%', top: 0 }}
      >
        <div className="logo">
          {collapsed ? (<h1>FJ</h1>) : (<h1>Find Your Job</h1>)}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[window.location.pathname]}
        >
          <Menu.Item key="/" icon={<HomeOutlined />}>
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item key="/profile" icon={<UserOutlined />}>
            <Link to='/profile'>Profile</Link>
          </Menu.Item>
          <Menu.Item key="/appliedjobs" icon={<CheckCircleOutlined />}>
            <Link to='/appliedjobs'>AppliedJobs</Link>
          </Menu.Item>
          <Menu.Item key="/postjob" icon={<PlusOutlined />}>
            <Link to='/postjob'>PostJob</Link>
          </Menu.Item>
          <Menu.Item key="/posted" icon={<PlusSquareOutlined />}>
            <Link to='/posted'>Posted Job</Link>
          </Menu.Item>
          <Menu.Item key="/logout" icon={<LogoutOutlined />}>
            <Link onClick={logout}>Logout</Link>
          </Menu.Item>
          <Menu.Item key="/login" icon={<LoginOutlined />}>
            <Link to="/login">Login</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            position: 'sticky', overflow: 'auto', top: 0, zIndex: 9999
          }}
        >
          <div className="flex justify-content-between">
            <div>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              })}
            </div>
            <div>
              <Filter />
            </div>
            <div style={{ display: collapsed ? "none" : "inline" }}>
              {user && (<h5 className="me-2"><b>{user.username}</b></h5>)}
            </div>
          </div>

        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default DefaultLayout;