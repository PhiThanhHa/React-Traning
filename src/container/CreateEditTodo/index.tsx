import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select } from "antd";
import type { FormInstance } from "antd/es/form";
import App from "../../App";
import HomePageTodoList, { DataType } from "../HomePageTodoList";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface IPropsHandelCancel {
  onHandleCancel: () => void;
  // hàm thực thi , không trả về giá trị
  onAddTodo: (data: any) => void;
  editData: DataType;
  handleUpdate: (editData: DataType) => void;
}

function CreateEditTodo(props: IPropsHandelCancel) {
  const { onHandleCancel, onAddTodo, editData, handleUpdate } = props;
  const [form] = Form.useForm();

  // loi khi reload page gans lai la mang rong nhung ta can khi reload page thi lay du lieu trong localstorage

  const onFinish = (values: {}) => {
    if (editData) {
      handleUpdate({ ...values, id: editData.id });
    } else {
      onAddTodo(values);
    }
    onReset();
  };

  const onReset = () => {
    form.resetFields();
    onHandleCancel();
  };

  useEffect(() => {
    const onFill = () => {
      form.setFieldsValue(editData);
    };
    if (editData) {
      onFill();
    } else {
      form.setFieldsValue({ content: "", date: "", status: "" });
      // form.setFieldsValue({ null });
    }
  }, [editData]);

  return (
    <Form
      {...layout}
      form={form}
      // inittialValues={editData}
      name="control-ref"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item name="content" label="Content" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="date" label="Date" rules={[{ required: true }]}>
        <Input type="date" />
      </Form.Item>
      <Form.Item name="status" label="Status" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option and change input text above"
          onChange={(value, option) => {
            console.log("value", value);
          }}
          // defaultValue={"todo"}
          // allowClear'
          style={{ left: "50%", transform: " translate(-50%, 0)" }}
        >
          <Option value="todo" className="style-todo" Option={""}>
            todo
          </Option>
          <Option value="doing">doing</Option>
          <Option value="done">done</Option>
        </Select>
      </Form.Item>
      {/* gọi hàm onSubmit sau khi lưu thành công thì gọi hàm onReset để xóa dữ liệu bên trong ô input */}
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" style={{ marginRight: 20 }}>
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Cancle
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CreateEditTodo;

// useEffect(() => {
//   const timerInput = setTimeout(() => {
//     console.log("sdfasdfsd");
//     addDatasItem();
//     setAddInputItem("");
//   }, 3000);
//   return () => {
//     clearTimeout(timerInput);
//   };
// }, [addInputItem]);
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
