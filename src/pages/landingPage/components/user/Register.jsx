import React, { useState } from "react";
import { RegisterContainer } from "../../styles/Users";
import landlordImage from "../../../../assets/images/landlord.png";
import seekerImage from "../../../../assets/images/seeker.png";
import CardSelectionRegister from "./CardSelectionRegister";
import FormRegister from "./FormRegister";

const Register = () => {
  const [showForm, setShowForm] = useState(false);
  const [typeUser, setTypeUser] = useState("");

  return (
    <RegisterContainer>
      <div className="hero">
        <div className="wrapper ">
          {showForm ? (
            <FormRegister typeUser={typeUser} />
          ) : (
            <>
              {" "}
              <p className="text-center">
                Selecciona el perfil con el que te identificas
              </p>
              <h1 className="text-center">Que estas buscando?</h1>
              <div className="selectionRegister ">
                <CardSelectionRegister
                  image={landlordImage}
                  title="Landlord"
                  subtitle="You want to rent or sell a home"
                  setShowForm={setShowForm}
                  setTypeUser={setTypeUser}
                  type="seeker"
                />
                <CardSelectionRegister
                  image={seekerImage}
                  title="Home seeker"
                  subtitle="You want to find a home"
                  setShowForm={setShowForm}
                  setTypeUser={setTypeUser}
                  type="landlord"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </RegisterContainer>
  );
};

export default Register;
