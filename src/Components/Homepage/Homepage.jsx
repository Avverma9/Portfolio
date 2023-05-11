import React from "react";
import "./Homepage.css";

const Homepage = () => {
  return (
    
    <div className="homepage-home">
      
      <div className="text-section-home">
      <main class="container-home">
  <p2>Hello 👋 I'm</p2>
  <section className="animation-home">
    <div className="first-home"><div>Ankit Kumar Verma</div></div>
    <div className="second-home"><div>Backend Developer</div></div>
    <div className="third-home"><div>Mern Developer</div></div>
  </section>
</main>
        <p1>
          As a web developer specializing in the MERN stack (MongoDB,
          Express.js, React.js, and Node.js), I have gained valuable skills and
          experience in building full-stack web applications. Being a student of
          MCA (Master of Computer Applications) demonstrates my dedication to
          advancing my knowledge and expertise in the field of computer science.
          I am proud to say that I have completed many projects using Node.js
          and React.js, showcasing my proficiency in these technologies.
          Node.js, with its event-driven architecture, has allowed me to develop
          server-side applications and RESTful APIs, enabling efficient and
          scalable back-end development. React.js, on the other hand, has
          empowered me to create dynamic and interactive user interfaces,
          leveraging its component-based structure and virtual DOM.
        </p1>
      </div>
      <div className="image-section-home">
        <img
          src="https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/1683515608646-Picsart_23-02-21_18-58-52-593_1_1_1-removebg-preview%20%282%29.png"
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Homepage;
