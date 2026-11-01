import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/coaching', label: 'Coaching' },
  { to: '/about', label: 'About' },
  { to: '/research', label: 'Research & Media' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  const location = useLocation();
  const isActive = (to) => to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <footer style={{
      borderTop: '1px solid rgba(253,248,237,0.08)',
      padding: '40px 0 48px',
      background: '#0c0500',
    }}>
      <div className="container">
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'24px' }}>
          <div>
            <div style={{ display:'flex', alignItems:'baseline', gap:'6px', marginBottom:'5px' }}>
              <span style={{ fontFamily:"'Raleway',sans-serif", fontWeight:700, fontSize:'17px', color:'#fdf8ed' }}>Fayzan Rab</span>
              <span style={{
                fontSize:'11px', fontWeight:700, letterSpacing:'0.10em',
                textTransform:'uppercase', color:'rgba(253,248,237,0.40)',
              }}>MD PCC</span>
            </div>
          </div>

          <nav style={{ display:'flex', gap:'4px', flexWrap:'wrap' }}>
            {navLinks.filter(({ to }) => !isActive(to)).map(({ to, label }) => (
              <Link key={to} to={to} style={{
                padding:'6px 14px', borderRadius:'100px',
                fontSize:'13px', color:'rgba(253,248,237,0.50)',
                textDecoration:'none', transition:'color 0.2s',
              }}
              onMouseEnter={e=>{ e.currentTarget.style.color='#fdf8ed'; }}
              onMouseLeave={e=>{ e.currentTarget.style.color='rgba(253,248,237,0.50)'; }}
              >{label}</Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
