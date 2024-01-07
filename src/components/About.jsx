import "./About.css";
export default function () {
  return (
    <div className="about-container">
      <div className="dev-name">
        <p>Ankit Kumar Verma</p>
      </div>
      <h4>Mern Stack Developer</h4>
      <hr />
      <div className="three-circlular-images">
        <img
          src="https://avverma.s3.ap-south-1.amazonaws.com/1704611855233-PhotoRoom-20240107_123740-removebg-preview.png"
          alt="second-image"
        />
        <img
          src="https://avverma.s3.ap-south-1.amazonaws.com/1704566348491-Picsart_23-02-21_18-58-52-593-removebg-preview.png"
          alt="first-image"
        />

        <img
          src="https://avverma.s3.ap-south-1.amazonaws.com/1704611811068-PhotoRoom-20240107_124048.png"
          alt="third-image"
        />
      </div>
      <div className="skills">
        <p>MongoDB</p>
        <p>Express JS</p>
        <p>React JS</p>
        <p>Node JS</p>
        <p>React Native</p>
        <p>MySQL</p>
        <p>AWS</p>
      </div>
      <div className="about-me">
        I completed my graduation on December 31,
        2020, and then pursued MCA from Manipal University Jaipur, successfully
        completing it in 2024. I am a MERN (MongoDB, Express.js, React, Node.js)
        stack developer, and I began my journey at Shivila Technologies in
        Kolkata. During one year of experience there, I worked on several
        significant projects, including a car project, hotel & travel projects,
        and streaming projects, showcasing my skills. Furthermore, I spent a
        year as a Backend Developer Trainee at Function Up, Bangalore. During
        this time, I gained expertise in technologies such as Node.js, MySQL,
        AWS, Redis, and Azure. I contributed to various backend projects,
        demonstrating my capabilities and proficiency. I believe that my skills
        and experiences are paving the way for a strong and successful future,
        and I am eager to continue contributing to the dynamic environment of
        software development.
      </div>
    </div>
  );
}
