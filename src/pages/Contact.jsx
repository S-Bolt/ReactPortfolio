import { useState} from "react";
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
};

function handleSubmit() {
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
};

return (
    <div className="container text-center">
        <h1>Contact Me</h1>
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
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
            <div className="form-group">
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
            <div className="form-group">
               <textarea
               value={contactForm.message}
               name="message"
               onChange={handleInputChange}
               placeholder="Message"
               className="form-control"
               />
                {errors.name && <p className="error-text">{errors.message}</p>}
            </div>
            <button type="submit" className="btn btn-primary"> Submit</button>
        </form>
    </div>
)
};

export default Contact;