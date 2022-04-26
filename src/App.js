import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Test from './test1';
import Test2 from './test2';



export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Test />
        </Route>
        <Route path="/about">
          <Test2 />
        </Route>
      </Switch>
    </Router>
  );
}




