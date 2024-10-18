import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About-us.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import mission from '../assets/images/mission.jpg';
import technology from '../assets/images/blockchain.jpeg';
import value from '../assets/images/value.png';
import sakshi from '../assets/images/sakshi.jpg';
import Aru from '../assets/images/Aru.jpg';
import sobiya from '../assets/images/sobiya.jpg';
import women from '../assets/images/women.avif';

function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 600, // Animation duration
      once: true,    // Whether animation should happen only once while scrolling down
    });
    AOS.refresh(); // Refresh AOS after initialization
  }, []);

  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <div className="header-content" data-aos="fade-in">
          <div className="brand-lines">
            <h1>About Us</h1>
          </div>
          <p className="sublines">
            Securing Your Legal Documents with Cutting-Edge Blockchain Technology
          </p>
          <button className="btn" data-aos="fade-up" data-aos-delay="500">
            Learn More
          </button>
        </div>
      </header>

      {/* Our Mission */}
      <section id="mission" data-aos="fade-up">
        <h2>Our Mission</h2>
        <div className="section-content">
          <div className="text">
            <p>
              At <strong>NexVault</strong>, our mission is to revolutionize the way legal documents are stored and shared through blockchain technology. We provide a secure and transparent platform that enhances trust and accessibility for all users.
            </p>
            <p>
              Committed to excellence and continuous improvement, we empower individuals and businesses to manage their legal documents efficiently, ensuring data integrity and confidentiality at every step.
            </p>
          </div>
          <div className="image">
            <img src={mission} alt="Our Mission" />
          </div>
        </div>
      </section>

      {/* Our Technology */}
      <section id="technology" data-aos="fade-up">
        <h2>Our Technology</h2>
        <div className="section-content">
          <div className="text">
            <p>
              We leverage advanced blockchain technology to ensure the highest level of security and integrity for your legal documents. Our user-friendly platform offers robust features for efficient document management.
            </p>
            <p>
              By integrating smart contracts and decentralized storage, we eliminate single points of failure, providing resilience and reliability. Our scalable infrastructure supports growing data needs without compromising performance.
            </p>
          </div>
          <div className="image">
            <img src={technology} alt="Our Technology" />
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section id="team" data-aos="fade-up">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={sobiya} alt="Sobiya Shaikh" />
            <h3>Sobiya Shaikh</h3>
            <p>Project Team Member</p>
          </div>
          <div className="team-member">
            <img src={sakshi} alt="Sakshi Nehe" />
            <h3>Sakshi Nehe</h3>
            <p>Project Team Member</p>
          </div>
          <div className="team-member">
            <img src={Aru} alt="Arundhati Sarvadnya" />
            <h3>Arundhati Sarvadnya</h3>
            <p>Project Team Member</p>
          </div>
          <div className="team-member">
            <img src={women} alt="Diksha Shejwal" />
            <h3>Diksha Shejwal</h3>
            <p>Project Team Member</p>
          </div>
          <div className="team-member">
            <img src={women} alt="Oceania K" />
            <h3>Oceania K</h3>
            <p>Project Team Member</p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section id="values" data-aos="fade-up">
        <h2>Our Values</h2>
        <div className="section-content">
          <div className="text">
            <ul>
              <li>Integrity</li>
              <li>Innovation</li>
              <li>Customer-Centricity</li>
              <li>Collaboration</li>
              <li>Excellence</li>
              <li>Sustainability</li>
            </ul>
          </div>
          <div className="image">
            <img src={value} alt="Our Values" />
          </div>
        </div>
      </section>

      
      {/* Call to Action */}
      <div className="cta" data-aos="fade-up">
        <h2>
          <span className="bold-text">Join Us</span>
        </h2>
        <p>
          Ready to secure your legal documents with the most advanced blockchain technology?{' '}
          <a href="#signup">Get Started</a> or <a href="#contact">Contact Us</a> to learn more
          about how NexVault can protect your valuable information.
        </p>
        <button className="btn">Get Started</button>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 NexVault. All rights reserved.</p>
        <p>
          <a href="#mission">Mission</a> | <a href="#technology">Technology</a> |{' '}
          <a href="#team">Team</a> | <a href="#values">Values</a> |{' '}
        </p>
      </footer>
    </div>
  );
}

export default AboutUs;
