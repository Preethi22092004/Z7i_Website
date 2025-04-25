import React from 'react';

const OurJourney = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="bg-[#003366] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Journey</h1>
          <p className="text-xl opacity-90">Three Decades of Excellence in Education</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#003366] mb-6">The Beginning</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                An exhilarating journey of 3 decades, where for us, the journey itself is the 
                destination. Z7i was created in 1992 by the vision and toil of Mr. D. K. Goel, 
                a Mechanical Engineering graduate from IIT Delhi.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We had a very humble beginning as a forum for IIT-JEE, with a vision to provide an 
                ideal launch pad for serious JEE aspirants.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#003366] mb-6">Evolution & Growth</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We started to develop ways to enhance students' IQ. We started to leave an indelible 
                mark on the students who have undergone Z7i training. We started changing lives.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, aiming for the unachievable and continuously raising the bar has become a part 
                of the Z7i DNA.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#003366] mb-6">Present & Future</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The launch of Z7i World Schools at Hyderabad is a concentrated effort in that 
                direction, where students will be trained for the best in the world through 
                methodologies and practices that are truly world-class.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This journey from just an IIT-JEE coaching institute to the most powerful brand in 
                serious education has been exhilarating. However, the journey is not over yet. For us 
                at Z7i, the journey will never be over... For us, this journey itself is the 
                destination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;