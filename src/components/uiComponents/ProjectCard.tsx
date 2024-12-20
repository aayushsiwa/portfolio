const Card = ({ data }) => {
    return (
        <div className="min-w-[30rem] max-w-[30rem] h-[40rem] rounded-xl bg-lightBg2 dark:bg-darkBg2 shadow-[calc(-4px)_4px_8px_#b0dc99,calc(4px)_-4px_4px_#3e7f1c] flex flex-col relative transition-transform duration-400 hover:scale-105 hover:shadow-[0px_0px_10px_2px_#5a5a5a]">
            <div className="w-full h-1/2 object-cover rounded-t-[20px] bg-blueviolet overflow-scroll">
                <img
                    src={data.imgSrc}
                    alt=""
                    className=" border-b-lightP border"
                />
            </div>
            <div className="p-4 grid h-1/2">
                <h2 className="text-gray-800 dark:text-darkS text-center mb-[15px] font-black text-[16px]">
                    {data.title}
                </h2>
                <p className="text-gray-800 overflow-hidden dark:text-darkP">
                    {data.description}
                </p>
                <div className="mt-[10px] flex justify-between self-end">
                    <a
                        href={data.githubLink}
                        target="_blank"
                        className="text-gray-800 dark:text-darkA font-semibold no-underline hover:underline"
                    >
                        {"<Code/>"}
                    </a>
                    <a
                        href={data.liveLink}
                        target="_blank"
                        className="text-gray-800 dark:text-darkA font-semibold no-underline hover:underline"
                    >
                        {"Preview"}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
