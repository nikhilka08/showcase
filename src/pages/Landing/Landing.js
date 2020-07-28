import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TextInput from "../../components/molecules/textInput/TextInput";
import { Paths } from "../../utils/paths";
import APIRequest from "../../reduxCore/apiClient/APIRequest";
import { storeLocalData } from "../../reduxCore/apiClient/apiPromise";
import { connect } from "react-redux";

const Landing = (props) => {
  let [data, setData] = useState("");
  const history = useHistory();

  const handleChange = (event) => setData((data = event.target.value));

  const routeChange = (e) => {
    e.preventDefault();
    const dataToSave = new APIRequest("local", "default", "userName", data);
    storeLocalData(dataToSave);
    history.push({ pathname: Paths.DASHBOARD });
  };

  return (
    <div>
      <h4>Hi there! Welcome to your education Showcase</h4>
      <TextInput
        label='Type your name and click "Enter" below to begin!'
        value={data}
        handleChange={handleChange}
        handleSubmit={routeChange}
        placeholder="Your Name"
        buttonText="Enter"
      />
    </div>
  );
};
export default connect()(Landing);
