import React from 'react';
import { Link } from 'react-router-dom';

const lenses = [
  {
    roman: 'I',
    title: 'Rigorous & Evidence-Based',
    desc: 'Most coaches come from the world of HR. Fayzan brings the precision of a physician — an MD from Emory and years of clinical training that cut past the obvious to what\'s actually driving the problem.',
    bg: 'linear-gradient(140deg,#3b1007 0%,#7c2d12 100%)',
  },
  {
    roman: 'II',
    title: 'Mastery',
    desc: 'Thousands of hours working with high performing individuals and teams to unlock deeper performance, fulfillment, and leadership capacity. PCC certified through the ICF.',
    bg: 'linear-gradient(140deg,#1c0f00 0%,#92400e 100%)',
  },
  {
    roman: 'III',
    title: 'Silicon Valley Operator',
    desc: 'Product Leader at Google. First product hire at a Series A→C startup. Fayzan has been in the rooms you\'re in — the fundraising pressure, the team decisions, the gap between what you\'re building and how you feel about it. You don\'t need to explain the context. He already understands it.',
    bg: 'linear-gradient(140deg,#2d1b00 0%,#78350f 100%)',
  },
];

const credentials = [
  { label: 'Education',      value: 'MD, Emory University School of Medicine' },
  { label: 'Certification',  value: 'PCC, International Coaching Federation' },
  { label: 'Training',       value: 'IFS Level 1 (BIPOC) · Accomplishment Coaching Leadership Development Program' },
  { label: 'Experience',     value: 'Product Leader at Google · 1st Product Hire at Mindstrong Health (Series C)' },
  { label: 'Clinical Research', value: 'Sub-Investigator · Aquilino Cancer Institute (Psychedelic Clinical Trials)' },
  { label: 'Practice',       value: '2,000+ coaching hours with high performers' },
];

