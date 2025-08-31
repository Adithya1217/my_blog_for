import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 bg-gray-50 dark:bg-gray-900" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 max-w-3xl">
            Ready to  <span className="text-green-600 dark:text-green-400">talk</span> about anything?
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
            Lets Connect 
          </p>
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=as4906@srmist.edu.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-600 dark:bg-green-500 text-white rounded-lg font-medium hover:bg-blue-700  dark:hover:bg-blue-600 transition-colors duration-200 shadow-md hover:shadow-lg inline-flex items-center gap-2"
          >
            Let's Get in Touch
            <FaLocationArrow className="h-4 w-4" />
          </a>
        </div>
        
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            Copyright © 2025 Adithya S
          </p>

          <div className="flex items-center gap-4">
            {socialMedia?.map((info) => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 cursor-pointer flex justify-center items-center bg-green-600 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 hover:border-green-600 hover:bg-blue-600 dark:hover:border-green-400 hover: dark:hover:bg-blue-600 transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                <img src={info.img} alt={info.name} width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
