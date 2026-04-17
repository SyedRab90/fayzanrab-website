import React, { useState } from 'react';

const labelStyle = {
  display: 'block',
  fontSize: '11px',
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'rgba(253,248,237,0.65)',
  marginBottom: '8px',
};

const inputStyle = {
  width: '100%',
  background: 'rgba(253,248,237,0.04)',
  border: '1px solid rgba(245,158,11,0.18)',
  borderRadius: '10px',
  color: 'var(--text)',
  fontFamily: 'inherit',
  fontSize: '15px',
  padding: '14px 16px',
  outline: 'none', /* :focus-visible override in index.css */
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
    <div>

      {/* ── HEADER ── */}
      <section style={{
        paddingTop: '160px', paddingBottom: '80px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="orb" style={{ width:560, height:560, top:'5%', right:'-8%', background:'radial-gradient(circle,rgba(245,158,11,0.15) 0%,transparent 68%)' }} />
        <div className="orb" style={{ width:380, height:380, bottom:'10%', left:'-6%', background:'radial-gradient(circle,rgba(234,108,30,0.11) 0%,transparent 70%)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '700px' }}>
          <span className="label">Contact</span>
          <h1 style={{
            fontSize: 'clamp(52px,7vw,90px)',
            fontWeight: 500, lineHeight: '1.06',
            marginBottom: '16px',
          }}>
            Let's{' '}
            <span style={{
              background: 'linear-gradient(135deg,#fbbf24,#f59e0b,#ea6c1e)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>talk.</span>
          </h1>
          <p style={{
            fontSize: '16px', color: 'var(--text-2)',
            lineHeight: '1.78', maxWidth: '460px',
          }}>
            Whether you have a specific goal or just a sense that something needs to change, reach out. I'll respond personally.
          </p>
        </div>
      </section>

      {/* ── FORM ── */}
      <section style={{ paddingBottom: '120px', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '640px' }}>

          {status === 'success' ? (
            <div style={{
              background: 'rgba(245,158,11,0.07)',
              border: '1px solid rgba(245,158,11,0.25)',
              borderRadius: '16px',
              padding: '56px 40px',
              textAlign: 'center',
            }}>
              <p style={{ fontSize: '22px', fontWeight: 500, marginBottom: '12px' }}>Message sent.</p>
              <p style={{ color: 'var(--text-2)', fontSize: '15px' }}>I'll be in touch within a couple of days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

              {/* Name row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="two-col">
                <div>
                  <label style={labelStyle}>First Name *</label>
                  <input type="text" name="first_name" required style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Last Name *</label>
                  <input type="text" name="last_name" required style={inputStyle} />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label style={labelStyle}>Phone *</label>
                <input type="tel" name="phone" required style={inputStyle} />
              </div>

              {/* Email */}
              <div>
                <label style={labelStyle}>Email *</label>
                <input type="email" name="email" required style={inputStyle} />
              </div>

              {/* Message */}
              <div>
                <label style={labelStyle}>Share with me why you are reaching out! *</label>
                <textarea
                  name="message"
                  required
                  style={{ ...inputStyle, minHeight: '160px', resize: 'vertical' }}
                />
              </div>

              {/* Hidden routing fields */}
              <input type="hidden" name="_subject" value="New coaching inquiry — fayzanrab.com" />
              <input type="hidden" name="_replyto" value="fayzanrabcoaching@gmail.com" />

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '4px', opacity: status === 'sending' ? 0.7 : 1 }}
              >
                {status === 'sending' ? 'Sending…' : 'Send message →'}
              </button>

              {status === 'error' && (
                <p style={{ color: '#f87171', fontSize: '14px', textAlign: 'center' }}>
                  Something went wrong. Email me directly at{' '}
                  <a href="mailto:fayzanrabcoaching@gmail.com" style={{ color: 'var(--amber)' }}>
                    fayzanrabcoaching@gmail.com
                  </a>
                </p>
              )}
            </form>
          )}

          <p style={{ marginTop: '28px', fontSize: '13px', color: 'var(--text-3)', textAlign: 'center' }}>
            Or email directly:{' '}
            <a href="mailto:fayzanrabcoaching@gmail.com" style={{ color: 'var(--amber)' }}>
              fayzanrabcoaching@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg,rgba(245,158,11,0.04) 0%,rgba(234,108,30,0.06) 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="orb" style={{ width:440, height:300, top:'50%', left:'50%', transform:'translate(-50%,-50%)', background:'radial-gradient(ellipse,rgba(245,158,11,0.08) 0%,transparent 70%)' }} />
        <div className="container" style={{ textAlign:'center', maxWidth:'660px', margin:'0 auto', position:'relative', zIndex:1 }}>
          <div style={{ width:'36px', height:'2px', background:'linear-gradient(90deg,#f59e0b,#ea6c1e)', borderRadius:'2px', margin:'0 auto 30px' }} />
          <p style={{
            fontSize:'clamp(19px,2.4vw,30px)',
            fontFamily:"'Instrument Serif',serif", fontStyle:'normal',
            fontWeight:400, lineHeight:'1.50',
            color:'var(--text)', marginBottom:'24px',
          }}>
            "Working with Fayzan allowed me to rapidly step into the best version of myself in a way that feels genuine and lasting."
          </p>
          <p style={{ fontSize:'11px', fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--amber)' }}>
            — Aatash Parikh, Founder at Inkwire
          </p>
        </div>
      </section>

    </div>
  );
}
