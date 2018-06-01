import React from "react";

export default () => {
  const imgSrc = "http://bestanimations.com/Food/FastFood/hamburger-gif-10.gif";
  const altText = "A joyous hamburger";
  const creditURL = "http://bestanimations.com/Food/FastFood/FastFood.html";

  return (
    <div>
      <img src={imgSrc} alt={altText} />
      <small>
        Burger credit: <a href={creditURL}>Best Animations</a>
      </small>
    </div>
  );
};
