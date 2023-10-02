import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signin.css';
import axios from 'axios';

function Signin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const paragraphStyle = {
    color: 'red',
  };

  const verifyInfo = async () => {
    const emailInput = document.getElementById("email"); // Get the email input field
    const passwordInput = document.getElementById("password"); // Get the password input field

    // Check if email and password are empty
    if (!email || !password) {
      // Apply the red border to the empty fields
      if (!email) {
        emailInput.style.borderColor = "red";
      }
      if (!password) {
        passwordInput.style.borderColor = "red";
      }
      // Display an error message to the user
      setErrorMsg("Please fill in all required fields.");
      return; // Prevent form submission
    }
    
    const response = await axios.get(process.env.REACT_APP_BACKEND_SIGNIN_URL, {
      params: {
        email: email,
        password: password,
      },
    })
    .then(() => {
        props.updateVariables(true, false, false, false, false);
        props.updateUserCreds(email, password)
    })
    .catch((error) => {
        setErrorMsg(error.response.data.message);
    });
    
    // Reset border colors after form submission
    emailInput.style.borderColor = "";
    passwordInput.style.borderColor = "";
  };

  return (
    <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
      <div className="signin">
        <h2 className="mb-3">Signin Form</h2>
        <div className="form-group mb-2">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" id="email" className="form-control" onChange={(event) => setEmail(event.target.value)} required ></input>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" id="password" className="form-control" onChange={(event) => setPassword(event.target.value)} required ></input>
        </div>
        <p style={paragraphStyle}>{errorMsg}</p>
        <button type="button" className="btn btn-success block mt-2" onClick={verifyInfo}>SIGN In</button>
      </div>
    </div>
  )
}

export default Signin;
