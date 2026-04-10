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
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (to) => to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 28px', height: '66px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(12,8,0,0.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(18px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(245,158,11,0.08)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        {/* Monogram mark */}
        <div style={{
          width: '34px', height: '34px',
          borderRadius: '9px',
          background: 'linear-gradient(135deg, #f59e0b, #ea6c1e)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
          boxShadow: '0 0 16px rgba(245,158,11,0.35)',
        }}>
          <span style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            fontSize: '15px',
            fontWeight: 600,
            color: '#fff',
            lineHeight: 1,
          }}>FR</span>
        </div>
        {/* Wordmark */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <span style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            fontSize: '16px',
            fontWeight: 500,
            color: '#fdf8ed',
            letterSpacing: '-0.01em',
            lineHeight: 1,
          }}>Fayzan Rab</span>
          <span style={{
            fontSize: '9.5px',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(245,158,11,0.65)',
            lineHeight: 1,
          }}>MD · PCC</span>
        </div>
      </Link>

      {/* Desktop */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desktop-nav">
        {navLinks.map(({ to, label }) => (
          <Link key={to} to={to} style={{
            padding: '7px 15px', borderRadius: '100px', fontSize: '14px', fontWeight: 500,
            color: isActive(to) ? '#fef9ee' : 'rgba(254,249,238,0.52)',
            background: isActive(to) ? 'rgba(245,158,11,0.1)' : 'transparent',
            transition: 'all 0.2s ease', textDecoration: 'none',
          }}>{label}</Link>
        ))}
        <Link to="/contact" style={{
          marginLeft: '8px', padding: '9px 22px', borderRadius: '100px',
          fontSize: '14px', fontWeight: 600,
          background: 'linear-gradient(135deg, #f59e0b, #ea6c1e)',
          color: '#fff', textDecoration: 'none',
          boxShadow: '0 0 22px rgba(245,158,11,0.28)',
          transition: 'all 0.22s ease',
        }}>Work with me</Link>
      </div>

      {/* Hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)} style={{
        display: 'none', flexDirection: 'column', gap: '5px',
        padding: '4px', background: 'none', border: 'none', cursor: 'pointer',
      }} className="hamburger" aria-label="Toggle menu">
        {[0,1,2].map(i => (
          <span key={i} style={{ display: 'block', width: '22px', height: '2px', background: '#fef9ee', borderRadius: '2px' }} />
        ))}
      </button>

      {menuOpen && (
        <div style={{
          position: 'fixed', top: '66px', left: 0, right: 0,
          background: 'rgba(12,8,0,0.97)', backdropFilter: 'blur(18px)',
          padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '4px',
          borderBottom: '1px solid rgba(245,158,11,0.08)',
        }}>
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to} style={{
              padding: '13px 16px', borderRadius: '10px', fontSize: '16px', fontWeight: 500,
              color: isActive(to) ? '#fef9ee' : 'rgba(254,249,238,0.55)',
              background: isActive(to) ? 'rgba(245,158,11,0.07)' : 'transparent',
              textDecoration: 'none',
            }}>{label}</Link>
          ))}
          <Link to="/contact" style={{
            marginTop: '10px', padding: '13px 22px', borderRadius: '100px',
            fontSize: '15px', fontWeight: 600,
            background: 'linear-gradient(135deg, #f59e0b, #ea6c1e)',
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
    </nav>
  );
}
