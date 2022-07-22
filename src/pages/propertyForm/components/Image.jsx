import React from "react";

const Image = ({ url }) => {
  return (
    <div className="boxImage">
      <img src={url}></img>
    </div>
  );
};

export default Image;
