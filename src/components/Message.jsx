import React from "react";

const Message = ({ children, type }) => {
  return <span className={`alert-${type}`}>{children}</span>;
};

export default Message;
