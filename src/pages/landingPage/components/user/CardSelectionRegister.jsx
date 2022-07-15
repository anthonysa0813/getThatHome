import React from "react";
import { CardSelection } from "../../styles/Users";

const CardSelectionRegister = ({ image, title, subtitle, setShowForm }) => {
  const showForm = () => {
    setShowForm((showForm) => {
      return !showForm;
    });
  };

  return (
    <CardSelection className="" onClick={showForm}>
      <div className="boxImage">
        <img src={image} alt={title} />
      </div>
      <div className="selectionInfo text-center">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </CardSelection>
  );
};

export default CardSelectionRegister;
