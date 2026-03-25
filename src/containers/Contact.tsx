import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

export const Contact = () => {
  const contactEmail = "aayush@aayushsiwa.is-a.dev";
  return (
    <section
      id="contact"
      className="bg-light-bg2 dark:bg-dark-bg2 min-h-screen py-20 flex items-center pt-32"
    >
      <div className="max-w-[90vw] mx-auto pb-10">
        <div className="flex flex-col">
          <div>
            <p className="text-light-a dark:text-dark-a uppercase font-bold text-[1.7rem] mb-4">
              Contact
            </p>
            <h3 className="text-light-txt dark:text-dark-txt text-[2.5rem] font-extrabold">
              Don&apos;t be shy! Hit me up! 👇
            </h3>
          </div>
          <div className="flex gap-32 flex-wrap mt-12">
            <div className="flex items-center gap-6">
              <a
                href="https://linkedin.com/in/aayushsiwa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Aayush Siwach's LinkedIn profile in a new tab"
                className="hover:scale-110 transition-transform"
              >
                <span className="flex bg-white dark:bg-dark-bg  w-20 items-center justify-center h-20 shadow-md dark:shadow-dark-s rounded-full text-[#147efb]">
                  <CiLinkedin size={48} color="#5ce01a" />
                </span>
              </a>
              <div className="flex flex-col gap-2">
                <h3 className="text-[1.7rem] text-light-txt dark:text-dark-txt">
                  LinkedIn
                </h3>
                <p className="text-xl md:text-[1.7rem] text-light-p dark:text-dark-p">
                  Aayush Siwach
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a
                href={`mailto:${contactEmail}`}
                rel="noopener noreferrer"
                aria-label="Send an email to aayush@aayushsiwa.is-a.dev"
                className="flex bg-white dark:bg-dark-bg w-20 items-center justify-center h-20 shadow-md dark:shadow-dark-s rounded-full  hover:scale-110 transition-transform"
              >
                <CiMail size={48} color="#5ce01a" />
              </a>
              <div className="flex flex-col gap-2">
                <h3 className="text-[1.7rem] text-light-txt dark:text-dark-txt">
                  Mail
                </h3>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-xl md:text-[1.7rem] text-light-p dark:text-dark-p"
                >
                  {contactEmail}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
