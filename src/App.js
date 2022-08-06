import Navbar from "./comps/navbar/navbar";
import Home from "./comps/home/home";
import "./fonts/fonts.css";
import "./mediaQuery/mediaQuery.css";
// Importing bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
