import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button, Row, Col, Badge, Menu, Dropdown } from "antd";
import { BellOutlined, DownOutlined } from "@ant-design/icons";
import Logo from "../public/assets/img/logo_1.png";
import MenuIcon from "../public/assets/img/MenuIcon.svg"

const myHeader = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a href="">1st menu item</a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
  );

  return (
      <>
        <Row className="header_wrapper">
            <Col flex={4} className="header_logo">
              <Link href="/">
                <a>
                  <Image src={Logo} alt="logo" width={212} height={24} />
                </a>
              </Link>
            </Col>

            <Col flex={1}>
              <Row justify="center" align="middle">
                <Col span={16}>
                  <div className="grid_container">
                    <div className="grid_item">
                      <p>เครดิตคงเหลือ</p>
                    </div>
                    <div className="grid_item">
                      <div className="credit_container">
                        <span>300,000</span>
                      </div>
                      <span>S</span>
                    </div>
                    <div className="grid_item">
                      <Link href="">
                        <a>ดูรายละเอียด</a>
                      </Link>
                    </div>
                    <div className="grid_item">
                      <div className="credit_container">
                        <span>1,000</span>
                      </div>
                      <span>C</span>
                    </div>
                  </div>
                </Col>
                <Col span={8} className="tab_right">
                  <Row justify="center" align="middle">
                    <Col>
                      {/* <Button type="text" icon={<MenuOutlined style={{ fontSize: 20 }} />} /> */}
                      <Button type="text">
                        <Image src={MenuIcon}/>
                      </Button>
                    </Col>
                    <Col>
                      <Dropdown
                        overlay={menu}
                        trigger={["click"]}
                        placement="bottomCenter"
                        arrow
                      >
                        <Button type="text">
                          <Badge dot>
                            <BellOutlined
                              style={{ fontSize: 20 }}
                              onClick={(e) => e.preventDefault()}
                            />
                          </Badge>
                        </Button>
                      </Dropdown>
                    </Col>
                    <Col>
                      <Dropdown overlay={menu} trigger={["click"]}>
                        <a
                          style={{color: "black"}}
                          className="ant-dropdown-link"
                          onClick={(e) => e.preventDefault()}
                        >
                          พนิดา <DownOutlined style={{ marginLeft: 2 }} />
                        </a>
                      </Dropdown>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
    </>
  );
};
export default myHeader;
