// imports

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {

    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

// creat react dom and apppend root inside it

const root = ReactDOM.createRoot(document.getElementById('root'));

// render the dom

// root.render(jsxHeading); // React Element

root.render(<AppLayout />); // React Component


