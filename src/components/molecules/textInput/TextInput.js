import React from "react";
import Button from "../../atoms/button/Button";

const TextInput = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <p>
        <label>{props.label}</label>
      </p>
      <p>
        <input
          type="text"
          value={props.value}
          onChange={props.handleChange}
          placeholder={props.placeholder}
        />
      </p>
      <Button type="submit" label={props.buttonText} />
    </form>
  );
};

export default TextInput;
