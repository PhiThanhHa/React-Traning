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

  const [countStatus, setCountStatus] = useState<any>(); //series
  const [dateList, setDateList] = useState<any>(); //categories

  // const [arrangeDate, setArrangeDate] = useState<any>(todoList);

  const sortedDateArray = [...todoList].sort((a, b) => {
    return new Date(a.date).valueOf() - new Date(b.date).valueOf();
  });

  const uniqueDatesSet = new Set(sortedDateArray.map((item) => item.date));
  const uniqueDatesArray = Array.from(uniqueDatesSet);
  console.log("uniqueDatesArray", uniqueDatesArray);
  console.log("uniqueDatesSet typeof", typeof uniqueDatesSet);
  console.table("sortedDateArray", sortedDateArray);

  const [statusCounts, setStatusCounts] = useState({});

  const counts = {};

  // // Lặp qua mảng sắp xếp và đếm số lượng trạng thái cho từng ngày
  // uniqueDatesArray.forEach((item) => {
  //   const date = item.date;
  //   const status = item.status;

  //   console.log("date", date);

  //   if (!counts[date]) {
  //     counts[date] = { todo: 0, doing: 0, done: 0 };
  //   }

  //   counts[date][status]++;
  // });
  // setStatusCounts(counts);

  // console.log("statusCounts", statusCounts);

  // const [statusCounts, setStatusCounts] = useState({});
  // const [statusCountsTodo, setStatusCountsTodo] = useState({});
  // const [statusCountsDoing, setStatusCountsDoing] = useState({});
  // const [statusCountsDone, setStatusCountsDone] = useState({});

  // useEffect(() => {
  //   // Sắp xếp mảng theo ngày
  //   const sortedDateArray = [...todoList].sort(
  //     (a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf()
  //   );

  // Tạo một đối tượng để theo dõi số lượng trạng thái cho mỗi ngày
  //   const countsTodo = {};
  //   const countsDoing = {};
  //   const countsDone = {};

  //   // Lặp qua mảng sắp xếp và đếm số lượng trạng thái cho từng ngày
  //   sortedDateArray.forEach((item) => {
  //     const date = item.date;
  //     const status = item.status;

  //     console.log("date", date);

  //     // if (!counts[date]) {
  //     //   counts[date] = { todo: 0, doing: 0, done: 0 };
  //     // }

  //     // counts[date][status]++;
  //   });

  //   // Cập nhật state với đối tượng đếm
  //   setStatusCountsTodo(countsTodo);
  //   setStatusCountsDoing(countsDoing);
  //   setStatusCountsDone(countsDone);

  //   // setStatusCounts(counts);
  // }, [todoList]);

  const handleSearch = (
    searchTerm: string,
    searchDate: string,
    searchStatus: string
  ) => {
    const dataTodoList = localStorage.getItem("SaveItemInLocalstorage");
    const filtered = JSON.parse(dataTodoList as string).filter((item: any) => {
      if (searchDate && searchStatus) {
        return (
          item.content.includes(searchTerm) &&
          item.date === searchDate &&
          item.status === searchStatus
        );
      } else if (searchDate || searchStatus) {
        return (
          (item.content.includes(searchTerm) && item.date === searchDate) ||
          (item.content.includes(searchTerm) && item.status === searchStatus)
        );
      } else {
        return item.content.includes(searchTerm);
      }
    });
    setTodoList(filtered);
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
            <Statistic datalist={uniqueDatesArray} />
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

export default App;
