import React from 'react'
import emoji from '../static/working-emoji.png';
import workpic from '../static/work.jpg';
import text from '../static/text.svg'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="img-side">
            <img
              src={emoji}
              alt='emoji'
              className="work-emoji"
            />
            <img
              src={workpic}
              alt="workStation"
              className="img-side__main-img"
            />
            <span>
              <img
                src={text}
                alt="text"
              />
            </span>
          </div>
          <div className="text-side">
            <h3>About me</h3>
            <h4>
              Front-end Developer <br /> based in New Delhi, India 📍
            </h4>
            <p>
              Hey, my name is Aditya, and I'm a Frontend Developer. My passion is to
              create and develop a clean UI/UX for my users.
              <br />
              <br />
              My main stack currently is React/Next.js in combination with Tailwind
              CSS and TypeScript.
            </p>
          </div>
        </div>
      </div>
    </section>

  )
}
