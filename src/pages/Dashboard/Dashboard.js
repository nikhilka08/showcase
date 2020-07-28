import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";

import Button from "../../components/atoms/button/Button";
import { fetchUniversityData } from "../../services/ApiCallService";

Modal.setAppElement("#root");

const Dashboard = (props) => {
  const [modalIsOpen, toggleModal] = useState(false);
  const modalToggle = () => toggleModal(!modalIsOpen);

  const handleSubmit = async () => await fetchUniversityData("middle");

  return (
    <div id="appElement">
      <h1>Welcome to {props.userName.data}'s education page. </h1>
      <Button handleClick={handleSubmit} label="Add new Education" />
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        style={{
          content: { left: "20%", right: "20%", top: "20%", bottom: "20%" },
          overlay: {
            backgroundColor: "rgba(60, 60, 60, 0.5)",
          },
        }}
        contentLabel="Example Modal"
      >
        <div class="container">
          <div>I am a modal</div>
          <form>
            <input />
          </form>
        </div>
        <div class="btn-holder">
          <button onClick={modalToggle}>close</button>
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = ({ apiResponses }) => {
  return {
    userName: apiResponses["userName"],
  };
};

export default connect(mapStateToProps)(Dashboard);
