import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <Link className="navbar-brand mx-5" to="/home">Analysis zone</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mx-5 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/review">REVIEW</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">DASHBOARD</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blogs">BLOGS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">ABOUT</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
            
        </div>
    );
};

export default Navbar;