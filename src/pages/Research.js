import React from 'react';
import { Link } from 'react-router-dom';

const publications = [
  {
    authors: 'Rab, S.F., Ahmad, S.S., Palitsky, R., & Zarrabi, A.J.',
    year: '2025',
    title: 'Attitudes of U.S. Muslims toward psychedelics.',
    journal: 'Psychedelic Medicine',
    url: 'https://doi.org/10.1089/psymed.2024.0044',
    tag: 'Qualitative Research',
  },
  {
    authors: 'Rab, S.F. & Mangal, J.P.',
    year: '2025',
    title: 'Agree to disagree: A collaborative perspective from a treatment team and disagreeing patient.',
    journal: 'Psychiatric Times',
    url: 'https://www.psychiatrictimes.com/view/agree-to-disagree-a-collaborative-perspective-from-a-treatment-team-and-disagreeing-patient',
    tag: 'Clinical Ethics',
  },
  {
    authors: 'Rab, S.F., Raison, C.L., & Marseille, E.',
    year: '2024',
    title: 'An estimate of the number of people with clinical depression eligible for psilocybin-assisted therapy in the United States.',
    journal: 'Journal of Psychedelic and Psychoactive Drug Research',
    url: 'https://doi.org/10.61373/pp024r.0025',
    tag: 'Health Economics · Covered by NPR, Newsweek, U.S. News',
  },
  {
    authors: 'Peacock, C., Palitsky, R., Brauer, E., Zarrabi, A.J., Rab, S.F., Grant, G.H., Dunlop, B., & Mascaro, J.',
    year: '2024',
    title: "A qualitative analysis of spiritual health practitioners' perspectives on their contributions to psychedelic-assisted therapy.",
    journal: 'PLOS ONE',
    url: 'https://doi.org/10.1371/journal.pone.0296071',
    tag: 'PLOS ONE',
  },
  {
    authors: 'Rab, S.F.',
    year: '2024',
    title: 'What are the economic and public health implications of psychedelic therapies?',
    journal: 'Journal of Psychedelic and Psychoactive Drug Research',
    url: 'https://doi.org/10.61373/pp024k.0046',
    tag: 'Health Policy',
  },
];

const media = [
  {
    outlet: 'NPR',
    outlet_full: 'National Public Radio',
    show: 'All Things Considered',
    date: 'January 3, 2025',
    title: 'Muslims navigate the tension between psychedelics for mental health and Koran teachings.',
    url: 'https://www.npr.org/2025/01/03/nx-s1-5227041/muslims-navigate-the-tension-between-psychedelics-for-mental-health-and-koran-teachings',
    type: 'Radio',
  },
  {
    outlet: 'Newsweek',
    outlet_full: 'Newsweek',
    show: null,
    date: 'September 13, 2024',
    title: 'Millions of Americans with depression could benefit from magic mushrooms: Study.',
    url: 'https://www.newsweek.com/depression-americans-psilocybin-magic-mushrooms-1953328',
    type: 'Press',
  },
  {
    outlet: 'U.S. News',
    outlet_full: 'U.S. News & World Report',
    show: null,
    date: 'September 13, 2024',
    title: 'Over 5 million Americans could benefit if psilocybin approved for depression: Study.',
    url: 'https://www.usnews.com/news/health-news/articles/2024-09-13/over-5-million-americans-could-benefit-if-psilocybin-approved-for-depression-study',
    type: 'Press',
  },
  {
    outlet: 'Forbes',
    outlet_full: 'Forbes',
    show: null,
    date: 'December 5, 2024',
    title: '4 leadership lessons from America\'s psychiatrist.',
    url: 'https://www.forbes.com/sites/tarungalagali/2024/12/05/4-leadership-lessons-from-americas-psychiatrist',
    type: 'Press',
  },
  {
    outlet: 'GPB',
    outlet_full: 'Georgia Public Broadcasting',
    show: null,
    date: 'November 7, 2024',
    title: 'Emory study estimates millions with depression could benefit from psychedelic mushrooms.',
    url: 'https://www.gpb.org/news/2024/11/07/emory-study-estimates-millions-depression-could-benefit-psychedelic-mushrooms',
    type: 'Radio / Press',
  },
  {
    outlet: 'Emory News',
    outlet_full: 'Emory News Center',
    show: null,
    date: 'November 1, 2024',
    title: 'Emory researchers estimate millions with depression could benefit from psilocybin-assisted therapy.',
    url: 'https://news.emory.edu/stories/2024/11/hs_psychedelic_eligibility_01-11-2024/story.html',
    type: 'Press',
  },
];

