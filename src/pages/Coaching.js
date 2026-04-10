import React from 'react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    id:1, colorClass:'t1',
    text:'Fayzan meets you where you are with incredible empathy and lack of judgement. Working with him allowed me to <strong>rapidly step into the best version of myself in a way that feels genuine and lasting.</strong>',
    name:'Aatash Parikh', role:'Founder at Inkwire',
    avatar:'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&h=80&fit=crop&crop=face&auto=format',
  },
  {
    id:2, colorClass:'t2',
    text:"Fayzan's mix of sharp questions, frameworks, and calm nature helped me turn a half-formed idea into a business. I went <strong>from employee to founder with an owner's mindset.</strong>",
    name:'Tayyab Rizvi', role:'Founder & CEO',
    avatar:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face&auto=format',
  },
  {
    id:3, colorClass:'t3',
    text:'Fayzan brings a rare combination of <strong>intellectual rigor and genuine compassion.</strong> His medical background gives him a uniquely grounded perspective on leadership transformation.',
    name:'Dr. Joe Tabar', role:'Chief Medical Officer',
    avatar:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format',
  },
  {
    id:4, colorClass:'t4',
    text:'I came to Fayzan feeling like there were so many things wrong with me. After the first month, <strong>it was life-changing.</strong> He helped me realize I should be coming from a place of love, not doubt.',
    name:'Simon', role:'Doctor & Director',
    avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format',
  },
  {
    id:5, colorClass:'t5',
    text:'One of the <strong>most transformative investments I made in my adult life.</strong>',
    name:'Neil Sethi', role:'Senior PM at Spotify',
    avatar:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&crop=face&auto=format',
  },
  {
    id:6, colorClass:'t6',
    text:'Working with Fayzan changed the way I navigate ambiguity. He asks questions no one else thinks to ask, then <strong>stays in the discomfort with you until something real emerges.</strong>',
    name:'J.P. Hutchins', role:'General Partner at Metaversal',
    avatar:'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop&crop=face&auto=format',
  },
  {
    id:7, colorClass:'t1',
    text:'Fayzan helped me find clarity at a moment when everything felt noisy. He <strong>listened with a depth that most people don\'t,</strong> and what he reflected back changed how I thought about leadership.',
    name:'Malena Lopez-Sotelo', role:'VP of Operations',
    avatar:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face&auto=format',
  },
  {
    id:8, colorClass:'t2',
    text:"Fayzan doesn't give you confidence. <strong>He helps you find it yourself.</strong> That's a much more durable outcome. I've worked with coaches before, but nothing like this.",
    name:'Derek Evansen', role:'Executive Director',
    avatar:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face&auto=format',
  },
  {
    id:9, colorClass:'t3',
    text:"Fayzan's unique value is at the intersection of the worlds he's been in: <strong>business, entrepreneurship, medical, psychiatric, spiritual and holistic.</strong>",
    name:'Andrew Barkal', role:'Founder & Chairman',
    avatar:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&auto=format',
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
            For founders at{' '}
            <span style={{
              background:'linear-gradient(135deg,#fbbf24,#f59e0b,#ea6c1e)',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
            }}>inflection points.</span>
          </h1>
          <p style={{ fontSize:'16px', color:'var(--text-2)', lineHeight:'1.75', maxWidth:'540px', margin:'0 auto 36px' }}>
            I work with tech founders navigating strategic pivots, cofounder tension, or identity shifts clouding their clarity in a rapidly evolving ecosystem.
          </p>
          <Link to="/contact" className="btn btn-primary">Schedule a conversation →</Link>
        </div>
      </section>

      {/* ── IRREPLACEABLE ── */}
      <section style={{
        padding:'100px 0',
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
          <p style={{ fontSize:'13px', color:'var(--text-3)' }}>
            Fayzan works with a small number of clients at a time, by design.
          </p>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section">
        <div className="container">
          <span className="label" style={{ display:'block', textAlign:'center' }}>What's Offered</span>
          <h2 style={{ fontSize:'clamp(26px,3vw,40px)', fontWeight:500, textAlign:'center', marginBottom:'44px' }}>Services</h2>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'18px' }} className="two-col">
            <div className="service-card service-card-1">
              <span style={{ display:'inline-block', fontSize:'10px', fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(255,255,255,0.55)', marginBottom:'14px' }}>1:1 Coaching</span>
              <h3>1:1 Coaching</h3>
              <p>Ongoing, high-touch engagement. The relationship deepens over time, and so does the work. Individual sessions designed to surface what's actually happening and find a clear path forward.</p>
              <Link to="/contact" className="learn-more">Get started →</Link>
            </div>
            <div className="service-card service-card-2">
              <span style={{ display:'inline-block', fontSize:'10px', fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(255,255,255,0.55)', marginBottom:'14px' }}>Co-Founder Mediation</span>
              <h3>Co-Founder Mediation</h3>
              <p>A structured process for founding teams in conflict. Individual and joint sessions, designed to restore trust and find a clear path forward. For teams navigating real tension.</p>
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
                  <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
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
            <span className="label" style={{ color:'rgba(255,255,255,0.48)' }}>Start here</span>
            <h2 style={{ fontSize:'clamp(22px,3.5vw,38px)', color:'#fff', fontWeight:500, marginBottom:'10px', position:'relative' }}>
              Ready to begin?
            </h2>
            <p style={{ color:'rgba(255,255,255,0.62)', marginBottom:'28px', position:'relative', fontSize:'15px' }}>
              Reach out to schedule an introductory conversation.
            </p>
            <a href="mailto:fayzanrabcoaching@gmail.com" style={{
              display:'inline-block', padding:'13px 28px', borderRadius:'100px',
              background:'rgba(255,255,255,0.13)',
              border:'1.5px solid rgba(255,255,255,0.25)',
              backdropFilter:'blur(10px)',
              color:'#fff', fontSize:'14px', fontWeight:600,
              textDecoration:'none', position:'relative',
            }}>fayzanrabcoaching@gmail.com</a>
          </div>
        </div>
      </section>

    </div>
  );
}
