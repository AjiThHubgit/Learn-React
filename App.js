// imports

import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    
   return (
        <div className="header d-flex-sb align-item-center">
            <div>
                <img className="logo" style={{width:'90px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5VVjFVynYym8lULxPLCltlGNcgBnl4u1wtZXVDs7kSKZ8-pEm1Wpo3PMfyQ&s" alt="" />
            </div>
            <div className="nav-items">
                <ul className="d-flex g-30">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
   );
};

const RestaurentCard = () => {

    return (
        <div className="res-card">
            <img className="res-logo w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH9PZ4TAe6l0FhW8YYAanSK-0GoDXKJV_SPMJF999MwQ&s" alt="res-logo" />
            <h3>Meghana Foods</h3>
            <h4>Briyani, North Indian, Asian</h4>
            <h4>4.4 starts</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container d-flex flex-wrap g-30">
            <RestaurentCard />
            <RestaurentCard /> <RestaurentCard /> <RestaurentCard /> <RestaurentCard /> <RestaurentCard /> <RestaurentCard /> <RestaurentCard /> <RestaurentCard /> <RestaurentCard /> <RestaurentCard /> <RestaurentCard />
            </div>
        </div>
    );
};

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


