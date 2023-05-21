import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div>
        <section class="home">
          <div class="home-content">
            <h1>Hi, I'm Andrew Hiver</h1>
            <h3>Full Stack Developer</h3>
            <p>I am a calm and creative individual,
              capable of finding original solutions to the challenges at hand.
              I value organization in my work, which allows me to remain efficient and productive.
              I enjoy working in teams as it promotes collaboration and the exchange of ideas.
              However, I am also self-reliant and able to work independently when needed.
              I am consistently motivated to achieve my goals and fully invest myself in my projects.</p>
            <div class="btn-box">
              <a href="/resume">Resume</a>
              <a href="/projects">Projects</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
