import React from 'react';
import { Link } from 'react-router-dom';

const credentials = [
  { label: 'Education',         value: 'MD, Emory University School of Medicine' },
  { label: 'Certification',     value: 'PCC, International Coaching Federation' },
  { label: 'Training',          value: 'IFS Level 1 (BIPOC) · Accomplishment Coaching Leadership Development Program' },
  { label: 'Experience',        value: 'Product Leader at Google · 1st Product Hire at Mindstrong Health (Series C)' },
  { label: 'Clinical Research', value: 'Sub-Investigator · Aquilino Cancer Institute (Psychedelic Clinical Trials)' },
  { label: 'Practice',          value: '2,000+ coaching hours with high performers' },
];

export default function About() {
  return (
    <div>

      {/* ── HERO + STORY ── */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        paddingTop: '140px', paddingBottom: '40px',
      }}>
        <div className="orb" style={{ width:520, height:520, top:'5%', right:'-6%', background:'radial-gradient(circle,rgba(245,158,11,0.16) 0%,transparent 70%)' }} />
        <div className="orb" style={{ width:380, height:380, bottom:'10%', left:'-5%', background:'radial-gradient(circle,rgba(234,108,30,0.13) 0%,transparent 70%)' }} />

        <div className="container" style={{ position:'relative', zIndex:1, width:'100%' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'72px', alignItems:'flex-start' }} className="two-col">

            {/* Left — story + name + buttons */}
            <div>
              <span className="label">The Story</span>
              <h1 style={{ fontSize:'clamp(40px,5vw,64px)', fontWeight:500, marginBottom:'8px' }}>
                Fayzan Rab
              </h1>
              <p style={{ fontFamily:"'Instrument Serif',serif", fontStyle:'italic', fontSize:'clamp(18px,2vw,24px)', color:'var(--text-2)', lineHeight:'1.5', marginBottom:'28px' }}>
                I hired a coach because I couldn't hear my own voice.
              </p>
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
              <p style={{ color:'var(--text-2)', lineHeight:'1.85', fontSize:'15px', marginBottom:'32px' }}>If that stirred something in you, let's chat.</p>
              <div style={{ display:'flex', gap:'12px', flexWrap:'wrap' }}>
                <Link to="/contact" className="btn btn-primary">Work with me →</Link>
                <Link to="/coaching" className="btn btn-outline">See services</Link>
              </div>
            </div>

            {/* Right — photo (sticky) */}
            <div style={{ position:'sticky', top:'100px' }}>
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
                  style={{ width:'100%', display:'block' }}
                />
                <div style={{
                  position:'absolute', inset:0,
                  background:'linear-gradient(160deg, rgba(245,158,11,0.22) 0%, rgba(234,108,30,0.18) 40%, rgba(120,53,15,0.35) 100%)',
                  mixBlendMode:'multiply',
                }} />
                <div style={{
                  position:'absolute', bottom:0, left:0, right:0, height:'45%',
                  background:'linear-gradient(to top, rgba(10,7,0,0.70) 0%, transparent 100%)',
                }} />
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

      {/* ── THROUGHLINE + CREDENTIALS ── */}
      <section style={{ padding:'40px 0 80px' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1.3fr 1fr', gap:'64px', alignItems:'start' }} className="two-col">

            {/* A Word on AI */}
            <div>
              <span className="label">A Word on AI</span>
              <p style={{ color:'var(--text-2)', lineHeight:'1.85', marginBottom:'16px', fontSize:'15px' }}>
                I am an AI power user. I use it in every faculty of my life (including building this website). I believe in it and its awesome potential. And yet the more time I (and my clients) spend there, the clearer something becomes: AI has no skin in the game.
              </p>
              <p style={{ color:'var(--text-2)', lineHeight:'1.85', marginBottom:'16px', fontSize:'15px' }}>
                It can reflect your patterns back with precision. But it cannot answer the question that you are not even aware of. It cannot feel the shift in the room when you're about to make a decision you'll regret. It won't sit with you in the discomfort long enough for something deep to shift.
              </p>
              <p style={{ color:'var(--text-2)', lineHeight:'1.85', marginBottom:'16px', fontSize:'15px' }}>
                Every path I've taken — coaching, medicine, psychedelic research — has shown me one consistent truth about human development: transformation is about closing the gap between who you are now and who you know you are capable of becoming.
              </p>
              <p style={{ color:'var(--text-2)', lineHeight:'1.85', fontSize:'15px' }}>
                That requires a human who is willing to go be with you — in all of your context and story — and stand for your potential.
              </p>
            </div>

            {/* Credentials */}
            <div style={{
              position:'sticky', top:'100px',
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

      {/* ── CTA ── */}
      <section style={{ padding:'60px 0 100px' }}>
        <div className="container">
          <div style={{
            borderRadius:'22px', padding:'68px 52px', textAlign:'center',
            background:'linear-gradient(135deg,#3b1007 0%,#7c2d12 45%,#92400e 100%)',
            position:'relative', overflow:'hidden',
          }}>
            <div className="orb" style={{ width:280, height:280, top:'-70px', right:'-50px', background:'radial-gradient(circle,rgba(255,255,255,0.06) 0%,transparent 70%)' }} />
            <span className="label" style={{ color:'rgba(255,255,255,0.80)' }}>Start here</span>
            <h2 style={{ fontSize:'clamp(22px,3.5vw,38px)', color:'#fff', fontWeight:500, marginBottom:'10px', position:'relative' }}>
              Ready to begin?
            </h2>
            <p style={{ color:'rgba(255,255,255,0.82)', marginBottom:'28px', position:'relative', fontSize:'16px' }}>
              I keep my client load small. Let's find out if this is the right fit.
            </p>
            <Link to="/contact" style={{
              display:'inline-block', padding:'13px 32px', borderRadius:'100px',
              background:'linear-gradient(135deg, #f59e0b, #ea6c1e)',
              color:'#fff', fontSize:'14px', fontWeight:600,
              textDecoration:'none', position:'relative',
              boxShadow:'0 0 28px rgba(245,158,11,0.40)',
            }}>Let's talk →</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
