import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <li  onClick={() => setShowModal(true)} style={{ textDecoration: "none", color: "white", "font-weight": "bold", cursor: "pointer"}}>Log In</li>
      {showModal && (
        <Modal onClose={() => setShowModal(!showModal)}>
          <LoginForm />
        </Modal>
      )}
    </div>
  );
}

export default LoginFormModal;