"use client";

import Link from "vinext/shims/link";

const Scroll = () => {
  return (
    <div className="animate-bounce animate-infinite animate-duration-1500 animate-ease-in-out">
      <Link href="#about">
        <div>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M11.9997 13.1716L7.04996 8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"
              className="fill-light-p dark:fill-dark-p"
            ></path>
          </svg>
        </div>
        <span className="text-light-p dark:text-dark-p">Scroll</span>
      </Link>
    </div>
  );
};

export default Scroll;
