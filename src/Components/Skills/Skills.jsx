import React from "react";
import "./Skills.css";

const Skills = () => {
  const skillsData = [
    {
      title: "MongoDB",
      description:
        "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas",
      image:
        "https://res.cloudinary.com/hevo/image/upload/v1626694700/hevo-blog/MongoDB-sm-logo-500x400-1-1.gif",
    },
    {
      title: "Express Js",
      description:
        "Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs",
      image:
        "https://www.w3jar.com/wp-content/uploads/2019/05/express-js-tutorial.png",
    },
    {
      title: "React Js",
      description:
        "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.",
      image:
        "https://www.pragimtech.com/wp-content/uploads/2021/03/ReactJS.jpg",
    },
    {
      title: "Node Js",
      description:
        "Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-endns on the V8 JavaScript Engine executes JavaScript code outside a web browser",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIz30mqrvygd2UjNpR3YbgEFwU8GCjoJ5I9w&usqp=CAU",
    },
    {
      title: "MySQL",
      description:
        "MySQL is an open-source relational database management system. Its name is the name of co-founder Michael Widenius's daughter My, and SQL, the acronym for Structured Query Language",
      image:
        "https://user-images.githubusercontent.com/77196153/135602106-cc7d5c6d-e9a4-472e-af75-ff83cf6c9784.png",
    },
  ];

  return (
    <div className="skills">
      {skillsData.map((skill, index) => (
        <div className="skill" key={index}>
          <div className="card">
            <div className="card-image">
              <img src={skill.image} alt={skill.title} />
            </div>
            <div className="card-content">
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
