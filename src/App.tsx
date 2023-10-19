import React, { useState } from "react";
import { Col, Modal, Row } from "antd";

// import { Space, Table, Tag } from "antd";
// import type { ColumnsType } from "antd/es/table";
// import React, { useEffect, useState } from "react";

import "./App.css";

import HomePageTodoList from "./container/HomePageTodoList";
import SearchTodo from "./container/SearchTodo";
import CreateEditTodo from "./container/CreateEditTodo";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="container">
        <div className="header">
          <Row>
            <Col span={24}>
              <h1 className="heading">My Todos</h1>
            </Col>
          </Row>
        </div>
        {/* <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row> */}
        <Row>
          {/* <Col span={8}>col-8</Col> */}
          <Col span={20}>
            {/* <Row>
            <Col span={20}>
              <h2 className="heading color1">hi</h2>
            </Col>
            <Col span={4}>
              <h2 className="heading color4">hiiii</h2>
            </Col> 
          </Row>*/}
            <SearchTodo />
          </Col>
          <Col span={4}>
            <button
              type="button"
              onClick={showModal}
            >
              Create
            </button>
          </Col>
        </Row>
        {/* <Row>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
      </Row> */}

        <Row>
          <Col span={24}>
            <HomePageTodoList />
          </Col>
        </Row>

        {/* <Row>
          <Col span={24}>
            <CreateEditTodo />
          </Col>
        </Row> */}
      </div>

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={"Save"}
      >
        <CreateEditTodo />
      </Modal>
    </>
  );
}

export default App;
