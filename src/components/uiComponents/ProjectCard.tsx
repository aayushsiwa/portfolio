import { FaCode } from "react-icons/fa6";
import { MdOutput } from "react-icons/md";

const Card = ({ data }) => {
    return (
        <div className="w-[25vw] h-[50vh] overflow-hidden rounded-xl bg-lightBg2 dark:bg-darkBg2 shadow-[calc(-4px)_4px_8px_#b0dc99,calc(4px)_-4px_4px_#3e7f1c] flex flex-col relative transition-transform duration-500 ease-in-out hover:shadow-[0px_0px_10px_2px_#5a5a5a] hover:z-10 hover:relative">
            <div className="w-full h-1/2 object-cover bg-blueviolet overflow-scroll">
                <img
                    src={data.imgSrc}
                    alt=""
                    className="border-b-lightP rounded-t-xl border transform transition-transform duration-500 ease-in-out hover:-translate-y-1/4"
                />
            </div>
            <div className="p-2 grid h-1/2 transition-all duration-500 ease-in-out hover:h-full">
                <h2 className="text-gray-800 dark:text-darkS text-center mb-1 font-black text-base">
                    {data.title.toUpperCase()}
                </h2>
                <p className="text-gray-800 overflow-hidden dark:text-darkP text-sm transition-all duration-500 ease-in-out hover:overflow-visible hover:max-h-full">
                    {data.description}
                </p>
                <div className="mt-1 flex justify-between self-end">
                    <a
                        href={data.githubLink}
                        target="_blank"
                        className="text-gray-800 dark:text-darkS font-semibold no-underline hover:underline bg-lightS rounded-xl px-4 text-3xl transition-all duration-500 ease-in-out"
                    >
                        <FaCode />
                    </a>
                    <a
                        href={data.liveLink}
                        target="_blank"
                        className="text-gray-800 dark:text-darkS font-semibold no-underline hover:underline bg-lightS rounded-xl px-4 text-3xl transition-all duration-500 ease-in-out"
                    >
                        <MdOutput />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
