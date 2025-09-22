import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Engineering_Services from "./components/Engineering_Services";
import Home from "./components/Home";
import Social_Services from "./components/Social_Services";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Engineering_Services"
          element={<Engineering_Services />}
        />
        <Route path="/Social_Services" element={<Social_Services />} />
      </Routes>
    </Router>
  );
}

export default App;
