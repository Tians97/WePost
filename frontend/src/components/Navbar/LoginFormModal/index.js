import React from 'react';
import { Modal } from '../../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal({ showLogin, setShowLogin, setShowSignup }) {
  

  return (
    <>
      <div onClick={() => setShowLogin(true)}>Sign In</div>
      {showLogin && (
        <Modal onClose={() => setShowLogin(false)}>
          <LoginForm setShowLogin = {setShowLogin} setShowSignup = {setShowSignup} />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;