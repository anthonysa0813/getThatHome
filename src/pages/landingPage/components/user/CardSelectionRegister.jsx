import React from "react";
import { CardSelection } from "../../styles/Users";

const CardSelectionRegister = ({
  setTypeUser,
  image,
  title,
  subtitle,
  setShowForm,
  type,
}) => {
  const showForm = () => {
    setShowForm((showForm) => {
      return !showForm;
    });
    if (type === "seeker") {
      setTypeUser("seeker");
    } else {
      setTypeUser("landlord");
    }
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
