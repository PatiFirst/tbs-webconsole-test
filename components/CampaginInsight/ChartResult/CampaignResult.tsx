import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import smsMobile from "../../../public/assets/img/Group 1731.svg";
import ResultSummary from "./ResultSumamry";
import ResultChart from "./ResultChart";


const CampaignResult = () => {
  
  return (
    <div className="chartContainer">
      <div className="campaignTopic">
        <h5>ผลแคมเปญ</h5>
        <p>ข้อมูลถึง 25 Dec 2020 | 18.02.09</p>
      </div>
      <div className="campaignContainer">
        <div className="campaignLeft">
            <ResultChart />
            <ResultSummary />
        </div>
        <div className="campaignRight">
          <p>รายละเอียดข้อความ</p>
          <div className="smsMobileCon">
            <Image src={smsMobile} alt="smsMobile" />
            <div className="smsFullLink">
              <p>Full link</p>
              <Link href="/">
                <a>https://www.google.com/</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignResult;
