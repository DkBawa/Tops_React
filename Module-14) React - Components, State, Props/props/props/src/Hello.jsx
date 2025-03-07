import React from 'react'

function Hello() {
    let introJsx = () => {
        let Descri = "JSX allows you to write HTML elements in JavaScript and place them in the DOM without using functions like createElement or appendChild."
  return (
        <div>
            <h2>
           !! Module-14--Assignment--React - Components, State, Props !!
            </h2>
            <h2>
                "Hello" React App!
            </h2>
            <h2>"Welcome to JSX !"</h2>
              <p>{Descri}</p>
        </div>
    );
};
return introJsx();
}
export default Hello;