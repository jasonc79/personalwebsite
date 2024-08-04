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
        console.log(newValue)
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
                name: "Name is required."
            }))
            valid = false
        }
        if (!contactData.email) {
            setError((prevData) => ({
                ...prevData,
                email: "Email is required."
            }))
            valid = false
        } else if (!validateEmail(contactData.email)) {
            setError((prevData) => ({
                ...prevData,
                email: "Invalid email address."
            }))
            valid = false
        }
        if (!contactData.message) {
            setError((prevData) => ({
                ...prevData,
                message: "Message is Required."
            }))
            valid = false
        }

        if (valid) {
            fetch('http://localhost:5000/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Form submitted successfully');
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Form submission failed!');
            });
            setContactData({
                name: "",
                email: "",
                message: ""
            });
        }
    };
    return (
        <>
            <form onSubmit={submitContactData}>
            <h1>Contact Form</h1>
            <h2 className='name'>Name</h2>
            <input id='name' name='name' placeholder= "insert name..." onChange={handleChange}/>
            <h2 className='email'>Email</h2>
            <input id='email' name='email' placeholder="insert email..." onChange={handleChange}/>
            <h2 className='message'>Message</h2>
            <input id='message' name='message' placeholder="write a message..." onChange={handleChange}/>
            <button>Submit</button>
            </form>
            {error.name && <span style={{color: 'red'}}>{error.name}</span>}
            {error.email && <span style={{color: 'red'}}>{error.email}</span>}
            {error.message && <span style={{color: 'red'}}>{error.message}</span>}
        </>
    )
}

export default ContactForm;