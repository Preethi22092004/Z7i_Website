import React, { useState } from 'react';
import './About.css';

const Policies = () => {
  const [activePolicy, setActivePolicy] = useState(null);

  const togglePolicy = (index) => {
    setActivePolicy(activePolicy === index ? null : index);
  };

  const policies = [
    {
      title: "Policies and Other Info",
      content: [
        "Z7i, an institution of excellence preparing committed students for IIT-JEE and many other prestigious entrance and competitive examinations. Started with a vision to provide quality education, we are present across cities and towns to reach excellent students nationwide."
      ]
    },
    {
      title: "Important Policies",
      content: [
        "Our policies are designed to ensure a conducive learning environment"
      ]
    },
    {
      title: "1. Admission Policy",
      content: [
        "Admission to Z7i programs is based on merit, determined through the Scholarship-cum-Admission Test (SAT)",
        "The decision of the Admission Committee regarding admission is final and binding"
      ]
    },
    {
      title: "2. Fee Policy",
      content: [
        "All fees are to be paid as per the schedule provided at the time of admission",
        "Fees once paid are non-refundable under any circumstances"
      ]
    },
    {
      title: "3. Attendance Policy",
      content: [
        "Regular attendance is mandatory for all classes and tests",
        "Students with less than 75% attendance may not be allowed to appear for the final examination"
      ]
    },
    {
      title: "4. Code of Conduct",
      content: [
        "Students are expected to maintain discipline and decorum within the campus",
        "Any form of misconduct may lead to disciplinary action, including expulsion"
      ]
    },
    {
      title: "5. Privacy Policy",
      content: [
        "Z7i respects the privacy of its students and adheres to strict confidentiality regarding personal information",
        "For detailed information, please refer to our Privacy Policy"
      ]
    },
    {
      title: "6. Refund and Cancellation Policy",
      content: [
        "As per the Cancellation and Refund Policy, fees once paid are non-refundable under any circumstances"
      ]
    },
    {
      title: "7. Shipping and Delivery Policy",
      content: [
        "For information regarding the delivery of study materials and other products, please refer to our Shipping and Delivery Policy"
      ]
    },
    {
      title: "8. Terms and Conditions",
      content: [
        "By enrolling in any of Z7i programs, students and parents agree to abide by the terms and conditions outlined at the time of admission"
      ]
    }
  ];

  return (
    <div className="about-page">
      <div className="about-header">
        <h1>Policies and Info</h1>
        <h2>Excellence Through Clear Guidelines</h2>
      </div>
      
      <div className="about-container">
        <div className="content-section">
          <div className="policy-intro">
            <p>Z7i is an institution of excellence preparing committed students for various competitive examinations.</p>
          </div>

          <div className="policies-container">
            {policies && policies.map((policy, index) => (
              <div 
                key={index} 
                className={`policy-item ${activePolicy === index ? 'active' : ''}`}
              >
                <div 
                  className="policy-header"
                  onClick={() => togglePolicy(index)}
                >
                  <h3>{policy.title}</h3>
                  <span className="dropdown-icon">{activePolicy === index ? '▼' : '▶'}</span>
                </div>
                {activePolicy === index && (
                  <div className="policy-content">
                    <ul>
                      {policy.content.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-methods">
              <div className="contact-method">
                <h4>Email</h4>
                <p>info@z7i.com</p>
              </div>
              <div className="contact-method">
                <h4>Phone</h4>
                <p>+91 7825895400</p>
              </div>
              <div className="contact-method">
                <h4>Website</h4>
                <p>www.z7i.com</p>
              </div>
            </div>
          </div>

          <footer className="footer-info">
            <p>Z7i.in</p>
            <p>© 2025 Z7i.in. All rights reserved.</p>
            <p>Contact: info@z7i.in | +91-1234567890</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Policies;