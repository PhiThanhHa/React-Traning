import React, { useState } from "react";

import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "hello", status: false },
    { id: 2, title: "hi", status: false },
  ]);

  const [addInputItem, setAddInputItem] = useState("");

  document.addEventListener(function (event) {
    if (event.keyCode === 13) {
      console.log("hi ha document");
      console.log(event);
    }
  });

  window.addEventListener("DOMContentLoaded", (event) => {
    // =.addEventListener("keydown", function (event) {
    //   if (event.keyCode === 13) {
    //     console.log("hi ha");
    //     console.log(event);
    //   }
    // });
  });

  const addDatasItem = () => {
    if (addInputItem) {
      let index = todoList.length + 1;
      let newItem = { id: index, title: addInputItem, status: false };
      setTodoList([...todoList, newItem]);
      setAddInputItem("");
    }
  };

  const deleteItem = (id) => {
    let deletedItem = todoList.filter((item) => item.id !== id);
    setTodoList(deletedItem);
    console.log("deletedItem", deletedItem);
  };

  const completed = (id) => {
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
