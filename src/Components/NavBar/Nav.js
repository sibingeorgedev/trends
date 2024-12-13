// Page Created By: Sibin George (Student No: 8895312)

import React from 'react';
import { Link } from 'react-router-dom';  // Imported Link from react-router-dom
import './Nav.css';//Imported External css

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">Delicious Bites</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li> {/*Used Link To navigate to pages*/}
        <li><Link to="/about">About</Link></li> {/*Used Link To navigate to pages*/}
        <li><Link to="/contact">Contact</Link></li> {/*Used Link To navigate to pages*/}
      </ul>
    </nav>
  );
}

export default NavBar;
