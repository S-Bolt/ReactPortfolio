import './AboutMe.css';

function AboutMe() {
    return (
        <div className="container-about-me text-right p-3 mb-5">
            
            <h2 className="p-3" > About Me</h2>
            <div className='about-me-text'>
            <p className="my-3 text-left p-3 mb-5">
                 Hi! I’m Sam, a full-stack web developer with a passion for learning, tinkering, solving problems, and using code to create whatever my mind can conjure. After deciding to make a career change and completing a coding boot camp, I realized that web development offers the perfect blend of creativity and technical challenges, allowing me to express myself while building functional applications.
                <br></br>
                <br></br>
                 As a people person, I thrive on collaboration and enjoy working with teams to bring ideas to life. When I’m not coding, you can find me somewhere outdoors, on a hike, playing sand volleyball, or maybe at a baseball game. I’m always excited to connect with fellow developers and collaborate on innovative projects!

            </p>
        </div>
         {/* Cool SVG Container */}
         <div className="svg-container">
                    <img src="/cool (1).svg" alt="Cool Illustration" className="svg-illustration" />
                </div>
        
        </div>
    );
}

export default AboutMe;