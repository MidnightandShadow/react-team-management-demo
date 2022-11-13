import { render, screen } from '@testing-library/react';
import {App} from './App';
import * as Console from "console";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Add} from "./Add";
import {Edit} from "./Edit";
import React from "react";

/**
 * An example stub for a test (Does not actually test anything).
 * Since we are using a Router and Routes, that info needs to be known in the test(s).
 * Alternatively, I'm sure we could define components and have some sort of
 * @ Before/@ Setup test to initialize these things for all tests in advance.
 */
test('example testing', () => {
  const membersList = [];
  Console.log(render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App membersList = {membersList}/>} />
      <Route path="/add" element={<Add membersList = {membersList}/>} />
      <Route path="/edit/:id" element={<Edit membersList = {membersList}/>} />
    </Routes>
  </BrowserRouter>));
});