const podcasts = [
  {
    show: 'Psychedelics Today',
    episode: 'PT 562',
    host: 'Joe Moore',
    date: 'April 1, 2025',
    title: 'Fayzan Rab — Emory University, psychedelics, and cultural inclusion in mental health.',
    url: 'https://psychedelicstoday.com/2025/04/01/fayzan-rab-emory-university',
  },
  {
    show: "Emory's Health is Everything",
    episode: null,
    host: 'Dr. Charles Raison',
    date: 'February 7, 2025',
    title: 'Psychedelics and the future of mental health.',
    url: 'https://healthiseverything.buzzsprout.com/',
  },
  {
    show: 'Exploring Health',
    episode: null,
    host: 'Dr. Charles Raison',
    date: 'February 10, 2025',
    title: 'Psychedelics and the Future of Mental Health: Science, Faith, Hype and Healthcare Innovation.',
    url: 'https://exploringhealth.org/2025/02/10/psychedelics-and-the-future-of-mental-health-science-faith-hype-and-healthcare-innovation-with-fayzan-rob/',
  },
  {
    show: 'The Transformational Leader',
    episode: 'Mid-week Ep 82',
    host: 'Adam Quiney',
    date: null,
    title: 'On medicine, ontology, and the work of a leader.',
    url: 'https://adamquiney.com/mid-week-ep-82-fayzan-rab/',
  },
  {
    show: 'The Mandala Podcast',
    episode: null,
    host: null,
    date: null,
    title: 'On managing fear, social support, and the power of reinvention.',
    url: 'https://redcircle.com/shows/mandala-podcast',
  },
];

const talks = [
  {
    venue: 'Psychedelic Science 2025',
    location: 'Denver, CO',
    date: 'June 18, 2025',
    title: 'MOSAIC: New research on Muslim, Jewish, and Christian Psychedelic America.',
    note: null,
  },
  {
    venue: 'Harvard Law School',
    location: 'Cambridge, MA',
    date: 'March 5, 2025',
    title: 'Islam and psychedelic practice.',
    note: 'Psychedelics and Monotheistic Traditions Symposium',
  },
  {
    venue: 'American Academy of Religion Annual Meeting',
    location: 'Boston, MA',
    date: 'November 2025',
    title: 'Psychedelics and religious communities: New studies and findings.',
    note: null,
  },
  {
    venue: 'Institute of Coaching, Harvard Medical School',
    location: 'Boston, MA',
    date: 'May 3, 2024',
    title: 'Professional coaching for reducing burnout and driving fulfillment in healthcare workers.',
    note: 'Coaching in Leadership & Healthcare Conference',
  },
  {
    venue: 'TEDxEmory',
    location: 'Atlanta, GA',
    date: 'February 17, 2024',
    title: 'Faith, psychedelics, and mental health.',
    note: 'TEDx Talk · Assigned as required reading in Harvard Law School's "Psychedelics, Law, and Religion" (Spring 2025)',
  },
  {
    venue: 'Georgetown University',
    location: 'Arlington, VA',
    date: 'September 10, 2024',
    title: 'The state of psychedelic science.',
    note: 'Conference on Leadership and Development',
  },
  {
    venue: 'Society for the Scientific Study of Religion',
    location: 'Pittsburgh, PA',
    date: 'October 2024',
    title: 'Many voices: Expanding the narrative on religious experiences in psychedelics.',
    note: 'Annual Meeting',
  },
  {
    venue: 'Chacruna Community Forum',
    location: 'Virtual',
    date: 'June 26, 2024',
    title: 'Islam and psychedelics.',
    note: 'Chacruna Institute',
  },
];

