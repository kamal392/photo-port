import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";

function App() {
  // we lift up the categories state from a Nav component to App so that we can pass it to its children component.
  const [categories] = useState([
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  // using useState hook to condition what user click on navigation bar.
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav
        // here we have setup the attribute value so that we can pass it to Nav through props.
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {/* <ContactForm></ContactForm>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About> */}
        {/* using condition to render contact component to render only when the use click on contact.
        otherwise render <Gallery> and <About> */}
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;


