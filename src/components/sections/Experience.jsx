import { Briefcase, Calendar, MapPin, Quote, Award, GraduationCap, Download } from 'lucide-react';
import ClayCard from '../common/ClayCard';
import ClayButton from '../common/ClayButton';
import { experienceData, testimonialsData, personalInfo } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Experience() {
  useScrollReveal();

  return (
    <section id="experience" className="section-wrapper">
      <div className="section-divider" aria-hidden="true" />
      <div className="section-ambient-glow" aria-hidden="true" />
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <span className="section-tag">
            <GraduationCap size={13} /> Education &amp; Background
          </span>
          <h2 className="section-title">
            Academic Training <span className="text-gradient-ruby">&amp; Experience</span>
          </h2>
          <p className="section-subtitle">
            Formal Computer Engineering coursework at NEMSU Cantilan Campus, combined with real-world IoT, embedded robotics, and open-source software development.
          </p>
        </div>



        {/* Timeline Container */}
        <div style={{ position: 'relative', maxWidth: '860px', margin: '0 auto 5rem auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {experienceData.map((item, idx) => (
            <div
              key={idx}
              className={`reveal-on-scroll stagger-${idx + 1} timeline-item`}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '2rem',
                position: 'relative'
              }}
            >
              {/* Timeline Node */}
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #e62857 0%, #85122e 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 0 20px rgba(230,40,87,0.5), inset 1px 1px 2px rgba(255,180,210,0.6)',
                  border: '2px solid rgba(255, 140, 180, 0.4)',
                  zIndex: 2
                }}
              >
                <Briefcase size={20} color="#fff" />
              </div>

              {/* Content Card */}
              <ClayCard
                enableTilt={true}
                style={{
                  flexGrow: 1,
                  padding: '2rem'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    marginBottom: '0.6rem'
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 700, letterSpacing: '-0.01em' }}>
                      {item.role}
                    </h3>
                    <div
                      style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'var(--accent-rose)',
                        marginTop: '0.15rem'
                      }}
                    >
                      {item.company}
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      gap: '0.25rem'
                    }}
                  >
                    <span
                      className="clay-pill"
                      style={{
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--accent-rose)',
                        padding: '0.3rem 0.75rem'
                      }}
                    >
                      <Calendar size={12} /> {item.period}
                    </span>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem'
                      }}
                    >
                      <MapPin size={11} /> {item.location}
                    </span>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: '0.94rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem'
                  }}
                >
                  {item.description}
                </p>

                {/* Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {item.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '0.6rem',
                        fontSize: '0.88rem',
                        color: 'var(--text-primary)'
                      }}
                    >
                      <span style={{ color: 'var(--accent-rose)', fontWeight: 800 }}>›</span>
                      <span className="card-justified-text">{highlight}</span>
                    </div>
                  ))}
                </div>
              </ClayCard>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Resume Download Card */}
      <div style={{ maxWidth: '860px', margin: '0 auto 5rem auto' }} className="reveal-on-scroll">
        <ClayCard
          enableTilt={false}
          style={{
            padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
            background: 'var(--hero-card-bg)',
            border: '2px solid var(--hero-card-border)',
            boxShadow: 'var(--hero-card-shadow)',
            width: '100%',
            boxSizing: 'border-box'
          }}
        >
          {/* Top Area: Header, Title, Period, Bio (Spans Full Width of Card) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.65rem' }}>
            <GraduationCap size={22} color="var(--accent-rose)" />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--accent-rose)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: 700
              }}
            >
              Education &amp; Credentials
            </span>
          </div>

          <h3
            style={{
              fontSize: 'clamp(1.35rem, 2.2vw, 1.7rem)',
              fontWeight: 800,
              marginBottom: '0.4rem',
              lineHeight: 1.25,
              color: 'var(--text-primary)',
              letterSpacing: '-0.01em'
            }}
          >
            {personalInfo.education.institution}
          </h3>

          <p style={{ color: 'var(--accent-rose)', fontWeight: 600, fontSize: '0.88rem', marginBottom: '1rem' }}>
            {personalInfo.education.period} &bull; Cantilan, Surigao del Sur
          </p>

          <p
            style={{
              fontSize: '0.94rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.68,
              marginBottom: '1.75rem',
              maxWidth: '100%'
            }}
          >
            {personalInfo.bio}
          </p>

          {/* Subtle Divider Line */}
          <div
            style={{
              height: '1px',
              width: '100%',
              background: 'linear-gradient(90deg, rgba(255,100,140,0.22) 0%, rgba(255,100,140,0.06) 100%)',
              marginBottom: '1.75rem'
            }}
          />

          {/* Bottom Row: Coursework Badges on Left, Download Button on Right */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1.75rem'
            }}
          >
            {/* Relevant Coursework Badges */}
            <div style={{ flex: '1 1 360px', minWidth: '260px' }}>
              <div
                style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-rose)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontWeight: 700,
                  marginBottom: '0.65rem'
                }}
              >
                Relevant Coursework
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {personalInfo.education.coursework.map((course) => (
                  <span
                    key={course}
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '0.3rem 0.72rem',
                      borderRadius: '7px',
                      background: 'var(--bg-card-inset)',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border-subtle)',
                      lineHeight: 1.4
                    }}
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Download Resume Action */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.55rem',
                flexShrink: 0
              }}
            >
              <ClayButton
                variant="primary"
                href="/Daryl_Labial_Resume.pdf"
                download="Daryl_Labial_Resume.pdf"
                icon={Download}
                style={{
                  padding: '0.92rem 1.85rem',
                  fontSize: '0.96rem',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 8px 24px rgba(230,40,87,0.5), inset 1px 1px 2px rgba(255,200,220,0.6)'
                }}
              >
                Download Resume (PDF)
              </ClayButton>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)',
                  textAlign: 'center'
                }}
              >
                Format: PDF &bull; Updated Professional Resume
              </span>
            </div>
          </div>
        </ClayCard>
      </div>

      {/* Client & Leadership Endorsements */}
      <div style={{ marginTop: '3rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }} className="reveal-on-scroll">
          <span className="section-tag">
            <Award size={13} /> Endorsements
          </span>
          <h3 style={{ fontSize: '2rem', fontWeight: 800 }}>
            What Collaborators <span className="text-gradient-ruby">Say</span>
          </h3>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            maxWidth: '960px',
            margin: '0 auto'
          }}
        >
          {testimonialsData.map((item, idx) => (
            <div
              key={idx}
              className={`reveal-on-scroll stagger-${idx + 1}`}
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <ClayCard
                enableTilt={true}
                style={{
                  padding: '2.2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  height: '100%'
                }}
              >
                <Quote
                  size={36}
                  style={{
                    color: 'rgba(230, 40, 87, 0.25)',
                    marginBottom: '1rem'
                  }}
                />

                <p
                  style={{
                    fontSize: '0.96rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                    marginBottom: '1.75rem',
                    flexGrow: 1
                  }}
                >
                  "{item.quote}"
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'var(--button-secondary-bg)',
                      border: '1px solid var(--border-subtle)',
                      boxShadow: 'var(--clay-shadow-button)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      color: 'var(--accent-rose)',
                      fontSize: '0.95rem'
                    }}
                  >
                    {item.avatarInitials}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                      {item.author}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {item.role}
                    </div>
                  </div>
                </div>
              </ClayCard>
            </div>
          ))}
        </div>
      </div>
    </div>

    </section>
  );
}
