/**หน้าแรก */

import React from "react";
import { Row, Col } from "antd";
import { Button } from "antd";
import "./PHome.css";
import { Link } from "react-router-dom";


const PHome = () => {
  return (
    <div>
      <Row>
        <Col span={12}>
          <p className="p-welcome"> WELCOME To </p>
          <p className="p-web">
            {" "}
            Web Application Multiple Choice Question Answering
          </p>
          <h1 className="b3"> เว็บแอพพลิเคชันระบบตรวจข้อสอบปรนัย </h1>
        </Col>

        <Col span={12}>
          <div className="right-head">
            <p>สามารถตรวจข้อสอบปรนัยได้อย่างง่ายดาย</p>
            <p> เพียงแค่อัพโหลดภาพ"กระดาษเฉลยคำตอบ" และ "กระดาษคำตอบ"</p>
          </div>
          <div className="obj-center">
              <Link to ="/system">
            <Button className="b6" size="large">
              Click!! 
            </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PHome;
