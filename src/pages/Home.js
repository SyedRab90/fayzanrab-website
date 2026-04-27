import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>

      {/* ── HERO ── */}
      <section style={{
        position:'relative', minHeight:'100vh',
        display:'flex', alignItems:'center', overflow:'hidden',
      }}>
        {/* Desktop: TEDx photo */}
        <div className="hero-bg" style={{
          position:'absolute', inset:0,
          backgroundSize:'cover', backgroundPosition:'40% center',
          zIndex:0,
        }} />

        {/* Mobile: animated gradient scene */}
        <div className="hero-mobile-bg" aria-hidden="true">
          <div className="hmb-orb hmb-orb-1" />
          <div className="hmb-orb hmb-orb-2" />
          <div className="hmb-orb hmb-orb-3" />
          <div className="hmb-orb hmb-orb-4" />
          <div className="hmb-noise" />
        </div>

        <style>{`
          /* Desktop */
          .hero-bg { background-image: url(/images/fayzan-ted.jpg); }
          .hero-mobile-bg { display: none; }

          /* Mobile */
          @media (max-width: 768px) {
            .hero-bg { display: none; }
            .hero-mobile-bg {
              display: block;
              position: absolute; inset: 0; z-index: 0;
              background: #0c0500;
              overflow: hidden;
            }

            /* Floating glow orbs */
            .hmb-orb {
              position: absolute;
              border-radius: 50%;
              filter: blur(60px);
            }
            .hmb-orb-1 {
              width: 340px; height: 340px;
              top: -60px; left: -80px;
              background: radial-gradient(circle, rgba(245,158,11,0.55) 0%, rgba(234,108,30,0.25) 50%, transparent 75%);
              animation: orbFloat1 8s ease-in-out infinite;
            }
            .hmb-orb-2 {
              width: 280px; height: 280px;
              bottom: 5%; right: -60px;
              background: radial-gradient(circle, rgba(220,87,30,0.60) 0%, rgba(180,50,0,0.25) 55%, transparent 75%);
              animation: orbFloat2 11s ease-in-out infinite;
            }
            .hmb-orb-3 {
              width: 220px; height: 220px;
              top: 42%; left: 30%;
              background: radial-gradient(circle, rgba(251,191,36,0.40) 0%, rgba(245,158,11,0.15) 55%, transparent 75%);
              animation: orbFloat3 9s ease-in-out infinite;
            }
            .hmb-orb-4 {
              width: 180px; height: 180px;
              top: 15%; right: 5%;
              background: radial-gradient(circle, rgba(146,64,14,0.55) 0%, transparent 70%);
              animation: orbFloat4 13s ease-in-out infinite;
            }

            /* Subtle grain texture for depth */
            .hmb-noise {
              position: absolute; inset: 0;
              background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E");
              background-repeat: repeat;
              background-size: 128px;
              opacity: 0.35;
              mix-blend-mode: overlay;
            }

            @keyframes orbFloat1 {
              0%,100% { transform: translate(0,0) scale(1); }
              33%      { transform: translate(40px, 55px) scale(1.08); }
              66%      { transform: translate(-20px, 30px) scale(0.94); }
            }
            @keyframes orbFloat2 {
              0%,100% { transform: translate(0,0) scale(1); }
              40%      { transform: translate(-50px,-40px) scale(1.12); }
              70%      { transform: translate(20px,-20px) scale(0.92); }
            }
            @keyframes orbFloat3 {
              0%,100% { transform: translate(0,0) scale(1); opacity:0.8; }
              50%      { transform: translate(-30px,40px) scale(1.15); opacity:1; }
            }
            @keyframes orbFloat4 {
              0%,100% { transform: translate(0,0) scale(1); }
              45%      { transform: translate(30px, 50px) scale(1.18); }
              80%      { transform: translate(-15px, 20px) scale(0.88); }
            }
          }
        `}</style>

        {/* Dark gradient overlay (desktop only, mobile handled by orbs) */}
        <div className="hero-overlay" style={{
          position:'absolute', inset:0,
          background:'linear-gradient(110deg, rgba(10,7,0,0.93) 0%, rgba(26,14,0,0.82) 50%, rgba(10,7,0,0.60) 100%)',
          zIndex:1,
        }} />
        <style>{`.hero-overlay { } @media(max-width:768px){.hero-overlay{background:linear-gradient(180deg,rgba(10,7,0,0.45) 0%,rgba(10,7,0,0.25) 40%,rgba(10,7,0,0.55) 100%) !important;}}`}</style>

        {/* Desktop orbs */}
        <div className="orb desktop-only-orb" style={{ zIndex:1, width:560, height:560, bottom:'-80px', left:'-80px', background:'radial-gradient(circle,rgba(245,158,11,0.18) 0%,transparent 68%)' }} />
        <div className="orb desktop-only-orb" style={{ zIndex:1, width:400, height:400, top:'10%', right:'12%', background:'radial-gradient(circle,rgba(234,108,30,0.10) 0%,transparent 70%)' }} />
        <style>{`@media(max-width:768px){.desktop-only-orb{display:none;}}`}</style>

        <div className="container" style={{ position:'relative', zIndex:2, paddingTop:'130px', paddingBottom:'100px' }}>
          <span className="label">Executive Coach · Physician · Psychedelic Researcher</span>
          <h1 style={{
            fontSize:'clamp(36px,5vw,68px)',
            fontFamily:"'Instrument Serif', Georgia, serif",
            fontWeight:400, fontStyle:'normal',
            lineHeight:1.10, maxWidth:'680px',
            marginBottom:'16px',
          }}>
            Leadership is not about more optimization. It's about{' '}
            <span style={{
              background:'linear-gradient(135deg,#fbbf24,#f59e0b,#ea6c1e)',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
            }}>discernment.</span>
          </h1>
          <p style={{ fontSize:'16px', color:'var(--text-2)', lineHeight:'1.72', maxWidth:'480px', marginBottom:'36px' }}>
            The most important frontier is human consciousness. I've spent seven years at that intersection — executive coaching, clinical medicine, psychedelic research. I bring it all to a small number of founders and executives who are ready to bet big on themselves.
          </p>
          <div style={{ display:'flex', gap:'12px', flexWrap:'wrap', marginBottom:'52px' }}>
            <Link to="/contact" className="btn btn-primary">Work with me →</Link>
            <Link to="/about" className="btn btn-outline">Learn more</Link>
          </div>
          <div className="stats-badge">
            <span className="stats-number">2,000+</span>
            <span className="stats-label">coaching hours with high performers</span>
          </div>
        </div>
      </section>


      {/* ── CLIENT COMPANIES STRIP ── */}
      <div style={{ padding:'28px 0', borderBottom:'1px solid rgba(245,158,11,0.07)' }}>
        <div className="container">
          <p style={{ textAlign:'center', fontSize:'12px', fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--text-3)', marginBottom:'20px' }}>
            Clients come from
          </p>
          <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:'16px 40px', flexWrap:'wrap' }}>
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
                  <svg title={name} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" style={{ height:'20px', opacity:0.55, fill:'#fdf8ed', flexShrink:0 }}>
                    <path d={svgPath}/>
                  </svg>
                ) : (
                  <img
                    src={`https://cdn.simpleicons.org/${slug}/fdf8ed`}
                    alt={name}
                    height="20"
                    style={{ height:'20px', opacity:0.55 }}
                  />
                )}
                <span style={{ fontSize:'10px', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(253,248,237,0.35)' }}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── THE PROBLEM ── */}
      <section className="section">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'72px', alignItems:'center' }} className="two-col">

            {/* Photo */}
            <div style={{ position:'relative' }}>
              <div className="orb" style={{ width:340, height:340, top:'-40px', left:'-40px', background:'radial-gradient(circle,rgba(245,158,11,0.14) 0%,transparent 70%)', zIndex:0 }} />
              <div style={{ position:'relative', borderRadius:'20px', overflow:'hidden', zIndex:1, aspectRatio:'3/4' }}>
                <img
                  src="/images/fayzan-rita.jpeg"
                  alt="Fayzan Rab"
                  loading="lazy"
                  decoding="async"
                  style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'50% 20%' }}
                />
                <div style={{
                  position:'absolute', inset:0,
                  background:'linear-gradient(160deg,rgba(245,158,11,0.16) 0%,rgba(120,53,15,0.30) 100%)',
                  mixBlendMode:'multiply',
                }} />
                <div style={{ position:'absolute', inset:0, border:'1px solid rgba(245,158,11,0.14)', borderRadius:'20px' }} />
              </div>
            </div>

            {/* Text */}
            <div>
              <h2 style={{ fontSize:'clamp(26px,3vw,42px)', fontWeight:500, marginBottom:'28px', lineHeight:1.15 }}>
                The clarity you are seeking won't come from more information.
              </h2>
              <p style={{ color:'var(--text-2)', lineHeight:'1.85', marginBottom:'16px', fontSize:'16px' }}>
                You've raised the round. Built the team. You have advisors, AI, and more inputs than any leader before you. And the signal is harder to hear than ever.
              </p>
              <p style={{ color:'var(--text-2)', lineHeight:'1.85', marginBottom:'16px', fontSize:'16px' }}>
                The hardest questions — what to build next, who to become, whether you're moving in the right direction — don't get answered by more data or a better framework. They require a different kind of knowing. One that no advisor or AI can deliver.
              </p>
              <p style={{ color:'var(--text-2)', lineHeight:'1.85', fontSize:'16px', marginBottom:'28px' }}>
                What reaches it is a direct, felt, and trusting relationship with your own consciousness.
              </p>
              <p style={{ color:'var(--text-2)', lineHeight:'1.85', fontSize:'16px', marginBottom:'28px' }}>
                That's the work.
              </p>
              <Link to="/coaching" className="btn btn-outline">Who I work with →</Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── THREE BETS ── */}
      <section className="section" style={{ paddingTop:0 }}>
        <div className="container">
          <span className="label" style={{ display:'block', textAlign:'center' }}>The Three Bets</span>
          <h2 style={{ fontSize:'clamp(26px,3vw,40px)', fontWeight:500, textAlign:'center', marginBottom:'16px' }}>
            Different Paths. Same Commitment.
          </h2>
          <p style={{ textAlign:'center', color:'var(--text-2)', fontSize:'16px', maxWidth:'560px', margin:'0 auto 48px' }}>
            After years as a product lead at Google and an early hire at a Series A→C startup, I made three bets that map the full spectrum of human consciousness.
          </p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'16px' }} className="three-col">
            {[
              {
                title: 'The Coaching Bet',
                desc: 'Being coached and coaching others has shown me the power of integration. When I stopped believing I needed to choose sides of my identity — cerebral, entrepreneurial, interpersonal, spiritual — I gave myself permission to step into my power. Thousands of hours, mentorship from the best in the field, a craft built over years. The highest honor you can pay your own consciousness is to bet big on it.',
                bg: 'linear-gradient(140deg,#3b1007 0%,#7c2d12 100%)',
              },
              {
                title: 'The Medicine Bet',
                desc: 'I left Silicon Valley for medical school — not for the credential, but for the rigor, service, and expertise. I knew that if I were to commit to cultivating human potential, I needed to understand its foil: illness and suffering. Becoming a doctor brought an appreciation for the tools and research of western medicine — and the discipline to find the question underneath the question.',
                bg: 'linear-gradient(140deg,#1c0f00 0%,#92400e 100%)',
              },
              {
                title: 'The Psychedelic Bet',
                desc: 'My research on psychedelics puts me at the frontier of consciousness: what happens when we loosen our grip on the conception of self we hold so tightly? Psychedelics reveal what both coaching and medicine have pointed to — the stories we tell about ourselves are constructed, and therefore malleable. By studying the ecstatic, I see in the ordinary the full depths of what human beings are capable of.',
                bg: 'linear-gradient(140deg,#2d1b00 0%,#78350f 100%)',
              },
            ].map(({ title, desc, bg }) => (
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

      {/* ── TESTIMONIALS TEASER ── */}
      <section className="section" style={{
        position:'relative', overflow:'hidden',
        background:'linear-gradient(135deg,rgba(245,158,11,0.04) 0%,rgba(234,108,30,0.06) 100%)',
      }}>
        <div className="orb" style={{ width:500, height:400, top:'-60px', right:'-80px', background:'radial-gradient(ellipse,rgba(245,158,11,0.10) 0%,transparent 70%)' }} />
        <div className="orb" style={{ width:380, height:380, bottom:'-60px', left:'-60px', background:'radial-gradient(circle,rgba(234,108,30,0.08) 0%,transparent 70%)' }} />

        <div className="container" style={{ position:'relative', zIndex:1 }}>
          {/* Featured pull quote */}
          <div style={{ textAlign:'center', maxWidth:'620px', margin:'0 auto 64px' }}>
            <div style={{ width:'36px', height:'2px', background:'linear-gradient(90deg,#f59e0b,#ea6c1e)', borderRadius:'2px', margin:'0 auto 28px' }} />
            <p style={{
              fontSize:'clamp(22px,2.8vw,36px)',
              fontFamily:"'Instrument Serif',serif", fontStyle:'normal',
              fontWeight:400, lineHeight:'1.42', color:'var(--text)', marginBottom:'20px',
            }}>
              "Coaching has felt like a jet pack for my life. More useful than almost anything else I could have invested in this past year."
            </p>
            <p style={{ fontSize:'12px', fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--amber)' }}>
              Deepan Mehta, Co-Founder, Struct AI (YC S24)
            </p>
          </div>

          {/* Three teaser cards — dark glass */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'16px', marginBottom:'36px' }} className="three-col">
            {[
              {
                quote: 'Working with Fayzan allowed me to rapidly step into the best version of myself in a way that feels genuine and lasting.',
                name: 'Aatash Parikh', role: 'Founder, Inkwire',
                avatar: '/images/headshots/aatash-parikh.webp',
                bar: 'linear-gradient(90deg,#f59e0b,#ea6c1e)',
              },
              {
                quote: "Fayzan's mix of sharp questions, frameworks, and calm nature helped me turn a half-formed idea into a business. I went from employee to founder with an owner's mindset.",
                name: 'Tayyab Rizvi', role: 'Founder, Scalemates',
                avatar: '/images/headshots/tayyab-rizvi.jpeg',
                bar: 'linear-gradient(90deg,#fbbf24,#f59e0b)',
              },
              {
                quote: "Fayzan's unique value is at the intersection of the worlds he has been in — business, entrepreneurship, medical, psychiatric, and the psychedelic medicine work. All of that is wrapped in a spirituality and vulnerability that is rare.",
                name: 'Andrew Barakat', role: 'AI Health PM, Google',
                avatar: '/images/headshots/andrew-barakat.jpeg',
                bar: 'linear-gradient(90deg,#ea6c1e,#fbbf24)',
              },
            ].map((t, i) => (
              <div key={i} style={{
                background:'rgba(20,12,2,0.60)',
                border:'1px solid rgba(245,158,11,0.13)',
                borderRadius:'18px',
                padding:'28px 26px',
                position:'relative',
                overflow:'hidden',
                backdropFilter:'blur(12px)',
                transition:'all 0.28s ease',
                display:'flex', flexDirection:'column', justifyContent:'space-between',
                minHeight:'260px',
              }}
              onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-5px)'; e.currentTarget.style.borderColor='rgba(245,158,11,0.30)'; e.currentTarget.style.boxShadow='0 20px 48px rgba(0,0,0,0.40)'; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform='none'; e.currentTarget.style.borderColor='rgba(245,158,11,0.13)'; e.currentTarget.style.boxShadow='none'; }}
              >
                {/* Top gradient bar */}
                <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:t.bar }} />
                {/* Quote mark */}
                <div style={{
                  fontFamily:"'Instrument Serif',serif", fontSize:'32px', lineHeight:1,
                  color:'rgba(245,158,11,0.45)', marginBottom:'14px',
                }}>"</div>
                {/* Quote text */}
                <p style={{
                  fontSize:'14px', lineHeight:'1.80',
                  color:'rgba(253,248,237,0.68)',
                  flex:1, marginBottom:'24px',
                }}>{t.quote}</p>
                {/* Person */}
                <div style={{ display:'flex', alignItems:'center', gap:'11px' }}>
                  <img src={t.avatar} alt={t.name} loading="lazy" decoding="async" width="38" height="38" style={{
                    width:'38px', height:'38px', borderRadius:'50%',
                    objectFit:'cover', border:'1.5px solid rgba(245,158,11,0.22)',
                    flexShrink:0,
                  }} />
                  <div>
                    <div style={{ fontSize:'14px', fontWeight:600, color:'var(--text)' }}>{t.name}</div>
                    <div style={{ fontSize:'12px', color:'var(--text-3)', marginTop:'2px' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Link to coaching page */}
          <div style={{ textAlign:'center' }}>
            <Link to="/coaching" style={{
              fontSize:'12px', fontWeight:700, letterSpacing:'0.12em',
              textTransform:'uppercase', color:'var(--amber)',
              textDecoration:'none',
            }}>Read more client stories →</Link>
          </div>
        </div>
      </section>


      {/* ── CTA ── */}
      <section style={{ padding:'60px 0 100px' }}>
        <div className="container">
          <div style={{
            borderRadius:'22px', padding:'68px 52px',
            textAlign:'center', position:'relative', overflow:'hidden',
            background:'linear-gradient(135deg,#3b1007 0%,#7c2d12 45%,#92400e 100%)',
          }}>
            <div className="orb" style={{ width:300, height:300, top:'-80px', right:'-60px', background:'radial-gradient(circle,rgba(255,255,255,0.07) 0%,transparent 70%)' }} />
            <div className="orb" style={{ width:240, height:240, bottom:'-60px', left:'5%', background:'radial-gradient(circle,rgba(255,255,255,0.04) 0%,transparent 70%)' }} />
            <span className="label" style={{ color:'rgba(255,255,255,0.80)' }}>Start here</span>
            <h2 style={{ fontSize:'clamp(24px,3.5vw,40px)', color:'#fff', marginBottom:'10px', position:'relative', fontWeight:500 }}>
              Ready to bet big on yourself?
            </h2>
            <p style={{ color:'rgba(255,255,255,0.82)', marginBottom:'30px', position:'relative', fontSize:'16px' }}>
              I keep my client load small. Let's find out if this is the right fit.
            </p>
            <Link to="/contact" style={{
              display:'inline-block', padding:'13px 32px', borderRadius:'100px',
              background:'linear-gradient(135deg, #f59e0b, #ea6c1e)',
              color:'#fff', fontSize:'14px', fontWeight:600,
              textDecoration:'none', position:'relative',
              boxShadow:'0 0 28px rgba(245,158,11,0.40)',
              transition:'all 0.22s ease',
            }}
            onMouseEnter={e=>{ e.currentTarget.style.opacity='0.88'; }}
            onMouseLeave={e=>{ e.currentTarget.style.opacity='1'; }}
            >
              Start a conversation →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
