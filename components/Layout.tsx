import React from "react";
import { Layout } from "antd";
const { Content } = Layout;
import Header from "../components/Header";
import SideBar from "./SideBar";
import Footer from "./Footer";

const myLayout = (props: any) => {
  return (
    <Layout>
      <Header />
      <Layout>
        <SideBar />
        <Layout className="siteLayout">
          {/* <Content> */}
            {props.children}
          {/* </Content> */}
        </Layout>
      </Layout>
      <Footer />
    </Layout>
  );
};

export default myLayout;