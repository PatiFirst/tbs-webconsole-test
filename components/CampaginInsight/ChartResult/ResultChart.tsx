import React from "react";
import { InfoCircleFilled } from '@ant-design/icons';
import { Button } from "antd";

interface ChartData {
  label: string;
  number: number;
  // number?: number;
}

const ResultChart = () => {
  const data: ChartData[] = [
    {
      label: "ส่งทั้งหมด",
      number: 2000
    },
    {
      label: "ส่งสำเร็จ",
      number: 3000,
    },
    {
      label: "ผู้ได้รับ",
      number: 250,
    },
    {
      label: "ผู้รับคลิก Link",
      number: 200,
    },
  ];

  const getHeight = (numberCurrent: number) => {
    const percentageChart = (numberCurrent * 100) / number1;
    const chartHeight = (percentageChart * Rec1) / 100;
    return chartHeight;
  };
  const getPathDiff = (prevHeight: number, nextHeight: number) => {
    const pathDiff = (prevHeight - nextHeight) / 2;
    return pathDiff;
  };

  const number1 = data[0].number;
  const number2 = data[1].number;
  const number3 = data[2].number;
  const number4 = data[3].number;

  const Rec1 = 170;
  const Rec2 = getHeight(number2);
  const Rec3 = getHeight(number3);
  const Rec4 = getHeight(number4);
  const PathDiff1 = getPathDiff(Rec1, Rec2);
  const PathDiff2 = getPathDiff(Rec2, Rec3);
  const PathDiff3 = getPathDiff(Rec3, Rec4);

  return (
    <div className="chartContainer">
      <div>
        <div className="chartTopic">
          <p id="chartLabel1" className="chartTopicText">
            {data[0].label}
          </p>
        </div>
        <div className="chartBar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="160"
            height={`${Rec1}`}
            viewBox={`0 0 160 ${Rec1}`}
          >
            <rect id="rec1" fill="#526069" width="160" height={`${Rec1}`} />
          </svg>
          <p className="numberText">{data[0].number}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height={`${Rec1}`}
            fill="none"
            viewBox={`0 0 25 ${Rec1}`}
          >
            <path
              id="path1"
              fill="#3c464d"
              d={`M0,0,25,${PathDiff1}V${Rec1 - PathDiff1}L0,${Rec1}Z`}
            />
          </svg>
        </div>
      </div>

      <div>
        <div className="chartTopic">
          <p id="charLabel2" className="chartTopicText">
            {data[1].label}
          </p>
          <Button type="link" icon={<InfoCircleFilled />} className="infoButton" />
        </div>
        <div className="chartBar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="160"
            height={`${Rec2}`}
            viewBox={`0 0 160 ${Rec2}`}
          >
            <rect id="rec2" fill="#17b3a3" width="160" height={`${Rec2}`} />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height={`${Rec2}`}
            viewBox={`0 0 25 ${Rec2}`}
          >
            <path
              id="path2"
              fill="#108074"
              d={`M0,0,25,${PathDiff2}V${Rec2 - PathDiff2}L0,${Rec2}Z`}
            />
          </svg>
          <p className="numberText">{data[1].number}</p>
        </div>
      </div>

      <div>
        <div className="chartTopic">
          <p id="chartLabel3" className="chartTopicText">
            {data[2].label}
          </p>
          <Button type="link" icon={<InfoCircleFilled />} className="infoButton" />
        </div>
        <div className="chartBar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="160"
            height={`${Rec3}`}
            viewBox={`0 0 160 ${Rec3}`}
          >
            <rect id="rec3" fill="#0bb2d4" width="160" height={`${Rec3}`} />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height={`${Rec3}`}
            viewBox={`0 0 25 ${Rec3}`}
          >
            <path
              id="path3"
              fill="#087d95"
              d={`M0,0,25,${PathDiff3}V${Rec3 - PathDiff3}L0,${Rec3}Z`}
            />
          </svg>
          <p className="numberText">{data[2].number}</p>
        </div>
      </div>
      <div>
        <div className="chartTopic">
          <p id="chartLabel4" className="chartTopicText">
            {data[3].label}
          </p>
          <Button type="link" icon={<InfoCircleFilled />} className="infoButton" />
        </div>
        <div className="chartBar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="160"
            height={`${Rec4}`}
            viewBox={`0 0 160 ${Rec4}`}
          >
            <rect id="rec4" fill="#3d8ef7" width="160" height={`${Rec4}`} />
          </svg>
          <p className="numberText">{data?.[3]?.number}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultChart;
