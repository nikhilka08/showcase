import React from "react";
import "./ButtonStyles.css";

const Button = (props) => (
  <button className="button" onClick={props.handleClick}>
    {props.label}
  </button>
);

export default Button;
