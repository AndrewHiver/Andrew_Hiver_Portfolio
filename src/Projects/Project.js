import React from 'react';
import "./Project.css";
import Ausy from "../Assets/Ausy.png";
import Easy from "../Assets/easysave.jpg";

const Project = () => {
    return (
        <div className="Project">
            <br /><br /><br /><br />
            <h1 style={{ color: "black", marginLeft: "-1000px" }}>Projects</h1>
            <br /><br /><br />
            <div className="card-container">
                <div className="card">
                    <img src="https://www.itesoft.com/hs-fs/hubfs/2021-ITESOFT-CMS-THEME/2-%20Pages%20solution/SLFI/slfi-demat-factures-solution-cover-ecran.jpg?noresize&height=318&name=slfi-demat-factures-solution-cover-ecran.jpg" alt="" />
                    <div className="card-content">
                        <h3 style={{ color: "black" }}>SLFI: Itesoft</h3>
                        <p>Itesoft offers a solution that enables accounting professionals to manage invoice processing flow and control the risks of fraud.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={Ausy} alt="" />
                    <div className="card-content">
                        <h3 style={{ color: "black" }}>Management tool: Ausy</h3>
                        <p>An tool serving as a proof of concept (POC) that allows users to manage their team members and projects on a planner.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={Easy} alt="" />
                    <div className="card-content">
                        <h3 style={{ color: "black" }}>Easy Save: CESI</h3>
                        <p>A software that enables backup copies through a multithreading system.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
