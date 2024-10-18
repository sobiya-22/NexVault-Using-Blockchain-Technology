import React, { useRef } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Implement your email sending logic here
    emailjs
    .sendForm('service_11ivc2b', 'template_q2ictkj', form.current, {
      publicKey: 'D7CH5aUyICVBEogeW',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
    e.target.reset()
  };

  return (
    <section>
      <div className='container'>
        <h2 className="text-center">Contact Us</h2>
        <form ref={form} onSubmit={sendEmail} className="form">
          <div className="form-group">
            <label htmlFor="user_email">User Email:</label>
            <input type="email" id="user_email" placeholder='Email' name='user_email' required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" placeholder='Subject' name='subject' required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" cols="30" rows="10" placeholder='Your message...' required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
