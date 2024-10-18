import React from 'react';
import '../App.css'
import './Navbar.css'
import './About-us'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand mr-20" href="/">NexVault</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {/* <li className="nav-item">
                            <a className="nav-link active navbar-components" aria-current="page" href="/">Home</a>
                        </li> */}
                        <li className="nav-item mx-4">
                            <a className="nav-link navbar-components" href="/">Home</a>
                        </li>
                        <li className="nav-item mx-4">
                           <Link to = "/About-us" className="nav-link navbar-components">About</Link>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link navbar-components" href="/">Services</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link navbar-components" href="/">Pricing</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
