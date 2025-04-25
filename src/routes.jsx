import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Programs from './components/Programs';
import Classroom from './components/Classroom';
import Class11 from './components/Class11';
import TwoYearCondensedProgram from './components/TwoYearCondensedProgram';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/programs" component={Programs} />
        <Route path="/programs/classroom" component={Classroom} />
        <Route path="/programs/classroom/class-11" component={Class11} />
        <Route path="/programs/classroom/class-11/two-year-condensed" component={TwoYearCondensedProgram} />
      </Switch>
    </Router>
  );
}

export default App;