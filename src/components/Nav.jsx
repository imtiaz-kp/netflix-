import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav-black'}`}>
      <img
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
