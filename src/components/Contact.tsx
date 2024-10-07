export default function Contact() {
  return (
      <section
          id="contact"
          className="bg-lightBg dark:bg-darkBg h-screen py-20 flex items-center"
      >
          <div className="max-w-[107rem] mx-auto pb-10">
              <div className="flex flex-col">
                  <div>
                      <p className="text-lightA dark:text-darkA uppercase font-bold text-[1.7rem] mb-4">
                          Contact
                      </p>
                      <h3 className="text-lightTxt dark:text-darkTxt text-[2.5rem] font-extrabold">
                          Don't be shy! Hit me up! 👇
                      </h3>
                  </div>
                  <div className="flex gap-32 flex-wrap mt-12">
                      {/* Location Section */}
                      <div className="flex items-center gap-6">
                          <a
                              href="https://maps.app.goo.gl/uAToS3VVq35UnpTc8"
                              className="hover:scale-110 transition-transform"
                          >
                              <span className="flex bg-white dark:bg-darkElement w-20 items-center justify-center h-20 shadow-md rounded-full text-[#147efb]">
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
                                      className="stroke-lightA dark:stroke-darkA"
                                  >
                                      <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5" />
                                      <path d="M9 4v13" />
                                      <path d="M15 7v5" />
                                      <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                      <path d="M20.2 20.2l1.8 1.8" />
                                  </svg>
                              </span>
                          </a>
                          <div className="flex flex-col gap-2">
                              <h3 className="text-[1.7rem] text-lightTxt dark:text-darkTxt">
                                  Location
                              </h3>
                              <p className="text-[1.7rem] text-lightP dark:text-darkP">
                                  Bhubaneshwar, Odisha
                              </p>
                          </div>
                      </div>
                      {/* Email Section */}
                      <div className="flex items-center gap-6">
                          <span className="flex bg-white dark:bg-darkElement w-20 items-center justify-center h-20 shadow-md rounded-full text-[#147efb]">
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
                                  className="stroke-lightA dark:stroke-darkA"
                              >
                                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                                  <path d="M3 7l9 6l9 -6" />
                              </svg>
                          </span>
                          <div className="flex flex-col gap-2">
                              <h3 className="text-[1.7rem] text-lightTxt dark:text-darkTxt">
                                  Mail
                              </h3>
                              <a
                                  href="mailto:aayush@mail.aayushsiwa.is-a.dev"
                                  className="text-[1.7rem] text-lightP dark:text-darkP"
                              >
                                  aayush@mail.aayushsiwa.is-a.dev
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}
