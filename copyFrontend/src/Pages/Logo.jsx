import React from 'react';
import company_logo from "../public/Assets/Company Logo/Logo_startUp.png";
import { useNavigate } from "react-router-dom"; // Correctly importing useNavigate
import "../Css/HomePage.css";

const Logo = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/home");
    }

    return (
        <div onClick={handleClick}>
            <img className='company_logo' src={company_logo} alt="logo" />
        </div>
    );
};

export default Logo;
