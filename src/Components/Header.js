import React from 'react'
import { Link } from 'react-router-dom'
import Login from './buttons/Login'

const Header = () => {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Product">Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
    <Link className="navbar-brand text-center" to="/Hone">SE Mart</Link>
    <Login/>
  </div>
</nav>
    </div>
  )
}

export default Header
