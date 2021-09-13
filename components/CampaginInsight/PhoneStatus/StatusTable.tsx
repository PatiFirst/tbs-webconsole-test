import React from 'react';
import { useState } from 'react';
import { Table, Radio, Divider, Tag, Space, Pagination } from 'antd';

const columns = [
    {
      title: 'เบอร์ผู้รับ',
      dataIndex: 'telephone',
      render: (phone: number) => <p>{phone}</p>,
    },
    {
      title: 'สถานะการส่ง',
      dataIndex: 'sendStatus',
      render: (tag: string) => {
        const color = tag.includes("received")?'geekblue':'red'
        return(
          <Tag color={color} key={tag}>
              {tag.toUpperCase()}
          </Tag>
        )
      }
    },
    {
      title: 'สถานะการคลิก',
      dataIndex: 'clickStatus',
      render: (tag: string) => {
        const color = tag.includes("clicked")?'green':'red'
        return(
          <Tag color={color} key={tag}>
              {tag.toUpperCase()}
          </Tag>
        )
      }
    },
    {
      title: 'เครดิตที่ใช้',
      dataIndex: 'creditUsed',
      render: (credit: number) => {
        return(
          <div>
            <span>{credit}</span>
            <img src="/assets/img/CreditIcon.png" />
          </div>
        )
      }
    },
    {
      title: 'ผู้รับคลิกเมื่อ',
      dataIndex: 'clickedDate',
    },
    {
      title: '',
      dataIndex: '',
    },
  ];
  
  interface DataType {
    key: React.Key;
    telephone: string;
    sendStatus: string;
    clickStatus: string;
    creditUsed: number;
    clickedDate: string;
  }
  
  const data: DataType[] = [
    {
      key: '1',
      telephone: "08923475",
      sendStatus: "received",
      clickStatus: "clicked",
      creditUsed: 2,
      clickedDate: "25 Dec 2020 | 15.28"
    }
  ];

const data2: DataType[] = []
for (let i = 0; i < 500; i++) {
  data2.push({
    key: i,
    telephone: `08923475+${i}`,
    sendStatus: "received",
    clickStatus: "clicked",
    creditUsed: 2,
    clickedDate: "25 Dec 2020 | 15.28"
  });
}

  
  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    // getCheckboxProps: (record: DataType) => ({
    //   disabled: record.telephone === "0000000", // Column configuration not to be checked
    //   name: record.telephone,
    // }),
  };


const StatusTable = () => {
    const [selectionType] = useState<'checkbox'>('checkbox');

    return (
        <>
         <div>
          <Table
            rowSelection={{
              type: selectionType
            }}
            columns={columns}
            dataSource={data2}
            
            pagination={{showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`}}
          />
        </div>
        </>
    )
}

export default StatusTable