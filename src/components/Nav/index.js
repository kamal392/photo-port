import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
// import { useEffect } from "react";
function Nav(props) {
  // we moved state to the app component so that we can pass it to the other component like Nav and Gallery
  // here we pass data from App.js to Nav component using props
  // defining props object
  const { categories = [], setCurrentCategory, currentCategory } = props;

  //  UseEffect  to update the tab on the browser to reflect the user's category selection.
  //  This will improve the user experience by providing the user with feedback from the website.
  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentCategory.name);
  // }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            📸
          </span>
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
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && "navActive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
