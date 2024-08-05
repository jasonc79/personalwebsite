import axios from 'axios';
import { React, useState } from 'react';
import './ContactForm.css';
const ContactForm = () => {
    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        message: ""
    })
    // Error checking for contact form
    const [error, setError] = useState({
        name: "",
        email: "",
        message: ""
    })
    const handleChange = (e) => {
        const name = e.target.name
        const newValue = e.target.value
        setContactData((prevalue) => {
            return {
                ...prevalue,
                [name]: newValue
            }
        });
        setError({
            name: "",
            email: "",
            message: ""
        });
    };
    const submitContactData = (e) => {
        e.preventDefault()
        let valid = true;
        const validateEmail = (email) => {
            const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return re.test(String(email).toLowerCase());
        };
        const userData = {
            name: contactData.name,
            email: contactData.email,
            message: contactData.message
        };
        if (!contactData.name) {
            setError((prevData) => ({
                ...prevData,
                name: "name, "
            }))
            valid = false
        }
        if (!contactData.email) {
            setError((prevData) => ({
                ...prevData,
                email: "email, "
            }))
            valid = false
        } else if (!validateEmail(contactData.email)) {
            setError((prevData) => ({
                ...prevData,
                email: "email, "
            }))
            valid = false
        }
        if (!contactData.message) {
            setError((prevData) => ({
                ...prevData,
                message: "message"
            }))
            valid = false
        }

        if (valid) {
            axios.post('http://localhost:5000/send', userData)
            .then((response) => console.log(response))
            .catch((error) => console.error(error))
            setContactData({
                name: "",
                email: "",
                message: ""
            });
            alert("Submission was successful!")
        }
    };
    return (
        <>
            <form className="contact-form" onSubmit={submitContactData}>
            <h1 className="contact-form-title">Contact Form</h1>
            <h2 className='name'>Name</h2>
            <input id='name' name='name' placeholder= "insert name..." onChange={handleChange}/>
            <h2 className='email'>Email</h2>
            <input id='email' name='email' placeholder="insert email..." onChange={handleChange}/>
            <h2 className='message'>Message</h2>
            <input id='message' name='message' placeholder="write a message..." onChange={handleChange}/>
            <button className='submit-btn'>Submit</button>
            </form>
            {error.name && <span style={{color: 'red'}}>{error.name}</span>}
            {error.email && <span style={{color: 'red'}}>{error.email}</span>}
            {error.message && <span style={{color: 'red'}}>{error.message}</span>}
            {(error.name || error.email || error.message) && <span style={{color: 'red'}}> are invalid.</span>}
        </>
    )
}

export default ContactForm;