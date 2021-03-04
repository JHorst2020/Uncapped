import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignupFormPage from "../SignupFormPage";

function SignUpModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <li onClick={() => setShowModal(true)} style={{ textDecoration: "none", color: "white", "font-weight": "bold", cursor: "pointer", marginLeft:"10px"}}>Sign Up</li>
      {showModal && (
        <Modal onClose={() => setShowModal(!showModal)}>
          <SignupFormPage/>
        </Modal>
      )}
    </div>
  );
}

export default SignUpModal;
