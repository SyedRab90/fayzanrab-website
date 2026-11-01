import React from 'react';
import { Link } from 'react-router-dom';

const ink      = '#fdf8ed';
const inkMid   = 'rgba(253,248,237,0.65)';
const bg       = '#0c0500';
const amber    = '#f59e0b';

export default function Home() {
  return (
    <div style={{ background: bg, color: ink, fontFamily: "'DM Sans', sans-serif" }}>

      <style>{`
        .v6-hero        { min-height: 96vh; position: relative; overflow: hidden; display: flex; align-items: flex-end; padding-top: 66px; }
        .v6-hero-img    { position: absolute; inset: 0; object-fit: cover; object-position: 50% 18%; width: 100%; height: 100%; display: block; }
        .v6-hero-veil   { position: absolute; inset: 0; background: linear-gradient(to right, rgba(15,9,2,0.82) 0%, rgba(15,9,2,0.60) 42%, rgba(15,9,2,0.10) 100%); }
        .v6-hero-inner  { position: relative; z-index: 2; max-width: 1080px; margin: 0 auto; padding: 80px 48px; width: 100%; }
        .v6-hero-h1     { font-family: 'Raleway', sans-serif; font-size: clamp(34px, 4.2vw, 62px); font-weight: 700; line-height: 1.09; letter-spacing: -0.025em; color: #fef9f5; max-width: 620px; margin-bottom: 28px; }
        .v6-hero-sub    { font-size: 17px; color: rgba(254,249,245,0.70); line-height: 1.72; max-width: 460px; margin-bottom: 40px; }
        .v6-hero-cta    { display: inline-block; padding: 13px 30px; background: ${amber}; color: #fff; font-family: 'Raleway', sans-serif; font-weight: 700; font-size: 15px; border-radius: 5px; text-decoration: none; }

        .v6-intro       { max-width: 680px; margin: 0 auto; padding: 80px 32px 72px; text-align: center; }
        .v6-intro p     { font-size: clamp(20px, 2.2vw, 26px); color: ${inkMid}; line-height: 1.70; }
        .v6-intro em    { color: ${ink}; font-style: normal; }

        .v6-rule        { border: none; border-top: 1px solid rgba(253,248,237,0.08); margin: 0; }

        .v6-profile     { max-width: 1080px; margin: 0 auto; padding: 72px 48px; display: grid; grid-template-columns: 5fr 4fr; gap: 72px; align-items: center; }
        .v6-profile-img { width: 100%; aspect-ratio: 3/4; object-fit: cover; object-position: 50% 12%; display: block; }
        .v6-profile-h2  { font-family: 'Raleway', sans-serif; font-size: clamp(24px, 2.6vw, 38px); font-weight: 700; letter-spacing: -0.02em; line-height: 1.16; color: ${ink}; margin-bottom: 24px; }
        .v6-profile p   { font-size: 16px; color: ${inkMid}; line-height: 1.82; margin-bottom: 18px; }
        .v6-cta-link    { display: inline-block; font-size: 14px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: ${amber}; text-decoration: none; border-bottom: 1.5px solid ${amber}; padding-bottom: 2px; }

        .v6-pullquote   { padding: 56px 32px; text-align: center; }
        .v6-pullquote q { display: block; font-family: 'Raleway', sans-serif; font-size: clamp(22px, 2.8vw, 38px); font-weight: 600; letter-spacing: -0.02em; line-height: 1.40; color: ${ink}; max-width: 800px; margin: 0 auto 28px; quotes: none; }
        .v6-pullquote cite { font-size: 14px; color: ${inkMid}; font-style: normal; letter-spacing: 0.06em; text-transform: uppercase; }

        .v6-bets        { background: #160b02; padding: 72px 0; }
        .v6-bets-inner  { max-width: 780px; margin: 0 auto; padding: 0 48px; }
        .v6-bets h2     { font-family: 'Raleway', sans-serif; font-size: clamp(22px, 2.4vw, 34px); font-weight: 700; letter-spacing: -0.02em; color: ${ink}; margin-bottom: 56px; }
        .v6-bet         { padding-bottom: 44px; margin-bottom: 44px; border-bottom: 1px solid rgba(253,248,237,0.10); }
        .v6-bet:last-child { border-bottom: none; padding-bottom: 0; margin-bottom: 0; }
        .v6-bet strong  { display: block; font-family: 'Raleway', sans-serif; font-weight: 700; font-size: 18px; color: ${ink}; margin-bottom: 10px; }
        .v6-bet p       { font-size: 16px; color: ${inkMid}; line-height: 1.80; margin: 0; }

        .v6-quotes      { max-width: 1080px; margin: 0 auto; padding: 72px 48px; display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
        .v6-quote-item  { border-top: 1px solid rgba(253,248,237,0.10); padding-top: 28px; }
        .v6-quote-item p { font-size: 16px; color: ${ink}; line-height: 1.72; margin-bottom: 20px; }
        .v6-quote-name  { font-size: 14px; font-weight: 600; color: ${ink}; }
        .v6-quote-role  { font-size: 13px; color: ${inkMid}; }

        .v6-cta-section { padding: 64px 48px 72px; max-width: 1080px; margin: 0 auto; }
        .v6-cta-section h2 { font-family: 'Raleway', sans-serif; font-size: clamp(28px, 3.4vw, 50px); font-weight: 700; letter-spacing: -0.025em; line-height: 1.10; color: ${ink}; max-width: 560px; margin-bottom: 20px; }
        .v6-cta-section p  { font-size: 17px; color: ${inkMid}; line-height: 1.72; max-width: 440px; margin-bottom: 36px; }
        .v6-btn-primary    { display: inline-block; padding: 14px 32px; background: ${amber}; color: #fff; font-family: 'Raleway', sans-serif; font-weight: 700; font-size: 15px; border-radius: 5px; text-decoration: none; }

        @media (max-width: 768px) {
          .v6-hero        { min-height: 0; height: 100svh; align-items: flex-end !important; }
          .v6-hero-img    { object-position: 62% 10% !important; }
          .v6-hero-veil   { background: linear-gradient(to top, rgba(15,9,2,0.90) 0%, rgba(15,9,2,0.55) 45%, rgba(15,9,2,0.15) 100%) !important; }
          .v6-hero-inner  { padding: 36px 24px 36px !important; }
          .v6-intro       { padding: 56px 24px 48px !important; }
          .v6-profile    { grid-template-columns: 1fr !important; padding: 48px 24px !important; gap: 32px !important; }
          .v6-pullquote  { padding: 40px 24px !important; }
          .v6-bets       { padding: 56px 0 !important; }
          .v6-bets-inner { padding: 0 24px !important; }
          .v6-bets h2    { margin-bottom: 36px !important; }
          .v6-quotes     { grid-template-columns: 1fr !important; padding: 48px 24px !important; gap: 32px !important; }
          .v6-cta-section { padding: 56px 24px 72px !important; }
        }
      `}</style>

      {/* ── HERO: full-bleed photo, text floated over left side ── */}
      <section className="v6-hero">
        <img className="v6-hero-img" src="/images/fayzan-ted.jpg" alt="Fayzan Rab at TEDxEmory" />
        <div className="v6-hero-veil" />
        <div className="v6-hero-inner">
          <h1 className="v6-hero-h1">
            Leadership is not about more optimization. It's about developing discernment.
          </h1>
          <Link to="/contact" className="v6-hero-cta">Begin a conversation</Link>
        </div>
      </section>

      {/* ── CLIENT LOGOS ── */}
      <div style={{ padding:'28px 0', borderBottom:'1px solid rgba(253,248,237,0.08)', background:'transparent' }}>
        <p style={{ textAlign:'center', fontSize:'11px', fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(253,248,237,0.35)', marginBottom:'20px' }}>
          Clients come from
        </p>
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:'16px 40px', flexWrap:'wrap', padding:'0 24px' }}>
          {[
            { name:'Google',       slug:'google' },
            { name:'Anthropic',    slug:'anthropic' },
            { name:'Y Combinator', slug:'ycombinator' },
            { name:'Netflix',      slug:'netflix' },
            { name:'Microsoft',    svgPath:'M0 0h11.377v11.372H0zm12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zm12.623 0H24V24H12.623z' },
            { name:'Databricks',   slug:'databricks' },
            { name:'LinkedIn',     svgPath:'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
            { name:'Spotify',      slug:'spotify' },
          ].map(({ name, slug, svgPath }) => (
            <div key={name} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'6px', width:'90px' }}>
              {svgPath ? (
                <svg title={name} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" style={{ height:'20px', opacity:0.45, fill:'#fdf8ed', flexShrink:0 }}>
                  <path d={svgPath}/>
                </svg>
              ) : (
                <img
                  src={`https://cdn.simpleicons.org/${slug}/fdf8ed`}
                  alt={name}
                  height="20"
                  style={{ height:'20px', opacity:0.45 }}
                />
              )}
              <span style={{ fontSize:'10px', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(253,248,237,0.35)' }}>{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── INTRO: wide centered prose, no heading ── */}
      <section className="v6-intro">
        <p>
          You've raised the round. Built the team. You have advisors, AI, and more inputs than any leader before you.{' '}
          <em>And the signal is harder to hear than ever.</em>{' '}
          The hardest questions don't get answered by more data or a better framework. They require a different kind of knowing.
        </p>
      </section>

      <hr className="v6-rule" />

      {/* ── PROFILE: large photo left, text right ── */}
      <section>
        <div className="v6-profile">
          <img
            className="v6-profile-img"
            src="/images/fayzan-rita.jpeg"
            alt="Fayzan Rab"
            loading="lazy"
          />
          <div>
            <h2 className="v6-profile-h2">
              I work with a small number of people. Intentionally.
            </h2>
            <p>
              My clients are high performers who aren't stuck because they lack information. They're stuck because the thing they need to figure out can't be found on Claude or delegated to anyone else.
            </p>
            <p>
              I'm a physician who has studied and coached leadership over the past 7 years. 2,000+ hours. A practice built on the belief that the right conversation at the right time changes everything.
            </p>
            <Link to="/coaching" className="v6-cta-link">Who I work with →</Link>
          </div>
        </div>
      </section>

      <hr className="v6-rule" />

      {/* ── PULL QUOTE: one testimonial, full width, large ── */}
      <section className="v6-pullquote">
        <q>
          Coaching has felt like a jet pack for my life. More useful than almost anything else I could have invested in this past year.
        </q>
        <cite>Deepan Mehta — Co-Founder, Struct AI (YC S24)</cite>
      </section>

      <hr className="v6-rule" />

      {/* ── THE THREE BETS: warm tinted background, flowing prose ── */}
      <section className="v6-bets">
        <div className="v6-bets-inner">
          <h2>Three bets. One through-line.</h2>
          <p style={{ fontSize:'16px', color: inkMid, lineHeight:'1.80', marginTop:'-36px', marginBottom:'44px' }}>Everything I've done points to the same question: what does it actually take for a person to evolve?</p>
          {[
            {
              title: 'The Coaching Bet',
              body: 'I left Google and a Series A→C startup to pursue a calling in coaching. I bring reverence to every client engagement, treating it as a sacred privilege to serve others in growing past what they believe is possible.',
            },
            {
              title: 'The Medicine Bet',
              body: 'I went to medical school not for the credential, but for the rigor. Becoming a physician taught me to look for the question beneath the question — and to notice what isn\'t being said.',
            },
            {
              title: 'The Psychedelic Bet',
              body: 'I study altered states because they surface what coaching and medicine keep pointing to: who we think we are is constructed, and therefore malleable. That changes what I believe is possible for the people I work with.',
            },
          ].map(({ title, body }) => (
            <div key={title} className="v6-bet">
              <strong>{title}</strong>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECONDARY TESTIMONIALS: two columns, minimal ── */}
      <div className="v6-quotes">
        {[
          {
            quote: 'Working with Fayzan allowed me to rapidly step into the best version of myself in a way that feels genuine and lasting.',
            name: 'Aatash Parikh',
            role: 'Founder, Inkwire',
            avatar: '/images/headshots/aatash-parikh.webp',
          },
          {
            quote: "Fayzan's unique value is at the intersection of the worlds he has been in — business, medical, psychiatric, and the psychedelic medicine work. Rare.",
            name: 'Andrew Barakat',
            role: 'AI Health PM, Google',
            avatar: '/images/headshots/andrew-barakat.jpeg',
          },
        ].map((t) => (
          <div key={t.name} className="v6-quote-item">
            <p>"{t.quote}"</p>
            <div style={{ display:'flex', alignItems:'center', gap:'10px', marginTop:'4px' }}>
              <img src={t.avatar} alt={t.name} loading="lazy" style={{ width:'36px', height:'36px', borderRadius:'50%', objectFit:'cover', border:'1.5px solid rgba(253,248,237,0.15)', flexShrink:0 }} />
              <div>
                <div className="v6-quote-name">{t.name}</div>
                <div className="v6-quote-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="v6-rule" />

      {/* ── CTA: left-aligned, clean ── */}
      <div className="v6-cta-section">
        <h2>Ready to bet big on yourself?</h2>
        <p>I keep my client load small. If something here resonated, let's find out if this is the right fit.</p>
        <Link to="/contact" className="v6-btn-primary">Start a conversation</Link>
      </div>

    </div>
  );
}
