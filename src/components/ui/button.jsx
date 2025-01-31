import React from "react";
import "./button.css";

const Button = ({ text }) => {
  const handleClick = () => {
    window.location.href = "https://timma.fi/yritys/tuupakan-autopesu"; // Redirects to the link
  };

  return (
    <button className="btn" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
