import React from "react";
import { Col, Row } from "antd";
import { Form, Input, Select } from "antd";
// import type { FormInstance } from 'antd/es/form';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function SearchTodo() {
  return (
    <>
      <Row>
        <Col span={18} style={{ backgroundColor: "", left: 0 }}>
          <Form
            {...layout}
            // ref={formRef}
            name="control-ref"
            // onFinish={onFinish}
            style={{ maxWidth: 1000 }}
          >
            <Form.Item name="Search by content" label="Search by content">
              <Input />
            </Form.Item>
            <Form.Item name="Search by date" label="Search by date">
              <Input type="date" />
            </Form.Item>
          </Form>
        </Col>
        <Col span={6} style={{ backgroundColor: "", float: "left" }}>
          <Select
            placeholder="Select a option and change input text above"
            onChange={(value, option) => {
              console.log(value);
            }}
            defaultValue={"todo"}
            // allowClear'
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
