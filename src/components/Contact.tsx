import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-lightBg2 dark:bg-darkBg2 h-screen py-20 flex items-center"
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
                        <div className="flex items-center gap-6">
                            <a
                                href="https://linkedin.com/in/aayush-siwach"
                                target="_blank"
                                className="hover:scale-110 transition-transform"
                            >
                                <span className="flex bg-white dark:bg-darkBg  w-20 items-center justify-center h-20 shadow-md dark:shadow-darkS rounded-full text-[#147efb]">
                                    <CiLinkedin size={48} color="#5ce01a" />
                                </span>
                            </a>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-[1.7rem] text-lightTxt dark:text-darkTxt">
                                    LinkedIn
                                </h3>
                                <p className="text-[1.7rem] text-lightP dark:text-darkP">
                                    Aayush Siwach
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <a
                                href="mailto:aayush@mail.aayushsiwa.is-a.dev"
                                className="flex bg-white dark:bg-darkBg w-20 items-center justify-center h-20 shadow-md dark:shadow-darkS rounded-full text-[#147efb] hover:scale-110 transition-transform"
                            >
                                <CiMail size={48} color="#5ce01a" />
                            </a>
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
