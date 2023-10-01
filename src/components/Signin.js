import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Signin.css'
import axios from 'axios';

function Signin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const paragraphStyle = {
    color: 'red',
  };

  const verifyInfo=async()=>{
  
    const response = await axios.get('http://localhost:8384/signin', {
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
    
  };

  return (

    <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
      <div className="signup">
        <h2 className="mb-3">Signin Form</h2>
          <div className="form-group mb-2">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" onChange={(event) => setEmail(event.target.value)}></input>
          </div>
          <div className="form-group mb-2">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control"  onChange={(event) => setPassword(event.target.value)}></input>
          </div>
          <p style={paragraphStyle}>{errorMsg}</p>
          <button type="submit" className="btn btn-success block mt-2" onClick={verifyInfo}>SIGN In</button>
      </div>
    </div>
  )
}

export default Signin;