// Landing.js
import React from 'react';
import { Link } from 'react-router-dom';
//import "./Landing.css";

import foto from "../assets/foto.jpg"; // Asegúrate de tener la ruta correcta a tu imagen de perfil

export default function Landing() {
  return (
    <div className="landing">
      <div className="overlap">
        <div className="overlap-group">
          <img className="profile-image" src={foto} alt="Oscar" />
          <div className="group">
            <div className="div">
              <div className="rectangle" />
              <p className="hi-i-m-oscar-an">Hi! I'm Oscar, an enthusiastic Full Stack - Front End developer.</p>
            </div>
            <p className="motivational-text">Transforming ideas into digital experiences</p>
            <div className="buttons">
              <Link to="/about" className="button">About me</Link>
              <Link to="/contact" className="button">Contact</Link>
            </div>
          </div>
        </div>
        <div className="skills">
          {/* Aquí puedes agregar las pequeñas imágenes de tus skills */}
          <img className="skill-icon" src="..assets\javascript.png" alt="javascript" />
          <img className="skill-icon" src="..assets\react.png" alt="react" />
          {/* ... Agrega más imágenes según sea necesario */}
        </div>
      </div>
    </div>
  );
}
