import React from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import Admissions from './pages/Admissions';
import Results from './pages/Results';
import Contact from './pages/Contact';
import Login from './pages/Login';
import ChairmanMessage from './pages/about/ChairmanMessage';
import Policies from './pages/Policies';
import OurJourney from './pages/OurJourney';
import Careers from './pages/Careers';
import TargetExams from './pages/TargetExams';
import ProgramsPage from './pages/programs/ProgramsPage';
import LittleGenieProgram from './pages/programs/classroom/class-6/LittleGenieProgram';
import UdayaProgram from './pages/programs/classroom/class-7/UdayaProgram';
import UdayaProgram8 from './pages/programs/classroom/class-8/UdayaProgram8';
import FourYearJEEProgram from './pages/programs/classroom/class-9/FourYearJEEProgram';
import AscentProgram from './pages/programs/classroom/class-9/AscentProgram';
import ThreeYearJEEProgram from './pages/programs/classroom/class-10/ThreeYearJEEProgram';
import AscentOneYear from './pages/programs/classroom/class-10/AscentOneYear';
import TwoYearJEEProgram from './pages/programs/classroom/class-11/TwoYearCondensedProgram';
import CondensedProgram from './pages/programs/classroom/class-11/TwoYearJEEProgram';
import OneYearJEEProgram from './pages/programs/classroom/class-12/OneYearJEEProgram';
import OneYearMainProgram from './pages/programs/classroom/class-12/OneYearMainProgram';
import SpecialOneYearProgram from './pages/programs/classroom/class-12/SpecialOneYearProgram';
import ExtendedProgram from './pages/programs/classroom/class-12-pass/ExtendedProgram';
import PassOneYearJEE from './pages/programs/classroom/class-12-pass/PassOneYearJEE';
import PassSpecialOneYear from './pages/programs/classroom/class-12-pass/PassSpecialOneYear';
import AccelerateProgram from './pages/programs/classroom/class-12-pass/AccelerateProgram';
import Z7iCrashCourses from './pages/programs/classroom/crash-courses/Z7iCrashCourses';
import IntegratedPrograms from './pages/programs/integrated/class-9';
import SupremeProgram from './pages/programs/integrated/class-9/supreme';
import RamanujanProgram from './pages/programs/integrated/class-9/ramanujan';
import UdaanProgram from './pages/programs/integrated/class-9/udaan';
import PaniniProgram from './pages/programs/integrated/class-11/PaniniProgram';
import PinnacleProgram from './pages/programs/integrated/class-11/PinnacleProgram';
import JRSMProgram from './pages/programs/non-classroom/class-9/JRSMProgram';
import MyPATProgram from './pages/programs/non-classroom/class-9/MyPATProgram';
import JRSMProgramClass10 from './pages/programs/non-classroom/class-10/JRSMProgram';
import MyPATProgramClass10 from './pages/programs/non-classroom/class-10/MyPATProgram';
// Comment out imports for deleted files
// import RankBoosterProgram from './pages/programs/non-classroom/class-11/RankBoosterProgram';
// import RankBoosterProgramClass12 from './pages/programs/non-classroom/class-12/RankBoosterProgram';
// import NonClassroomCourses from './pages/programs/non-classroom/class-12/NonClassroomCourses';
import Sidebar from './components/Sidebar';
import ContentLayout from './components/ContentLayout';
import Downloads from './pages/Downloads';
import WhyOnlyZ7i from './pages/WhyZ7i';
import AdmissionTestDates from './pages/AdmissionDates';
import Centres from './pages/Centres';
import Hostels from './pages/Hostels';
import WorldSchool from './pages/WorldSchool';
import GlobalSchool from './pages/GlobalSchool';
import MustRead from './pages/MustRead';
import FAQs from './pages/FAQs';
import Testimonials from './pages/Testimonials';
import ESchool from './pages/ESchool';
import MyPat from './pages/MyPAT';
import PageTransition from './components/PageTransition';
// Import the new non-classroom program components for Class XI
import RSMProgram from './pages/programs/non-classroom/class-11/RSMProgram';
import AITSProgram from './pages/programs/non-classroom/class-11/AITSProgram';
import MyPATProgramClass11 from './pages/programs/non-classroom/class-11/MyPATProgram';
// Import the non-classroom program components for Class XII
import RSMProgramClass12 from './pages/programs/non-classroom/class-12/RSMProgram';
import AITSProgramClass12 from './pages/programs/non-classroom/class-12/AITSProgram';
import GMPProgramClass12 from './pages/programs/non-classroom/class-12/GMPProgram';
import MyPATProgramClass12 from './pages/programs/non-classroom/class-12/MyPATProgram';
import NonClassroomCoursesClass12 from './pages/programs/non-classroom/class-12/NonClassroomCourses';

