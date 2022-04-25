import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Test from './test1';
import Test2 from './test2';



export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Test />
      </Route>
      <Route path="/about">
        <Test2 />
      </Route>
    </Switch>
  );
}




// const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);