import React from 'react';
import { Card, Table } from 'react-bootstrap';

const SupremeProgram = () => {
  return (
    <div className="program-details">
      <h3>SUPREME - Four Year Integrated School Program</h3>
      <p className="subtitle">For Students Moving from Class VIII to IX</p>

      <Card className="mb-4">
        <Card.Body>
          <h4>Program Structure</h4>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Class</th>
                <th>Phases</th>
                <th>Contact Hours</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IX</td>
                <td>4 Phases</td>
                <td>295 hrs</td>
              </tr>
              <tr>
                <td>X</td>
                <td>4 Phases</td>
                <td>291 hrs</td>
              </tr>
              <tr>
                <td>XI</td>
                <td>4 Phases</td>
                <td>435 hrs</td>
              </tr>
              <tr>
                <td>XII</td>
                <td>3 Phases</td>
                <td>317 hrs</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <h4>Key Features</h4>
          <ul>
            <li>Integrated school and JEE curriculum</li>
            <li>Expert faculty team</li>
            <li>Regular assessments and feedback</li>
            <li>Comprehensive study materials</li>
            <li>Personal mentoring support</li>
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SupremeProgram;