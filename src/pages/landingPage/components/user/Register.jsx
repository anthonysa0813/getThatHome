import React, { useState } from "react";
import { RegisterContainer } from "../../styles/Users";
import landlordImage from "../../../../assets/images/landlord.png";
import seekerImage from "../../../../assets/images/seeker.png";
import CardSelectionRegister from "./CardSelectionRegister";
import FormRegister from "./FormRegister";

const Register = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <RegisterContainer>
      <div className="hero">
        <div className="wrapper ">
          {showForm ? (
            <FormRegister />
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
                />
                <CardSelectionRegister
                  image={seekerImage}
                  title="Home seeker"
                  subtitle="You want to find a home"
                  setShowForm={setShowForm}
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
