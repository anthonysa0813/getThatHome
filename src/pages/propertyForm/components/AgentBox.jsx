import React, { useState } from "react";
import { BoxAgent } from "../styles/PropertyAtoms";

const AgentBox = ({ agent }) => {
  const [estatusFav, setEstatusFav] = useState(false);
  const [activeLandlord, setActiveLandlord] = useState(false);
  console.log(agent);

  const estatusFacFunc = (agent) => {
    console.log(agent);
    setEstatusFav(!estatusFav);
  };

  return (
    <BoxAgent className="">
      <div className="seekerContent text-center">
        {activeLandlord ? (
          <>
            <h4>Contact information</h4>
            <p className="text-center">Email</p>
            <span className="color-pink">{agent.email}</span>
            <p className="text-center">Phone</p>
            <span className="color-pink">{agent.phone}</span>
          </>
        ) : (
          <>
            <button
              className="btn bg-pink border-radius w-100"
              onClick={() => setActiveLandlord(true)}
            >
              Contact Advertiser
            </button>
            <i
              className={`icon-filledheart ${estatusFav ? "activeFav" : ""}`}
              onClick={() => estatusFacFunc(agent)}
            ></i>
            <span> Add to favorites</span>
          </>
        )}
      </div>
    </BoxAgent>
  );
};

export default AgentBox;
