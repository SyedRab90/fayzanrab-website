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
                Hiring my first coach was day 0 of betting big on myself. I transitioned from Silicon Valley to medical school, perfected my craft with thousands of hours of coaching and rigorous training, and became a leading psychedelic researcher. I work with a small number of founders and executives looking to bet big on themselves.
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

      {/* ── THROUGH LINE ── */}
      <section className="section" style={{
        background:'linear-gradient(135deg,rgba(245,158,11,0.04) 0%,rgba(234,108,30,0.06) 100%)',
        position:'relative', overflow:'hidden',
      }}>
        <div className="orb" style={{ width:500, height:300, top:'50%', left:'50%', transform:'translate(-50%,-50%)', background:'radial-gradient(ellipse,rgba(245,158,11,0.07) 0%,transparent 70%)' }} />
        <div className="container" style={{ textAlign:'center', maxWidth:'720px', margin:'0 auto', position:'relative', zIndex:1 }}>
          <span className="label">The Through Line</span>
          <p style={{ fontSize:'clamp(17px,2.2vw,24px)', fontFamily:"'Instrument Serif',serif", fontStyle:'normal', fontWeight:400, lineHeight:'1.65', color:'var(--text)', marginBottom:'16px' }}>
            I am an AI power user. I use it in every faculty of my life (including building this website). But I believe the most important frontier isn't AI, it's human consciousness. Every path I've taken — coaching, medicine, psychedelic research — has been an expression of that commitment to cultivate and transform human consciousness.
          </p>
          <p style={{ fontSize:'clamp(17px,2.2vw,24px)', fontFamily:"'Instrument Serif',serif", fontStyle:'normal', fontWeight:400, lineHeight:'1.65', color:'var(--text)', marginBottom:'16px' }}>
            What I have consistently seen is that the obstacle is almost never information or strategy. Those are useful accelerants. The core gap has been closing the space between who you are now and who you know you are capable of becoming.
          </p>
          <p style={{ fontSize:'clamp(17px,2.2vw,24px)', fontFamily:"'Instrument Serif',serif", fontStyle:'normal', fontWeight:400, lineHeight:'1.65', color:'var(--text)' }}>
            That's the core of what I bring into the coaching relationship.
          </p>
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
                I hired a coach because I couldn't hear my own voice.
              </h2>
              {[
                "In 2019, I'd built what you're supposed to build — product lead at Google, first product hire at a Series A→C company, campaign organizer in a presidential race. Accomplished, unfulfilled, and honestly lost.",
                "I turned to mentors, therapy, meditation, self-help. I could hear everyone else's voice except my own.",
                `My coach refused to give me answers. He continuously pointed to every way I outsourced my discernment and declined to participate in my optimization game to find the <em>right perspective</em>. In that space, I discovered my own inner wisdom.`,
                "That clarity led me to executive coaching, medical school, and psychedelic research — three paths that are, at their core, the same commitment: helping people reclaim their own consciousness.",
                "In 2026, it's the same problem but different form. AI can give advice anytime, optimize any problem, and generate insight on demand. The information is richer but the signal is harder to hear. The hunger for external answers has found a new home.",
                "My job is the same: create space for you to hear your own wisdom, don't buy into your self-doubt or quick fixes, and call you forward to what you know you are truly capable of.",
              ].map((text, i) => (
                <p key={i} style={{ color:'var(--text-2)', lineHeight:'1.85', marginBottom:'16px', fontSize:'15px' }} dangerouslySetInnerHTML={{ __html: text }} />
              ))}
              <p style={{ color:'var(--text-2)', lineHeight:'1.85', fontSize:'15px' }}>If that stirred something in you, let's chat.</p>
            </div>

            {/* Credentials */}
            <div style={{
              background:'linear-gradient(140deg, rgba(245,158,11,0.07) 0%, rgba(234,108,30,0.04) 100%)',
              border:'1px solid var(--border-2)',
              borderRadius:'20px',
              padding:'32px 28px',
            }}>
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
