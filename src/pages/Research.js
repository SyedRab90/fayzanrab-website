import React from 'react';
import { Link } from 'react-router-dom';

const ink    = '#fdf8ed';
const inkMid = 'rgba(253,248,237,0.65)';
const inkFaint = 'rgba(253,248,237,0.35)';
const amber  = '#f59e0b';
const bg2    = '#160b02';
const card   = '#160b02';
const border = 'rgba(253,248,237,0.10)';

const publications = [
  {
    authors: 'Rab, S.F. & Zelner, B.',
    year: '2026',
    title: 'The Psychedelics & Leadership Study: What happens when executives take psychedelics?',
    journal: 'MAPS Bulletin',
    url: 'https://maps.org/news/bulletin/psychedelic-leadership-study',
    tag: 'Research Essay · Vol. 36',
  },
  {
    authors: 'Rab, S.F., Ahmad, S.S., Palitsky, R., & Zarrabi, A.J.',
    year: '2025',
    title: 'Attitudes of U.S. Muslims toward psychedelics.',
    journal: 'Psychedelic Medicine',
    url: 'https://doi.org/10.1089/psymed.2024.0044',
    tag: 'Quantitative Research',
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
    authors: 'Rab, S.F.',
    year: '2024',
    title: 'What are the economic and public health implications of psychedelic therapies?',
    journal: 'Journal of Psychedelic and Psychoactive Drug Research',
    url: 'https://doi.org/10.61373/pp024k.0046',
    tag: 'Health Policy',
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
];

const activeStudies = [
  {
    title: 'An Investigation of the Motivations, Perceptions, and Attitudes Toward Psychedelics Among Entrepreneurs, Executives, and Investors',
    authors: 'Rab, S.F., Zelner, B., Gaglani, S., Alonso, N., & Palitsky, R.',
    status: 'Recruitment Open',
    statusColor: '#059669',
    url: 'https://survey.qualtrics.emory.edu/jfe/form/SV_0liig6iQs6hn4sC',
    siteUrl: 'https://psychedelicleadershipstudy.com',
  },
  {
    title: 'Muslim Lived Experiences with Psychedelics: A Mixed Methods Study of Understanding and Integration',
    authors: 'Rab, S.F., Choksi, J., Dhaaban, L., Kak, A., Salako, Z., Ahmad, S.S., & Palitsky, R.',
    status: 'Manuscript in Progress',
    statusColor: '#f59e0b',
  },
  {
    title: 'An Estimate of the Number of People with PTSD in the United States Eligible for MDMA-Assisted Therapy',
    authors: 'Rab, S.F. & Marseille, E.',
    status: 'Manuscript in Progress',
    statusColor: '#f59e0b',
  },
  {
    title: 'Outcomes and Measures in Psychedelic-Assisted Therapy Trials for Patients with Serious Illness: A Systematic Review to Inform Core Outcome Measures',
    authors: 'Zarrabi, A.J., Oyerinde, E., Kavalieratos, D., Rab, S.F., Barokas, G., Garcia, A.C., Beaussant, Y., Maia, L.O., & Dunlop, B.W.',
    status: 'Manuscript in Progress',
    statusColor: '#f59e0b',
  },
  {
    title: 'New-Onset Mania or Autoimmune Encephalitis? Managing Diagnostic Uncertainty',
    authors: 'Rab, S.F., Thompson, N., Robbins-Welty, G.A., Ruikar, K., & Schwartz, A.C.',
    journal: 'Primary Care Companion for CNS Disorders',
    status: 'Under Review',
    statusColor: '#38bdf8',
  },
  {
    title: 'Psilocybin-Assisted Early Palliative Care for Demoralization and Chronic Pain: A Pilot Study',
    authors: 'Zarrabi, A.J., Mletzko, T., Grant, G., Peacock, C., Palitsky, R., McPherson, T., Shub, I., Eisenacher, S., Maples-Keller, J., Kaplan, D., Rothbaum, B.O., Rab, S.F., Dalal, N., Curseen, K.A., Raison, C., & Dunlop, B.W.',
    journal: 'Journal of Palliative Medicine',
    status: 'Under Review',
    statusColor: '#38bdf8',
  },
];

const podcasts = [
  {
    show: 'Psychedelics Today',
    episode: 'PT 562',
    host: 'Joe Moore',
    date: 'April 1, 2025',
    title: 'Spirituality, public health, and burnout.',
    url: 'https://psychedelicstoday.com/2025/04/01/fayzan-rab-emory-university',
    icon: '🎙',
  },
  {
    show: "Emory's Health is Everything",
    episode: null,
    host: 'Dr. Charles Raison',
    date: 'February 7, 2025',
    title: 'Psychedelics and the future of mental health.',
    url: 'https://healthiseverything.buzzsprout.com/',
    icon: '🎙',
  },
  {
    show: 'The Transformational Leader',
    episode: 'Mid-week Ep 82',
    host: 'Adam Quiney JD MCC',
    date: 'December 2022',
    title: 'On medicine, ontology, and the work of a leader.',
    url: 'https://adamquiney.com/mid-week-ep-82-fayzan-rab/',
    icon: '🎙',
  },
  {
    show: 'The Mandala Podcast',
    episode: null,
    host: 'Tarun Galagali and Dr. Tom Insel',
    date: 'December 5, 2024',
    title: "Leadership lessons from America's psychiatrist.",
    url: 'https://redcircle.com/shows/mandala-podcast',
    icon: '🎙',
  },
  {
    show: 'Harvard Law School — Psymposia',
    episode: null,
    host: null,
    date: 'March 2025',
    title: 'Sacramental practice and legal recognition.',
    url: 'https://youtu.be/23iquPxz0NU?t=1260',
    icon: '▶',
  },
  {
    show: 'The Portfolio Path',
    episode: null,
    host: 'Dexter Zhuang',
    date: 'July 28, 2024',
    title: 'From Googler to psychedelics researcher and executive coach.',
    url: 'https://www.theportfoliopath.com/newsletter/googler-mdma-researcher-executive-coach-fayzan-rab',
    icon: '📰',
  },
];

const talks = [
  {
    venue: 'Psychedelic Science 2025',
    location: 'Denver, CO',
    date: 'June 18, 2025',
    title: 'MOSAIC: New research on Muslim, Jewish, and Christian Psychedelic America.',
    note: null,
    url: 'https://virtualtrip.maps.org/video/mosaic-new-research-on-muslim-jewish-christian-psychedelic-america/',
    urlNote: 'Talk begins at 11:00',
  },
  {
    venue: 'Harvard Law School',
    location: 'Cambridge, MA',
    date: 'March 5, 2025',
    title: 'Psychedelics and Monotheistic Traditions',
    note: null,
    url: 'https://youtu.be/23iquPxz0NU?t=1260',
    urlNote: 'Talk begins at 21:00',
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
    note: "TEDx Talk · Assigned as required reading in Harvard Law School's \"Psychedelics, Law, and Religion\" (Spring 2025)",
    url: 'https://youtu.be/V4lxlZBYHjY',
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
];

export default function Research() {
  return (
    <div style={{ background: '#0c0500', color: ink }}>

      <style>{`
        .res-hero      { max-width: 760px; margin: 0 auto; padding: 140px 48px 72px; text-align: center; }
        .res-hero h1   { font-family: 'Raleway', sans-serif; font-size: clamp(34px, 5vw, 62px); font-weight: 700; letter-spacing: -0.025em; line-height: 1.09; color: ${ink}; margin-bottom: 22px; }
        .res-hero p    { font-size: 16px; color: ${inkMid}; line-height: 1.75; max-width: 560px; margin: 0 auto; }
        .res-rule      { border: none; border-top: 1px solid ${border}; margin: 0; }
        .res-section   { max-width: 1080px; margin: 0 auto; padding: 72px 48px; }
        .res-section h2 { font-family: 'Raleway', sans-serif; font-size: clamp(24px, 3vw, 38px); font-weight: 700; letter-spacing: -0.02em; color: ${ink}; margin-bottom: 44px; }
        .res-affil     { background: ${bg2}; padding: 56px 0; }
        .res-affil-inner { max-width: 700px; margin: 0 auto; padding: 0 48px; text-align: center; }
        .res-affil-h2  { font-family: 'Raleway', sans-serif; font-size: clamp(22px, 2.6vw, 32px); font-weight: 700; letter-spacing: -0.02em; color: ${ink}; margin-bottom: 14px; }
        .res-talks-bg  { background: ${bg2}; padding: 72px 0; }
        .res-cta       { max-width: 1080px; margin: 0 auto; padding: 72px 48px 90px; }
        .res-cta h2    { font-family: 'Raleway', sans-serif; font-size: clamp(28px, 3.4vw, 50px); font-weight: 700; letter-spacing: -0.025em; line-height: 1.10; color: ${ink}; max-width: 560px; margin-bottom: 20px; }
        .res-cta p     { font-size: 17px; color: ${inkMid}; line-height: 1.72; max-width: 440px; margin-bottom: 36px; }
        .res-btn       { display: inline-block; padding: 14px 32px; background: ${amber}; color: #fff; font-family: 'Raleway', sans-serif; font-weight: 700; font-size: 15px; border-radius: 5px; text-decoration: none; }

        @media (max-width: 768px) {
          .res-hero     { padding: 100px 24px 48px !important; }
          .res-section  { padding: 48px 24px !important; }
          .res-talks-bg { padding: 48px 0 !important; }
          .res-affil    { padding: 40px 0 !important; }
          .res-affil-inner { padding: 0 24px !important; }
          .res-cta      { padding: 56px 24px 72px !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section>
        <div className="res-hero">
          <h1>
            Peer-reviewed science and a public body of work.
          </h1>
          <p>
            Active researcher at Emory's Center for Psychedelics and Spirituality. Published in peer-reviewed journals. Featured in mainstream press and presented at major academic institutions.
          </p>
        </div>
      </section>

      <hr className="res-rule" />

      {/* ── AS FEATURED IN ── */}
      <section>
        <div className="res-section" style={{ paddingBottom: '80px' }}>
          <h2 style={{ textAlign: 'center' }}>Featured In</h2>
          <div className="featured-in-grid">
            {[
              { name:'NPR', url:'https://www.npr.org/2025/01/03/nx-s1-5227041/muslims-navigate-the-tension-between-psychedelics-for-mental-health-and-koran-teachings' },
              { name:'Newsweek', url:'https://www.newsweek.com/depression-americans-psilocybin-magic-mushrooms-1953328' },
              { name:'Forbes', url:'https://www.forbes.com/sites/tarungalagali/2024/12/05/4-leadership-lessons-from-americas-psychiatrist' },
              { name:'MAPS', url:'https://maps.org/news/bulletin/psychedelic-leadership-study' },
              { name:'CNN', url:'https://www.cnn.com/2026/04/22/health/ibogaine-psychedelics-what-to-know' },
              { name:'Emory News', url:'https://news.emory.edu/stories/2024/11/hs_psychedelic_eligibility_01-11-2024/story.html' },
            ].map(({ name, url }) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" style={{
                display:'flex', flexDirection:'column', alignItems:'center',
                padding:'18px 28px',
                background: 'rgba(253,248,237,0.07)',
                border:'1px solid rgba(253,248,237,0.18)',
                borderRadius:'6px',
                textDecoration:'none',
                transition:'all 0.22s ease',
              }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor='rgba(253,248,237,0.35)'; e.currentTarget.style.background='rgba(253,248,237,0.12)'; }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor='rgba(253,248,237,0.18)'; e.currentTarget.style.background='rgba(253,248,237,0.07)'; }}
              >
                <span style={{
                  fontFamily:"'Raleway',sans-serif",
                  fontSize:'18px', fontWeight:700,
                  color: ink,
                  lineHeight:1.1,
                }}>{name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <hr className="res-rule" />

      {/* ── AFFILIATION ── */}
      <section className="res-affil">
        <div className="res-affil-inner">
          <h2 className="res-affil-h2">
            Emory Center for Psychedelics and Spirituality
          </h2>
          <p style={{ color: inkMid, lineHeight:'1.80', fontSize:'15px' }}>
            Researcher under Drs. Dunlop and Zarrabi. Current work includes a landmark investigation of psychedelic use among executives, entrepreneurs, and investors — alongside studies on Muslim attitudes and lived experiences with psychedelics, and MDMA-assisted therapy eligibility for PTSD. Previous co-investigator in psychedelic clinical trials at the Aquilino Cancer Institute involving MDMA, psilocybin, and 5-MeO-DMT.
          </p>
        </div>
      </section>

      <hr className="res-rule" />

      {/* ── ACTIVE STUDIES ── */}
      <section>
        <div className="res-section">
          <h2>Active Studies</h2>
          <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
            {activeStudies.map((s, i) => (
              <div key={i} style={{
                display:'flex', alignItems:'flex-start', justifyContent:'space-between',
                gap:'20px', flexWrap:'wrap',
                padding:'28px 32px',
                background: card,
                border:`1px solid ${border}`,
                borderRadius:'6px',
              }}>
                <div style={{ flex:1, minWidth:'240px' }}>
                  <p style={{ fontSize:'16px', color: ink, lineHeight:'1.55', margin:'0 0 6px' }}>{s.title}</p>
                  {s.authors && <p style={{ fontSize:'14px', color: inkMid, margin:0 }}>{s.authors}</p>}
                  {s.journal && <p style={{ fontSize:'13px', color: amber, margin:'4px 0 0', fontStyle:'italic' }}>{s.journal}</p>}
                  <div style={{ display:'flex', gap:'20px', flexWrap:'wrap', marginTop:'8px' }}>
                    {s.siteUrl && (
                      <a href={s.siteUrl} target="_blank" rel="noopener noreferrer" style={{
                        display:'inline-flex', alignItems:'center', gap:'4px',
                        fontSize:'14px', fontWeight:700, letterSpacing:'0.08em',
                        textTransform:'uppercase', color: amber,
                        textDecoration:'none',
                      }}>View study →</a>
                    )}
                    {s.url && (
                      <a href={s.url} target="_blank" rel="noopener noreferrer" style={{
                        display:'inline-flex', alignItems:'center', gap:'4px',
                        fontSize:'14px', fontWeight:700, letterSpacing:'0.08em',
                        textTransform:'uppercase', color: amber,
                        textDecoration:'none',
                      }}>Enroll →</a>
                    )}
                  </div>
                </div>
                <span style={{
                  fontSize:'12px', fontWeight:700, letterSpacing:'0.12em',
                  textTransform:'uppercase', color:s.statusColor,
                  background:'rgba(255,255,255,0.05)',
                  border:`1px solid ${s.statusColor}`,
                  padding:'4px 12px', borderRadius:'100px',
                  whiteSpace:'nowrap', flexShrink:0,
                }}>{s.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="res-rule" />

      {/* ── PUBLICATIONS ── */}
      <section>
        <div className="res-section">
          <h2>Publications</h2>
          <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
            {publications.map((p, i) => {
              const cardStyle = {
                display:'block',
                padding:'28px 32px',
                background: card,
                border:`1px solid ${border}`,
                borderRadius:'6px',
                textDecoration:'none',
                transition:'all 0.22s ease',
              };
              const inner = (
                <>
                  <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:'16px', flexWrap:'wrap' }}>
                    <div style={{ flex:1, minWidth:'240px' }}>
                      <p style={{ fontSize:'16px', fontWeight:500, color: ink, lineHeight:'1.55', marginBottom:'8px' }}>{p.title}</p>
                      <p style={{ fontSize:'14px', color: inkMid, marginBottom:'6px' }}>{p.authors}</p>
                      <div style={{ display:'flex', alignItems:'center', gap:'12px', flexWrap:'wrap' }}>
                        <span style={{ fontSize:'14px', color: amber, fontWeight:600 }}>{p.journal}</span>
                        <span style={{ fontSize:'14px', color: inkFaint }}>{p.year}</span>
                        {p.tag && (
                          <span style={{
                            fontSize:'12px', fontWeight:700, letterSpacing:'0.10em',
                            textTransform:'uppercase', color: amber,
                            background:'rgba(180,83,9,0.08)',
                            padding:'2px 8px', borderRadius:'100px',
                          }}>{p.tag}</span>
                        )}
                      </div>
                    </div>
                    {p.url && <span style={{ fontSize:'14px', color: amber, whiteSpace:'nowrap', paddingTop:'2px' }}>Read →</span>}
                  </div>
                </>
              );
              return p.url ? (
                <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" style={cardStyle}
                  onMouseEnter={e=>{ e.currentTarget.style.borderColor='rgba(253,248,237,0.22)'; e.currentTarget.style.background=bg2; }}
                  onMouseLeave={e=>{ e.currentTarget.style.borderColor=border; e.currentTarget.style.background=card; }}
                >{inner}</a>
              ) : (
                <div key={i} style={cardStyle}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="res-rule" />

      {/* ── PODCASTS & MEDIA ── */}
      <section>
        <div className="res-section">
          <h2>Podcasts & Media</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px,1fr))', gap:'16px' }}>
            {podcasts.map((p, i) => (
              <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" style={{
                display:'flex', flexDirection:'column',
                padding:'24px 26px',
                background: card,
                border:`1px solid ${border}`,
                borderRadius:'6px',
                textDecoration:'none',
                transition:'all 0.22s ease',
              }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor='rgba(253,248,237,0.22)'; e.currentTarget.style.transform='translateY(-3px)'; }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor=border; e.currentTarget.style.transform='none'; }}
              >
                <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'12px' }}>
                  <div style={{
                    width:'36px', height:'36px', borderRadius:'6px',
                    background: bg2,
                    border:`1px solid ${border}`,
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontSize:'16px', flexShrink:0,
                  }}>{p.icon}</div>
                  <div>
                    <div style={{ fontSize:'14px', fontWeight:600, color: ink }}>{p.show}</div>
                    {p.episode && <div style={{ fontSize:'12px', color: inkFaint }}>{p.episode}</div>}
                  </div>
                </div>
                <p style={{ fontSize:'14px', lineHeight:'1.60', color: inkMid, flex:1, marginBottom:'16px' }}>{p.title}</p>
                <div style={{ display:'flex', flexDirection:'column', gap:'3px' }}>
                  {p.host && <span style={{ fontSize:'12px', color: inkFaint }}>with {p.host}</span>}
                  {p.date && <span style={{ fontSize:'12px', color: inkFaint }}>{p.date}</span>}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <hr className="res-rule" />

      {/* ── TALKS ── */}
      <section className="res-talks-bg">
        <div className="res-section" style={{ padding: '0 48px' }}>
          <div style={{ maxWidth: '1080px', margin: '0 auto', paddingTop: '0', paddingBottom: '0' }}>
            <h2>Presentations & Lectures</h2>
            <div style={{ display:'flex', flexDirection:'column', gap:'0' }}>
              {talks.map((t, i) => (
                <div key={i} style={{
                  display:'flex', gap:'28px', alignItems:'flex-start',
                  padding:'16px 0',
                  borderBottom: i < talks.length - 1 ? `1px solid ${border}` : 'none',
                }}>
                  <div style={{ width:'140px', flexShrink:0 }}>
                    <span style={{ fontSize:'12px', color: inkFaint }}>{t.date || ''}</span>
                  </div>
                  <div style={{ flex:1 }}>
                    <p style={{ fontSize:'16px', color: ink, fontWeight:500, marginBottom:'4px', lineHeight:'1.45' }}>{t.title}</p>
                    {t.url && (
                      <div style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'4px' }}>
                        <a href={t.url} target="_blank" rel="noopener noreferrer" style={{
                          fontSize:'12px', fontWeight:700, letterSpacing:'0.08em',
                          textTransform:'uppercase', color: amber,
                          textDecoration:'none',
                        }}>Watch →</a>
                        {t.urlNote && <span style={{ fontSize:'12px', color: inkFaint }}>{t.urlNote}</span>}
                      </div>
                    )}
                    <div style={{ display:'flex', gap:'8px', flexWrap:'wrap', alignItems:'center' }}>
                      <span style={{
                        fontSize:'12px', fontWeight:700, letterSpacing:'0.10em',
                        textTransform:'uppercase', color: amber,
                      }}>{t.venue}</span>
                      <span style={{ fontSize:'12px', color: inkFaint }}>{t.location}</span>
                      {t.note && (
                        <span style={{
                          fontSize:'12px', color: inkMid,
                          background:'rgba(255,255,255,0.05)',
                          padding:'2px 8px', borderRadius:'100px',
                        }}>{t.note}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="res-rule" />

      {/* ── CTA ── */}
      <div className="res-cta">
        <h2>Interested in the intersection of all this?</h2>
        <p>
          Research and coaching are not separate entities. My experience in both feed and build on each other. If something here resonates, reach out.
        </p>
        <Link to="/contact" className="res-btn">Start a conversation →</Link>
      </div>

    </div>
  );
}
