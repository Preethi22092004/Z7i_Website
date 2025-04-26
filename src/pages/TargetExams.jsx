import React from 'react';
import './TargetExams.css';

const targetExamsData = [
  {
    title: 'JEE Advanced',
    description: 'Premier engineering entrance exam for admission to IITs with comprehensive preparation strategy.',
  },
  {
    title: 'JEE Main',
    description: 'National level engineering entrance exam preparation with focused study material and test series.',
  },
  {
    title: 'Olympaids',
    description: 'National level engineering entrance exam preparation with focused study material and test series.',
  },
];

function TargetExams() {
  return (
    <div className="target-exams-container">
      <h1>Target Examinations</h1>
      <div className="exams-list">
        {targetExamsData.map((exam, index) => (
          <div className="exam-card" key={index}>
            <h2>{exam.title}</h2>
            <p>{exam.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TargetExams;