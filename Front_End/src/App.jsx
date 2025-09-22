import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Engineering_Services from "./components/Engineering_Services";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Engineering_Services"
          element={<Engineering_Services />}
        />
      </Routes>
    </Router>
  );
}

export default App;
