/* eslint-disable react/no-unescaped-entities */
import './AboutMe.css';

function AboutMe() {
    return (
            <div className='split-panel'>
                <div className='about-me-text'>
                    <h2> 
                       <span className="highlight-text">Ab</span>out Me
                    </h2>
                    <p>
                        Hi! I’m Sam, a full-stack developer with a passion for learning, tinkering, and coding. This year, I decided it was time for a change and many months later successfully completed a coding boot camp.  The result of that decision is that I became completely hooked on coding.  The satisfaction of bringing an idea to life or the thrill of solving difficult bugs and problems really gets me going.
                    </p>    
                    <p>
                        I enjoy working with others who have the same passion for the craft.  I'm always excited to connect with fellow developers and collaborate and innovative projects.
                    </p>
                    <p>
                        When I'm not coding, you can find me enjoying outdoor activities, on a hike, playing sand volleyball, or maybe at a baseball gamee
                    </p>
                </div>
                <div className="img-container">
                    <img src="Group 18.png" alt="technologies image" />
                </div>
         </div>
    );
}

export default AboutMe;