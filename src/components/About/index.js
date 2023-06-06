import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg"
// react function to create a react  component and it has 
// render method which will return jsx.
function About(){
    return(
        <section className="my-5">
            <h1 className="about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{width:"100%"}} alt="cover"/>
        </section>
        
    );
}

export default About;