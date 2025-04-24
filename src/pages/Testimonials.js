import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Kumar",
      rank: "IIT-JEE AIR 5",
      image: "https://via.placeholder.com/100",
      quote: "Z7i's structured approach helped me achieve my dream rank."
    },
    {
      name: "Priya Singh",
      rank: "IIT-JEE AIR 12",
      image: "https://via.placeholder.com/100",
      quote: "The faculty support was exceptional throughout my preparation."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Student Testimonials</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-blue-600">{testimonial.rank}</p>
              </div>
            </div>
            <p className="text-gray-600 italic">"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
