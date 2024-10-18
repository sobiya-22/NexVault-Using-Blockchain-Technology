import React from 'react'
import img from '../assets/blockchainImg.png';
import './Branding.css'
import SignUp from './Sign-up/signup';
import { useState } from 'react';

export default function Branding() {
    const [showSignUp, setShowSignUp] = useState(false);

    const openSignUp = () => {
        setShowSignUp(true);
    };

    const closeSignUp = () => {
        setShowSignUp(false);
    };

    return (
        <>
            {/* Apply blur only to the background content */}
            <div className={`container ${showSignUp ? 'blur-background' : ''}`}>
                <div className="row ml-2 brand-text align-items-center">
                    <div className="col-md-6 d-flex-column">
                        <div className="brand-lines">
                            <h1>Lock In <span className="bold-words">Trust</span>,<br />Unlock <br /><span className="bold-words">Security</span></h1>
                        </div>
                        <div className="brand-subLines mt-4">
                            <h3>Your gateway to Protected Legal Assets</h3>
                        </div>
                        <div className="buttons">
                            <button type="button" className="btn create-account" onClick={openSignUp}>Create Account</button>
                            <button type="button" className="btn learn-more mx-5">Learn More</button>
                        </div>
                    </div>
                    <img src={img} className="col-md-5 img-fluid brand-logo" alt="brand-image" />
                </div>
            </div>

            {/* Only show the modal above the blurred background */}
            {showSignUp && <SignUp onClose={closeSignUp} />}
        </>
    );
}
