import React, { useState, useEffect } from 'react';
import './ServiceCards.css';
import img from '../assets/blockchainImg.png';

export default function ServiceCards() {
    const [index, setIndex] = useState(1);
    const numOfCards = 5; // Number of total cards you have

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000); // Auto-slide every 3 seconds

        return () => clearInterval(interval);
    }, [index]);

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + numOfCards) % numOfCards);
    };

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % numOfCards);
    };

    // Calculate the indexes for the three visible cards (center + two adjacent)
    const getVisibleIndexes = () => {
        const prev = (index - 1 + numOfCards) % numOfCards;
        const next = (index + 1) % numOfCards;
        return [prev, index, next];
    };

    return (
        <>
        <h1 className="service-text">Explore NexVault <span>Services</span></h1>
        <div className='contain pt-7'>
            
            <div className="slider">
                <button className="carousel-control-prev" onClick={handlePrev}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <div className="slider-wrapper">
                    {getVisibleIndexes().map((i) => (
                        <div className={`slider-card ${i === index ? 'active' : ''}`} key={i}>
                            <img src="https://nerdleveltech.com/wp-content/uploads/Blockchain.webp" alt="" />
                            <div className="card-body">
                                <h4>Card {i + 1}</h4>
                                <p className="card-text">This is card {i + 1}'s content.</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-next" onClick={handleNext}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>
            </>
    );
}
