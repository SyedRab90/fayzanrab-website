import React from 'react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    id:1, colorClass:'t1',
    text:'Working with Fayzan allowed me to rapidly step into <strong>the best version of myself in a way that feels genuine and lasting.</strong>',
    name:'Aatash Parikh', role:'Founder, Inkwire',
    avatar:'/images/headshots/aatash-parikh.webp',
  },
  {
    id:2, colorClass:'t2',
    text:"Fayzan's mix of sharp questions, frameworks, and calm nature helped me turn a half-formed idea into a business. I went <strong>from employee to founder with an owner's mindset.</strong>",
    name:'Tayyab Rizvi', role:'Founder, Scalemates',
    avatar:'/images/headshots/tayyab-rizvi.jpeg',
  },
  {
    id:3, colorClass:'t3',
    text:'Fayzan really helped me shift my trajectory with both a practical and emotional/energetic approach. I am very grateful for the experience, grateful for his <strong>kindness, honesty and intuition.</strong>',
    name:'Dr. Joe Tafur', role:'Founder, Modern Spirit',
    avatar:'/images/headshots/joe-tafur.webp',
  },
  {
    id:4, colorClass:'t4',
    text:'I came to Fayzan feeling like there were so many things wrong with me. After the first month, <strong>it was life-changing.</strong> He helped me realize I should be coming from a place of love, not doubt.',
    name:'Somon Nader', role:'Finance at Databricks',
    avatar:'/images/headshots/somon-nader.jpeg',
  },
  {
    id:5, colorClass:'t5',
    text:'One of the <strong>most transformative investments I made in my adult life.</strong>',
    name:'Neil Sethi', role:'Senior PM at Spotify',
    avatar:'/images/headshots/neil-sethi.jpeg',
  },
  {
    id:6, colorClass:'t6',
    text:"Fayzan was the right coach for me because I saw his strength as an organizer — inspiring leadership as well as leading. <strong>I knew I wanted to work with someone who is walking his own talk.</strong>",
    name:'J.P. Hutchins', role:'Senior Engineer at Intercreate',
    avatar:'/images/headshots/jp-hutchins.jpg',
  },
  {
    id:7, colorClass:'t1',
    text:'This has been more like <strong>leadership coaching</strong> than life and career coaching. <strong>Grown more here than I have at any other point in my life.</strong> Fayzan is a true companion in this journey.',
    name:'Derek Evanson', role:'Director at Netflix',
    avatar:'/images/headshots/derek-evanson.jpeg',
  },
  {
    id:8, colorClass:'t2',
    text:"Coaching has felt like <strong>a jet pack for my life.</strong> It's been more useful than almost anything else I could have invested in this past year. It's hard to find people who can balance empathy, humor, and no-bullshit directness.",
    name:'Deepan Mehta', role:'Co-Founder Struct AI (YC-24), Former Senior PM at LinkedIn',
    avatar:'/images/headshots/deepan-mehta.jpeg',
  },
  {
    id:9, colorClass:'t3',
    text:"Fayzan's unique value is at the intersection of the worlds he has been in — business, entrepreneurship, medical, psychiatric, and the psychedelic medicine work. <strong>All of that is wrapped in a spirituality and vulnerability that is rare.</strong>",
    name:'Andrew Barakat', role:'AI Health PM, Google',
    avatar:'/images/headshots/andrew-barakat.jpeg',
  },
  {
    id:10, colorClass:'t4',
    text:"I have known Fayzan for the better part of a decade and had him work with me as a coach for the last year. My sessions with him really tap into my power as a founder. I go in expecting to talk tactics and walk away with what's really blocking me from solving those problems already. <strong>I can't count the number of breakthroughs I have had.</strong> It's a truly great investment for myself and my company.",
    name:'Kartik Shastri', role:'Co-Founder & CEO, Menda Health',
    avatar:'/images/headshots/kartik-shastri.jpeg',
  },
  {
    id:11, colorClass:'t5',
    text:"Fayzan created the safe space to explore and practice putting my development first — an area that I often put on the backburner as the eldest daughter of immigrants. I can easily say that my life and how I feel have completely taken a 180 (which is WILD). <strong>I remember saying my soul was tired in one of our first conversations, and I no longer feel that way.</strong>",
    name:'Malena Lopez-Sotelo', role:'Lead AI PMM at Microsoft',
    avatar:'/images/headshots/malena-lopez.jpg',
  },
];

