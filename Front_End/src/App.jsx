// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Engineering_Services from "./components/Engineering_Services";
import Social_Services from "./components/Social_Services";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
        <Header />
        <main className="pt-24">
          {" "}
          {/* Add padding to account for fixed header */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/Engineering_Services"
              element={<Engineering_Services />}
            />
            <Route path="/Social_Services" element={<Social_Services />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
