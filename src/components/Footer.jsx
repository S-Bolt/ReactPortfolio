import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="text-center py-4 bg-black">
        <div className='container'>
            <p>Connect with me!</p>
            <a href="https://github.com/s-bolt" target="_blank" rel="noopener noreferrer" className="mx-3">
          <FaGithub size={30} color="gray"/>
        </a>
        <a href="https://www.linkedin.com/in/sam-bolton-07b4a731/" target="_blank" rel="noopener noreferrer" className="mx-3">
          <FaLinkedin size={30} color="gray" />
        </a>
        </div>
      <p className='py-4'>&copy; 2024 Sam Bolton. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;