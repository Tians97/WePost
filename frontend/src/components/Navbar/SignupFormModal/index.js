import React from 'react';
import { Modal } from '../../../context/Modal';
import SignupForm from './SignupForm';

function SignupFormModal({showSignup, setShowSignup, setShowLogin}) {

    return (
        <>
            <div onClick={() => setShowSignup(true)}>Get started</div>
            {showSignup && (
                <Modal onClose={() => setShowSignup(false)}>
                    <SignupForm setShowSignup={setShowSignup} setShowLogin={setShowLogin} />
                </Modal>
            )}
        </>
    );
}

export default SignupFormModal;