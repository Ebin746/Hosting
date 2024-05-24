import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand nav-title ms-5" to="/">
          <img src="/logo.png" alt="logo" className="img-fluid brandLogo" />
          NIYKADO
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/newssection">News</Link>
            </li>
            <li className={`nav-item dropdown ${isSubmenuOpen ? 'show' : ''}`} onMouseEnter={toggleSubmenu} onMouseLeave={toggleSubmenu}>
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pre-order</Link>
              <ul className="dropdown-menu">
                {Array.from({ length: 14 }).map((_, index) => (
                  <li className="dropdown-submenu" key={`item-${index}`}>
                    <Link className="dropdown-item" to={`/preorder/${index + 1}`}>
                      <img src="/arrow.svg" alt="Arrow" className="submenu-icon img-fluid" style={{ maxWidth: '16px', maxHeight: '16px' }} />
                      Item {index + 1}
                    </Link>
                    <ul className="dropdown-menu">
                      {Array.from({ length: 3 }).map((_, subIndex) => (
                        <li key={`sub-item-${index}-${subIndex}`}>
                          <Link className="dropdown-item" to={`/preorder/${index + 1}/${subIndex + 1}`}>
                            Sub-item {subIndex + 1}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link className="btn btnpreorder" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
