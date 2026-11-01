import React from 'react';
import { Link } from 'react-router-dom';

const ink    = '#fdf8ed';
const inkMid = 'rgba(253,248,237,0.65)';
const amber  = '#f59e0b';
const rule   = 'rgba(253,248,237,0.08)';

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
    <div style={{ background: '#0c0500', color: ink }}>

      <style>{`
        .about-hero      { max-width: 1080px; margin: 0 auto; padding: 140px 48px 72px; display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: flex-start; }
        .about-hero-h1   { font-family: 'Raleway', sans-serif; font-size: clamp(40px, 5vw, 64px); font-weight: 700; letter-spacing: -0.025em; line-height: 1.06; color: ${ink}; margin-bottom: 8px; }
        .about-hero-sub  { font-size: clamp(18px, 2vw, 22px); color: ${inkMid}; line-height: 1.55; margin-bottom: 28px; font-style: italic; }
        .about-hero-p    { font-size: 15px; color: ${inkMid}; line-height: 1.85; margin-bottom: 16px; }
        .about-rule      { border: none; border-top: 1px solid ${rule}; margin: 0; }
        .about-ai        { max-width: 1080px; margin: 0 auto; padding: 80px 48px; display: grid; grid-template-columns: 1.3fr 1fr; gap: 64px; align-items: start; }
        .about-ai-h2     { font-family: 'Raleway', sans-serif; font-size: clamp(24px, 2.6vw, 34px); font-weight: 700; letter-spacing: -0.02em; color: ${ink}; margin-bottom: 28px; }
        .about-cta       { max-width: 1080px; margin: 0 auto; padding: 72px 48px 90px; }
        .about-cta h2    { font-family: 'Raleway', sans-serif; font-size: clamp(28px, 3.4vw, 50px); font-weight: 700; letter-spacing: -0.025em; line-height: 1.10; color: ${ink}; max-width: 560px; margin-bottom: 20px; }
        .about-cta p     { font-size: 17px; color: ${inkMid}; line-height: 1.72; max-width: 440px; margin-bottom: 36px; }
        .about-btn       { display: inline-block; padding: 14px 32px; background: ${amber}; color: #fff; font-family: 'Raleway', sans-serif; font-weight: 700; font-size: 15px; border-radius: 5px; text-decoration: none; }
        .about-cred-item { padding-bottom: 18px; margin-bottom: 18px; border-bottom: 1px solid ${rule}; }
        .about-cred-item:last-child { border-bottom: none; padding-bottom: 0; margin-bottom: 0; }
        .about-cred-label { display: block; font-size: 11px; font-weight: 700; letter-spacing: 0.10em; text-transform: uppercase; color: ${amber}; margin-bottom: 5px; }
        .about-cred-value { font-size: 14px; color: ${ink}; line-height: 1.5; }
        .about-stat       { font-size: 16px; color: ${inkMid}; margin-bottom: 32px; }
        .about-stat strong { font-size: 20px; font-weight: 700; color: ${ink}; font-family: 'Raleway', sans-serif; }

        @media (max-width: 768px) {
          .about-hero { grid-template-columns: 1fr !important; padding: 90px 24px 48px !important; gap: 32px !important; }
          .about-hero > div:first-child { order: 2; }
          .about-hero > div:last-child  { order: 1; position: static !important; top: auto !important; }
          .about-ai   { grid-template-columns: 1fr !important; padding: 48px 24px !important; }
          .about-ai > div:last-child    { position: static !important; top: auto !important; }
          .about-cta  { padding: 56px 24px 72px !important; }
          .about-mobile-hide { display: none !important; }
        }
      `}</style>

      {/* ── HERO + STORY ── */}
      <section>
        <div className="about-hero">

          {/* Left — story + name + buttons */}
          <div>
            <h1 className="about-hero-h1">Fayzan Rab</h1>
            <p className="about-hero-sub">
              I hired a coach because I couldn't hear my own voice.
            </p>
            {[
              { text: "In 2019, I'd built what you're supposed to build — product lead at Google, first product hire at a Series A→C company, campaign organizer in a presidential race. Accomplished, unfulfilled, and honestly lost.", hide: false },
              { text: "I turned to mentors, therapy, meditation, self-help. I could hear everyone else's voice except my own.", hide: true },
              { text: "I hired a coach who refused to give me answers. He continuously pointed to every way I outsourced my discernment and declined to participate in my optimization game to find the right perspective. In that space, I discovered my own inner wisdom.", hide: false },
              { text: "That clarity led me to executive coaching, medical school, and psychedelic research — three paths that are, at their core, the same commitment: helping people reclaim their own consciousness.", hide: true },
              { text: "In 2026, it's the same problem but different form. AI can give advice anytime, optimize any problem, and generate insight on demand. The information is richer but the signal is harder to hear. The hunger for external answers has found a new home.", hide: true },
              { text: "My job is the same: create space for you to hear your own wisdom, don't buy into your self-doubt or quick fixes, and call you forward to what you know you are truly capable of.", hide: false },
            ].map(({ text, hide }, i) => (
              <p key={i} className={`about-hero-p${hide ? ' about-mobile-hide' : ''}`} dangerouslySetInnerHTML={{ __html: text }} />
            ))}
            <p className="about-hero-p" style={{ marginBottom: '32px' }}>If that stirred something in you, let's chat.</p>
            <div style={{ display:'flex', gap:'12px', flexWrap:'wrap' }}>
              <Link to="/contact" className="btn btn-primary">Work with me →</Link>
              <Link to="/coaching" className="btn btn-outline">See services</Link>
            </div>
          </div>

          {/* Right — photo */}
          <div style={{ position:'sticky', top:'100px' }}>
            <img
              src="/images/fayzan-cafe.jpg"
              alt="Fayzan Rab"
              loading="lazy"
              decoding="async"
              style={{
                width: '100%', display: 'block',
                border: '1px solid rgba(253,248,237,0.08)',
              }}
            />
          </div>

        </div>
      </section>

      <hr className="about-rule" />

      {/* ── A WORD ON AI + CREDENTIALS ── */}
      <section>
        <div className="about-ai">

          {/* A Word on AI */}
          <div>
            <h2 className="about-ai-h2">A Word on AI</h2>
            <p style={{ color: inkMid, lineHeight:'1.85', marginBottom:'16px', fontSize:'15px' }}>
              I am an AI power user. I use it in every faculty of my life (including building this website). I believe in it and its awesome potential. And yet the more time I spend there, the clearer something becomes: AI has no skin in the game.
            </p>
            <p style={{ color: inkMid, lineHeight:'1.85', marginBottom:'16px', fontSize:'15px' }}>
              It can reflect your patterns back with precision. But it cannot answer the question that you are not even aware of. It cannot feel the shift in the room when you're about to make a decision you'll regret. It won't sit with you in the discomfort long enough for something deep to shift.
            </p>
            <p style={{ color: inkMid, lineHeight:'1.85', marginBottom:'16px', fontSize:'15px' }}>
              Every path I've taken — coaching, medicine, psychedelic research — has shown me one consistent truth about human development: transformation is about closing the gap between who you are now and who you know you are capable of becoming.
            </p>
            <p style={{ color: inkMid, lineHeight:'1.85', fontSize:'15px' }}>
              That requires a human who is willing to go be with you — in all of your context and story — and stand for your potential.
            </p>
          </div>

          {/* Credentials */}
          <div style={{ position:'sticky', top:'100px' }}>
            {credentials.map(({ label, value }) => (
              <div key={label} className="about-cred-item">
                <span className="about-cred-label">{label}</span>
                <span className="about-cred-value">{value}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      <hr className="about-rule" />

      {/* ── CTA ── */}
      <div className="about-cta">
        <h2>Ready to begin?</h2>
        <p>I keep my client load small. Let's find out if this is the right fit.</p>
        <Link to="/contact" className="about-btn">Let's talk →</Link>
      </div>

    </div>
  );
}
