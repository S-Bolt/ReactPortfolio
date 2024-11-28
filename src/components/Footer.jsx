/* eslint-disable react/no-unescaped-entities */
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css'

function Footer() {
  return (
    <footer className=" text-white">
      <div className="container mx-auto text-center w-full">
        <p className="mb-3 text-lg font-semibold w-full">Let's Connect!</p>
        <div className="flex justify-center items-center space-x-6 w-full">
          <a 
            href="https://github.com/s-bolt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-white transition-colors duration-300 m-3"
          >
            <FaGithub size={30} color="gray" className="hover:text-gray-200 transition-all duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/sam-bolton-07b4a731/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={30} color="gray" className="hover:text-gray-200 transition-all duration-300 m-3" />
          </a>
        </div>
        <p className="py-2 w-full">&copy; 2024 Sam Bolton. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;