import logo from './logo.svg';
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  
import './App.css';
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Navbar from "./components/Navbar";

function App() {
  const [isNavbar, setIsNavbar] = useState(true);
  const [isSignup, setIsSignup] = useState(false);
  const [isSignin, setIsSignin] = useState(false);
  const [isSigninbutton, setIsSigninButton] = useState(true);
  const [isSignupbutton, setIsSignupbutton] = useState(true);
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const updateVariables = (newIsNavbar, newIsSignup, newIsSignin, newIsSigninButton, newIsSignupbutton) => {
    setIsNavbar(newIsNavbar);
    setIsSignup(newIsSignup);
    setIsSignin(newIsSignin);
    setIsSigninButton(newIsSigninButton)
    setIsSignupbutton(newIsSignupbutton)
  };

  const updateUserCreds = (newEmailId, newPassword) => {
    setEmailId(newEmailId);
    setPassword(newPassword)  
  };

  return (
    <>
    {isNavbar  &&  <Navbar  updateVariables={updateVariables} isSigninbutton={isSigninbutton} isSignupbutton={isSignupbutton}/>}
    {isSignup  &&  <Signup  updateVariables={updateVariables} updateUserCreds={updateUserCreds} ></Signup>}
    {isSignin  &&  <Signin  updateVariables={updateVariables} updateUserCreds={updateUserCreds} ></Signin>}
    </>
  );
}

export default App;
