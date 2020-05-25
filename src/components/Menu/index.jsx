import React from 'react'
import { Link } from 'gatsby'

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link
            to="/"
            activeClassName="active"
            activeStyle={{ color: 'red' }}
            className="nav-link"
          >
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/contact"
            activeClassName="active"
            activeStyle={{ color: 'red' }}
            className="nav-link"
          >
            Contact
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/about"
            activeClassName="active"
            activeStyle={{ color: 'red' }}
            className="nav-link"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
