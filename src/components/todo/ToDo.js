import React, { useEffect, useState } from "react";
import "./ToDo.scss";
import { Table } from "antd";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";

function ToDo() {
  const [color, setColor] = useState("");

  const [taskvalue, setTaskValue] = useState({
    task: "",
    description: "",
  });

  const [taskList, setTaskList] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleDelete = (id) => {
    localStorage.removeItem(id);
    getAllData();
  };

  const handleEdit = (item) => {
    setTaskValue({
      task: item.task,
      description: item.description,
    });
    setEditId(item.id);
  };

  const columns = [
    {
      title: "Sr. No.",
      dataIndex: "srNo",
      key: "srNo",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Task",
      dataIndex: "task",
      key: "task",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
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
          <CiEdit
            style={{ cursor: "pointer" }}
            onClick={() => handleEdit(record)}
          />
          <MdOutlineDelete
            style={{ cursor: "pointer", color: "red" }}
            onClick={() => handleDelete(record.id)}
          />
        </span>
      ),
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId !== null) {
      localStorage.setItem(editId, JSON.stringify(taskvalue));
      setEditId(null); // clear edit state
    } else {
      const keys = Object.keys(localStorage).map(Number);
      const maxId = keys.length > 0 ? Math.max(...keys) : 0;
      const newId = maxId + 1;
      localStorage.setItem(newId, JSON.stringify(taskvalue));
    }

    getAllData();
    setTaskValue({ task: "", description: "" });
  };

  const getAllData = () => {
    try {
      const response = Object.keys(localStorage).map((key) => {
        JSON.parse(localStorage.getItem(key));

        return {
          id: key,
          ...JSON.parse(localStorage.getItem(key)),
        };
      });

      setTaskList(response);
    } catch (error) {}
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <div className="parent to-parent">
        <div className="container to-cont">
          <div className="left">
            <form action="" onSubmit={handleSubmit}>
              <h2>Add Items</h2>
              <p>
                <label for="">Task</label>
                <input
                  type="text"
                  placeholder="Enter your task"
                  value={taskvalue.task}
                  name="task"
                  onChange={(e) =>
                    setTaskValue({
                      ...taskvalue,
                      task: e.target.value,
                    })
                  }
                />
              </p>

              <p>
                <label for="">Description</label>
                <textarea
                  type="text"
                  placeholder="Enter your description"
                  value={taskvalue.description}
                  name="description"
                  onChange={(e) =>
                    setTaskValue({
                      ...taskvalue,
                      description: e.target.value,
                    })
                  }
                />
              </p>

              <button className="btn" type="submit">
                {editId !== null ? "Update" : "Enter"}
              </button>
            </form>
          </div>
          <div className="right">
            <Table dataSource={taskList} columns={columns} />
          </div>
        </div>
      </div>

      <div class="parent">
        <div class="container">
          <div class="three-btn">
            <div
              class={` btnn ${color === "bold" ? "active-btn-bold" : ""}`}
              onClick={() => setColor("bold")}
            >
              B
            </div>
            <div
              class={` btnn ${color === "italic" ? "active-btn-italic" : ""}`}
              onClick={() => setColor("italic")}
            >
              I
            </div>
            <div
              class={`btnn ${
                color === "underline" ? "active-btn-underline" : ""
              }`}
              onClick={() => setColor("underline")}
            >
              U
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDo;
