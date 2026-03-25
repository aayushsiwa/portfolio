"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-dark-bg px-4">
      <h1 className="text-6xl font-bold text-light-p dark:text-dark-p mb-4">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-light-p dark:text-dark-p mb-2">
        Oops! Page not found
      </h2>
      <p className="text-dark-s mb-6 text-center max-w-sm">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-light-p dark:bg-dark-s text-white dark:text-light-s rounded-lg shadow hover:bg-dark-p hover:text-light-p dark:hover:bg-light-s dark:hover:text-light-p transition-all duration-500"
      >
        Go Back Home
      </Link>
    </div>
  );
}
