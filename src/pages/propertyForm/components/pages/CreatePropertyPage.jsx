import React, { useContext, useEffect, useState } from "react";
import Header from "../../../landingPage/components/Header";
import { PropertyCreateContainer } from "../../styles/PropertyCreate";
import InputWithIcon from "../InputWithIcon";
import Axios from "axios";
import Image from "../Image";
import Message from "../../../../components/Message";
import { UserContext } from "../../../user/context/UserContext";
import { createProperty } from "../../helpers/createProperty";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreatePropertyPage = () => {
  const [activeOpType, setActiveOpType] = useState(true);
  const [petsAccept, setPetsAccept] = useState(false);
  const [error, setError] = useState(false);
  const { user } = useContext(UserContext);
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const notify = () => {
    if (error == false) {
      return toast.error("Todos los campos son obligatorios");
    } else {
      return toast.success("Property añadido");
    }
  };

  console.log({ user, token });

  const [form, setForm] = useState({
    address: "",
    montly_price: "",
    maintance: "",
    property_type: "",
    bedrooms_count: "",
    bathroom_count: "",
    area: "",
    pets_allowed: false,
    description: "",
    photo: "",
    active_published: true,
    user_id: user.id,
  });

  const {
    address,
    montly_price,
    maintance,
    property_type,
    bedrooms_count,
    bathroom_count,
    area,
    pets_allowed,
    description,
    photo,
    active_published,
    user_id,
  } = form;

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 3000);
  }, [error]);

  const changeOpType = (e) => {
    console.log({ activeOpType });
    setActiveOpType(!activeOpType);
    setForm({
      ...form,
      ["property_type"]: activeOpType ? "rent" : "sale",
    });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const activePetsAllowed = () => {
    setForm({
      ...form,
      ["pets_allowed"]: !form.pets_allowed,
    });
  };

  const clickFunc = (e) => {
    console.log(e.target.value);
  };

  const uploadImage = (files) => {
    console.log(files[0]);
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "w6jrmdqg");

    Axios.post(
      "https://api.cloudinary.com/v1_1/dzgbz8lvg/image/upload",
      formData
    ).then((response) => {
      setForm({
        ...form,
        ["photo"]: response.data.url,
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      [
        address,
        montly_price,
        maintance,
        property_type,
        bedrooms_count,
        bathroom_count,
        area,
        pets_allowed,
        description,
        photo,
      ].includes("")
    ) {
      setError(true);
      return false;
    }
    setError(false);
    createProperty(form, "properties", token).then((res) => {
      console.log(res);
      setTimeout(() => {
        navigate("/properties");
      }, 3000);
    });
  };

  return (
    <div className="wrapper-secondary">
      <PropertyCreateContainer onSubmit={handleSubmit}>
        <h3>Create a property listing</h3>
        <div className="field-container">
          {error && (
            <Message type="danger">
              Todos los campos son obligatorios...
            </Message>
          )}
          <div className="field">
            <label htmlFor="operation_type">OPERATION TYPE</label>
            <div className="op-type">
              <div
                className={`rent_type ${activeOpType ? "bg-pink" : ""}`}
                onClick={changeOpType}
              >
                <p>Rent</p>
              </div>
              <div
                className={`sale_type ${
                  activeOpType == false ? "bg-pink" : ""
                }`}
                onClick={changeOpType}
              >
                <p>Sale</p>
              </div>
            </div>
          </div>
          <div className="field">
            <label htmlFor="address">ADDRESS</label>
            <InputWithIcon
              iconType="search"
              name="address"
              value={address}
              onChange={handleChange}
              placeholder="start typing to autocomplete"
            />
          </div>
          <div className="field">
            <label htmlFor="address">MONTLY RENT</label>
            <InputWithIcon
              iconType="dollarsign"
              name="montly_price"
              value={montly_price}
              onChange={handleChange}
              placeholder="2000"
            />
          </div>{" "}
          <div className="field">
            <label htmlFor="address">MAINTANCE</label>
            <InputWithIcon
              iconType="dollarsign"
              name="maintance"
              placeholder="100"
              value={maintance}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Property Type</label>
            <div className="optionBox">
              <input
                type="radio"
                id="aparment"
                value="aparment"
                name="property_type"
                onClick={handleChange}
              />
              Aparment
              <input
                type="radio"
                id="house"
                value="house"
                name="property_type"
                onClick={handleChange}
              />
              House
            </div>
          </div>
          <div className="field grid-column">
            <div className="col">
              <label htmlFor="">Bedrooms</label>
              <select onClick={handleChange} name="bedrooms_count">
                <option value="">Selection</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="">Bathrooms</label>
              <select onClick={handleChange} name="bathroom_count">
                <option value="">Selection</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="">Area in m2</label>
              <input
                type="number"
                name="area"
                value={area}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field pets">
            <input
              type="checkbox"
              onClick={activePetsAllowed}
              // value={pets_allowed}
              // name={pets_allowed}
            />
            <p>Pets Allowed</p>
          </div>
          <p>
            Allowing pets increases the likehood of renters liking the property
            by 9001%. It also makes you a better person.
          </p>
          <div className="field">
            <label>Pets Allowed</label>
            <textarea
              placeholder="My apartment is great because..."
              name={"description"}
              value={description}
              onChange={handleChange}
            ></textarea>
            <p>
              Renters will read this first, so highlight any features or
              important information the apartment has.
            </p>
          </div>
          <div className="field">
            <p>Upload as many photos as you wish</p>

            <input type="file" onChange={(e) => uploadImage(e.target.files)} />
            <p className="text-medium">Only images, max 5MB</p>
          </div>
          <div className="photoSection">
            <div className="miniPhoto">{photo && <Image url={photo} />}</div>
          </div>
        </div>
        <button type="submit" className="btn border-radius" onClick={notify}>
          Publish property listing
        </button>
      </PropertyCreateContainer>
      <Toaster />
    </div>
  );
};

export default CreatePropertyPage;
