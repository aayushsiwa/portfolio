// import emoji from "../assets/working-emoji.png";
// import workpic from "../assets/work.jpg";
// import text from "../assets/text.svg";

const frontend = ["css", "tailwind", "bootstrap", "svelte", "react", "next"];

const backend = [
  "django",
  "flask",
  "fastapi",
  "nodejs",
  "express",
  "mongodb",
  "postgres",
  "sqlite",
  "mysql",
  "postman",
  "supabase",
  "firebase",
];

const tools = [
  "vscode",
  "git",
  "github",
  "bash",
  "aws",
  "docker",
  "vercel",
  "vite",
  "figma",
];

const languages = ["js", "ts", "html", "css", "c", "cpp", "python", "java"];

export default function About() {
  return (
    <section
      className="bg-light-bg2 dark:bg-dark-bg2 h-screen flex flex-col"
      id="about"
    >
      <div className="mx-auto pb-10 max-w-[90vw]">
        <div className="flex justify-center pt-24 h-260 gap-8 relative">
          <div className="relative w-1/2 max-h-[50vh]">
            <div className="pb-4">
              <h3 className="text-2xl text-light-a dark:text-dark-a font-bold mb-4 ">
                About
              </h3>
              <p className="text-2xl font-[Mulish] text-light-p dark:text-dark-txt font-medium leading-9">
                Junior at{" "}
                <a
                  href="https://kiit.ac.in/"
                  target="_blank"
                  className="font-semibold"
                >
                  KIIT
                </a>{" "}
                with a passion for development and a strong foundation in modern
                frameworks. Eager to bring my technical expertise, innovative
                mindset, and adaptability to a dynamic software engineering role
                in a cutting-edge tech environment.
              </p>
            </div>
          </div>

          <div className="w-1/2">
            <div>
              <div className="text-light-p dark:text-dark-p flex items-center sm:hidden md:flex mx-auto">
                <p className="pe-4 border-r-2 text-dark-s dark:text-light-s border-light-a dark:border-dark-a font-semibold font-[Mulish] text-3xl">
                  Languages
                </p>
                <div>
                  <ul className=" ps-4 list-none flex flex-wrap items-center">
                    {languages.map((skill) => (
                      <li key={skill}>
                        <img
                          className="transition ease-in duration-300 hover:scale-100 scale-75 hover:-translate-y-2 py-2"
                          src={`https://skillicons.dev/icons?i=${skill}`}
                          alt={`${skill}-icon`}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="text-light-p dark:text-dark-p flex items-center sm:hidden md:flex mx-auto">
                <p className="pe-4 border-r-2 text-dark-s dark:text-light-s border-light-a dark:border-dark-a font-semibold font-[Mulish] text-3xl">
                  Frontend
                </p>
                <div>
                  <ul className="ps-4 list-none flex flex-wrap items-center">
                    {frontend.map((skill) => (
                      <li key={skill}>
                        <img
                          className="transition ease-in duration-300 hover:scale-100 scale-75 hover:-translate-y-2 py-2"
                          src={`https://skillicons.dev/icons?i=${skill}`}
                          alt={`${skill}-icon`}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className=" text-light-p dark:text-dark-p flex items-center sm:hidden md:flex mx-auto">
                <p className="pe-4 border-r-2 text-dark-s dark:text-light-s border-light-a dark:border-dark-a font-semibold font-[Mulish] text-3xl">
                  Backend
                </p>
                <div>
                  <ul className="ps-4 list-none flex flex-wrap items-center">
                    {backend.map((skill) => (
                      <li key={skill}>
                        <img
                          className="transition ease-in duration-300 hover:scale-100 scale-75 hover:-translate-y-2 py-2"
                          src={`https://skillicons.dev/icons?i=${skill}`}
                          alt={`${skill}-icon`}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="text-light-p dark:text-dark-p flex items-center sm:hidden md:flex mx-auto">
                <p className="pe-4 border-r-2 text-dark-s dark:text-light-s border-light-a dark:border-dark-a font-semibold font-[Mulish] text-3xl">
                  Tools
                </p>
                <div>
                  <ul className="ps-4 list-none flex flex-wrap items-center">
                    {tools.map((skill) => (
                      <li key={skill}>
                        <img
                          className="transition ease-in duration-300 hover:scale-100 scale-75 hover:-translate-y-2 py-2"
                          src={`https://skillicons.dev/icons?i=${skill}`}
                          alt={`${skill}-icon`}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
