import React from 'react';
import { Briefcase, Calendar, MapPin, Sparkles, Quote, Award, GraduationCap, Download, FileText, CheckCircle2 } from 'lucide-react';
import ClayCard from '../common/ClayCard';
import ClayButton from '../common/ClayButton';
import { experienceData, testimonialsData, personalInfo } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Experience() {
  useScrollReveal();

  return (
    <section id="experience" className="section-wrapper">
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
        <div
          style={{
            position: 'relative',
            maxWidth: '860px',
            margin: '0 auto 5rem auto'
          }}
        >
          {/* Vertical Glowing Rail */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '24px',
              width: '3px',
              background: 'linear-gradient(180deg, #e62857 0%, #700f27 50%, #200610 100%)',
              boxShadow: '0 0 12px rgba(230, 40, 87, 0.4)',
              borderRadius: '999px'
            }}
            className="timeline-rail"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {experienceData.map((item, idx) => (
              <div
                key={idx}
                className={`reveal-on-scroll stagger-${idx + 1}`}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '2rem',
                  position: 'relative'
                }}
                className="timeline-item"
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
                        <span>{highlight}</span>
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
            enableTilt={true}
            style={{
              padding: '2.5rem',
              background: 'linear-gradient(135deg, #351022 0%, #1b0610 100%)',
              border: '2px solid rgba(255, 140, 180, 0.3)',
              boxShadow: '0 16px 40px rgba(0,0,0,0.8), inset 2px 2px 4px rgba(255,160,200,0.35)'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1.5rem'
              }}
            >
              <div style={{ maxWidth: '520px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                  <GraduationCap size={24} color="var(--accent-rose)" />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--accent-rose)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em'
                    }}
                  >
                    Education &amp; Credentials
                  </span>
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.4rem' }}>
                  {personalInfo.education.institution}
                </h3>
                <p style={{ color: 'var(--accent-rose)', fontWeight: 600, fontSize: '0.88rem', marginBottom: '1rem' }}>
                  {personalInfo.education.period} &bull; Cantilan, Surigao del Sur
                </p>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {personalInfo.bio}
                </p>

                {/* Relevant Coursework Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {personalInfo.education.coursework.map((course) => (
                    <span
                      key={course}
                      style={{
                        fontSize: '0.74rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.22rem 0.65rem',
                        borderRadius: '6px',
                        background: '#19060f',
                        color: 'var(--text-secondary)',
                        border: '1px solid rgba(255, 100, 140, 0.14)'
                      }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Download Action */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <ClayButton
                  variant="primary"
                  href="/Daryl_Labial_Resume.pdf"
                  download="Daryl_Labial_Resume.pdf"
                  icon={Download}
                  style={{
                    padding: '0.95rem 1.8rem',
                    fontSize: '1rem',
                    boxShadow: '0 8px 24px rgba(230,40,87,0.5), inset 1px 1px 2px rgba(255,200,220,0.6)'
                  }}
                >
                  Download Resume (PDF)
                </ClayButton>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)'
                  }}
                >
                  Format: PDF &bull; Updated for OJT
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
                        background: 'linear-gradient(135deg, #401323 0%, #1e0711 100%)',
                        border: '1px solid rgba(255, 120, 160, 0.3)',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.5), inset 1px 1px 2px rgba(255,160,200,0.25)',
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
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>
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

      <style>{`
        @media (max-width: 640px) {
          .timeline-rail {
            display: none !important;
          }
          .timeline-item {
            flex-direction: column !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
