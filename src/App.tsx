import React, { useState } from "react";
import { Col, Modal, Row } from "antd";

import "./App.css";

import HomePageTodoList from "./container/HomePageTodoList";
import SearchTodo from "./container/SearchTodo";
import CreateEditTodo from "./container/CreateEditTodo";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataChange, setDataChange] = useState([]);

  const exportData = (data: any) => {
    setDataChange(data);
  };

  console.log("datachange", dataChange);

  const showModal = () => {
    setIsModalOpen(true);
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
            <HomePageTodoList
              data={dataChange}
              onShowModal={showModal}
              // handleDelete={() => deleteItem(items.id)}
            />
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
        <CreateEditTodo
          onHandleCancel={handleCancel}
          onCallbackGetData={exportData}
        />
      </Modal>
    </>
  );
}

export default App;
