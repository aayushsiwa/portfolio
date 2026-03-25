import { Project } from "@/types/Project";
import { FaCode, FaStar } from "react-icons/fa6";
import { MdOutput } from "react-icons/md";
import Image from "next/image";

const Card = ({
  data,
  isAdminView,
}: {
  data: Project;
  isAdminView?: boolean;
}) => {
  return (
    <div className="w-full rounded-xl bg-light-bg2 dark:bg-dark-bg2 shadow-[calc(-4px)_4px_8px_var(--color-dark-p),calc(4px)_-4px_4px_var(--color-dark-s)] flex flex-col overflow-hidden transition-transform duration-500 ease-in-out hover:shadow-[0px_0px_10px_2px_var(--color-dark-bg2)] hover:z-10 relative">
      {data.featured && isAdminView && (
        <div className="absolute top-2 right-2 z-10 bg-yellow-400 text-white rounded-full p-1.5 shadow-md">
          <FaStar className="text-xs" />
        </div>
      )}

      <div className="w-full h-48 sm:h-52 bg-transparent overflow-hidden relative">
        {data.img_src ? (
          <Image
            fill
            src={data.img_src}
            alt={data.title}
            className="rounded-t-xl object-cover transform transition-transform duration-500 ease-in-out hover:-translate-y-1/4"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">No Image</span>
          </div>
        )}
      </div>

      {/* Text & Icons */}
      <div className="p-2 grid h-1/2 transition-all duration-500 ease-in-out hover:h-full">
        <h2 className="text-gray-800 dark:text-dark-s text-center mb-2 font-black text-base">
          {data.title.toUpperCase()}
        </h2>

        <p className="text-gray-800 overflow-hidden dark:text-dark-p text-sm transition-all duration-500 ease-in-out hover:overflow-visible hover:max-h-full">
          {data.description}
        </p>

        <div
          className={`mt-3 flex w-full items-center ${data.deployment ? "justify-between" : "justify-center"}`}
        >
          <div className="flex">
            <a
              href={data.gh_repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${data.title}`}
              className="text-gray-800 dark:text-dark-a font-semibold no-underline hover:underline bg-light-s dark:bg-dark-s px-4 py-2 rounded-xl text-3xl transition-all duration-500 ease-in-out"
            >
              <FaCode />
            </a>
          </div>

          {data.deployment && (
            <div className="flex">
              <a
                href={data.deployment}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live deployment for ${data.title}`}
                className="text-gray-800 dark:text-dark-a font-semibold no-underline hover:underline bg-light-s dark:bg-dark-s px-4 py-2 rounded-xl text-3xl transition-all duration-500 ease-in-out"
              >
                <MdOutput />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
