import React, { useState } from "react";
import "./Sidebar.scss";
import { FaRegMessage } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const [hover, setHover] = useState(null);

  const location = useLocation();

  const data = [
    {
      icons: <FaRegMessage />,
      name: "Drafts",
      link: "/sidebar",
    },
    {
      icons: <FaRegMessage />,
      name: "Drafts",
      link: "/",
    },
    {
      icons: <FaRegMessage />,
      name: "Drafts",
      link: "/",
    },
    {
      icons: <FaRegMessage />,
      name: "Drafts",
      link: "/",
    },
    {
      icons: <FaRegMessage />,
      name: "Drafts",
      link: "/",
    },
  ];

  return (
    <>
      <div
        className={hover ? "sidebar active" : "sidebar"}
        onMouseLeave={() => setHover(false)}
      >
        {data.map((item, index) => (
          <Link to={item.link}
            className={
              location.pathname === item.link
                ? "sidebar-icons active"
                : "sidebar-icons"
            }
            onMouseEnter={() => setHover(index)}
          >
            <span key={index} className="sidebar-icon">
              {item.icons}
            </span>
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Sidebar;
