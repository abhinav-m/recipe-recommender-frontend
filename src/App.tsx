// import logo from "./logo.svg";
import * as React from "react";
// import * as ReactDOM from "react-dom";
import Landing from "./pages/landing/Landing.tsx";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout heading="Recommender System" />}>
          <Route index element={<Landing title="HELLO THERE" />} />
          <Route path="test" element={<div>test</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
