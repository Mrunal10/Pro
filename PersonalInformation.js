import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./PersonalInformation.css";
// import Axios from "axios";

const PersonalInformation = () => {
  const navigate = useNavigate();
  const [flynumber, setFlynumber] = useState("");
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [phonenumber, setPhonenumber] = useState(+1);
  const [email, setEmail] = useState("");
  const [addressline1, setAddressline1] = useState("");
  const [addressline2, setAddressline2] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");
  const [selected, setSelected] = useState("Delta Airlines/ SkyMiles");
  const [error, setError] = useState(false);
  const [phonecountry, setPhonecountry] = useState("United States (1)");
  const [country, setCountry] = useState("United States");

  const handleSubmit = (e) => {
    e.preventDefault();
   
     
  

    if (
      flynumber.length === 0 ||
      firstname.length === 0 ||
     
      lastname.length === 0 ||
      phonenumber.length === 0 ||
      email.length === 0 ||
      phonenumber.length === 0 ||
      addressline1.length === 0 ||
    
      city.length === 0 ||
      postal.length === 0
    ) {
      setError(true);
      
    } else {
      // Axios.post("http://localhost:3001/insert", {
      //   flynumber: flynumber,
      //   firstname: firstname,
      //   middlename: middlename,
      //   lastname: lastname,
      //   phonenumber: phonenumber,
      //   email: email,
      //   addressline1: addressline1,
      //   addressline2: addressline2,
      //   city: city,
      //   postal: postal,
      //   selected: selected,
      //   phonecountry: phonecountry,
      //   country: country,
      // });
      // navigate("/comment");
      navigate('/comment',{
        state:
        {
          flynumber: flynumber,
          firstname: firstname,
          middlename: middlename,
          lastname: lastname,
          phonenumber: phonenumber,
          email: email,
          addressline1: addressline1,
          addressline2: addressline2,
          city: city,
          postal: postal,
          selected: selected,
          phonecountry: phonecountry,
          country: country
        }});
    }
  };

  return (
    <>
      <div>
        <h3 className="pinfo">Personal Information</h3>
        <p className="perp">Please provide your contact information</p>
      </div>
      <div className="container">
        <p className="underline">
          Are you a SkyMiles member? Login so we can help you faster.{" "}
        </p>
        <h6 className="h6pi">All fields required unless noted.</h6>

        <div>
          <p className="identity">
            Please Make sure your full name is entered exactly as it appears on
            your government-issued ID
            <br />
            (example:Jane Elizabeth Doe)
          </p>
        </div>

        <form className="row g-3" onSubmit={handleSubmit}>
          <b>Airline Program(optional)</b>

          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label"></label>

            <select
              value={selected}
              id="inputState"
              className="form-select"
              onChange={(event) => {
                setSelected(event.target.value);
              }}
              required
            >
              <option value>Delta Airlines/ SkyMiles</option>
              <option>Delta</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label"></label>
            <input
              type="text"
              placeholder="Frequent Fly Number"
              className="form-control"
              id="inputEmail4"
              onChange={(event) => {
                setFlynumber(event.target.value);
              }}
            />
            {error && flynumber.length <= 0 ? (
              <label style={{ color: "red", marginLeft: "-180px" }}>
                Fly Number can't be Empty
              </label>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label"></label>
            <input
              type="text"
              placeholder="First Name"
              className="form-control"
              id="inputCity"
              onChange={(event) => {
                setFirstname(event.target.value);
              }}
            />
            {error && firstname.length <= 0 ? (
              <label style={{ color: "red", marginLeft: "-180px" }}>
                Name can't be Empty
              </label>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-4">
            <label htmlFor="inputCity" className="form-label"></label>
            <input
              type="text"
              placeholder="MiddleName (opt)"
              className="form-control"
              id="inputCity"
              onChange={(event) => {
                setMiddlename(event.target.value);
              }}
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label"></label>
            <input
              type="text"
              placeholder="Last Name"
              className="form-control"
              id="inputZip"
              onChange={(event) => {
                setLastname(event.target.value);
              }}
            />
            {error && lastname.length <= 0 ? (
              <label style={{ color: "red", marginLeft: "-180px" }}>
                Last Name can't be Empty
              </label>
            ) : (
              ""
            )}
          </div>
          <br />
          <b>Phone Country/Region Code</b>
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label"></label>
            <select
              id="inputState"
              className="form-select"
              value={phonecountry}
              onChange={(event) => {
                setPhonecountry(event.target.value);
              }}
            >
              <option>United States (1)</option>
              <option>India (91)</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputCity" className="form-label"></label>
            <input
              type="text"
              placeholder="Phone Number"
              className="form-control"
              id="inputCity"
              onChange={(event) => {
                setPhonenumber(event.target.value);
              }}
            />
            {error && phonenumber.length !== 10 ? (
              <label style={{ color: "red", marginLeft: "-180px" }}>
                Please Enter Your 10 digit mobile number
              </label>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label"></label>
            <input
              type="email"
              placeholder="Email address"
              className="form-control"
              id="inputZip"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            {error && email.length <= 0 ? (
              <label style={{ color: "red", marginLeft: "-180px" }}>
                Please Enter Your Email
              </label>
            ) : (
              ""
            )}
          </div>

          <b>Country/Region</b>
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label"></label>
            <select
              id="inputState"
              className="form-select"
              onChange={(event) => {
                setCountry(event.target.event);
              }}
            >
              <option>United States</option>
              <option>India</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputCity" className="form-label"></label>
            <input
              type="text"
              placeholder="Address Line 1"
              className="form-control"
              id="inputCity"
              onChange={(event) => {
                setAddressline1(event.target.value);
              }}
            />
            {error && addressline1.length <= 0 ? (
              <label style={{ color: "red", marginLeft: "-180px" }}>
                Please Enter Your Home Address
              </label>
            ) : (
              ""
            )}
          </div>

          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label"></label>
            <input
              type="text"
              placeholder="Address Line 2"
              className="form-control"
              id="inputZip"
              onChange={(event) => {
                setAddressline2(event.target.value);
              }}
            />
          </div>

          <b>State/Provience</b>
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label"></label>
            <select id="inputState" className="form-select">
              <option>Select One</option>
              <option>Washington</option>
              <option>Seattle</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputCity" className="form-label"></label>
            <input
              type="text"
              placeholder="City"
              className="form-control"
              id="inputCity"
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
            {error && city.length <= 0 ? (
              <label style={{ color: "red", marginLeft: "-180px" }}>
                Please Enter Your City
              </label>
            ) : (
              ""
            )}
          </div>

          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label"></label>
            <input
              type="text"
              placeholder="Postal Code"
              className="form-control"
              id="inputZip"
              onChange={(event) => {
                setPostal(event.target.value);
              }}
            />
            {error && postal.length <= 0 ? (
              <label style={{ color: "red", marginLeft: "-180px" }}>
                Please Enter Your Postal Code
              </label>
            ) : (
              ""
            )}
          </div>

          <div className="col-12">
            <div className="form-check">
              <label className="form-check-label" htmlFor="gridCheck"></label>
            </div>
          </div>
          <button className="continue">Continue to Comment</button>
        </form>
      </div>

      {/* <button className="back">BACK</button> */}
    </>
  );
};

export default PersonalInformation;
