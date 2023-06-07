import React from "react";

function Nav(){

    // creating an array to hold other header clickable buttons
    const categories = [
      {
        name: "Commercial",
        description:
          "Photos of grocery stores, food trucks, and other commercial projects",
      },
      { name: "Portrait", description: "Portraits of people in my life" },
      {name:"food", description:"Fields, farmhouses, waterfalls, and the beauty of nature"},
      {
        name: "Landscaping",
        description: "Fields, farmhouses, waterfalls, and the beauty of nature",
      },
    ];

    // defining a function that will be called onclick event listener.
    function categorySelected(name){
        console.log(`${name} clicked`)
    }
    return (
      <header className="flex-row">
        <h2>
          <a data-testid="link" href="/">
            <span role="img" aria-label="camera">
              {" "}
              📸
            </span>{" "}
            Oh Snap!
          </a>
        </h2>

        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <a data-testid="about" href="#about">
                About me
              </a>
            </li>
            <li>
              <span>Contact </span>
            </li>

            {categories.map((category) => (
              <li className="mx-1" key={category.name}>
                <span onClick={categorySelected}>{category.name}</span>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
}







export default Nav;