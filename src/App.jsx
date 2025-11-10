import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ChiSiamo from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={< ChiSiamo/>} />
        <Route path="/projects" element={< Projects/>} />
      </Routes>
    </Router>
  );
}

export default App;
