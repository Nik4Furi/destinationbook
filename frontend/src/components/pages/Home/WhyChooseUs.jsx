import React from 'react';

import ImgHeader from './ImgHeader';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Quality Service',
      description:
        'We are committed to providing top-notch service that exceeds your expectations.',
    },
    {
      title: 'Customer Satisfaction',
      description:
        'Our primary focus is on ensuring our customers are satisfied with our services.',
    },
    {
      title: 'Experienced Team',
      description:
        'Our team consists of experienced professionals dedicated to delivering excellence.',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Need To Choose Us ?</h2>

        {/* Here we show the yours needs match our features  */}
        <ImgHeader />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:mt-9 mt-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded shadow-lg text-left"
            >
              <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
