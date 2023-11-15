import React, { useState, useEffect } from "react";
import { Col, Modal, Row } from "antd";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

import HomePageTodoList, { DataType } from "./container/HomePageTodoList";
import SearchTodo from "./container/SearchTodo";
import CreateEditTodo from "./container/CreateEditTodo";
import Statistic from "./container/Statistic";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoList, setTodoList] = useState<any>([]);
  const [editDataItem, setEditDataItem] = useState<any>();

  const [filteredData, setFilteredData] = useState(todoList);

  const handleSearch = (searchTerm: any, searchDate: any) => {
    const filtered = todoList.filter((item: any) => {
      if (searchDate) {
        return item.content.includes(searchTerm) && item.date === searchDate;
      } else {
        return item.content.includes(searchTerm);
      }
    });
    setFilteredData(filtered);
  };

  useEffect(() => {
    const dataTodoList = localStorage.getItem("SaveItemInLocalstorage");
    if (dataTodoList) {
      setTodoList(JSON.parse(dataTodoList));
    }
  }, []);

  const saveLocalStorage = (values: {}) => {
    localStorage.setItem("SaveItemInLocalstorage", JSON.stringify(values));
  };

  const deleteItem = (id: string) => {
    let deletedItem = todoList.filter((item: any) => item.id !== id);
    setTodoList(deletedItem);
    saveLocalStorage(deletedItem);
  };

  const editItem = (record: DataType) => {
    setEditDataItem(record);
  };

  const update = (record: DataType) => {
    let editedItem = todoList.map((item: any) => {
      if (item.id === record.id) {
        return record;
      } else {
        return item;
      }
    });
    setTodoList(editedItem);
    saveLocalStorage(editedItem);
  };

  const addData = (data: DataType) => {
    const saveAddData = [...todoList, { ...data, id: uuidv4() }];
    setTodoList(saveAddData);
    saveLocalStorage(saveAddData);
  };

  const showModal = () => {
    setIsModalOpen(true);
    setEditDataItem(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  if (Object.keys(filteredData).length !== 0) {
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
              <SearchTodo onSearch={handleSearch} />
            </Col>
            <Col span={4}>
              <button type="button" onClick={showModal}>
                Create
              </button>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Statistic />
            </Col>
            <Col span={24}>
              <HomePageTodoList
                data={filteredData}
                // data={todoList}
                onShowModal={showModal}
                handleEditData={(record: DataType) => editItem(record)}
                handleDelete={(id: string) => deleteItem(id)}
              />
            </Col>
          </Row>
        </div>

        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onCancel={handleCancel}
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
  } else {
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
              <SearchTodo onSearch={handleSearch} />
            </Col>
            <Col span={4}>
              <button type="button" onClick={showModal}>
                Create
              </button>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Statistic />
            </Col>
            <Col span={24}>
              <HomePageTodoList
                data={todoList}
                onShowModal={showModal}
                handleEditData={(record: DataType) => editItem(record)}
                handleDelete={(id: string) => deleteItem(id)}
              />
            </Col>
          </Row>
        </div>

        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onCancel={handleCancel}
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
}

export default App;
