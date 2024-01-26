const Header = () => {

    return (
        <div className="header d-flex-sb align-item-center">
            <div>
                <img className="logo" style={{ width: '90px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5VVjFVynYym8lULxPLCltlGNcgBnl4u1wtZXVDs7kSKZ8-pEm1Wpo3PMfyQ&s" alt="" />
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

export default Header;