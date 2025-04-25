const ExamReviewSystem = () => {
  return (
    <div className="program-container">
      <div className="program-header">
        <Container>
          <h1 className="text-center">Exam Review System</h1>
          <h2 className="text-center">For JEE Main & Advanced – Class XII (2025)</h2>
        </Container>
      </div>

      <Container>
        <div className="accordion-container">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Program Overview</Accordion.Header>
              <Accordion.Body>
                <p>The Exam Review System is a comprehensive assessment program offered by Z7i. This unique non-classroom program is designed for serious JEE aspirants in Class 12 who want to benchmark their preparation against peers nationwide. Through a series of carefully crafted tests, students receive in-depth performance analysis and personalized recommendations to enhance their exam readiness.</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>Enrollment Details</Accordion.Header>
              <Accordion.Body>
                <ul className="feature-list">
                  <li>Eligibility: Students moving from Class XI to XII.</li>
                  <li>Enrollment Process:
                    <ol>
                      <li>Visit the official Z7i Non-Classroom Programs website: www.z7inonclassroomprograms.com</li>
                      <li>Select the Exam Review System for JEE Main & Advanced.</li>
                      <li>Fill out the application form and complete the payment process to confirm enrollment.</li>
                    </ol>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

export default ExamReviewSystem; 