// imports

import React from "react";
import ReactDOM from "react-dom/client";

// create core react element

const heading =

    React.createElement(
        "div",
        {
            id: 'parent',
        },

        React.createElement(
            "div",
            {
                id: 'child',
            },
            [
                React.createElement(
                    "h1",
                    {},
                    "Heading 1"
                ),
                React.createElement(
                    "h1",
                    {},
                    "Heading 3"
                )
            ]

        )

    );

console.log(heading);

// creat react dom and apppend root inside it

const root = ReactDOM.createRoot(document.getElementById('root'));

// render the dom

root.render(heading);

