import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-light-bg2 dark:bg-dark-bg2 h-screen py-20 flex items-center"
    >
      <div className="max-w-428 mx-auto pb-10">
        <div className="flex flex-col">
          <div>
            <p className="text-light-a dark:text-dark-a uppercase font-bold text-[1.7rem] mb-4">
              Contact
            </p>
            <h3 className="text-light-txt dark:text-dark-txt text-[2.5rem] font-extrabold">
              Don't be shy! Hit me up! 👇
            </h3>
          </div>
          <div className="flex gap-32 flex-wrap mt-12">
            <div className="flex items-center gap-6">
              <a
                href="https://linkedin.com/in/aayush-siwach"
                target="_blank"
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
                <p className="text-[1.7rem] text-light-p dark:text-dark-p">
                  Aayush Siwach
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="mailto:aayush@mail.aayushsiwa.is-a.dev"
                className="flex bg-white dark:bg-dark-bg w-20 items-center justify-center h-20 shadow-md dark:shadow-dark-s rounded-full text-[#147efb] hover:scale-110 transition-transform"
              >
                <CiMail size={48} color="#5ce01a" />
              </a>
              <div className="flex flex-col gap-2">
                <h3 className="text-[1.7rem] text-light-txt dark:text-dark-txt">
                  Mail
                </h3>
                <a
                  href="mailto:aayush@mail.aayushsiwa.is-a.dev"
                  className="text-[1.7rem] text-light-p dark:text-dark-p"
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
