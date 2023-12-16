import React from 'react'
import { Link } from 'react-router-dom';
import "./about.css"

export default function About() {
  return (
    <div className="about">
    <div className="overlap">
      <div className="group">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="ellipse" />
          <div className="div" />
        </div>
      </div>
      <div className="frame">
        <div className="group-2">
          <p className="unexpected-encounter">
            <span className="text-wrapper">
              🚀 Unexpected Encounter: <br />
            </span>
            <span className="span">
              During my university journey, an exciting encounter with programming changed my course. In Henry, I
              discovered more than code; I found a team that fueled my love for web development.
            </span>
          </p>
        </div>
        <div className="group-3">
          <p className="growing-up-with">
            <span className="text-wrapper">
              💻Growing up with Technology: <br />
            </span>
            <span className="text-wrapper-2">
              Armed with solid knowledge in JavaScript, CSS, React, and more, I faced complex web challenges. My
              fascination with the latest trends led me to create captivating and modern experiences.
            </span>
          </p>
        </div>
        <div className="group-4">
          <p className="from-frontend-to">
            <span className="text-wrapper-3">
              🌟 From Frontend to Success: <br />
            </span>
            <span className="text-wrapper-4">
              Today, I stand out in the world of Frontend, fusing design and functionality. My projects, such as
              Capital Mind and GymGo, are testimonies of an exciting journey that I invite you to explore. Welcome to
              my development story! ✨
            </span>
          </p>
        </div>
      </div>
      <div className="group-5">
        <p className="building-digital">
          Building digital experiences that transcend code; My story is the fusion of passion, <br />
          constant learning and an unwavering commitment to the art of creating on the web.
        </p>
      </div>
      <img className="img" alt="Frame" src="frame-14.svg" />
    </div>
  </div>
  )
}
