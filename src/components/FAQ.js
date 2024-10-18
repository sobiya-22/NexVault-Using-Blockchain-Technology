import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const questions = [
    { question: "What is your return policy?", answer: "Our return policy lasts 30 days..." },
    { question: "How can I contact support?", answer: "You can contact us via email..." },
    { question: "What payment methods do you accept?", answer: "We accept credit cards, PayPal..." },
  ];

  return (
    <div className="faq-sidebar">
      <h2 className="faq-title">FAQ</h2>
      <div className="faq-questions">
        {questions.map((item, index) => (
          <div key={index}>
            <div className="faq-question" onClick={() => toggleQuestion(index)}>
              {item.question}
            </div>
            {activeQuestion === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
