import React, { useState } from "react";

// Defining contactForm component with functional component method
function ContactForm() {
  // using useState and setup the initial value of state in useState function.
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  // destructure formState so that we can use it in defaultValue attribute instead of using useState.name
  const { name, email, message } = formState;

  // defining the handleChange function this function will syn with the internal state of the component
  //   form state with the user input from the DOM.
  function handleChange(e) {
    // setFormState({...formState, name: e.target.value});

    //  here we make property name a dynamic variable that determined by the form element.
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  //   Declaring handleSubmit function that will fire on clicking submit button
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

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
            onChange={handleChange}
            name="name"
          />
        </div>

        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            defaultValue={email}
            onChange={handleChange}
            name="email"
          />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            onChange={handleChange}
            rows="5"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
