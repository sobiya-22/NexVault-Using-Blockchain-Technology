import React from 'react'
import img from '../assets/blockchainImg.png';
import './Branding.css'
import './About-us'
import './LearnMore'
import { Link } from "react-router-dom";

export default function Branding() {
    return (
        <div className="container">
            <div className="row ml-2 brand-text  align-items-center">
                <div className="col-md-6 d-flex-column">
                    <div className="brand-lines">
                        <h1 >Lock In <span className="bold-words">Trust</span>,
                            <br />Unlock <br /><span className="bold-words">Security</span></h1>
                    </div>
                    <div className="brand-subLines mt-4">
                        <h3>Your gateway to Protected Legal Assets</h3>
                    </div>
                    <div className='buttons'>
                    <button type="button" className="btn create-account">Create Account</button>
                    <Link to="/LearnMore">
                    <button type="button"  className="btn learn-more mx-5">Learn More</button>
                    </Link>
                </div>
                </div>
                <img src={img} className=" col-md-5 img-fluid brand-logo" alt="brand-image" />
                
            </div>

        </div>
    );
}
