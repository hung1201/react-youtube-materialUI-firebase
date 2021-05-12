import React from "react";
import "./SidebarRow.css";
const SidebarRow = ({ title, children, id, onClick, active, moreClick }) => {
  const sidebarRowClick = () => {
    if (id === "9") {
      moreClick();
    }
    onClick(id);
  };
  return (
    <div
      className={`sidebarRow  ${active === id ? "active" : ""}`}
      onClick={sidebarRowClick}>
      {children}
      <h2 className="sidebarRow__title">{title}</h2>
    </div>
  );
};

export default SidebarRow;
