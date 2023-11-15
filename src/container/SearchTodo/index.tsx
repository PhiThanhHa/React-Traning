import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "antd";
import { Form, Input, Select } from "antd";
import { useDebounce as useDebounceSearch } from "use-debounce";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
interface IPropsSearchTodo {
  onSearch: (searchData: any) => void;
}

function SearchTodo(props: IPropsSearchTodo) {
  const { onSearch } = props;
  const [form] = Form.useForm();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchDate, setSearchDate] = useState("");

  const handleContentChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleDateChange = (event: any) => {
    setSearchDate(event.target.value);
  };
  const [debouncedSearchTerm] = useDebounceSearch(
    searchDate ? searchTerm && searchDate : searchTerm,
    1000
  );
  console.log("searchTerm", searchTerm);

  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <Row>
        <Col span={18} style={{ backgroundColor: "", left: 0 }}>
          <Form
            {...layout}
            form={form}
            name="control-ref"
            autoComplete="off"
            style={{ maxWidth: 1000 }}
          >
            <Form.Item name="Searchbycontent" label="Search by content">
              {/* <Input /> */}
              <Input onChange={handleContentChange} />
            </Form.Item>
            {/* <Form.Item name="Searchbydate" label="Search by date">
              <Input type="date" onChange={handleDateChange} />
            </Form.Item> */}
          </Form>
        </Col>
        <Col span={6} style={{ backgroundColor: "", float: "left" }}>
          <Select
            placeholder="Select a option and change input text above"
            onChange={(value, option) => {
              console.log(value);
            }}
            defaultValue={"todo"}
            style={{
              left: "50%",
              transform: " translate(-50%, 0)",
            }}
          >
            <Option
              value="todo"
              className="style-todo"
              Option={""}
              style={{ backgroundColor: "red" }}
            >
              todo
            </Option>
            <Option value="doing">doing</Option>
            <Option value="done">done</Option>
          </Select>
        </Col>
      </Row>
    </>
  );
}

export default SearchTodo;

// return (
//     <>
//       <Row>
//         <Col span={18} style={{ backgroundColor: "", left: 0 }}>
//           <Form
//             {...layout}
//             form={form}
//             name="control-ref"
//             autoComplete="off"
//             onFinish={onFinish}
//             style={{ maxWidth: 1000 }}
//           >
//             <Form.Item name="Searchbycontent" label="Search by content">
//               <Input />
//             </Form.Item>

//             {/*
//             <Form.Item name="Searchbycontent" label="Search by content">
//               <Input value={searchTerm} />
//             </Form.Item> */}

//             {/* <Form.Item name="Searchbydate" label="Search by date">
//               <Input type="date" />
//             </Form.Item> */}
//             {/* <Form.Item name="Search by date" label="Search by date">
//               <Input type="date" />
//             </Form.Item> */}
//           </Form>
//         </Col>
//         {/* <Col span={6} style={{ backgroundColor: "", float: "left" }}>
//           <Select
//             placeholder="Select a option and change input text above"
//             onChange={(value, option) => {
//               console.log(value);
//             }}
//             defaultValue={"todo"}
//             // allowClear'
//             style={{
//               left: "50%",
//               transform: " translate(-50%, 0)",
//             }}
//           >
//             <Option
//               value="todo"
//               className="style-todo"
//               Option={""}
//               style={{ backgroundColor: "red" }}
//             >
//               todo
//             </Option>
//             <Option value="doing">doing</Option>
//             <Option value="done">done</Option>
//           </Select>
//         </Col> */}
//       </Row>
//     </>
//   );
// }

// const onFinish = (values: any) => {
//   if (values) {
//     onSearch(values);
//   } else {
//     alert("Hay nhap tu khoa can tim kiem");
//   }
//   console.log("values", values);
//   // setSearchTerm(values);
//   setSearchTerm(values.Searchbycontent);

//   // Kết thúc form tự động sau khi nhập liệu
//   form.submit();
// };
