// Import React and necessary hooks
import React, { useState } from 'react';
import './TECFAQ.css'; // Optional: Add your CSS file for styling

const FAQs = [
  { title: "", content: "Content for " },
  { title: "", content: "Content for " },
  { title: "", content: "Content for " },
  { title: "", content: "Content for" },
  { title: "", content: "Content for" },
  { title: "", content: "Content for" },
  { title: "", content: "Content for" },
  { title: "", content: "Content for" },
  { title: "", content: "Content for" },
  { title: "", content: "Content for" },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-header" style={{ backgroundColor: '#e0f7fa', padding: '10px', borderRadius: '5px', textAlign: 'center' }}>Technical FAQs</h1>
      {FAQs.map((faq, index) => (
        <div key={index} className="faq-item" style={{ marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px', overflow: 'hidden' }}>
          <div
            className="faq-title"
            style={{ backgroundColor: '#f1f1f1', padding: '10px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            onClick={() => toggleFAQ(index)}
          >
            <span>{faq.title}</span>
            <span style={{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>&#9660;</span>
          </div>
          {activeIndex === index && (
            <div className="faq-content" style={{ padding: '10px', backgroundColor: '#fff' }}>{faq.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
