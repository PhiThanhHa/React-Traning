import React, { useEffect, useState } from "react";
import { Button, Select, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

import "./HomePageTodoList.css";

export interface DataType {
  id: string;
  content?: string;
  date?: string;
  status?: string;
}
interface IPropsHomePageTodoList {
  onShowModal: () => void;
  data: DataType[];
  handleDelete: (id: string) => void;
  handleEditData: (record: DataType) => void;
}

function HomePageTodoList(props: IPropsHomePageTodoList) {
  const { onShowModal, handleDelete, data, handleEditData } = props;
  const columns: ColumnsType<DataType> = [
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
      render: (Content) => <a>{Content}</a>,
    },

    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },

    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status) => <a>{status}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {/* <a>Invite {record.content}</a> */}
          {/* <Button type="primary" danger > */}
          <Button
            type="primary"
            danger
            onClick={() => {
              onShowModal();
              handleEditData(record);
            }}
          >
            Edit
          </Button>
          <Button type="primary" danger onClick={() => handleDelete(record.id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
}

export default HomePageTodoList;
