import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Hero from "./Hero";
import './Home.css'

function Home(){
    return (
        <div className="container-home">
            <section id="hero">
                <Hero />
            </section>
            <section id="about-me">
                <AboutMe />
            </section>
            <section id="portfolio">
                <Portfolio />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    )
}

export default Home;