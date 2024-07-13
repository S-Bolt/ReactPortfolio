import React from "react";
import Navigation from "./Navigation";
 
const Header = () => {
    return(
        <header>
            <div className="container text-center">
            <h1> My Portfolio</h1>
            <Navigation />
            </div>
        </header>
    );
};

export default Header;