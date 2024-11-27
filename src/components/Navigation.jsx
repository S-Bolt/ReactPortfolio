import { useState, useEffect } from 'react'
import './Navigation.css';

function Navigation() {
    const [isScrolled, setIsScrolled ] = useState(false);
    

    //Change the translucency of navbar once leaving hero.jsx
    useEffect(() => {
        const handleScroll = () => {
          
          if (window.scrollY > window.innerHeight) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
       
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    return(
      <nav className={`navbar ${isScrolled ? 'navbar-solid' : 'navbar-translucent'}`}>
      <div className="logo">
          SB
      </div>
      <ul className="nav-links">
          <li className="nav-item">
              <a href="#hero" className="nav-link">
                  Home
              </a>
          </li>
          <li className="nav-item">
              <a href="#about-me" className="nav-link">
                  About Me
              </a>
          </li>
          <li className="nav-item">
              <a href="#portfolio" className="nav-link">
                  Portfolio
              </a>
          </li>
          <li className="nav-item">
              <a href="#contact" className="nav-link">
                  Contact
              </a>
          </li>
      </ul>
  </nav>
);
}

export default Navigation;