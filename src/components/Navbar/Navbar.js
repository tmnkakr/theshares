import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div classNameName="">
            <nav className="navbar navbar-expand-sm bg-light">
<ul className="navbar-nav">
  <li className="nav-item">
    <Link className="nav-link" href="#" to="/home">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" href="#" to="/online">Online course</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" href="#" to="/vocabulary">Vocabulary</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" href="#" to="/grammar">Grammar</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" href="#" to="/skill">Skill</Link>
  </li>
</ul>
</nav>
</div>
    );
};

export default Navbar;