import { useState} from "react";
import './Contact.css';


 //Setting useState and setContactForm function to change state
function Contact() {
    const [contactForm , setContactForm ] = useState({
        name: '', 
        email: '', 
        message: ''
    });
    const [errors, setErrors]= useState({});

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
    if (Object.value(newErrors).length === 0) {
        console.log('Form sumbitted:', contactForm);
        alert('Message sent!');

        //reset form
        setContactForm({ name: '', email: '', message: '' })
    }
}

return (
    <div className="container-contact p-3 mb-5">
        <h2>Contact Me</h2>
        <div className="contact-content">
                     {/* Resume Download Button */}
                     <div className="resume-container">
                   <img src='/resume.svg' alt="Resume Logo" className="resume-logo" />
                            <a href="/Resume.pdf"  download={"Sam Bolton's Resume"} className="btn  mt-3">
                                Download My Resume
                            </a>
                    </div>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
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
                        {errors.name && <p className="error-text">{errors.email}</p>}
                    </div>
                    <div className="form-group my-3">
                    <textarea
                    value={contactForm.message}
                    name="message"
                    onChange={handleInputChange}
                    placeholder="Message"
                    className="form-control"
                    />
                        {errors.name && <p className="error-text">{errors.message}</p>}
                    </div>
                    <button type="submit" className="btn submit"> Submit</button>
                </form>
            </div>

        
        </div>
    </div>
)
}

export default Contact;