import React from 'react';
import '../styles/pages.css';

const MustRead = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Must Read</h1>
      
      <div className="page-content">
        <section className="must-read-section">
          <h3>Academic Philosophy</h3>
          <p>
            At Z7i, we believe in cultivating not just academic excellence but also character and creativity.
            Our educational approach is built on the foundation of rigorous academics combined with holistic 
            development that prepares students for future challenges.
          </p>
          <p>
            We focus on conceptual clarity rather than rote learning, encouraging students to think 
            critically and apply their knowledge to real-world problems. Our methodology emphasizes 
            understanding the 'why' behind every concept.
          </p>
        </section>

        <section className="must-read-section">
          <h3>Commitment to Excellence</h3>
          <p>
            Excellence is not an act but a habit. At Z7i, we nurture this habit through consistent 
            effort, focused attention to detail, and a passion for continuous improvement. Our faculty 
            members are selected for their expertise and dedication to student success.
          </p>
          <p>
            We maintain small batch sizes to ensure personalized attention for every student. Regular 
            assessments, detailed performance analysis, and constructive feedback help students 
            understand their strengths and areas for improvement.
          </p>
        </section>

        <section className="must-read-section">
          <h3>Admission Process</h3>
          <p>
            Our admission process is designed to identify students with the potential for academic 
            excellence and the determination to succeed. We look beyond just marks to assess aptitude 
            and attitude.
          </p>
          <ul>
            <li>Application submission with academic records</li>
            <li>Entrance examination testing aptitude and subject knowledge</li>
            <li>Personal interview to understand the student's goals and motivation</li>
            <li>Final selection based on overall performance and potential</li>
          </ul>
          <p>
            We believe in giving every deserving student an opportunity, and therefore offer merit-based 
            scholarships to outstanding performers and those from economically challenged backgrounds.
          </p>
        </section>

        <section className="must-read-section">
          <h3>Academic Discipline</h3>
          <p>
            Discipline forms the cornerstone of our educational philosophy. We expect our students to:
          </p>
          <ul>
            <li>Maintain regular attendance and punctuality</li>
            <li>Complete all assignments and homework on time</li>
            <li>Participate actively in classroom discussions and activities</li>
            <li>Adhere to the code of conduct both inside and outside the classroom</li>
            <li>Respect faculty members, staff, and fellow students</li>
          </ul>
          <p>
            We have a zero-tolerance policy for academic dishonesty, including plagiarism and cheating 
            in examinations. Violations may result in disciplinary action, including suspension or 
            expulsion.
          </p>
        </section>

        <section className="must-read-section">
          <h3>Parent Partnership</h3>
          <p>
            We believe that education is a collaborative effort between the institution, students, and 
            parents. Regular parent-teacher meetings, progress reports, and open communication channels 
            ensure that parents remain involved in their child's academic journey.
          </p>
          <p>
            Parents are encouraged to provide feedback, raise concerns, and participate in the growth 
            of their children. Together, we can create an environment conducive to holistic development 
            and academic success.
          </p>
        </section>
      </div>
    </div>
  );
};

export default MustRead;