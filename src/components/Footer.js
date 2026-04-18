import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/coaching', label: 'Coaching' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '40px 0 48px',
      background: 'linear-gradient(to top, rgba(245,158,11,0.03) 0%, transparent 100%)',
    }}>
      <div className="container">
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'24px' }}>
          <div>
            <div style={{ display:'flex', alignItems:'baseline', gap:'6px', marginBottom:'5px' }}>
              <span style={{ fontFamily:"'Instrument Serif',serif", fontStyle:'normal', fontSize:'17px', color:'var(--text)' }}>Fayzan Rab</span>
              <span style={{
                fontSize:'11px', fontWeight:700, letterSpacing:'0.1em',
                background:'linear-gradient(135deg,#f59e0b,#ea6c1e)',
                WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
              }}>MD PCC</span>
            </div>
            <p style={{ fontSize:'12px', color:'var(--text-3)' }}>Doctor and Executive Coach.</p>
          </div>

          <nav style={{ display:'flex', gap:'4px', flexWrap:'wrap' }}>
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to} style={{
                padding:'6px 14px', borderRadius:'100px',
                fontSize:'13px', color:'var(--text-3)',
                textDecoration:'none', transition:'color 0.2s',
              }}
              onMouseEnter={e=>{ e.currentTarget.style.color='var(--text)'; }}
              onMouseLeave={e=>{ e.currentTarget.style.color='var(--text-3)'; }}
              >{label}</Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
