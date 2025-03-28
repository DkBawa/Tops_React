
import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import UserTable from "./components/UserTable";
import { ToastContainer } from "react-toastify";

function App() {
  return (
   
  <Router>
    <ToastContainer/>
      <Routes>
        <Route path="/" element={<UserTable />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </Router>
    
  );
}

export default App
