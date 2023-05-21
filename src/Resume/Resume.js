import React from 'react';
import "./Resume.css";

const Resume = () => {
  return (
    <div className="Resume">
      <br /><br /><br /><br />
      <h1 style={{ color: "black", marginLeft: "-1000px" }}>Resume</h1>
      <br /><br /><br />
      <h2 style={{ color: "black" }}>Experiences</h2>
      <br />
      <div className="card-container">
        <div className="card">
          <img src="https://itsocial.fr/wp-content/uploads/2022/01/vlog-demo-slides-190418125933-190815084323-thumbnail-4.jpg" alt="" />
          <div className="card-content">
            <h3 style={{ color: "black" }}>2022-2023: Itesoft</h3>
            <p>During my work placement contract, I worked in the Delivery team at Itesoft on the SLFI solution, where I was responsible for customizing the behavior of the web application for clients. I utilized various technologies such as Angular JS, Java, Filezilla, and Docker.</p>
          </div>
        </div>

        <div className="card">
          <img src="https://www.pagesjaunes.fr/media/ugc/ausy_05937800_123244317" alt="" />
          <div className="card-content">
            <h3 style={{ color: "black" }}>April-July 2022: Ausy</h3>
            <p>That year, I completed a 4-month internship at Ausy. My mission was to develop a tool for managers to manage their team members and projects using React.js.</p>
          </div>
        </div>
      </div>
      <br /><br /><br /><br />
      <h2 style={{ color: "black" }}>Formation</h2>
      <br />
      <div className="card-container">
        <div className="card">
          <img src="https://www.emploilr.com/photos/450photo_6382.jpg" alt="" />
          <div className="card-content">
            <h3 style={{ color: "black" }}>2020-2025: CESI, Engineering School</h3>
            <p>I am currently studying at CESI, an engineering school with an alternating work-study program. I initially completed two years of integrated preparatory classes, and I am currently in my third year specializing in computer science.</p>
          </div>
        </div>

        <div className="card">
          <img src="https://www.arac-occitanie.fr/app/uploads/2021/05/Perspective-bat-accueil-sur-Jean-Jaures-1440x720.jpg" alt="" />
          <div className="card-content">
            <h3 style={{ color: "black" }}>2017-2020: Ernest Hemingway, Highschool</h3>
            <p>
              I completed a Scientific Baccalaureate with a specialization in Earth and Life Sciences. I graduated with honors.</p>
          </div>
        </div>
      </div>
      <br /><br /><br /><br />
      <h2 style={{ color: "black" }}>Skills</h2>
      <br />
      <div className="card-container">
        <div className="card">
          <img src="https://punkt.de/_Resources/Persistent/7/5/b/d/75bd14d2ed44da6bf49616fd635a36fa4bb2eac8/React_Native_Logo-1196x628.png" alt="" />
          <div className="card-content">
            <h3 style={{ color: "black" }}>React JS</h3>
          </div>
        </div>

        <div className="card">
          <img src="https://www.dotcom-monitor.com/blog/wp-content/uploads/sites/3/2020/05/AngularJS.png" alt="" />
          <div className="card-content">
            <h3 style={{ color: "black" }}>Angular JS</h3>
          </div>
        </div>

        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA2Ft7qEVQjmr6ac6q50OZJ61N3n1eG8SeN_g2RfjmbdDHAeQ4XuhcHh5_hiyksoS7d5w&usqp=CAU" alt="" />
          <div className="card-content">
            <h3 style={{ color: "black" }}>Node JS</h3>
          </div>
        </div>

        <div className="card">
          <img src="https://c.clc2l.com/c/thumbnail280/t/j/a/java-N5uhyL.jpg" alt="" />
          <div className="card-content">
            <h3 style={{ color: "black" }}>Java</h3>
          </div>
        </div>

        <div className="card">
          <img src="https://deepinthecode.com/wp-content/uploads/2017/10/mysql_workbench.jpg" alt="" />
          <div className="card-content">
            <h3 style={{ color: "black" }}>MySQL Workbench</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
