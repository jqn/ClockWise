/**
 * App/Containers/App.js
 */
"use strict";
import React from "react";
import Nav from "../Components/Nav";
import Header from "../Components/Header";
import StopWatch from "../Components/StopWatch";

const App = () => (
  <Nav>
    <StopWatch />
  </Nav>
);

export default App;
