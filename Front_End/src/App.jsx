import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Engineering_Services from "./components/Engineering_Services";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Engineering_Services />} />
      </Routes>
    </Router>
  );
}

export default App;
