import React from 'react';
import "./Detail.css";

const Detail = () => {
    return (
        <div className="Detail">
            <br /><br /><br /><br />
            <h1 style={{ color: "black", marginLeft: "-1000px" }}>Detail</h1>
            <br /><br /><br />
            <div className="card-container">
                <div className="card">
                    <img src="https://cdn.icon-icons.com/icons2/2642/PNG/512/google_mail_gmail_logo_icon_159346.png" alt="" />
                    <div className="card-content">
                        <h3 style={{ color: "black" }}>Mail</h3>
                        <p>andrew.hiver@gmail.com</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://t4.ftcdn.net/jpg/04/63/63/59/360_F_463635929_H4y7oelFy8GVclf5XGKYe6N9OEi0Fjyn.jpg" alt="" />
                    <div className="card-content">
                        <h3 style={{ color: "black" }}>Phone number</h3>
                        <p>+33 6 72 54 92 41</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="" />
                    <div className="card-content">
                        <h3 style={{ color: "black" }}>LinkedIn</h3>
                        <a href="https://fr.linkedin.com/in/andrew-hiver-818048229">Contact me here</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
