import React from 'react'

function Navbar() {
  return (
    <div>
        <nav
      className="navbar bg-dark navbar-expand-lg fixed-top"
      data-aos="fade-right"
    >
      <h1 className="text-light navbar-brand ms-5">Pizzamania</h1>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav text-light ms-auto me-5">
          <li className="nav-item">
            <a href="#" className="nav-link text-light">Home</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-light">About Pizza</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-light">Pizza types</a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Navbar