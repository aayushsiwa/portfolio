import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="bg-white h-[85vh] py-[30rem]">
      <div className="max-w-[107rem] mx-auto pb-10">
        <div className="flex flex-col">
          <div className="">
            <p className="text-[#147efb] uppercase font-bold text-[1.7rem] mb-4">
              contact
            </p>
            <h3 className="text-[#2d2e32] text-[2.5rem] font-extrabold">
              Don't be shy! Hit me up! 👇
            </h3>
          </div>
          <div className="flex gap-32 flex-wrap mt-24">
            <div className="flex items-center gap-6">
              <span className="flex bg-white w-20 items-center justify-center h-20 shadow-md rounded-[50%] text-[#147efb]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  height={30}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-map-search"
                >
                  <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5" />
                  <path d="M9 4v13" />
                  <path d="M15 7v5" />
                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M20.2 20.2l1.8 1.8" />
                </svg>
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[1.7rem] text-[#2d2e32]">Location</h3>
                <p className="text-[1.7rem] text-[#767676]">New Delhi, India</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="flex bg-white w-20 items-center justify-center h-20 shadow-md rounded-[50%] text-[#147efb]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  height={30}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                  <path d="M3 7l9 6l9 -6" />
                </svg>
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[1.7rem] text-[#2d2e32]">Mail</h3>
                <a
                  href="mailto:aditya.sen1hl@gmail.com"
                  className="text-[1.7rem] text-[#767676]"
                >
                  aditya.sen1hl@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