export default function Coaching() {
  return (
    <div>

      {/* ── HERO ── */}
      <section style={{ display:'flex', alignItems:'flex-start', position:'relative', overflow:'hidden', paddingTop:'160px', paddingBottom:'120px' }}>
        <div className="orb" style={{ width:580, height:580, top:'0%', right:'-8%', background:'radial-gradient(circle,rgba(245,158,11,0.14) 0%,transparent 68%)' }} />
        <div className="orb" style={{ width:400, height:400, bottom:'-10%', left:'-6%', background:'radial-gradient(circle,rgba(234,108,30,0.11) 0%,transparent 70%)' }} />

        <div className="container" style={{ position:'relative', zIndex:1, textAlign:'center', maxWidth:'780px', margin:'0 auto' }}>
          <span className="label">Coaching</span>
          <h1 style={{ fontSize:'clamp(34px,5vw,66px)', fontWeight:500, marginBottom:'22px' }}>
            For founders and senior operators at{' '}
            <span style={{
              background:'linear-gradient(135deg,#fbbf24,#f59e0b,#ea6c1e)',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
            }}>inflection points.</span>
          </h1>
          <p style={{ fontSize:'16px', color:'var(--text-2)', lineHeight:'1.75', maxWidth:'560px', margin:'0 auto 36px' }}>
            I work with tech founders, senior operators, and high performers navigating strategic pivots, leadership transitions, co-founder tension, or the identity questions that come after a major win — or loss.
          </p>
          <Link to="/contact" className="btn btn-primary">Schedule a conversation →</Link>
        </div>
      </section>

      {/* ── IRREPLACEABLE ── */}
      <section className="section" style={{
        background:'linear-gradient(135deg,rgba(245,158,11,0.04) 0%,rgba(234,108,30,0.06) 100%)',
        position:'relative', overflow:'hidden',
      }}>
        <div className="orb" style={{ width:500, height:300, top:'50%', left:'50%', transform:'translate(-50%,-50%)', background:'radial-gradient(ellipse,rgba(245,158,11,0.07) 0%,transparent 70%)' }} />
        <div className="container" style={{ textAlign:'center', maxWidth:'720px', margin:'0 auto', position:'relative', zIndex:1 }}>
          <span className="label">The Irreplaceable Part</span>
          <p style={{
            fontSize:'clamp(17px,2.2vw,24px)',
            fontFamily:"'Instrument Serif',serif", fontStyle:'normal',
            fontWeight:400, lineHeight:'1.65',
            color:'var(--text)', marginBottom:'18px',
          }}>
            "Your peers are using AI for everything. So are you. But there's a category of problem that doesn't get solved by another tool, framework, or podcast: the ones that require someone who knows your history, holds your contradictions without judgment, and shows up the same way every session."
          </p>
          <p style={{ fontSize:'14px', color:'var(--text-3)' }}>
            Fayzan works with a small number of clients at a time, by design.
          </p>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section">
        <div className="container">
          <span className="label" style={{ display:'block', textAlign:'center' }}>What's Offered</span>
          <h2 style={{ fontSize:'clamp(26px,3vw,40px)', fontWeight:500, textAlign:'center', marginBottom:'44px' }}>Services</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'18px' }} className="three-col">
            <div className="service-card service-card-1">
              <span style={{ display:'inline-block', fontSize:'12px', fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(255,255,255,0.90)', marginBottom:'14px' }}>1:1 Coaching</span>
              <h3>You're high-performing. And quietly unfulfilled.</h3>
              <p>Something is off — with your role, the direction you're heading, or the gap between what you've built and how you feel about it. You have access to smart people, but not to someone who knows your full picture, holds you to what matters, and stays with you through the complexity. This is that.</p>
              <Link to="/contact" className="learn-more">Get started →</Link>
            </div>
            <div className="service-card service-card-2">
              <span style={{ display:'inline-block', fontSize:'12px', fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(255,255,255,0.90)', marginBottom:'14px' }}>Co-Founder Mediation</span>
              <h3>The relationship with your co-founder is fraying.</h3>
              <p>Decisions are slower. Conversations are tenser. You're not sure if the problem is the business or each other. A structured process — individual and joint sessions — designed to surface what's actually happening, restore trust, and find a clear path forward before the relationship becomes the company's biggest liability.</p>
              <Link to="/contact" className="learn-more">Get started →</Link>
            </div>
            <div className="service-card service-card-3">
              <span style={{ display:'inline-block', fontSize:'12px', fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(255,255,255,0.90)', marginBottom:'14px' }}>After the Exit</span>
              <h3>You sold. Now what?</h3>
              <p>For the first time in years, there's no product to ship and no obvious north star. The disorientation after a major exit is real — and almost no one prepares you for it. What you need isn't another advisor with a framework. It's someone who can help you figure out what you actually want from here.</p>
              <Link to="/contact" className="learn-more">Get started →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding:'0 0 100px' }}>
        <div className="container">
          <span className="label">Client Experiences</span>
          <h2 style={{ fontSize:'clamp(24px,3vw,38px)', fontWeight:500, marginBottom:'44px' }}>What people say</h2>
          <div className="testimonials-masonry" style={{ columns:3, columnGap:'16px' }}>
            {testimonials.map(t => (
              <div key={t.id} className={`testimonial-card ${t.colorClass}`}>
                <p className="testimonial-text" dangerouslySetInnerHTML={{ __html: t.text }} />
                <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
                  <img src={t.avatar} alt={t.name} className="testimonial-avatar" loading="lazy" decoding="async" width="38" height="38" />
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding:'0 0 100px' }}>
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
              Reach out to schedule an introductory conversation.
            </p>
            <Link to="/contact" style={{
              display:'inline-block', padding:'13px 32px', borderRadius:'100px',
              background:'linear-gradient(135deg, #f59e0b, #ea6c1e)',
              color:'#fff', fontSize:'14px', fontWeight:600,
              textDecoration:'none', position:'relative',
              boxShadow:'0 0 28px rgba(245,158,11,0.40)',
            }}>Start a conversation →</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
