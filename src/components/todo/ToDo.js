import React, { useState } from "react";
import "./ToDo.scss";
import { Table } from "antd";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";

function ToDo() {
  const [taskvalue, setTaskValue] = useState({
    task: "",
    description: "",
  });

  const dataSource = [
    {
      key: "1",
      Task: "Mike",
      Description: "10 Downing Street",
    },
    {
      key: "1",
      Task: "Mike",
      Description: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Sr. No.",
      dataIndex: "srNo",
      key: "srNo",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Task",
      dataIndex: "Task",
      key: "Task",
    },
    {
      title: "Description",
      dataIndex: "Description",
      key: "Description",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          <CiEdit style={{ cursor: "pointer" }} />
          <MdOutlineDelete style={{ cursor: "pointer", color: "red" }} />
        </span>
      ),
    },
  ];

  return (
    <>
      <div className="parent to-parent">
        <div className="container to-cont">
          <div className="left">
            <form action="">
              <h2>Add Items</h2>
              <p>
                <label for="">Task</label>
                <input
                  type="text"
                  placeholder="Enter your task"
                  value={taskvalue.task}
                  name="task"
                />
              </p>

              <p>
                <label for="">Description</label>
                <textarea
                  type="text"
                  placeholder="Enter your description"
                  value={taskvalue.description}
                  name="description"
                />
              </p>

              <button class="btn" type="submit">
                Enter
              </button>
            </form>
          </div>
          <div className="right">
            <Table dataSource={dataSource} columns={columns} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDo;
