import React, { useState } from "react";
import { Col, Modal, Row } from "antd";

import "./App.css";

import HomePageTodoList from "./container/HomePageTodoList";
import SearchTodo from "./container/SearchTodo";
import CreateEditTodo from "./container/CreateEditTodo";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);

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
        <Row>
          <Col span={20}>
            <SearchTodo />
          </Col>
          <Col span={4}>
            <button type="button" onClick={showModal}>
              Create
            </button>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <HomePageTodoList data={[]} />
          </Col>
        </Row>
      </div>

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        // onOk={handleOk}
        onCancel={handleCancel}
        // okText={"Save"}
        footer={null}
      >
        <CreateEditTodo onHandleCancel={handleCancel} />
      </Modal>
    </>
  );
}

export default App;
