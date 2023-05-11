import React from "react";

import "./ProjectHome.css";

const ProjectHome = () => {



  return (
    <div>
      <div>
        <div className="container">
          <div className="card">
            <div className="image">
              <img
                src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/01/url-shortener.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <h3>URL Shrinker</h3>
              <p>
                URL Shrinker is a MERN stack web app that shortens long URLs. It
                uses MongoDB for data storage, Express.js for the backend, React
                for the frontend, and Redis for caching. Users input long URLs,
                which are shortened and stored in the database. When accessed,
                the server redirects users to the original website.
              </p>
              <div className="button-container">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">View Project</button>
                </a>
                <a
                  href="https://github.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">GitHub</button>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img
                src="https://m.media-amazon.com/images/I/71lPgewzHoL._SY355_.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <h3>Shopping Kart</h3>
              <p>
                
              </p>
              <div className="button-container">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">View Project</button>
                </a>
                <a
                  href="https://github.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">GitHub</button>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img
                src="https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/1683616929181-Ledger.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <h3>X-LEDGER</h3>
              <p>
                It is a Full Stack project (MERN STACK) In this site i handled
                multiple API, this is a student ledger site to store their
                records also you can modify the data, get the data, update,
                delete Also along with this i created Admin and contact page
              </p>
              <div className="button-container">
                <a
                  href="https://avvermanyx.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">View Project</button>
                </a>
                <a
                  href="https://github.com/Avverma9/Nyx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">GitHub</button>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img
                src="https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/1683617153028-Untitled.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <h3>FilmyGyaan</h3>
              <p>
                I completed my full stack website named Filmygyaan using MERN
                tech Stack in this site I am using IMDB API to fetch the data
                and added Features - Contact page, Admin Page, Popular on IMBD,
                Most Ranked, Upcoming Movies, Navigation, Hamburger to make site
                responsive
              </p>
              <div className="button-container">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">View Project</button>
                </a>
                <a
                  href="https://github.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">GitHub</button>
                </a>
              </div>
            </div>
            
          </div>
          
          <div className="card">
            <div className="image">
              <img
                src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210730204741/How-to-Find-an-Internship-as-a-College-Student.png"
                alt=""
              />
            </div>
            <div className="content">
              <h3>College Internship</h3>
              <p>
                The open to intern project is a web application that allows
                companies to post their internship opportunities and connect
                with potential interns. The application is built using the
                Express.js framework for server-side scripting
              </p>
              <div className="button-container">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">View Project</button>
                </a>
                <a
                  href="https://github.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">GitHub</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectHome;
