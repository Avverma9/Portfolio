import React from "react";
import { useLocation } from "react-router-dom";
import "./Project.css";

const Project = () => {
  const location = useLocation();

  if (location.pathname !== "/project") {
    return null;
  }
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
              <img
                src="https://media0.giphy.com/media/55off5pkVx8SrLPR8T/giphy.gif?cid=6c09b952iszgzeml8oeg8p2wzgdqnvpejowtvj7tpdtvu9lf&ep=v1_stickers_related&rid=giphy.gif&ct=s"
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
                  href="https://avvermaurlshrinker.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">View Project</button>
                </a>
                <a
                  href="https://github.com/avverma9/url_shortner"
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
              <img
                src="https://media0.giphy.com/media/55off5pkVx8SrLPR8T/giphy.gif?cid=6c09b952iszgzeml8oeg8p2wzgdqnvpejowtvj7tpdtvu9lf&ep=v1_stickers_related&rid=giphy.gif&ct=s"
                alt=""
              />
            </div>
            <div className="content">
              <h3>Shopping Kart</h3>
              <p>
                The application is built using the Express.js framework for
                server-side scripting, with MongoDB serving as the backend
                database for storing product information and user data. Node.js
                is used to power the application and provide real-time data
                updates to users.
              </p>
              <div className="button-container">
                <a
                  href="https://avvermaurlshrinker.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">View Project</button>
                </a>
                <a
                  href="https://github.com/Avverma9/shopping_kart"
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
                src="https://avverma.s3.ap-south-1.amazonaws.com/1684643928193-Picsart_23-02-21_18-58-52-593-removebg-preview%20%281%29.png"
                alt=""
              />
              <img
                src="https://media0.giphy.com/media/55off5pkVx8SrLPR8T/giphy.gif?cid=6c09b952iszgzeml8oeg8p2wzgdqnvpejowtvj7tpdtvu9lf&ep=v1_stickers_related&rid=giphy.gif&ct=s"
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
                src="https://avverma.s3.ap-south-1.amazonaws.com/1684644391965-Picsart_23-02-21_18-58-52-593-removebg-preview%20%282%29.png"
                alt=""
              />
              <img
                src="https://media0.giphy.com/media/55off5pkVx8SrLPR8T/giphy.gif?cid=6c09b952iszgzeml8oeg8p2wzgdqnvpejowtvj7tpdtvu9lf&ep=v1_stickers_related&rid=giphy.gif&ct=s"
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
                  href="https://avverma9.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">View Project</button>
                </a>
                <a
                  href="https://github.com/Avverma9/Radiator"
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
                src="https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/1684565140682-Car4u-removebg-preview.png"
                alt=""
              />
              <img
                src="https://media0.giphy.com/media/55off5pkVx8SrLPR8T/giphy.gif?cid=6c09b952iszgzeml8oeg8p2wzgdqnvpejowtvj7tpdtvu9lf&ep=v1_stickers_related&rid=giphy.gif&ct=s"
                alt=""
              />
            </div>
            <div className="content">
              <h3>Car 4U</h3>
              <p>
                Car4U is a comprehensive car buy sell management project developed
                using the MERN (MongoDB, Express.js, React.js, Node.js) stack.
                This project focuses on providing a seamless car rental
                experience by handling authentication, authorization, and
                profile management functionalities.
              </p>
              <div className="button-container">
                <a
                  href="https://car4uav.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">View Project</button>
                </a>
                <a
                  href="https://github.com/Avverma9/car_site"
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
              <img
                src="https://media0.giphy.com/media/55off5pkVx8SrLPR8T/giphy.gif?cid=6c09b952iszgzeml8oeg8p2wzgdqnvpejowtvj7tpdtvu9lf&ep=v1_stickers_related&rid=giphy.gif&ct=s"
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
                  href="https://github.com/Avverma9/Intern-Project-2"
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
export default Project;
