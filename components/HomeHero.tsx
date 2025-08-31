"use client";

import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

const HomeHero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-3xl mx-auto text-center px-6">
        <p className="uppercase tracking-widest text-sm text-green-600 dark:text-green-400 mb-6 font-medium">
          Welcome to My Blog & Portfolio
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Exploring Technology, Development & Innovation
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Hi! I'm Adithya, a Computer Science and Engineering Student passionate about creating seamless user experiences and sharing knowledge through insightful blog posts about modern web development and Artificial Intelligence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/blog">
            <button className="px-6 py-3 bg-green-600 dark:bg-green-500 text-white rounded-lg font-medium hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors duration-200 shadow-md hover:shadow-lg">
              Explore My Blog
            </button>
          </Link>
          
          <Link href="/about">
            <button className="px-6 py-3 bg-white dark:bg-gray-800 text-green-600 dark:text-green-600 rounded-lg font-medium border-2 border-green-600 dark:border-green-400 hover:bg-blue-100 dark:hover:bg-blue-100 transition-colors duration-200 shadow-md hover:shadow-lg">
              Learn More About Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;

