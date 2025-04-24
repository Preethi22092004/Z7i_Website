import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    {
      question: "What is the admission process?",
      answer: "The admission process involves an entrance test followed by counseling."
    },
    {
      question: "What are the fee payment options?",
      answer: "We offer various payment options including EMI and scholarships."
    },
    {
      question: "What is the class schedule?",
      answer: "Classes are scheduled on weekdays and weekends with flexible timing options."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-6 text-left flex justify-between items-center"
            >
              <span className="font-semibold text-gray-800">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUpIcon className="h-5 w-5 text-blue-600" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 text-blue-600" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
