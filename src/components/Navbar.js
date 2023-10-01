import React from "react";
import 'font-awesome/css/font-awesome.min.css'; 
import './Navbar.css'

const Navbar = (props) => {

    const handleSignupClick = () => {
        props.updateVariables(false, true, false, false, false);
    };

    const handleSigninClick = () => {
        props.updateVariables(false, false, true, false, false);
    };

    document.addEventListener("DOMContentLoaded", function () {
        const logoutLink = document.getElementById("logoutLink");
        logoutLink.addEventListener("click", function (event) {
            event.preventDefault(); 
            props.updateVariables(true, false, false, true, true);
            window.location.href = "";
        });
    });

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                </ul>
                <div className="row">
                    <div className="col-md-6">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </div>
                    <div className="col-md-2">
                    {props.isSignupbutton && <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleSignupClick}>Signup</button>}
                    </div>
                    <div className="col-md-2">
                    {props.isSigninbutton && <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleSigninClick}>Signin</button>}
                    </div>
                </div>
                <div className="col-md-1">
                    <div className="dropdown">
                        <i className="fa fa-user fa-2x" id="userDropdown"></i>
                        <div className="dropdown-content">
                            <a href="#">My Profile</a>
                            <a href="#">Account</a>
                            <a href="#">Settings</a>
                            <a href="#">My History</a>
                            <a href="#">My Transactions</a>
                            <a href="#" id="logoutLink">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
            </nav>
        </div>
    )
}
export default Navbar