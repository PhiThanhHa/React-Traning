<<<<<<< HEAD
import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  date: string;
  content: string;
  status: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "Serial",
    dataIndex: "key",
    key: "serial",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Content",
    dataIndex: "content",
    key: "content",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (_, { status }) => (
      <>
        {status.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        {/* <a>Invite {record.content}</a> */}
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    date: "16/09/2023",
    content: "I'm Ha",
    status: ["done"],
  },
  {
    key: "2",
    date: "17/09/2023",
    content: "I'm Tien",
    status: ["done"],
  },
  {
    key: "3",
    date: "18/09/2023",
    content: "I'm Tam",
    status: ["done"],
  },
];

const HomePageTodoList: React.FC = () => (
  <Table columns={columns} dataSource={data} />
);

export default HomePageTodoList;
=======
import React, { useEffect, useState } from "react";
import { Button, Select, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

import "./HomePageTodoList.css";

export interface DataType {
  // key: string;
  date: string;
  content: string;
  status: string;
}

interface IPropsHomePageTodoList {
  onShowModal: () => void;
  data: DataType[]
}


function HomePageTodoList({ onShowModal, data }: IPropsHomePageTodoList ) {

  const columns: ColumnsType<DataType> = [
    {
      title: "Serial",
      dataIndex: "key",
      key: "serial",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
      render: (Content) => <a>{Content}</a>,
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",

      render: (status) => <a>{status}</a>,

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
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {/* <a>Invite {record.content}</a> */}
          {/* <Button type="primary" danger > */}
          <Button type="primary" danger onClick={onShowModal}>
            Edit
          </Button>
          <Button type="primary" danger>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

 
//   const addDatasItem = () => {
//     if (addInputItem) {
//       let index = todoList.length + 1;
//       let newItem = { id: index, title: addInputItem, status: false };
//       setTodoList([...todoList, newItem]);
//       setAddInputItem("");
//     }

  return <Table columns={columns} dataSource={data} />;
}

// const HomePageTodoList: React.FC = () => (
//   <Table columns={columns} dataSource={data} />
// );

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
>>>>>>> 6fea94df606958f1c4ddb283d7b96dd944fd1d74
