// imports

import React from "react";
import ReactDOM from "react-dom/client";

// create core react element

const heading = React.createElement(
    "h1",
    {
        id: 'heading',
    },
    "Hi ! I am Learning React"
)

// console.log(heading);

// JSX React

//Recat Element

const jsxHeading = (
    <h1 id="content_heading"
        className="light_blue">
        Hi ! I am Learning React
    </h1>
)

// console.log(jsxHeading);

// Recat Functional Component

const HeaderComponent = () => (
    <div id="head">
        <h1>Header Component</h1>
        <TitleComponent />
    </div>
);

const TitleComponent = function () {
    return (
        <div id="title">
            <h1>Title Component</h1>
        </div>
    )
}


// creat react dom and apppend root inside it

const root = ReactDOM.createRoot(document.getElementById('root'));

// render the dom

// root.render(jsxHeading); // React Element

root.render(<HeaderComponent />); // React Component


