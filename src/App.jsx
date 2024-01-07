import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <>
      <Header/>
        <Routes>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
          <Route path="/" element={<Intro/>}/>
        </Routes>
      </>
    </Router>
  );
}

export default App;
