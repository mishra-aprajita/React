import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../style/Navbar.css"

const navItems = [
  { path: '/',           label: 'HOME'    },
  { path: '/bollywood',  label: 'BOLLYWOOD'   },
  { path: '/hollywood',  label: 'HOLLYWOOD'   },
  { path: '/tech',       label: 'TECHNOLOGY'    },
  { path: '/fitness',    label: 'FITNESS' },
  { path: '/food',       label: 'FOOD'    },
]

const Navbar = () => {
  const location = useLocation()

  return (
    <div className="gnav-wrap">
      <nav className="gnav">
        <div className="gnav-topline" />
        <Link to="/" className="gnav-brand">
          <div className="gnav-hex" />
          <span className="gnav-brand-text">NEXUS</span>
        </Link>
        <div className="gnav-links">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`gnav-link ${location.pathname === path ? 'active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </div>
        <button className="gnav-btn">PLAY</button>
      </nav>
    </div>
  )
}

export default Navbar
