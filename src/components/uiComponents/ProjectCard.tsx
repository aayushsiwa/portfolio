import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { MdImage } from "react-icons/md";
import styled from "styled-components";

const ImageFallback = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  animation: gradient 4s ease infinite;
  background-size: 300% 300%;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 70%
    );
    animation: shimmer 2s infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

interface CardData {
  title: string;
  description: string;
  imgSrc?: string;
  githubLink?: string;
  liveLink?: string;
  tags?: string[];
}

interface CardProps {
  data: CardData;
}

const Card = ({ data }: CardProps) => {
  return (
    <article className="group w-full max-w-sm mx-auto">
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden border border-gray-200 dark:border-gray-700">
        {/* Image Section */}
        <div className="relative h-48 sm:h-52 overflow-hidden">
          {data.imgSrc ? (
            <div className="relative w-full h-full">
              <img
                src={data.imgSrc || "/placeholder.svg"}
                alt={`${data.title} preview`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ) : (
            <ImageFallback>
              <MdImage className="text-4xl mb-2 opacity-80" />
              <span className="text-sm font-medium">No Preview Available</span>
            </ImageFallback>
          )}

          {/* Floating Action Buttons */}
          <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            {data.githubLink && (
              <a
                href={data.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-700 dark:text-gray-300 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 hover:scale-110 transition-all duration-200"
                aria-label={`View ${data.title} source code`}
              >
                <FaCode className="w-4 h-4" />
              </a>
            )}
            {data.liveLink && (
              <a
                href={data.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-700 dark:text-gray-300 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 hover:scale-110 transition-all duration-200"
                aria-label={`View ${data.title} live demo`}
              >
                <FaExternalLinkAlt className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {data.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
              {data.description}
            </p>
          </div>

          {/* Tags */}
          {data.tags && data.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {data.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
              {data.tags.length > 3 && (
                <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                  +{data.tags.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Bottom Action Bar */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
            <div className="flex gap-3">
              {data.githubLink && (
                <a
                  href={data.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-200"
                  aria-label={`View ${data.title} source code`}
                >
                  <FaCode className="w-4 h-4" />
                  <span className="hidden sm:inline">Code</span>
                </a>
              )}
              {data.liveLink && (
                <a
                  href={data.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200 hover:scale-105"
                  aria-label={`View ${data.title} live demo`}
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  <span className="hidden sm:inline">Demo</span>
                </a>
              )}
            </div>

            {/* Status Indicator */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Live
              </span>
            </div>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 pointer-events-none" />
      </div>
    </article>
  );
};

export default Card;
