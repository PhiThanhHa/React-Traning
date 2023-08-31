import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "hello", status: false },
    { id: 2, title: "hi", status: false },
  ]);

  const [addInputItem, setAddInputItem] = useState("");

  // useEffect(() => {
  //   document.addEventListener("keypress", function (event) {
  //     if (event.keyCode === 13) {
  //       console.log("hi ha document");
  //       // console.log(event);
  //       // addDatasItem()
  //     }
  //   });
  // }, []);

  //   useEffect(() => {
  //     const timerInput = setTimeout(() => {
  //       console.log("sdfasdfsd");
  //       addDatasItem();
  //       setAddInputItem("");
  //     }, 3000);
  //     return () => {
  //       clearTimeout(timerInput);
  //     };
  //   }, [addInputItem]);

  const addDatasItem = () => {
    if (addInputItem) {
      let index = todoList.length + 1;
      let newItem = { id: index, title: addInputItem, status: false };
      setTodoList([...todoList, newItem]);
      setAddInputItem("");
    }
  };

  const deleteItem = (id: number) => {
    let deletedItem = todoList.filter((item) => item.id !== id);
    setTodoList(deletedItem);
    console.log("deletedItem", deletedItem);
  };

  const completed = (id: number) => {
    const completedItem = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, status: !item.status };
      }
      return item;
    });
    setTodoList(completedItem);
  };

  return (
    <div className="App">
      <div className="grid style-radius ">
        <div className="container ">
          <h1 className="heading">My Todos</h1>
          <div className="box-add">
            <input
              value={addInputItem}
              onChange={(e) => setAddInputItem(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addDatasItem();
                  console.log("toi la ha");
                }
              }}
              className="input-add"
              placeholder="Add something to do..."
              id="input-add-id"
            />
            <button className="btn-add" onClick={addDatasItem}>
              Save
            </button>
          </div>

          {todoList && todoList.length ? "" : "No tasks..."}

          {todoList.map((items) => {
            return (
              <div key={items.id}>
                <div className="list-item">
                  <input
                    type="checkbox"
                    onClick={() => completed(items.id)}
                  ></input>
                  <p className={items.status ? "confirm" : "noconfirm"}>
                    <span className="item-content">{items.title}</span>
                  </p>
                  <button
                    className="btn-deleted"
                    onClick={() => deleteItem(items.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
