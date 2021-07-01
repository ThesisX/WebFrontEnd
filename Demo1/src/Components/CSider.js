import React, { useState } from 'react'
import { Link } from "react-router-dom";

import { Layout, Menu } from 'antd';
import {
    HomeOutlined,
    DesktopOutlined,
    InfoCircleOutlined,
    QuestionCircleOutlined,
    TeamOutlined,
    MinusCircleOutlined,
} from '@ant-design/icons';


export function CSider() {

    const { Sider } = Layout;
    const { SubMenu } = Menu;
    
    const [collapsed, setCollapsed] = useState(true);

    const onCollapse = collapsed => {
        setCollapsed(collapsed)
    };


    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<HomeOutlined />}>
                    <Link to="/">หน้าแรก</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                    <Link to="/system"  >ระบบตรวจข้อสอบปรนัย</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<InfoCircleOutlined />}>
                    <Link to="/about"  >เกี่ยวกับ</Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<QuestionCircleOutlined />}>
                    <Link to="/manual"  >คู่มือการใช้งาน</Link>
                </Menu.Item>
                <Menu.Item key="5" icon={<TeamOutlined />}>
                    <Link to="/teams"  >ผู้จัดทำ</Link>
                </Menu.Item>
                <SubMenu key="sub1" icon={<MinusCircleOutlined />} title="เมนู1">
                    <Menu.Item key="5">เมนู1-1</Menu.Item>
                    <Menu.Item key="6">เมนู1-2</Menu.Item>
                    <Menu.Item key="7">เมนู1-3</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<MinusCircleOutlined />} title="เมนู2">
                    <Menu.Item key="8">เมนู2-1</Menu.Item>
                    <Menu.Item key="9">เมนู2-2</Menu.Item>
                    <Menu.Item key="10">เมนู2-3</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    )
}

export default CSider