// Import the non-classroom program components for Class XII
import RSMProgramClass12Pass from './pages/programs/non-classroom/class-12-pass/RSMProgram';
import AITSProgramClass12Pass from './pages/programs/non-classroom/class-12-pass/AITSProgram';
import GMPProgramClass12Pass from './pages/programs/non-classroom/class-12-pass/GMPProgram';
import MyPATProgramClass12Pass from './pages/programs/non-classroom/class-12-pass/MyPATProgram';
import NonClassroomCoursesClass12Pass from './pages/programs/non-classroom/class-12-pass/NonClassroomCourses';

// Import the ListStylingFix component
import ListStylingFix from './components/ListStylingFix';

// PageWrapper component for consistent page transitions
const PageWrapper = ({ children }) => {
  return (
    <PageTransition>
      {children}
    </PageTransition>
  );
};

import JeeAdvanced from './pages/target-exams/JeeAdvanced';
import JeeMain from './pages/target-exams/JeeMain';
import Olympiads from './pages/target-exams/Olympiads';

function App() {
  return (
    <Layout>
      {/* Add the ListStylingFix component */}
      <ListStylingFix />
      
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/chairman" element={<ChairmanMessage />} />
          <Route path="/about/policies" element={<Policies />} />
          <Route path="/about/journey" element={<OurJourney />} />
          <Route path="/about/careers" element={<Careers />} />
          <Route path="/target-exams/*" element={<TargetExams />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/results" element={<Results />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={
            <PageWrapper>
              <div className="pt-16 min-h-screen">
                <Login />
              </div>
            </PageWrapper>
          } />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route 
            path="/programs/classroom/class-6/little-genie" 
            element={<LittleGenieProgram />} 
          />
          <Route 
            path="/programs/classroom/class-7/udaya" 
            element={<UdayaProgram />} 
          />
          <Route 
            path="/programs/classroom/class-8/udaya" 
            element={<UdayaProgram8 />} 
          />
          <Route 
            path="/programs/classroom/class-9/four-year-jee" 
            element={<FourYearJEEProgram />} 
          />
          <Route 
            path="/programs/classroom/class-9/ascent" 
            element={<AscentProgram />} 
          />
          <Route 
            path="/programs/classroom/class-10/three-year-jee" 
            element={<ThreeYearJEEProgram />} 
          />
          <Route 
            path="/programs/classroom/class-10/ascent-one-year" 
            element={<AscentOneYear />} 
          />
          <Route 
            path="/programs/classroom/class-11/two-year-jee" 
            element={<TwoYearJEEProgram />} 
          />
          <Route 
            path="/programs/classroom/class-11/condensed" 
            element={<CondensedProgram />} 
          />
          <Route 
            path="/programs/classroom/class-12/one-year-jee" 
            element={<OneYearJEEProgram />} 
          />
          <Route 
            path="/programs/classroom/class-12/one-year-main" 
            element={<OneYearMainProgram />} 
          />
          <Route 
            path="/programs/classroom/class-12/special-one-year" 
            element={<SpecialOneYearProgram />} 
          />
          <Route 
            path="/programs/classroom/class-12-pass/extended" 
            element={<ExtendedProgram />} 
          />
          <Route 
            path="/programs/classroom/class-12-pass/one-year-jee" 
            element={<PassOneYearJEE />} 
          />
          <Route 
            path="/programs/classroom/class-12-pass/special-one-year" 
            element={<PassSpecialOneYear />} 
          />
          <Route 
            path="/programs/classroom/class-12-pass/accelerate" 
            element={<AccelerateProgram />} 
          />
          <Route 
            path="/programs/classroom/crash-courses" 
            element={<Z7iCrashCourses />} 
          />
          {/* Integrated School Programs Routes */}
          <Route 
            path="/programs/integrated/class-9" 
            element={<IntegratedPrograms />} 
          />
          <Route 
            path="/programs/integrated/class-9/supreme" 
            element={<SupremeProgram />} 
          />
          <Route 
            path="/programs/integrated/class-9/ramanujan" 
            element={<RamanujanProgram />} 
          />
          <Route 
            path="/programs/integrated/class-9/udaan" 
            element={<UdaanProgram />} 
          />
          <Route 
            path="/programs/integrated/class-11/panini" 
            element={<PaniniProgram />} 
          />
          <Route 
            path="/programs/integrated/class-11/pinnacle" 
            element={<PinnacleProgram />} 
          />
          {/* Non-Classroom Programs Routes */}
          <Route 
            path="/programs/non-classroom/class-9/jrsm" 
            element={<JRSMProgram />} 
          />
          <Route 
            path="/programs/non-classroom/class-9/mypat" 
            element={<MyPATProgram />} 
          />
          <Route 
            path="/programs/non-classroom/class-10/jrsm" 
            element={<JRSMProgramClass10 />} 
          />
          <Route 
            path="/programs/non-classroom/class-10/mypat" 
            element={<MyPATProgramClass10 />} 
          />
          
          {/* Add the new routes for Class XI non-classroom programs */}
          <Route 
            path="/programs/non-classroom/class-11/rsm" 
            element={<RSMProgram />} 
          />
          <Route 
            path="/programs/non-classroom/class-11/aits" 
            element={<AITSProgram />} 
          />
          <Route 
            path="/programs/non-classroom/class-11/mypat" 
            element={<MyPATProgramClass11 />} 
          />
          
          {/* Add the routes for Class XII non-classroom programs */}
          <Route 
            path="/programs/non-classroom/class-12" 
            element={<NonClassroomCoursesClass12 />} 
          />
          <Route 
            path="/programs/non-classroom/class-12/rsm" 
            element={<RSMProgramClass12 />} 
          />
          <Route 
            path="/programs/non-classroom/class-12/aits" 
            element={<AITSProgramClass12 />} 
          />
          <Route 
            path="/programs/non-classroom/class-12/gmp" 
            element={<GMPProgramClass12 />} 
          />
          <Route 
            path="/programs/non-classroom/class-12/mypat" 
            element={<MyPATProgramClass12 />} 
          />
          
          {/* Add the routes for Class XII Pass non-classroom programs */}
          <Route 
            path="/programs/non-classroom/class-12-pass" 
            element={<NonClassroomCoursesClass12Pass />} 
          />
          <Route 
            path="/programs/non-classroom/class-12-pass/rsm" 
            element={<RSMProgramClass12Pass />} 
          />
          <Route 
            path="/programs/non-classroom/class-12-pass/aits" 
            element={<AITSProgramClass12Pass />} 
          />
          <Route 
            path="/programs/non-classroom/class-12-pass/gmp" 
            element={<GMPProgramClass12Pass />} 
          />
          <Route 
            path="/programs/non-classroom/class-12-pass/mypat" 
            element={<MyPATProgramClass12Pass />} 
          />
          
          {/* Additional Routes */}
          <Route path="/programs/admission-dates" element={
            <PageWrapper>
              <div className="pt-16 min-h-screen">
                <ContentLayout title="Admission Dates">
                  <AdmissionTestDates />
                </ContentLayout>
              </div>
            </PageWrapper>
          } />
          <Route path="/resources/downloads" element={
            <PageWrapper>
              <div className="pt-16 min-h-screen">
                <ContentLayout title="Downloads">
                  <Downloads />
                </ContentLayout>
              </div>
            </PageWrapper>
          } />
          <Route path="/why-z7i" element={
            <PageWrapper>
              <div className="pt-16 min-h-screen">
                <WhyOnlyZ7i />
              </div>
            </PageWrapper>
          } />
          <Route path="/admissionsdates" element={
            <PageWrapper>
              <div className="pt-16 min-h-screen">
                <AdmissionTestDates />
              </div>
            </PageWrapper>
          } />
          <Route path="/about/centres" element={
            <PageWrapper>
              <div className="pt-16 min-h-screen">
                <Centres />
              </div>
            </PageWrapper>
          } />
          <Route path="/facilities/hostels" element={
            <PageWrapper>
              <div className="pt-16 min-h-screen">
                <Hostels />
              </div>
            </PageWrapper>
          } />
          <Route path="/schools/world-school" element={
            <PageWrapper>
              <div className="pt-16 min-h-screen">
                <WorldSchool />
              </div>
            </PageWrapper>
          } />
          <Route path="/schools/global-school" element={
            <PageWrapper>
              <div className="pt-16 min-h-screen">
                <GlobalSchool />
              </div>
            </PageWrapper>
          } />
          <Route path="/resources/must-read" element={
            <PageWrapper>
              <div className="pt-16 min-h-screen">
                <MustRead />
              </div>
            </PageWrapper>
          } />
          <Route path="/support/faqs" element={
            <PageWrapper>
              <div className="pt-16 min-h-screen">
                <FAQs />
              </div>
            </PageWrapper>
          } />
          <Route path="/about/testimonials" element={
            <PageWrapper>
              <div className="pt-16 min-h-screen">
                <Testimonials />
              </div>
            </PageWrapper>
          } />
          <Route path="/resources/eschool" element={
            <PageWrapper>
              <div className="pt-16 min-h-screen">
                <ESchool />
              </div>
            </PageWrapper>
          } />
          <Route path="/resources/mypat" element={
            <PageWrapper>
              <div className="pt-16 min-h-screen">
                <MyPat />
              </div>
            </PageWrapper>
          } />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/target-exams/jee-advanced" element={
            <PageWrapper>
              <JeeAdvanced />
            </PageWrapper>
          } />
          <Route path="/target-exams/jee-main" element={
            <PageWrapper>
              <JeeMain />
            </PageWrapper>
          } />
          <Route path="/target-exams/olympiads" element={
            <PageWrapper>
              <Olympiads />
            </PageWrapper>
          } />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