export default function Research() {
  return (
    <div>

      {/* ── HERO ── */}
      <section style={{
        display: 'flex', alignItems: 'flex-start',
        position: 'relative', overflow: 'hidden',
        paddingTop: '160px', paddingBottom: '100px',
      }}>
        <div className="orb" style={{ width:580, height:580, top:'0%', right:'-8%', background:'radial-gradient(circle,rgba(245,158,11,0.13) 0%,transparent 68%)' }} />
        <div className="orb" style={{ width:400, height:400, bottom:'-10%', left:'-6%', background:'radial-gradient(circle,rgba(234,108,30,0.10) 0%,transparent 70%)' }} />

        <div className="container" style={{ position:'relative', zIndex:1, textAlign:'center', maxWidth:'760px', margin:'0 auto' }}>
          <span className="label">Research & Recognition</span>
          <h1 style={{ fontSize:'clamp(34px,5vw,62px)', fontWeight:500, marginBottom:'22px' }}>
            Peer-reviewed science and{' '}
            <span style={{
              background:'linear-gradient(135deg,#fbbf24,#f59e0b,#ea6c1e)',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
            }}>a public body of work.</span>
          </h1>
          <p style={{ fontSize:'16px', color:'var(--text-2)', lineHeight:'1.75', maxWidth:'560px', margin:'0 auto' }}>
            Active researcher at Emory's Center for Psychedelics and Spirituality. Published in peer-reviewed journals. Featured in mainstream press and presented at major academic institutions.
          </p>
        </div>
      </section>

      {/* ── AS FEATURED IN ── */}
      <section style={{ padding:'0 0 80px' }}>
        <div className="container">
          <p style={{ textAlign:'center', fontSize:'10.5px', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--text-3)', marginBottom:'36px' }}>
            As Featured In
          </p>
          <div style={{
            display:'flex', flexWrap:'wrap',
            justifyContent:'center', alignItems:'center',
            gap:'12px 24px',
          }}>
            {[
              { name:'NPR', sub:'All Things Considered', url:'https://www.npr.org/2025/01/03/nx-s1-5227041/muslims-navigate-the-tension-between-psychedelics-for-mental-health-and-koran-teachings' },
              { name:'Newsweek', sub:null, url:'https://www.newsweek.com/depression-americans-psilocybin-magic-mushrooms-1953328' },
              { name:'Forbes', sub:null, url:'https://www.forbes.com/sites/tarungalagali/2024/12/05/4-leadership-lessons-from-americas-psychiatrist' },
              { name:'U.S. News', sub:'& World Report', url:'https://www.usnews.com/news/health-news/articles/2024-09-13/over-5-million-americans-could-benefit-if-psilocybin-approved-for-depression-study' },
              { name:'GPB', sub:'Georgia Public Broadcasting', url:'https://www.gpb.org/news/2024/11/07/emory-study-estimates-millions-depression-could-benefit-psychedelic-mushrooms' },
              { name:'Emory News', sub:'Emory University', url:'https://news.emory.edu/stories/2024/11/hs_psychedelic_eligibility_01-11-2024/story.html' },
            ].map(({ name, sub, url }) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" style={{
                display:'flex', flexDirection:'column', alignItems:'center',
                padding:'18px 28px',
                background:'rgba(255,255,255,0.03)',
                border:'1px solid rgba(245,158,11,0.10)',
                borderRadius:'14px',
                textDecoration:'none',
                minWidth:'120px',
                transition:'all 0.22s ease',
              }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor='rgba(245,158,11,0.28)'; e.currentTarget.style.background='rgba(245,158,11,0.05)'; }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor='rgba(245,158,11,0.10)'; e.currentTarget.style.background='rgba(255,255,255,0.03)'; }}
              >
                <span style={{
                  fontFamily:"'Instrument Serif',serif",
                  fontSize:'20px', fontStyle:'italic',
                  color:'rgba(253,248,237,0.72)',
                  lineHeight:1.1,
                }}>{name}</span>
                {sub && <span style={{ fontSize:'9px', color:'var(--text-3)', marginTop:'4px', letterSpacing:'0.06em', textAlign:'center' }}>{sub}</span>}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── AFFILIATION ── */}
      <section style={{
        padding:'64px 0',
        background:'linear-gradient(135deg,rgba(245,158,11,0.04) 0%,rgba(234,108,30,0.06) 100%)',
        position:'relative', overflow:'hidden',
      }}>
        <div className="orb" style={{ width:400, height:300, top:'50%', left:'50%', transform:'translate(-50%,-50%)', background:'radial-gradient(ellipse,rgba(245,158,11,0.07) 0%,transparent 70%)' }} />
        <div className="container" style={{ position:'relative', zIndex:1, maxWidth:'680px', margin:'0 auto', textAlign:'center' }}>
          <span className="label">Institutional Affiliation</span>
          <h2 style={{ fontSize:'clamp(22px,2.6vw,32px)', fontWeight:500, marginBottom:'14px' }}>
            Emory Center for Psychedelics and Spirituality
          </h2>
          <p style={{ color:'var(--text-2)', lineHeight:'1.80', fontSize:'15px' }}>
            Researcher under Drs. Dunlop and Zarrabi at Emory's interdisciplinary psychedelics research center, with studies spanning Muslim attitudes toward psychedelic-assisted therapy, economic eligibility modeling for psilocybin, chaplains in psychedelic sessions, and measurement tools for adverse events.
          </p>
        </div>
      </section>

      {/* ── PUBLICATIONS ── */}
      <section className="section">
        <div className="container">
          <span className="label">Peer-Reviewed Work</span>
          <h2 style={{ fontSize:'clamp(24px,3vw,38px)', fontWeight:500, marginBottom:'44px' }}>Publications</h2>
          <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
            {publications.map((p, i) => (
              <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" style={{
                display:'block',
                padding:'28px 32px',
                background:'rgba(20,12,2,0.50)',
                border:'1px solid rgba(245,158,11,0.12)',
                borderRadius:'16px',
                textDecoration:'none',
                transition:'all 0.22s ease',
                position:'relative', overflow:'hidden',
              }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor='rgba(245,158,11,0.30)'; e.currentTarget.style.background='rgba(245,158,11,0.05)'; }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor='rgba(245,158,11,0.12)'; e.currentTarget.style.background='rgba(20,12,2,0.50)'; }}
              >
                <div style={{ position:'absolute', top:0, left:0, width:'3px', height:'100%', background:'linear-gradient(180deg,#f59e0b,#ea6c1e)', borderRadius:'16px 0 0 16px' }} />
                <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:'16px', flexWrap:'wrap' }}>
                  <div style={{ flex:1, minWidth:'240px' }}>
                    <p style={{ fontSize:'15px', fontWeight:500, color:'var(--text)', lineHeight:'1.55', marginBottom:'8px' }}>{p.title}</p>
                    <p style={{ fontSize:'13px', color:'var(--text-3)', marginBottom:'6px' }}>{p.authors}</p>
                    <div style={{ display:'flex', alignItems:'center', gap:'12px', flexWrap:'wrap' }}>
                      <span style={{ fontSize:'12px', color:'var(--amber)', fontWeight:600 }}>{p.journal}</span>
                      <span style={{ fontSize:'12px', color:'var(--text-3)' }}>{p.year}</span>
                      {p.tag && (
                        <span style={{
                          fontSize:'10px', fontWeight:700, letterSpacing:'0.10em',
                          textTransform:'uppercase', color:'rgba(245,158,11,0.65)',
                          background:'rgba(245,158,11,0.08)',
                          padding:'2px 8px', borderRadius:'100px',
                        }}>{p.tag}</span>
                      )}
                    </div>
                  </div>
                  <span style={{ fontSize:'12px', color:'var(--amber)', whiteSpace:'nowrap', paddingTop:'2px' }}>Read →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── PODCASTS ── */}
      <section style={{ padding:'0 0 100px' }}>
        <div className="container">
          <span className="label">Conversations</span>
          <h2 style={{ fontSize:'clamp(24px,3vw,38px)', fontWeight:500, marginBottom:'44px' }}>Podcast Appearances</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px,1fr))', gap:'16px' }}>
            {podcasts.map((p, i) => (
              <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" style={{
                display:'block', padding:'24px 26px',
                background:'rgba(20,12,2,0.50)',
                border:'1px solid rgba(245,158,11,0.12)',
                borderRadius:'16px',
                textDecoration:'none',
                transition:'all 0.22s ease',
              }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor='rgba(245,158,11,0.30)'; e.currentTarget.style.transform='translateY(-3px)'; }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor='rgba(245,158,11,0.12)'; e.currentTarget.style.transform='none'; }}
              >
                <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'12px' }}>
                  <div style={{
                    width:'36px', height:'36px', borderRadius:'10px',
                    background:'linear-gradient(135deg,rgba(245,158,11,0.22),rgba(234,108,30,0.18))',
                    border:'1px solid rgba(245,158,11,0.20)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontSize:'16px', flexShrink:0,
                  }}>🎙</div>
                  <div>
                    <div style={{ fontSize:'13px', fontWeight:600, color:'var(--text)' }}>{p.show}</div>
                    {p.episode && <div style={{ fontSize:'11px', color:'var(--text-3)' }}>{p.episode}</div>}
                  </div>
                </div>
                <p style={{ fontSize:'13.5px', lineHeight:'1.60', color:'rgba(253,248,237,0.68)', marginBottom:'12px' }}>{p.title}</p>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  {p.host && <span style={{ fontSize:'11px', color:'var(--text-3)' }}>with {p.host}</span>}
                  {p.date && <span style={{ fontSize:'11px', color:'var(--text-3)' }}>{p.date}</span>}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── TALKS ── */}
      <section style={{
        padding:'80px 0 100px',
        background:'linear-gradient(135deg,rgba(245,158,11,0.03) 0%,rgba(234,108,30,0.05) 100%)',
      }}>
        <div className="container">
          <span className="label">Selected Talks</span>
          <h2 style={{ fontSize:'clamp(24px,3vw,38px)', fontWeight:500, marginBottom:'44px' }}>Presentations & Lectures</h2>
          <div style={{ display:'flex', flexDirection:'column', gap:'0' }}>
            {talks.map((t, i) => (
              <div key={i} style={{
                display:'flex', gap:'28px', alignItems:'flex-start',
                padding:'24px 0',
                borderBottom: i < talks.length - 1 ? '1px solid rgba(245,158,11,0.08)' : 'none',
              }}>
                {/* Date column */}
                <div style={{ minWidth:'100px', flexShrink:0 }}>
                  <span style={{ fontSize:'11px', color:'var(--text-3)' }}>{t.date || ''}</span>
                </div>
                {/* Content */}
                <div style={{ flex:1 }}>
                  <p style={{ fontSize:'15px', color:'var(--text)', fontWeight:500, marginBottom:'4px', lineHeight:'1.45' }}>{t.title}</p>
                  <div style={{ display:'flex', gap:'8px', flexWrap:'wrap', alignItems:'center' }}>
                    <span style={{
                      fontSize:'11px', fontWeight:700, letterSpacing:'0.10em',
                      textTransform:'uppercase', color:'var(--amber)',
                    }}>{t.venue}</span>
                    <span style={{ fontSize:'11px', color:'var(--text-3)' }}>{t.location}</span>
                    {t.note && (
                      <span style={{
                        fontSize:'10px', color:'rgba(245,158,11,0.60)',
                        background:'rgba(245,158,11,0.07)',
                        padding:'2px 8px', borderRadius:'100px',
                      }}>{t.note}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding:'80px 0 100px' }}>
        <div className="container" style={{ textAlign:'center' }}>
          <span className="label">Work Together</span>
          <h2 style={{ fontSize:'clamp(22px,2.8vw,36px)', fontWeight:500, marginBottom:'12px' }}>
            Interested in the intersection of all this?
          </h2>
          <p style={{ color:'var(--text-2)', marginBottom:'28px', fontSize:'15px', maxWidth:'480px', margin:'0 auto 28px' }}>
            The research and the coaching aren't separate. They feed each other. If you're a founder or operator navigating high-stakes decisions, that matters.
          </p>
          <Link to="/contact" className="btn btn-primary">Start a conversation →</Link>
        </div>
      </section>

    </div>
  );
}
