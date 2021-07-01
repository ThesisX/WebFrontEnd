import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import { Layout, Menu } from "antd";
import "./PublicLayouts.css";

import PHome from "../Home/PHome";
import PLogin from "../Login/PLogin";
import PRegister from "../Register/PRegister";
import Pagenotfound from "../../Pagenotfound";

const { Header, Content, Footer } = Layout;

const PublicLayouts = () => {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" >ระบบตรวจข้อสอบปรนัย</div>
        <Menu className="navbar-menu" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">
            <Link to="/">หน้าแรก</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/login">เข้าสู่ระบบ</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/register">สมัครสมาชิก</Link>
          </Menu.Item>
        </Menu>
      </Header>

      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 100 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <Switch>
            <Route exact path="/" component={PHome} />
            <Route path="/login" component={PLogin} />
            <Route path="/register" component={PRegister} />
            <Route component={Pagenotfound}/>
          </Switch>
        </div>
      </Content>
      <Footer className="footer" style={{ textAlign: 'center' }}>
        CPE RMUTI ©2020 Created by CPE Group 61231
      </Footer>

    </Layout>
  );
};

export default PublicLayouts;
