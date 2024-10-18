import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './LearnMore.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

// Import Images
import service1 from '../assets/images/blocks.jpg';
import main_bg from '../assets/images/chain_lock.png';
import service3 from '../assets/images/server.jpg';
import service2 from '../assets/images/Main_bg.jpg';

// Import Videos
import headerVideo from '../assets/Videos/wiring.mp4';

// Import Poster Images
import headerPoster from '../assets/images/Main_bg.jpg';

function LearnMore() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="learn-more-page">
      {/* Header Section */}
      <header className="learn-header">
        {/* Video Background */}
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
          poster={headerPoster} 
        >
          <source src={headerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Header Content */}
        <div className="header-content" data-aos="fade-in">
          <div className="brand-lines">
            <h1>Learn More</h1>
          </div>
          <p className="sublines">
            Dive Deeper into Our Expertise and Offerings
          </p>
          <button className="btn" data-aos="fade-up" data-aos-delay="500">
            Explore Now
          </button>
        </div>
      </header>

      {/* Our Services */}
      <section id="services" className="services-section" data-aos="fade-up">
        <h2>Our Services</h2>
        <div className="section-content">
          <div className="service-cards">
            <div className="service-card" data-aos="zoom-in">
              <img src={service1} alt="Secure Storage" loading="lazy" />
              <h3>Secure Storage</h3>
              <p>
                Store your legal documents with unmatched security using our blockchain-based solutions.
              </p>
            </div>
            <div className="service-card" data-aos="zoom-in" data-aos-delay="100">
              <img src={service2} alt="Smart Contracts" loading="lazy" />
              <h3>Smart Contracts</h3>
              <p>
                Automate your legal agreements with smart contracts that ensure compliance and efficiency.
              </p>
            </div>
            <div className="service-card" data-aos="zoom-in" data-aos-delay="200">
              <img src={service3} alt="24/7 Support" loading="lazy" />
              <h3>24/7 Support</h3>
              <p>
                Our dedicated support team is available around the clock to assist you with any queries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="why-choose-section" data-aos="fade-up">
        <h2>Why Choose Us</h2>
        <div className="section-content">
          <div className="text">
            <p>
             NexVault stands out in the industry due to our unwavering commitment to security, innovation, and customer satisfaction. Our platform is designed to provide seamless and reliable management of your legal documents.
            </p>
            <p>
              By integrating cutting-edge blockchain technology, we ensure that your data remains immutable, transparent, and easily accessible whenever you need it.
            </p>
          </div>
          <div className="video">
            {/* Video added here */}
            <div className="why-choose-video" data-aos="fade-up">
              <video
                className="why-choose-background-video"
                autoPlay
                loop
                muted
                playsInline
                poster={main_bg}
              >
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials-section" data-aos="fade-up">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
          <p>
            "NexVault has transformed the way we manage our legal documents. Their platform is secure and easy to use!"
          </p>
          <p>
            <strong>- Vedika Shastri</strong>
          </p>
        </div>
        <div className="testimonial">
          <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
          <p>
            "The blockchain technology used by NexVault gives us peace of mind knowing our documents are safe."
          </p>
          <p>
            <strong>- Nayan Iyyer</strong>
          </p>
        </div>
        <div className="testimonial">
          <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
          <p>
            "Partnering with NexVault has streamlined our document workflows and enhanced our overall efficiency. Their support team is outstanding."
          </p>
          <p>
            <strong>- Sandhya Rathi</strong>
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <div className="cta" data-aos="fade-up">
        <h2>
          <span className="bold-text">Take the Next Step</span>
        </h2>
        <p>
          Ready to enhance your legal document management with NexVault's advanced solutions?{' '}
          <a href="#signup">Sign Up</a> today or <a href="#contact">Contact Us</a> to learn more about how we can assist you.
        </p>
        <button className="btn">Get Started</button>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 NexVault. All rights reserved.</p>
        <p>
          <a href="#services" className="bold-text">Services</a> | <a href="#why-choose-us" className="bold-text">Why Choose Us</a> |{' '}
          <a href="#testimonials" className="bold-text">Testimonials</a>
        </p>
      </footer>
    </div>
  );
}

export default LearnMore;
