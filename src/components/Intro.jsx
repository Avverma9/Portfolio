import React from "react";
import "./Intro.css";
export default function Intro() {
  return (
    <>
      <div className="intro-container">
        <div className="left-side-image">
          <img
            src="https://avverma.s3.ap-south-1.amazonaws.com/1704566348491-Picsart_23-02-21_18-58-52-593-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="right-side-intro">
          <p>
            My name is Ankit Kumar Verma, a dynamic and proficient MERN stack
            developer driven by a strong passion for coding. I bring with me a
            solid background, including one year of hands-on experience as a
            backend developer trainee at Function Up, where I honed my skills.
            Subsequently, I transitioned into a full-fledged MERN developer
            role, accumulating an additional year of expertise. Currently, I am
            actively contributing to innovative projects as a MERN developer at
            a well-established company, showcasing my commitment to delivering
            high-quality solutions.
          </p>
        </div>
      </div>
      <div className="intro-container">
        <div className="right-side-image">
          <img
            src="https://avverma.s3.ap-south-1.amazonaws.com/1704567575288-Ankit-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="left-side-intro">
          <p>
            <h1>Worked on</h1>
            <hr />
            <h3>React Js</h3>
            <li>
              {" "}
              React has a large and active community, which means abundant
              resources, tutorials, and third-party libraries available
            </li>
            <h3>Node JS</h3>
            <li>
              {" "}
              Node.js has a large and vibrant community of developers. This
              community support means there are plenty of resources, tutorials,
              and third-party modules available
            </li>
            <h3>MongoDB</h3>
            <li>
              {" "}
              MongoDB is a document-oriented database, belonging to the family
              of NoSQL databases. Instead of using traditional tables and rows,
              MongoDB stores data in flexible ...
            </li>
            <h3>Rest API</h3>
            <li>
              {" "}
              RESTful APIs have become the standard for web services due to
              their simplicity, scalability, and ease of integration with
              various platforms and technologies. They are commonly used in web
              and mobile applications to facilitate data exchange between the
              client and server
            </li>
            <h3>MySQL</h3>
            <li>
              MySQL is a relational database management system, which means it
              organizes data into tables with predefined relationships
            </li>
          </p>
        </div>
      </div>
    </>
  );
}
