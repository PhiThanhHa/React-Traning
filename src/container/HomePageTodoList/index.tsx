import React, { useEffect, useState } from "react";
import { Button, Select, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

import "./HomePageTodoList.css";

export interface DataType {
  // key?: string;
  content?: string;
  date?: string;
  status?: string;
}
interface IPropsHomePageTodoList {
  onShowModal?: () => void;
  data: DataType[];
  handleDelete?: () => void;
}

function HomePageTodoList(props: any) {
  const columns: ColumnsType<DataType> = [
    // {
    //   title: "Serial",
    //   dataIndex: "key",
    //   key: "serial",
    // },
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
          <Button type="primary" danger onClick={props.onShowModal}>
            Edit
          </Button>
          <Button type="primary" danger onClick={props.handleDelete}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={props.data} />;
}

export default HomePageTodoList;

// import { Space, Table, Tag } from "antd";
// import type { ColumnsType } from "antd/es/table";
// import React, { useEffect, useState } from "react";

// function App() {
// const todos: any = [];
// const [todoList, setTodoList] = useState(
//   todos
// );

// console.log("todoList", todoList)

// const [addInputItem, setAddInputItem] = useState("");

// useEffect(() => {
//   const items =localStorage.getItem('SaveItemInLocalstorage');
//   if (items) {
//     setTodoList(JSON.parse(items));
//   }
// }, []);

// useEffect(() => {
//   localStorage.setItem('SaveItemInLocalstorage', JSON.stringify(todoList));
//   console.log("SaveItemInLocalstorage");
// }, [todoList]);

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

// const addDatasItem = () => {
//   if (addInputItem) {
//     let index = todoList.length + 1;
//     let newItem = { id: index, title: addInputItem, status: false };
//     setTodoList([...todoList, newItem]);
//     setAddInputItem("");
//   }
// };

// const deleteItem = (id: number) => {
//   let deletedItem = todoList.filter((item: any) => item.id !== id);
//   setTodoList(deletedItem);
//   console.log("deletedItem", deletedItem);
// };

// const completed = (id: number) => {
//   const completedItem = todoList.map((item: any) => {
//     if (item.id === id) {
//       return { ...item, status: !item.status };
//     }
//     return item;
//   });
//   setTodoList(completedItem);
// };

// return (
//   <div className="App">
//     <div className="grid style-radius ">
//       <div className="container ">
//         <h1 className="heading">My Todos</h1>
//         <div className="box-add">
//           <input
//             value={addInputItem}
//             onChange={(e) => setAddInputItem(e.target.value)}
//             onKeyDown={(e) => {
//               if (e.key === "Enter") {
//                 addDatasItem();
//                 console.log("toi la ha");
//               }
//             }}
//             className="input-add"
//             placeholder="Add something to do..."
//             id="input-add-id"
//           />
//           <button className="btn-add" onClick={addDatasItem}>
//             Save
//           </button>
//         </div>

//         {todoList && todoList.length ? "" : "No tasks..."}

//         {todoList.map((items: any) => {
//           return (
//             <div key={items.id}>
//               <div className="list-item">
//                 <input
//                   type="checkbox"
//                   onClick={() => completed(items.id)}
//                 ></input>
//                 <p className={items.status ? "confirm" : "noconfirm"}>
//                   <span className="item-content">{items.title}</span>
//                 </p>
//                 <button
//                   className="btn-deleted"
//                   onClick={() => deleteItem(items.id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   </div>
// );

// return (<HomePageTodoList/>)
// }

///////
// render: (_, { status }) => (
//   <>
//     {status.map((tag) => {
//       let color = tag.length > 5 ? "geekblue" : "green";
//       if (tag === "loser") {
//         color = "volcano";
//       }
//       return (
//         <Tag color={color} key={tag}>
//           {tag.toUpperCase()}
//         </Tag>
//       );
//     })}
//   </>
// ),

// <Select
//     placeholder="Select a option and change input text above"
//     onChange={(value, option) => {
//       console.log(value)
//     }}
//     defaultValue={"todo"}
//   >
//     <Option value="todo">todo</Option>
//     <Option value="doing">doing</Option>
//     <Option value="done">done</Option>
//   </Select>
