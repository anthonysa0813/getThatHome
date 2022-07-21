import React from "react";

const TooltipBox = ({ children }) => {
  return (
    <div>
      {children}
      <button>Done</button>
    </div>
  );
};

export default TooltipBox;
