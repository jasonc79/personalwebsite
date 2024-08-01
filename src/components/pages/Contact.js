import React from "react";
import './Contact.css';
// function onNameChange(event) {
//     this.setState({name: event.target.value})
// }
// function onEmailChange(event) {
//     this.setState({email: event.target.value})
// }
// function onMessageChange(event) {
//     this.setState({message: event.target.value})
// }
// function handleSubmit(event) {
// }

const Contact = () => {
    return (
    <>
    <div className="container">
        <div className="column">
            <h1 className="contact-title">My Contacts</h1>
        </div>
        <div className="column">
            <a className ="btn linkedin" href="https://www.linkedin.com/in/jason-cheung-33337a206/"><i class="fa-brands fa-linkedin-in"></i></a>
            <h2 className="linkedIn-name">Jason Cheung</h2>
        </div>
        <div className="column">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <h2 className="email-title">jcheung379@gmail.com</h2>
        </div>
        <div className="column">
            <i class="fa-solid fa-phone"></i>
            <h2 className="phone-title">0416677252</h2>
        </div>
        <div className="column">
            <a className="btn github" href="https://github.com/jasonc79"><i class="fab fa-github"></i></a>
            <h2 className="github-title">jasonc79</h2>
        </div>
    </div>
    </>);
  };
export default Contact;
