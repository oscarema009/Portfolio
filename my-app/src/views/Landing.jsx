import React from 'react'
import { Link } from 'react-router-dom'
import "./Landing.css"

export default function Landing() {
    return (
      <div className="landing">
      <div className="overlap">
        <div className="overlap-group">
          <p className="text-wrapper">Transforming ideas into digital experiences</p>
          <div className="group">
            <div className="div">
              <div className="rectangle" />
              <p className="hi-i-m-oscar-an">Hi! I&#39;m Oscar, an enthusiastic Full Stack - Front End developer.</p>
            </div>
          </div>
        </div>
        <div className="rectangle-wrapper">
          <div className="rectangle-2" />
        </div>
        <div className="frame">
          <div className="overlap-group-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-2">About me!</div>
            </div>
          </div>
          <div className="frame-2">
            <div className="text-wrapper-3">Contact</div>
          </div>
        </div>
        <img className="img" alt="Group"  />
      </div>
    </div>
    )
}