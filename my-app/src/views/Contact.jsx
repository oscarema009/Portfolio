import React from 'react'
import { Link } from 'react-router-dom'
import './contact.css'

export default function Contact() {
  return (
    <div className="contact">
    <div className="overlap">
      <div className="group">
        <div className="overlap-group">
          <div className="ellipse" />
          <div className="div" />
        </div>
      </div>
      <div className="contacto">
        <div className="frame">
          <p className="subtitulo">Any question or remarks? Let us know!</p>
          <div className="titulo">Get in Touch</div>
          <div className="inputs">
            <div className="overlap-group-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper">Enter your name</div>
              </div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-2">Enter your email</div>
              </div>
            </div>
            <div className="mensaje">
              <div className="overlap-2">
                <div className="text-wrapper-3">Type your message here</div>
              </div>
            </div>
          </div>
          <button className="button">
            <div className="overlap-3">
              <div className="text-wrapper-4">Submit</div>
            </div>
          </button>
          <div className="informacion">
            <div className="overlap-4">
              <img className="vector" alt="Vector" src="vector.svg" />
              <img className="img" alt="Vector" src="image.svg" />
              <a
                className="text-wrapper-5"
                href="mailto:oscar.industial@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                /in/oscaremmanuelvelazquez
              </a>
              <a
                className="text-wrapper-6"
                href="mailto:oscar.industial@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                oscar.industial@gmail.com
              </a>
              <img className="element" alt="Element" src="45ee9eaa-9c5b-4315-b75a-3a407cf6f04a-1.png" />
            </div>
          </div>
        </div>
      </div>
      <p className="ready-to-bring">
        Ready to bring innovative projects to life. I&#39;m here to answer any questions and explore exciting
        opportunities. Your next project could be ours! Contact me whenever you want. ✌️🚀
      </p>
    </div>
  </div>
  )
}
