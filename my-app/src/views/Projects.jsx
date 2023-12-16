import React from 'react'
import { Link } from 'react-router-dom'
import "./projects.css"

export default function Projects() {
  return (
    <div className="portfolio">
      <div className="overlap">
        <div className="group">
          <div className="overlap-group">
            <div className="ellipse" />
            <div className="div" />
          </div>
        </div>
        <div className="frame">
          <div className="frame-2">
            <div className="text-wrapper">Capital Minds</div>
            <div className="text-wrapper">GYMGO</div>
            <div className="text-wrapper">PI DOGS</div>
          </div>
          <div className="frame-3">
            <img className="rectangle" alt="Rectangle" src="rectangle-7.png" />
            <img className="rectangle" alt="Rectangle" src="rectangle-9.png" />
            <img className="img" alt="Rectangle" src="rectangle-10.png" />
          </div>
          <div className="frame-3">
            <p className="boosting-financial">
              Boosting financial success with responsive web design. Contributed agile Frontend development and strong
              skills in React and Tailwind CSS.
              <br />
              Techs: Javascript, React, HTML, CCS, Tailwind.css, Figma.
            </p>
            <p className="boosting-financial">
              Boosting financial success with responsive web design. Contributed agile Frontend development and strong
              skills in React and Tailwind CSS.
              <br />
              Techs: Javascript, React, HTML, CCS, Tailwind.css, Figma.
            </p>
            <p className="boosting-financial">
              Boosting financial success with responsive web design. Contributed agile Frontend development and strong
              skills in React and Tailwind CSS.
              <br />
              Techs: Javascript, React, HTML, CCS, Tailwind.css, Figma.
            </p>
          </div>
        </div>
        <p className="p">
          Explore the digital fabric of my creativity and skills. My portfolio is the canvas where ideas come to life,
          and each project is a story told through code and design. Welcome to a visual and functional journey!
        </p>
      </div>
    </div>
  )
}
