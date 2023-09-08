import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    
    <Link to='/signup'><button className="text-lg font-poppins px-4 bg-purple-700 hover:bg-purple-500 text-center text-white p-2 rounded-lg">Get Started</button></Link>
  );
};

export default Button;
