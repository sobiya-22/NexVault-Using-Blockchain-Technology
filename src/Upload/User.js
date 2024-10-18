import React, { useState } from 'react';
import './user.css'; // Ensure your styles are imported
import images1 from '../assets/images1.jpeg'; // Adjust the path based on your structure
import images2 from '../assets/images2.jpeg'; // Adjust this path
import images3 from '../assets/images3.png'; // Adjust this path
import images4 from '../assets/images4.png'; // Adjust this path

function User() {
    const [activeIndex, setActiveIndex] = useState(0); // Track active menu item

    const handleMenuClick = (index) => {
        setActiveIndex(index); // Set the active index when an item is clicked
    };

    return (
        <div className="app-container">
            <div className="dashboard-sidebar">
                <header className="dashboard-header">
                    <h1>Dashboard</h1>
                </header>
                <nav>
                    <ul>
                        {['Profile', 'Cases', 'Documents', 'Dates'].map((item, index) => (
                            <li
                                key={index}
                                className={activeIndex === index ? 'active' : ''}
                                onClick={() => handleMenuClick(index)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="dashboard-content">
                <h2 className="portal-title">Client Portal</h2>
                <div className="card-container">
                    <div className="dashboard-card">
                        <img src={images1} alt="Upload Case File" />
                        <h3>Upload Case File</h3>
                    </div>
                    <div className="dashboard-card">
                        <img src={images2} alt="download Document" />
                        <h3>Download Document</h3>
                    </div>
                    <div className="dashboard-card">
                        <img src={images3} alt="Grant Access" />
                        <h3>Grant Access</h3>
                    </div>
                    <div className="dashboard-card">
                        <img src={images4} alt="Revoke Access" />
                        <h3>Revoke Access</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;
