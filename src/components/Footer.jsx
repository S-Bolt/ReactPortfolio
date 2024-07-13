import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="text-center py-4">
        <div className='container'>
            <p>Connect with me!</p>
            <a href="https://github.com/s-bolt" target="_blank" rel="noopener noreferrer" className="mx-2">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/sam-bolton-07b4a731/" target="_blank" rel="noopener noreferrer" className="mx-2">
          <FaLinkedin size={30} />
        </a>
        </div>
      <p>&copy; 2024 Sam Bolton. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;