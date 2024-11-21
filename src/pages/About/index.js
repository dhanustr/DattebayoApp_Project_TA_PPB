// src/About.js
import React from "react";
import "./index.css";
import logo from "./About.gif"
const About = () => {
  return (
    <div className="about-container">
      <h1>About This Application</h1>
      <p>
        Selamat Datang di Aplikasi Dattebayo
      </p>
      <p>
        Aplikasi ini menampilkan karakter-karakter dari anime Naruto shippuden dan juga anime boruto meskipun boruto ampas :D
      </p>
      
           
    <div className="gif-container">
        <img src = {logo}
           
          alt="About Gif" 
          className="about-gif"
        />
          </div>
      <h2>Credits:</h2>
      <p>

        Icons provided by <a href="https://react-icons.github.io/react-icons/" target="_blank" rel="noopener noreferrer">React Icons</a>.
        </p>
        
        API provided by <a href ="https://narutodb.xyz/api/character" target ="_blank" rel="noopener noreferrer"> Naruto API</a>
      
      <h2>Contact Us:</h2>
      <p>
        For more information or feedback, feel free to reach out via 
        <a href="dhanu.2atmaja@gmail.com"> dhanu.2atmaja@gmail.com</a>.
      </p>
    </div>
  );
};

export default About;
