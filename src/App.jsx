import React from 'react'
import Header from './componenets/header/Header';
import Nav from './componenets/nav/Nav';
import Footer from './componenets/footer/Footer';
import Portfolio from './componenets/portfolio/Portfolio';
import Testimonials from './componenets/testimonials/Testimonials';
import Experience from './componenets/experience/Experience';
import Contact from './componenets/contact/Contact';
import About from './componenets/about/About';
import Projects from './componenets/projects/Projects';
const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <Footer />
    <Portfolio />
      <Testimonials />
      <Experience />
      <Projects/>
      <Contact />
      <About />
        </>
  )
}
export default App