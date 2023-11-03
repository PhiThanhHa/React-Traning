import React, { useState, useEffect } from "react";
import { Col, Modal, Row } from "antd";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

import HomePageTodoList, { DataType } from "./container/HomePageTodoList";
import SearchTodo from "./container/SearchTodo";
import CreateEditTodo from "./container/CreateEditTodo";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoList, setTodoList] = useState<any>([]);
  const [editDataItem, setEditDataItem] = useState<any>();

  useEffect(() => {
    const dataTodoList = localStorage.getItem("SaveItemInLocalstorage");
    if (dataTodoList) {
      setTodoList(JSON.parse(dataTodoList));
    }
  }, []);

  const saveLocalStorage = (values: any) => {
    localStorage.setItem("SaveItemInLocalstorage", JSON.stringify(values));
  };

  const deleteItem = (id: any) => {
    let deletedItem = todoList.filter((item: any) => item.id !== id);
    setTodoList(deletedItem);
    console.log("deletedItem", deletedItem);
    saveLocalStorage(deletedItem);
  };

  const editItem = (record: DataType) => {
    // kiem tra la edit hay create
    // hien thi data ra giao dien
    // goi ham edit
    setEditDataItem(record);
  };

  console.log("editDataItem", editDataItem);

  const update = (record: DataType) => {
    let editedItem = todoList.map((item: any) => {
      if (item.id === record.id) {
        return record;
      } else {
        return item;
      }
    });
    console.log("editedItem", editedItem);

    setTodoList(editedItem);
    saveLocalStorage(editedItem);
  };

  console.log("EditDataItem ", editDataItem);

  const addData = (data: any) => {
    const saveAddData = [...todoList, { ...data, id: uuidv4() }];
    setTodoList(saveAddData);
    saveLocalStorage(saveAddData);
  };

  console.log("todoList", todoList);

  const showModal = () => {
    setIsModalOpen(true);
    setEditDataItem(null);
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
              data={todoList}
              onShowModal={showModal}
              handleEditData={(record: any) => editItem(record)}
              handleDelete={(id: string) => deleteItem(id)}
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
          onAddTodo={addData}
          editData={editDataItem}
          handleUpdate={update}
        />
      </Modal>
    </>
  );
}

export default App;
