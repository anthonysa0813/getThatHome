import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../../context/modalActiveContext";
import { UserContext } from "../../user/context/UserContext";
import { BoxAgent } from "../styles/PropertyAtoms";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Added to favorite <3");

const AgentBox = ({ agent, setActiveModal }) => {
  const [estatusFav, setEstatusFav] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const [activeLandlord, setActiveLandlord] = useState(false);
  const token = sessionStorage.getItem("token");

  const [userActive, setUserActive] = useState(false);
  console.log({ user });

  const estatusFacFunc = (agent) => {
    console.log(agent);
    setEstatusFav(!estatusFav);
    notify();
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      console.log("El usuario existe");
      setUserActive(!userActive);
    }
    console.log("EL usuario no existe :c");
    setUserActive(false);
  }, [user]);

  const showModalFunc = () => {
    setActiveModal(true);
  };

  return (
    <>
      {token && (
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
                  className={`icon-filledheart ${
                    estatusFav ? "activeFav" : ""
                  }`}
                  onClick={() => estatusFacFunc(agent)}
                ></i>
                <span> Add to favorites</span>
              </>
            )}
          </div>
        </BoxAgent>
      )}
      {!token && (
        <BoxAgent>
          <div className="seekerContent text-center">
            <p>Log in or Join to contact the advertiser</p>
            <button
              className="btn bg-pink border-radius text-center d-flex "
              onClick={showModalFunc}
            >
              <i className="icon-login"></i>
              <p>login</p>
            </button>
          </div>
        </BoxAgent>
      )}
      <Toaster />
    </>
  );
};

export default AgentBox;
