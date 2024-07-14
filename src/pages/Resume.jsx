import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Resume() {
    return(
        <div className="container text-center p-3 mb-5 ">
            <h1>Resume</h1>
            <p className="my-5">Click the link below to download my resume.</p>
            <a href="/Demo.pdf" download={"Sam_Resume.pdf"} className=" btn btn-primary">Download Resume</a>
        </div>
    )
}
export default Resume;