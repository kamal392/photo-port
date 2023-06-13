import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";


// Defining contactForm component with functional component method
function ContactForm() {
  // using useState and setup the initial value of state in useState function.
  // we are using useState to syn user input data with state of a component.
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  // we are using useState to handle the error state
  const [errorMessage, setErrorMessage] = useState("");
  // destructure formState so that we can use it in defaultValue attribute instead of using useState.name
  const { name, email, message } = formState;

  // defining the handleChange function this function will syn with the internal state of the component
  //   form state with the user input from the DOM.
  function handleChange(e) {
    // setFormState({...formState, name: e.target.value});

    // validating email using validEmail function.
    // it says if the <input> is email, then validate the value of that input with validateEmail function
    // and assign its return to isValid .
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      //   isValid condition statement
      // lets assign the error for the email input based on the isValid value.
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    //   console.log('errorMessage', errorMessage);

    //  here we make property name a dynamic variable that determined by the form element.
    // here we are going to wrap settler/setFormState in a condition so that the state only updates if the
    // form data has passed the quality tests.

    // if (!errorMessage) {
    //   setFormState({ ...formState, [e.target.name]: e.target.value });
    // }

    //  console.log("errorMessage", errorMessage);
  }
  //   Declaring handleSubmit function that will fire on clicking submit button
  function handleSubmit(e) {
    e.preventDefault();
     if (!errorMessage) {
       setFormState({ [e.target.name]: e.target.value });
       console.log("Form", formState);
     }
  };

  //    this return method is returning jsx
  return (
    <section>
      <h1>Contact me</h1>

      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          {/* // this onChange attribute will fire handleChange function every time user type
          something . handleChange will syn the internal state of a component
          with the user input from the DOM. */}
          <input
            type="text"
            defaultValue={name}
            // changing onChange attribute to onBlur to avoid validating input before user finish typing input.
            onBlur={handleChange}
            name="name"
          />
        </div>

        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            defaultValue={email}
            onBlur={handleChange}
            name="email"
          />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            rows="5"
          />
        </div>
        {/* This is div is going to render and display the message ,when the value of email input is not valid  */}
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
