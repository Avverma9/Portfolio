import Header  from './components/Header';
import About from './components/About'
import Contact from './components/Contact'
import Intro from './components/Intro'
import Projects from './components/Projects'
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Intro />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
        
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
