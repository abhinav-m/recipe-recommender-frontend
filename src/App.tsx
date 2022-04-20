// import logo from "./logo.svg";
import * as React from "react";
// import * as ReactDOM from "react-dom";
import Landing from "./pages/landing/Landing.tsx";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import RecommendationPage from "./pages/recommendation/Recommendation.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout heading="Plate Palate" />}>
          <Route
            index
            element={<Landing title="Choose the recipes you like" />}
          />
          <Route path={"/recommend/:id"} element={<RecommendationPage />} />
          <Route path="test" element={<div>test</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
