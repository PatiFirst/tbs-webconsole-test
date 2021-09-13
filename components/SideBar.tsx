import React from "react";
import { Layout, Menu } from "antd";

import {
    RocketOutlined,
    CommentOutlined,
    SafetyOutlined,
    UnorderedListOutlined,
    FileOutlined,
    PlusCircleFilled,
    UserOutlined,
    SettingFilled,
  } from "@ant-design/icons";
const { Sider } = Layout;

const SiderBar = () => {
  return (
    <>
        <Sider width={60} className="sideBar">
          <Menu theme="dark" defaultSelectedKeys={["2"]} mode="inline" className="sideBarMenu">
            <Menu.Item key="1" className="sideBarMenuItem" icon={<RocketOutlined />} />
            <Menu.Item key="2" className="sideBarMenuItem" icon={<CommentOutlined />} />
            <Menu.Item key="3" className="sideBarMenuItem" icon={<SafetyOutlined />} />
            <Menu.Item key="4" className="sideBarMenuItem" icon={<UnorderedListOutlined />} />
            <Menu.Item key="5" className="sideBarMenuItem" icon={<FileOutlined />} />
            <Menu.Item key="6" className="sideBarMenuItem" icon={<PlusCircleFilled />} />
            <Menu.Item key="7" className="sideBarMenuItem" icon={<UserOutlined />} />
            <Menu.Item key="8" className="sideBarMenuItem" icon={<SettingFilled />} />
          </Menu>
        </Sider>

    </>
  );
};

export default SiderBar;
