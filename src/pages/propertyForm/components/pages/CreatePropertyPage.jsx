import React from "react";
import Header from "../../../landingPage/components/Header";
import { PropertyCreateContainer } from "../../styles/PropertyCreate";
import InputWithIcon from "../InputWithIcon";

const CreatePropertyPage = () => {
  return (
    <div className="wrapper-secondary">
      <PropertyCreateContainer>
        <h3>Create a property listing</h3>
        <div className="field-container">
          <div className="field">
            <label htmlFor="operation_type">OPERATION TYPE</label>
            <div className="op-type">
              <div className="rent_type">
                <p>Rent</p>
              </div>
              <div className="sale_type">
                <p>Sale</p>
              </div>
            </div>
          </div>
          <div className="field">
            <label htmlFor="address">ADDRESS</label>
            <InputWithIcon
              iconType="search"
              name="address"
              placeholder="start typing to autocomplete"
            />
          </div>
          <div className="field">
            <label htmlFor="address">MONTLY RENT</label>
            <InputWithIcon
              iconType="dollarsign"
              name="montly"
              placeholder="2000"
            />
          </div>{" "}
          <div className="field">
            <label htmlFor="address">MAINTANCE</label>
            <InputWithIcon
              iconType="dollarsign"
              name="maintance"
              placeholder="100"
            />
          </div>
          <div className="field">
            <label>Property Type</label>
            <input type="checkbox" id="propertyType" name="propertyType" />
            Aparment
            <input type="checkbox" id="propertyType" name="propertyType" />
            House
          </div>
          <div className="field grid-column">
            <div className="col">
              <label htmlFor="">Bedrooms</label>
              <select>
                <option value="">Selection</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="">Bathrooms</label>
              <select>
                <option value="">Selection</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="">Area in m2</label>
              <select>
                <option value="">Selection</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
          <div className="field pets">
            <input type="checkbox" />
            <p>Pets Allowed</p>
          </div>
          <p>
            Allowing pets increases the likehood of renters liking the property
            by 9001%. It also makes you a better person.
          </p>
          <div className="field">
            <label>Pets Allowed</label>
            <textarea placeholder="My apartment is great because..."></textarea>
            <p>
              Renters will read this first, so highlight any features or
              important information the apartment has.
            </p>
          </div>
          <div className="field">
            <p>Upload as many photos as you wish</p>

            <input type="file" />
            <p className="text-medium">Only images, max 5MB</p>
          </div>
          <div className="photoSection">
            <div className="miniPhoto"></div>
          </div>
        </div>
        <button type="submit" className="btn border-radius">
          Publish property listing
        </button>
      </PropertyCreateContainer>
    </div>
  );
};

export default CreatePropertyPage;
