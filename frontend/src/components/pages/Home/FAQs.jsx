import React, { useState } from 'react';

const FAQs = () => {
  const faqData = [
    {
      question: 'What is your return policy?',
      answer: 'Our return policy allows you to return items within 30 days of purchase.'
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can reach our customer support team via email at support@example.com.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we offer international shipping to many countries around the world.'
    }
  ];

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    setSelectedQuestion(index === selectedQuestion ? null : index);
  };

  return (
    <section className="p-3 w-full bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className=" mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              <div
                onClick={() => handleQuestionClick(index)}
                className="flex justify-between items-center p-4 bg-white rounded cursor-pointer border-b"
              >
                <div className="text-lg font-semibold">{faq.question}</div>
                <div>{selectedQuestion === index ? '▲' : '▼'}</div>
              </div>
              {selectedQuestion === index && (
                <div className="p-4 bg-white rounded-b">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
