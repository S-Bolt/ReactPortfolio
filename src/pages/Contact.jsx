import { useEffect, useRef, useState} from "react";
import './Contact.css';
import emailjs from '@emailjs/browser';



 //Setting useState and setContactForm function to change state
function Contact() {
    const [bottomRowCircles, setBottomRowCircles] = useState([]);
    const [secondBottomRowCircles, setSecondBottomRowCircles] = useState([]);
    const [columnCircles,setColumnCircles] = useState([])

    const [resumeRowCircles, setResumeRowCircles] = useState([]);
    const [resume2ndRowCircles, setResume2ndRowCircles] = useState([]);
    const [resumeColumnCircles, setResumeColumnCircles] = useState([]);
    const [contactForm , setContactForm ] = useState({
        name: '', 
        email: '', 
        message: ''
    });
    const [errors, setErrors]= useState({});

     // Reference to the form
     const form = useRef();

    //for generating circles
    useEffect(() => {
        //Contact Me Circle Design
        setBottomRowCircles(Array(5).fill(0));
        setSecondBottomRowCircles(Array(5).fill(0));
        setColumnCircles(Array(7).fill(0));

        //Resume Circle Design
        setResumeRowCircles(Array(5).fill(0));
        setResume2ndRowCircles(Array(5).fill(0));
        setResumeColumnCircles(Array(8).fill(0));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContactForm({ ...contactForm, [name]: value });
    }

//Function to check that all inputs are included
function validateForm() {
    const newErrors = {};
    if (!contactForm.name) newErrors.name = 'Name is required';
     if (!contactForm.email) newErrors.email = 'Email is required';
      if (!contactForm.message) newErrors.message = 'Message is required';
      return newErrors
}

function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    //if newErrors is 0 then the form can be submitted
    if (Object.values(newErrors).length === 0) {
        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,           
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,     
            form.current,            
            process.env.REACT_APP_EMAILJS_USER_ID           
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent!');
            
            // Reset form
            setContactForm({ name: '', email: '', message: '' });
        }, (error) => {
            console.error('FAILED...', error);
            alert('Failed to send message. Please try again.');
        });
    }
}

return (
    <div className="container-contact">
            <div className="form-container">
            <h2 className="contact-me-h2">Contact Me</h2>
            <div className="decorative-rectangle">

                {/*Circle Rows and Column*/}
                <div className="circle-row bottom-row">
                    {bottomRowCircles.map((_, index) => (
                        <div key={`bottom-row-circle-${index}`} className="circle"></div>
                    ))}    
                </div>    
                <div className="circle-row second-bottom-row">
                    {secondBottomRowCircles.map((_, index) => (
                        <div key={`second-bottom-row-${index}`} className="circle"></div>
                    ))}
                </div> 
                <div className="circle-column">
                    {columnCircles.map((_, index) => (
                        <div key={`circles-column-${index}`} className="circle"></div>
                    ))}
                </div>        
            </div>

                <form ref={form} className="form" onSubmit={handleSubmit}>
                    <div className="form-group my-3">
                    <input 
                    value={contactForm.name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    />
                        {errors.name && <p className="error-text">{errors.name}</p>}
                    </div>
                    <div className="form-group my-3">
                    <input 
                    value={contactForm.email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    />
                        {errors.email && <p className="error-text">{errors.email}</p>}
                    </div>
                    <div className="form-group my-3">
                    <textarea
                    value={contactForm.message}
                    name="message"
                    onChange={handleInputChange}
                    placeholder="Message"
                    className="form-control"
                    />
                        {errors.email && <p className="error-text">{errors.message}</p>}
                    </div>
                    <button type="submit" className="btn submit"> Submit</button>
                </form>
            </div>

            {/* Resume Download Button */}
            <div className="resume-container">
                  <h2 className="resume-h2">Resume</h2>
                    <div className="background-rectangle">

                         {/*Circle Rows and Column*/}
                     <div className="resume-circle-row resume-1st-circles" >
                        {resumeRowCircles.map((_, index) => (
                            <div key={`resume-1st-circles-${index}`} className="resume-circle"></div>
                        ))}
                     </div>
                     <div className="resume-circle-row resume-2nd-circles" >
                        {resume2ndRowCircles.map((_, index) => (
                            <div key={`resume-2nd-circles-${index}`} className="resume-circle"></div>
                        ))}
                     </div>
                     <div className="resume-circle-column " >
                        {resumeColumnCircles.map((_, index) => (
                            <div key={`resume-circle-column-${index}`} className="resume-circle"></div>
                        ))}
                     </div>

                </div>
                    <div className="decorative-oval"></div>
                            <a href="/Resume.pdf"  download={"Sam Bolton's Resume"} className="download btn">
                                Download 
                            </a>
                    
            </div>
    </div>
)
}

export default Contact;