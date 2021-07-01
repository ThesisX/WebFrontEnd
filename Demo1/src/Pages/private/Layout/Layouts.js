import React from "react";
import { Layout, Typography } from "antd";
import "./Layouts.css";

import CSider from "../Components/CSider";
import PHome from "../Pages/Home/PHome";
import PSystem from "../Pages/System/PSystem";
import PAbout from "../Pages/About/PAbout";
import PTeams from "../Pages/Teams/PTeams";
import Login_Singin from "../Pages/Login_Singin/Login_Singin";
import REgister from "../Pages/Register/REgister";
import Router from "../Router";

import { Route, Switch,Link } from "react-router-dom";
import { Button } from "antd";
import { Row, Col } from "antd";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const Layouts = () => {
  return (
    <Layout>

      <CSider />
      <Layout className="site-layout">


        <Header className="site-layout-header">
          <Row>
            <Col span={8} >
              <Title level={2} style={{ color: "#c5c1b4", marginTop:20 }}>
                ระบบตรวจข้อสอบปรนัย{" "}
              </Title>
            </Col>

            <Col span={15}>
              <div className="btn-log-and-reg">
               
                <Button danger>Log out</Button>
              </div>
            </Col>
          </Row>

          </Header>

          <Content style={{ margin: "0 10px" }}>
            <div className="site-layout-content">
              <Switch>
                <Route exact path="/" component={PHome} />
                <Route path="/system" component={PSystem} />
                <Route path="/about" component={PAbout} />
                <Route path="/teams" component={PTeams} />
                <Route path="/login_singin" component={Login_Singin} />
                <Route path="/register" component={REgister} />
              </Switch>
            </div>
          </Content>
          <Footer className="footer">
            CPE RMUTI ©2020 Created by CPE Group 61231
        </Footer>
      </Layout>

      </Layout>
  );
};

export default Layouts;
