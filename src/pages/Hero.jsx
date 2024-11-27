import './Hero.css'


function Hero() {
    return (
        <div className="hero">
            <div className="banner">
                <div className="words">
                    <h1>SAM BOLTON</h1>
                    <p>FULL STACK DEVELOPER</p>
                    <hr className="decorative-hr"></hr>
                    
                </div>
               
                    <img className="headshot-img" src="Group 13 (3).png" alt="Sam Bolton Headshot" />
               
            </div>
        </div>
    );
}

export default Hero;