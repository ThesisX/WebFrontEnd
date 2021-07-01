import React from "react";

import { Form, Input, Button } from "antd";
import { Row, Col } from 'antd';

import './PRegister.css'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    password: ""
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const PRegister = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Row>
      <Col span={12} offset={4}>
        <Form
          className="register-form"
          {...layout}
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "username"]}
            label="ชื่อผู้เข้าใช้"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="กรุณากรอก ชื่อผู้เข้าใช้(ภาษาอังกฤษเท่านั้น)"/>
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="อีเมลล์"
            rules={[
              {
                required: true,
                type: "email",
              },
            ]}
          >
            <Input placeholder="กรุณากรอก อีเมลล์"/>
          </Form.Item>
          <Form.Item
            name={["password", "password"]}
            label="รหัสผ่าน"
            rules={[
              {
                required: true,
                type: "password",
              },
            ]}
          >
            <Input.Password placeholder="กรุณากรอก รหัสผ่าน" />
          </Form.Item>
          <Form.Item
            name={["password", "password2"]}
            label="ยืนยันรหัสผ่าน"
            rules={[
              {
                required: true,
                type: "password",
              },
            ]}
          >
            <Input.Password placeholder="กรุณากรอก รหัสผ่านอีกครั้ง" />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" block>
              ลงทะเบียน
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default PRegister;
