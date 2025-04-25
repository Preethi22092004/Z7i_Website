import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import MainContent from './components/MainContent';
import SupremeProgram from './components/SupremeProgram';
import RamanujanProgram from './components/RamanujanProgram';
import UdaanProgram from './components/UdaanProgram';
import './styles.css';

const IntegratedPrograms = () => {
  return (
    <div className="page-wrapper">
      <div className="program-header">
        <Container>
          <h1 className="text-center">Z7i Integrated School Programs</h1>
          <h2 className="text-center">Empowering Students for JEE (Main & Advanced), Board Exams, Olympiads, and Beyond</h2>
        </Container>
      </div>

      <Container className="program-content">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Program Overview</Accordion.Header>
            <Accordion.Body>
              <MainContent />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>SUPREME Program</Accordion.Header>
            <Accordion.Body>
              <SupremeProgram />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>RAMANUJAN Program</Accordion.Header>
            <Accordion.Body>
              <RamanujanProgram />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>UDAAN Program</Accordion.Header>
            <Accordion.Body>
              <UdaanProgram />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default IntegratedPrograms;