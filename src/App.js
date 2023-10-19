import React, { useState } from "react";

import "./App.css";


function App() {
  const [todo, setTodo] = useState([
    { id: 1, title: "hello", status: false },
    { id: 2, title: "hi", status: false },
  ]);

  const [addInputItem, setAddInputItem] = useState("");

  const addDatasItem = () => {
    if (addInputItem) {
      let index = todo.length + 1;
      let newInputItem = { id: index, title: addInputItem, status: false };
      setTodo([...todo, newInputItem]);
      setAddItem("");
    }
  };

  const deleteItem = (id) => {
    let deletedItem = todo.filter((item) => item.id !== id);
    setTodo(deletedItem);
    console.log("deletedItem", deletedItem);
  };

  const completed = (id) => {
    const completedItem = todo.map((item) => {
      if (item.id === id) {
        return { ...item, status: !item.status };
      }
      return item;
    });
    setTodo(completedItem);
  };

  return (
    <div className="App">
      <div className="grid style-radius ">
        <div className="container ">
          <h1 className="heading">My Todos</h1>
          <div className="box-add">
            <input
              value={addItem}
              onChange={(e) => setAddItem(e.target.value)}
              className="input-add"
              placeholder="Add something to do..."
            />
            <button className="btn-add" onClick={addDatasItem}>
              Save
            </button>
          </div>

          {todo && todo.length ? "" : "No tasks..."}

          {todo.map((items) => {
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
