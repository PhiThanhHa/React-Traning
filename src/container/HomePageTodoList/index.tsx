import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  date: string;
  content: string;
  status: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "Serial",
    dataIndex: "key",
    key: "serial",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Content",
    dataIndex: "content",
    key: "content",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (_, { status }) => (
      <>
        {status.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        {/* <a>Invite {record.content}</a> */}
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    date: "16/09/2023",
    content: "I'm Ha",
    status: ["done"],
  },
  {
    key: "2",
    date: "17/09/2023",
    content: "I'm Tien",
    status: ["done"],
  },
  {
    key: "3",
    date: "18/09/2023",
    content: "I'm Tam",
    status: ["done"],
  },
];

const HomePageTodoList: React.FC = () => (
  <Table columns={columns} dataSource={data} />
);

export default HomePageTodoList;
