import React from "react";
import { Col, Row } from "antd";
import { Button, Form, Input, Select } from 'antd';
import type { FormInstance } from 'antd/es/form';

import "./SearchTodo.css"

const { Option } = Select;

const SearchTodo: React.FC = () => (
  <>
    <Row>
      <Col span={18}>
        <div className="search__input">
          <input type="text" placeholder="Search by content" className="search__input--item margin--bottom"/>
          <input type="date" className="search__input--item"/>
        </div>
      </Col>
      <Col span={6}>
        {/* <h2 className="heading color1">chào</h2> */}

        <Select
          placeholder="Select a option and change input text above"
          onChange={(value, option) => {
            console.log(value)
          }}
          defaultValue={"todo"}
          // allowClear
        >
          <Option value="todo">todo</Option>
          <Option value="doing">doing</Option>
          <Option value="done">done</Option>
        </Select>
      </Col>
    </Row>
  </>
);

export default SearchTodo;



