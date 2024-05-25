import React from "react";
// import screenshot from "../static/screenshot.png";
import github from "../static/github.svg";
import live from "../static/live.svg";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#f9f9f9] py-60 px-60 gap-20 font-[Poppins]"
    >
      <div className="">
        {/* this is the card container */}
        <div className="flex gap-20">
          <div className="">
            <div className="h-[50vh] w-[40vw] overflow-hidden hover:overflow-auto rounded-[2rem]">
              <img
                src="https://raw.githubusercontent.com/senaditya/jovian-v2/master/api/static/screenshot.png"
                className=""
                alt="Project Screenshot"
              />
            </div>
          </div>
          <div className="flex flex-col py-auto px-auto gap-y-20 text-center justify-center items-center">
            <div className="flex flex-col gap-y-16 ">
              <h2 className="font-bold text-[#2d2e32] text-5xl">
                Jovian Careers Website
              </h2>
              <p className="text-[#767676] text-4xl">
                I developed a Job Offerings application for Jovian using
                Flask, with MySQL on Aiven. This app streamlines the job
                application process, making it easier for job seekers to find
                and apply for positions, and for companies to manage
                applications efficiently. By integrating email notifications and
                hCaptcha for security, it ensures a smooth and secure
                experience. This application supports job seekers in finding
                employment opportunities, thus contributing to reducing
                unemployment and aiding in career growth, ultimately benefiting
                society by connecting talent with opportunities.
              </p>
            </div>
            <div className="flex gap-10 text-3xl">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/senaditya/jovian-v2"
                className="text-blue-500 flex items-center space-x-2 transition ease-in-out duration-300 hover:scale-110"
              >
                <span>Code</span>
                <img src={github} alt="github" />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://jovian-v2.vercel.app"
                className="text-blue-500 flex items-center space-x-2 transition ease-in-out duration-300 hover:scale-110"
              >
                <span>Live Demo</span>
                <img src={live} alt="live demo" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col py-auto px-auto gap-y-20 text-center justify-center items-center">
            <div className="flex flex-col gap-y-16 ">
              <h2 className="font-bold text-[#2d2e32] text-5xl">
                Python Tutorials Website
              </h2>
              <p className="text-[#767676] text-4xl">
                I developed a Tutorials application for new learners using
                Django, with PostgresSQL on Render. This app provides users with
                basic tutorials to various fields in python programming.
              </p>
            </div>
            <div className="flex gap-10 text-3xl">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/senaditya/python-tutorials"
                className="text-blue-500 flex items-center space-x-2 transition ease-in-out duration-300 hover:scale-110"
              >
                <span>Code</span>
                <img src={github} alt="github" />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://python-tutorials.vercel.app"
                className="text-blue-500 flex items-center space-x-2 transition ease-in-out duration-300 hover:scale-110"
              >
                <span>Live Demo</span>
                <img src={live} alt="live demo" />
              </a>
            </div>
          </div>
          <div className="">
            <div className="h-[50vh] w-[40vw] overflow-hidden hover:overflow-auto rounded-[2rem]">
              <img
                src="https://raw.githubusercontent.com/senaditya/python-tutorials/master/api/static/screenshot.png"
                className=""
                alt="Project Screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
