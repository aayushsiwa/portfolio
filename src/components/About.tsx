import emoji from "../assets/working-emoji.png";
import workpic from "../assets/work.jpg";
import text from "../assets/text.svg";
import geo from "../assets/geo.svg";

export default function About() {
    return (
        <section className="bg-lightBg dark:bg-darkBg h-screen flex flex-col" id="about">
            <div className="max-w-[107rem] mx-auto pb-10">
                <div className="flex justify-center items-center h-[65rem] gap-40 relative">
                    <div className="relative">
                        <img
                            src={emoji}
                            alt="emoji"
                            className="absolute z-10 w-24 mt-[30rem] ms-[45rem]"
                        />
                        <img
                            src={workpic}
                            alt="workStation"
                            className="w-[100rem] h-[35rem] rounded-3xl"
                        />
                        <span className="w-50 h-50 absolute bg-white dark:bg-darkBg rounded-full top-[24rem] ml-[30rem] right-[-8rem] hover:bg-[#147efb]">
                            <img
                                className="w-[19rem] animate-rotate"
                                src={text}
                                alt="text"
                            />
                        </span>
                    </div>
                    <div className="pe-6">
                        <h3 className="text-[1.7rem] text-lightA dark:text-darkA font-bold mb-4 uppercase">
                            About me
                        </h3>
                        <h4 className="text-[2.5rem] font-[Poppins,sans-serif] leading-[3.9rem] mb-8 text-lightTxt dark:text-darkTxt font-extrabold">
                            Web Developer <br /> based in Bhubaneshwar, Odisha,
                            India
                            <a
                                href="https://maps.app.goo.gl/uAToS3VVq35UnpTc8"
                                className="inline-flex items-center text-lightA dark:text-darkA transition-colors"
                            >
                                <img src={geo} alt="Location" className="h-6 w-6 inline" />
                            </a>
                        </h4>
                        <p className="text-[1.7rem] font-[Mulish] text-lightP dark:text-darkP font-medium leading-9">
                            Hey, my name is Aayush, and I'm a Web Developer. My
                            passion is to create and develop a clean UI/UX for
                            my users.
                            <br />
                            <br />
                            My main stack currently is React/Next.js in
                            combination with Tailwind CSS and TypeScript.
                            <br />
                            <br />
                            Checkout my resume
                            <a
                                href="https://1drv.ms/b/s!AsZYqOS4GAfwzBHEMTazIPwcI5W7"
                                className="text-lightA dark:text-darkA"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {" "}
                                here.
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