export default function About() {
  return (
    <div>

      {/* ── HERO ── */}
      <section style={{
        display: 'flex', alignItems: 'flex-start',
        position: 'relative', overflow: 'hidden',
        paddingTop: '140px', paddingBottom: '100px',
      }}>
        {/* Orbs */}
        <div className="orb" style={{ width:520, height:520, top:'5%', right:'-6%', background:'radial-gradient(circle,rgba(245,158,11,0.16) 0%,transparent 70%)' }} />
        <div className="orb" style={{ width:380, height:380, bottom:'10%', left:'-5%', background:'radial-gradient(circle,rgba(234,108,30,0.13) 0%,transparent 70%)' }} />

        <div className="container" style={{ position:'relative', zIndex:1, width:'100%' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'72px', alignItems:'center' }} className="two-col">

            {/* Left - text */}
            <div>
              <span className="label">About</span>
              <h1 style={{ fontSize:'clamp(40px,5vw,64px)', fontWeight:500, marginBottom:'24px' }}>
                Fayzan Rab
              </h1>
              <p style={{ fontSize:'16px', color:'var(--text-2)', lineHeight:'1.82', marginBottom:'28px' }}>
                I started my big bet 7 years ago when I became a coach. I transitioned from Silicon Valley to medical school, perfected my craft with thousands of hours of coaching and rigorous training, and became a leading psychedelic researcher. I work with a small number of founders and executives looking to bet big on themselves.
              </p>
              <div style={{ display:'flex', gap:'12px', flexWrap:'wrap' }}>
                <Link to="/contact" className="btn btn-primary">Work with me →</Link>
                <Link to="/coaching" className="btn btn-outline">See services</Link>
              </div>
            </div>

            {/* Right - tinted image */}
            <div style={{ position:'relative' }}>
              {/* Ambient glow behind image */}
              <div style={{
                position:'absolute', inset:'-20px',
                background:'radial-gradient(ellipse at center, rgba(245,158,11,0.20) 0%, transparent 70%)',
                borderRadius:'28px',
              }} />
              <div style={{ position:'relative', borderRadius:'20px', overflow:'hidden' }}>
                <img
                  src="/images/fayzan-cafe.jpg"
                  alt="Fayzan Rab"
                  loading="lazy"
                  decoding="async"
                  style={{
                    width:'100%',
                    display:'block',
                  }}
                />
                {/* Warm amber tint overlay */}
                <div style={{
                  position:'absolute', inset:0,
                  background:'linear-gradient(160deg, rgba(245,158,11,0.22) 0%, rgba(234,108,30,0.18) 40%, rgba(120,53,15,0.35) 100%)',
                  mixBlendMode:'multiply',
                }} />
                {/* Bottom fade */}
                <div style={{
                  position:'absolute', bottom:0, left:0, right:0, height:'45%',
                  background:'linear-gradient(to top, rgba(10,7,0,0.70) 0%, transparent 100%)',
                }} />
                {/* Badge */}
                <div style={{
                  position:'absolute', bottom:'22px', left:'22px',
                  background:'rgba(10,7,0,0.55)',
                  backdropFilter:'blur(12px)',
                  border:'1px solid rgba(245,158,11,0.20)',
                  borderRadius:'100px',
                  padding:'8px 18px',
                  display:'flex', alignItems:'center', gap:'10px',
                }}>
                  <span style={{ fontFamily:"'Instrument Serif',serif", fontSize:'18px', color:'var(--amber-lt)', fontStyle:'italic' }}>2,000+</span>
                  <span style={{ fontSize:'12px', color:'var(--text-2)' }}>coaching hours</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── STORY + CREDENTIALS ── */}
      <section className="section">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1.3fr 1fr', gap:'64px', alignItems:'start' }} className="two-col">

            {/* Story */}
            <div>
              <span className="label">The Story</span>
              <h2 style={{ fontSize:'clamp(22px,2.4vw,32px)', fontWeight:500, marginBottom:'24px', fontFamily:"'Instrument Serif',serif", fontStyle:'italic' }}>
                I hired a coach in 2019 because I couldn't hear my own voice.
              </h2>
              {[
                "I'd built what you're supposed to build — product lead at Google, first product hire at a Series A→C company, campaign organizer in a presidential race. Accomplished, unfulfilled, and honestly lost.",
                "I turned to mentors, therapy, meditation, self-help. I could hear everyone else's voice except my own.",
                "My coach refused to give me answers. He continuously pointed to every way I outsourced my wisdom and declined to participate in my optimization game to find the right perspective. In that space, I discovered my own inner wisdom.",
                "That clarity led me to executive coaching, medical school, and psychedelic research — three paths that are, at their core, the same commitment: helping people reclaim their own consciousness.",
                "In 2026, it's the same problem but different form. AI can give advice anytime, optimize any problem, and generate insight on demand. The information is richer but the signal is harder to hear. The hunger for external answers has found a new home.",
                "My job is the same: create space for you to hear your own voice, don't placate your self-doubt, and hold you to what you actually know you're capable of.",
              ].map((text, i) => (
                <p key={i} style={{ color:'var(--text-2)', lineHeight:'1.85', marginBottom:'16px', fontSize:'15px' }}>{text}</p>
              ))}
              <p style={{ color:'var(--text-2)', lineHeight:'1.85', fontSize:'15px' }}>If that's you, let's chat.</p>
            </div>

            {/* Credentials */}
            <div style={{
              background:'linear-gradient(140deg, rgba(245,158,11,0.07) 0%, rgba(234,108,30,0.04) 100%)',
              border:'1px solid var(--border-2)',
              borderRadius:'20px',
              padding:'32px 28px',
            }}>
              <div style={{
                width:'48px', height:'48px', borderRadius:'12px',
                background:'linear-gradient(135deg,#f59e0b,#ea6c1e)',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontFamily:"'Instrument Serif',serif", fontStyle:'normal',
                fontSize:'18px', color:'#fff',
                marginBottom:'28px',
                boxShadow:'0 0 24px rgba(245,158,11,0.28)',
              }}>FR</div>

              {credentials.map(({ label, value }, i) => (
                <div key={label} style={{
                  paddingBottom: i < credentials.length - 1 ? '18px' : 0,
                  marginBottom:  i < credentials.length - 1 ? '18px' : 0,
                  borderBottom:  i < credentials.length - 1 ? '1px solid var(--border)' : 'none',
                }}>
                  <span style={{
                    display:'block', fontSize:'12px', fontWeight:700,
                    letterSpacing:'0.16em', textTransform:'uppercase',
                    color:'var(--amber)', marginBottom:'5px',
                  }}>{label}</span>
                  <span style={{ fontSize:'14px', color:'var(--text)', lineHeight:'1.5' }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEDx Link ── */}
      <section style={{ padding:'0 0 100px' }}>
        <div className="container">
          <a
            href="https://www.youtube.com/watch?v=V4lxlZBYHjY"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration:'none', display:'block' }}
          >
            <div style={{
              borderRadius:'16px', padding:'24px 28px',
              background:'linear-gradient(135deg,rgba(245,158,11,0.06) 0%,rgba(234,108,30,0.04) 100%)',
              border:'1px solid rgba(245,158,11,0.15)',
              display:'flex', alignItems:'center', justifyContent:'space-between',
              flexWrap:'wrap', gap:'16px',
              transition:'border-color 0.2s ease, background 0.2s ease',
            }}
            onMouseEnter={e=>{ e.currentTarget.style.borderColor='rgba(245,158,11,0.35)'; e.currentTarget.style.background='linear-gradient(135deg,rgba(245,158,11,0.10) 0%,rgba(234,108,30,0.07) 100%)'; }}
            onMouseLeave={e=>{ e.currentTarget.style.borderColor='rgba(245,158,11,0.15)'; e.currentTarget.style.background='linear-gradient(135deg,rgba(245,158,11,0.06) 0%,rgba(234,108,30,0.04) 100%)'; }}
            >
              <div style={{ display:'flex', alignItems:'center', gap:'16px' }}>
                <div style={{
                  width:'44px', height:'44px', borderRadius:'50%', flexShrink:0,
                  background:'linear-gradient(135deg,#f59e0b,#ea6c1e)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                </div>
                <div>
                  <div style={{ fontSize:'15px', fontWeight:500, color:'var(--text)', marginBottom:'3px' }}>Faith, Psychedelics, and Mental Health</div>
                  <div style={{ fontSize:'13px', color:'var(--text-3)' }}>TEDxEmory · February 2024</div>
                </div>
              </div>
              <span style={{
                fontSize:'13px', fontWeight:600, color:'var(--amber)',
                letterSpacing:'0.04em',
              }}>Watch →</span>
            </div>
          </a>
        </div>
      </section>

      {/* ── THREE LENSES ── */}
      <section style={{ padding:'0 0 100px' }}>
        <div className="container">
          <span className="label" style={{ display:'block', textAlign:'center' }}>Three Lenses</span>
          <h2 style={{ fontSize:'clamp(26px,3vw,40px)', fontWeight:500, textAlign:'center', marginBottom:'48px' }}>
            What informs the work
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'16px' }} className="three-col">
            {lenses.map(({ roman, title, desc, bg }) => (
              <div key={title} style={{
                background:bg, borderRadius:'18px', padding:'32px 26px',
                position:'relative', overflow:'hidden',
                border:'1px solid rgba(245,158,11,0.12)',
                transition:'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow='0 24px 56px rgba(245,158,11,0.14)'; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none'; }}
              >
                <h3 style={{
                  fontFamily:"'Instrument Serif',serif", fontStyle:'normal',
                  fontSize:'20px', fontWeight:500,
                  color:'#fff', marginBottom:'12px',
                }}>{title}</h3>
                <p style={{ fontSize:'14px', lineHeight:'1.78', color:'rgba(255,255,255,0.82)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOGO STRIP ── */}
      <div className="logo-strip">
        <div className="container">
          <div className="logo-strip-inner">
            {['MD, Emory University','PCC Certified (ICF)','Google','TEDx Speaker','2,000+ Coaching Hours'].map(item => (
              <span key={item} className="logo-strip-item">{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <section style={{ padding:'80px 0 100px' }}>
        <div className="container" style={{ textAlign:'center' }}>
          <h2 style={{ fontSize:'clamp(22px,2.8vw,36px)', fontWeight:500, marginBottom:'28px' }}>
            Ready to bet big on yourself?
          </h2>
          <Link to="/contact" className="btn btn-primary">Let's talk →</Link>
        </div>
      </section>

    </div>
  );
}
