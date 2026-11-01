import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); window.scrollTo(0, 0); }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/coaching', label: 'Coaching' },
    { to: '/about', label: 'About' },
    { to: '/research', label: 'Research & Media' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (to) => to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: '66px',
      background: scrolled ? 'rgba(12,8,0,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(245,158,11,0.08)' : 'none',
      transition: 'background 0.3s ease, border-color 0.3s ease',
    }}>
      <div style={{
        maxWidth: '1080px', margin: '0 auto', padding: '0 32px', height: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <img
          src="/images/fr-logo-square.png"
          alt="FR"
          style={{
            width: '34px', height: '34px',
            borderRadius: '9px',
            flexShrink: 0,
            objectFit: 'cover',
            filter: 'brightness(0) invert(1)',
          }}
        />
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <span style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: '16px',
            fontWeight: 700,
            color: '#fdf8ed',
            letterSpacing: '-0.01em',
            lineHeight: 1,
          }}>Fayzan Rab</span>
          <span style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.13em',
            textTransform: 'uppercase',
            color: 'rgba(253,248,237,0.50)',
            lineHeight: 1,
          }}>MD · PCC</span>
        </div>
      </Link>

      {/* Desktop */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desktop-nav">
        {navLinks.map(({ to, label }) => (
          <Link key={to} to={to} style={{
            padding: '7px 15px', borderRadius: '100px', fontSize: '14px', fontWeight: 500,
            color: isActive(to) ? '#fdf8ed' : 'rgba(253,248,237,0.55)',
            background: 'transparent',
            transition: 'color 0.2s ease', textDecoration: 'none',
          }}>{label}</Link>
        ))}
        <Link to="/contact" style={{
          marginLeft: '8px', padding: '9px 20px', borderRadius: '5px',
          fontSize: '14px', fontWeight: 600,
          background: '#f59e0b',
          color: '#fff', textDecoration: 'none',
          boxShadow: 'none',
          transition: 'opacity 0.22s ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; }}
        onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
        >Work with me</Link>
      </div>

      {/* Hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)} style={{
        display: 'none', flexDirection: 'column', gap: '5px',
        padding: '4px', background: 'none', border: 'none', cursor: 'pointer',
      }} className="hamburger" aria-label="Toggle menu">
        {[0,1,2].map(i => (
          <span key={i} style={{ display: 'block', width: '22px', height: '2px', background: '#fdf8ed', borderRadius: '2px' }} />
        ))}
      </button>

      {menuOpen && (
        <div style={{
          position: 'fixed', top: '66px', left: 0, right: 0,
          background: 'rgba(12,8,0,0.97)',
          padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '4px',
          borderBottom: '1px solid rgba(245,158,11,0.08)',
        }}>
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to} style={{
              padding: '13px 16px', borderRadius: '6px', fontSize: '16px', fontWeight: 500,
              color: isActive(to) ? '#fdf8ed' : 'rgba(253,248,237,0.55)',
              background: isActive(to) ? 'rgba(253,248,237,0.06)' : 'transparent',
              textDecoration: 'none',
            }}>{label}</Link>
          ))}
          <Link to="/contact" style={{
            marginTop: '10px', padding: '13px 22px', borderRadius: '5px',
            fontSize: '15px', fontWeight: 600,
            background: '#f59e0b',
            color: '#fff', textDecoration: 'none', textAlign: 'center',
          }}>Work with me</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
      </div>
    </nav>
  );
}
