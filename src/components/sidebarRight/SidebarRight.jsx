import React from "react";
import "./SidebarRight.css";
import Newsletter from "../newsletter/Newsletter";

const SidebarRight = () => {
  return (
    <div className="sidebar-right">
      <h1>Sidebar Right</h1>
      <Newsletter />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
        aperiam.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At placeat,
        voluptate ab itaque et dicta. Quisquam itaque saepe cumque eius.
      </p>
    </div>
  );
};

export default SidebarRight;
