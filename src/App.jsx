import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  return (
    <Router>
      <>
      <Header/>
        <Routes>
         
          <Route path="/" element={<Intro/>}/>
        </Routes>
      </>
    </Router>
  );
}

export default App;
