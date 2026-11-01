import React, { useState } from 'react';

const ink    = '#fdf8ed';
const inkMid = 'rgba(253,248,237,0.65)';
const inkFaint = 'rgba(253,248,237,0.35)';
const amber  = '#f59e0b';
const bg2    = '#160b02';
const border = 'rgba(253,248,237,0.15)';

const labelStyle = {
  display: 'block',
  fontSize: '13px',
  fontWeight: 600,
  letterSpacing: 'normal',
  textTransform: 'none',
  color: 'rgba(253,248,237,0.70)',
  marginBottom: '6px',
};

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.06)',
  border: `1px solid ${border}`,
  borderRadius: '6px',
  color: ink,
  fontFamily: 'inherit',
  fontSize: '16px',
  padding: '13px 16px',
  outline: 'none',
  transition: 'border-color 0.2s',
};

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData(e.target);
    try {
      data.append('access_key', '259e130e-54f7-44e8-b606-8ad132f8d832');
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div style={{ background: '#0c0500', color: ink }}>

      <style>{`
        .contact-hero   { max-width: 700px; margin: 0 auto; padding: 160px 32px 80px; }
        .contact-hero h1 { font-family: 'Raleway', sans-serif; font-size: clamp(52px, 7vw, 90px); font-weight: 700; letter-spacing: -0.025em; line-height: 1.06; color: ${ink}; margin-bottom: 16px; }
        .contact-hero p  { font-size: 16px; color: ${inkMid}; line-height: 1.78; max-width: 460px; }
        .contact-form   { max-width: 700px; margin: 0 auto; padding: 0 32px 120px; }
        .contact-rule   { border: none; border-top: 1px solid rgba(253,248,237,0.08); margin: 0; }
        .contact-testi  { background: ${bg2}; padding: 100px 0; }
        .contact-testi-inner { max-width: 660px; margin: 0 auto; padding: 0 32px; text-align: center; }

        .contact-input:focus { border-color: ${amber} !important; outline: none; }

        @media (max-width: 768px) {
          .contact-hero { padding: 120px 24px 64px !important; }
          .contact-form { padding: 0 24px 80px !important; }
        }
      `}</style>

      {/* ── HEADER ── */}
      <section>
        <div className="contact-hero">
          <h1>Let's talk.</h1>
          <p>
            Whether you have a specific goal or just a sense that something needs to change, reach out. I'll respond in 1-2 business days.
          </p>
        </div>
      </section>

      {/* ── FORM ── */}
      <section>
        <div className="contact-form">

          {status === 'success' ? (
            <div style={{
              background: bg2,
              border: '1px solid rgba(253,248,237,0.10)',
              borderRadius: '6px',
              padding: '56px 40px',
              textAlign: 'center',
            }}>
              <p style={{ fontSize: '22px', fontWeight: 700, fontFamily: "'Raleway', sans-serif", marginBottom: '12px', color: ink }}>Message sent.</p>
              <p style={{ color: inkMid, fontSize: '16px' }}>I'll be in touch within a couple of days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

              {/* Name row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="two-col">
                <div>
                  <label style={labelStyle}>First Name *</label>
                  <input type="text" name="first_name" required style={inputStyle} className="contact-input" />
                </div>
                <div>
                  <label style={labelStyle}>Last Name *</label>
                  <input type="text" name="last_name" required style={inputStyle} className="contact-input" />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label style={labelStyle}>Phone *</label>
                <input type="tel" name="phone" required style={inputStyle} className="contact-input" />
              </div>

              {/* Email */}
              <div>
                <label style={labelStyle}>Email *</label>
                <input type="email" name="email" required style={inputStyle} className="contact-input" />
              </div>

              {/* Message */}
              <div>
                <label style={labelStyle}>Share with me why you are reaching out! *</label>
                <textarea
                  name="message"
                  required
                  className="contact-input"
                  style={{ ...inputStyle, minHeight: '160px', resize: 'vertical' }}
                />
              </div>

              {/* Hidden routing fields */}
              <input type="hidden" name="_subject" value="New coaching inquiry — fayzanrab.com" />
              <input type="hidden" name="_replyto" value="fayzanrabcoaching@gmail.com" />

              <button
                type="submit"
                disabled={status === 'sending'}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '13px 28px', borderRadius: '5px',
                  fontFamily: 'inherit', fontSize: '14px', fontWeight: 600,
                  background: amber, color: '#fff',
                  border: 'none', cursor: 'pointer',
                  marginTop: '4px',
                  opacity: status === 'sending' ? 0.7 : 1,
                  transition: 'opacity 0.22s ease',
                }}
                onMouseEnter={e => { if (status !== 'sending') e.currentTarget.style.opacity = '0.88'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = status === 'sending' ? '0.7' : '1'; }}
              >
                {status === 'sending' ? 'Sending…' : 'Send message →'}
              </button>

              {status === 'error' && (
                <p style={{ color: '#dc2626', fontSize: '14px', textAlign: 'center' }}>
                  Something went wrong. Email me directly at{' '}
                  <a href="mailto:fayzanrabcoaching@gmail.com" style={{ color: amber }}>
                    fayzanrabcoaching@gmail.com
                  </a>
                </p>
              )}
            </form>
          )}

        </div>
      </section>

      <hr className="contact-rule" />

      {/* ── TESTIMONIAL ── */}
      <section className="contact-testi">
        <div className="contact-testi-inner">
          <p style={{
            fontSize:'clamp(19px,2.4vw,30px)',
            fontFamily:"'Raleway', sans-serif",
            fontWeight: 600,
            lineHeight:'1.50',
            color: ink, marginBottom:'24px',
            letterSpacing: '-0.01em',
          }}>
            "Working with Fayzan allowed me to rapidly step into the best version of myself in a way that feels genuine and lasting."
          </p>
          <p style={{ fontSize:'13px', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color: inkFaint }}>
            — Aatash Parikh, Founder at Inkwire
          </p>
        </div>
      </section>

    </div>
  );
}
