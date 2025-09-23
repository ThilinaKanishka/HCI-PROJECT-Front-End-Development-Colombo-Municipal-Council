// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Engineering_Services from "./components/Engineering_Services";
import Social_Services from "./components/Social_Services";
import Create_your_Account from "./components/Create_your_Account";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex flex-col">
        <Header />
        <main className="flex-grow pt-24 pb-8">
          {" "}
          {/* Added pb-8 for bottom padding */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/Engineering_Services"
              element={<Engineering_Services />}
            />
            <Route path="/Social_Services" element={<Social_Services />} />
            <Route
              path="/Create_your_Account"
              element={<Create_your_Account />}
            />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
