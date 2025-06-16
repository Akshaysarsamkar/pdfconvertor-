import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Student from "./Student";
import CreateStudent from "./CreateStudent";
import Update from "./Update";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Student />}></Route>
            <Route path="/create" element={<CreateStudent />}></Route>
            <Route path="/update/:id" element={<Update />}></Route>
            <Route path="/student/:id" element={<Student/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
