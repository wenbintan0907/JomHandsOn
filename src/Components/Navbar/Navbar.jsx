import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/transparent_long.webp';
import menu from '../../assets/edusity_assets/menu-icon.png';

export default function Navbar() {
  const [sticky, setSticky] = useState(() => window.scrollY > 100);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 100);
    const onKey = (event) => { if (event.key === 'Escape') setMobileMenu(false); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKey);
    };
  }, []);
  const close = () => setMobileMenu(false);
  return (
    <nav aria-label="Main navigation" className={`container ${sticky || location.pathname !== '/' ? 'non-transparent-nav' : ''}`}>
      <Link to="/" onClick={close} aria-label="Jom Hands-On home"><img src={logo} alt="Jom Hands-On" className="logo" width="140" /></Link>
      <ul id="navigation-menu" className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><NavLink to="/" end onClick={close}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={close}>About Us</NavLink></li>
        <li><NavLink to="/gallery" onClick={close}>Gallery</NavLink></li>
        <li><Link to="/#contact" onClick={close} className="btn">Contact Us</Link></li>
      </ul>
      <button type="button" className="menu-toggle" aria-label={mobileMenu ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenu} aria-controls="navigation-menu" onClick={() => setMobileMenu(!mobileMenu)}><img src={menu} alt="" className="menu-icon" /></button>
    </nav>
  );
}
