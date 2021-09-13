import React from "react";
import Link from "next/link";
import { Breadcrumb } from "antd";


const MainHeading = () => {
  return (
    <>
    <Breadcrumb className="siteBreadcrumb">
          <Breadcrumb.Item className="siteBreadcrumbItem">
            หน้าแรก
          </Breadcrumb.Item>
          <Breadcrumb.Item className="siteBreadcrumbItem">
            แคมเปญ
          </Breadcrumb.Item>
          <Breadcrumb.Item className="siteBreadcrumbItem">
            รายงานแคมเปญ
          </Breadcrumb.Item>
        </Breadcrumb>

      <div className="mainHeading">
        <div className="mainHeadingTopic">
          <h4>Chrismas Sale</h4>
        </div>
        <div className="mainHeadingItem">
          <p>ทำรายการส่งเมื่อ 25 Dec 2020 | 18.02.09</p>
          <Link href="/">
            <a className="topicButton">ดาวน์โหลดรายงาน</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainHeading;
