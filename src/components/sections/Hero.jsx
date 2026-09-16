import React from 'react';
import { ArrowRight, Sparkles, ExternalLink, CheckCircle2, Download } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import ClayButton from '../common/ClayButton';
import TypewriterText from '../common/TypewriterText';
import { personalInfo } from '../../data/portfolioData';
import { audioFeedback } from '../../utils/audioFeedback';

export default function Hero() {
  return (
    <section
      id="hero"
      className="section-wrapper"
      style={{
        paddingTop: '8.5rem',
        paddingBottom: '5rem',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '4rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Headline, Bio & Action */}
          <div style={{ maxWidth: '640px' }} className="reveal-on-scroll">
            {/* Main Headline with Dynamic Typing */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                marginBottom: '1.4rem'
              }}
            >
              Building Intelligent{' '}
              <span className="text-gradient-ruby" style={{ display: 'inline-block' }}>
                <TypewriterText
                  phrases={[
                    "IoT & Robotics.",
                    "Full-Stack Web Apps.",
                    "PHP Laravel Systems.",
                    "Real-Time Queueing.",
                    "Citizen Digital IDs.",
                    "Network Infrastructure."
                  ]}
                  cursorChar="|"
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseDelay={2200}
                />
              </span>
            </h1>

            {/* Subtitle / Bio */}
            <p
              style={{
                fontSize: 'clamp(1.04rem, 1.8vw, 1.22rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '2.5rem',
                maxWidth: '560px'
              }}
            >
              I’m <strong style={{ color: '#fff', fontWeight: 700 }}>{personalInfo.name} {personalInfo.surname}</strong> (
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent-rose)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
              >
                @{personalInfo.githubHandle}
              </a>
              ). Developing full-stack web platforms, teleoperated robotics, and practical software solutions.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                marginBottom: '3.5rem'
              }}
            >
              <ClayButton
                variant="primary"
                href="#projects"
                icon={ArrowRight}
                iconPosition="right"
                style={{ fontSize: '1rem', padding: '0.85rem 1.8rem' }}
              >
                Explore Works
              </ClayButton>

              <ClayButton
                variant="secondary"
                href="/Daryl_Labial_Resume.pdf"
                download="Daryl_Labial_Resume.pdf"
                icon={Download}
                style={{
                  fontSize: '1rem',
                  padding: '0.85rem 1.8rem',
                  borderColor: 'rgba(255, 77, 122, 0.4)',
                  background: 'linear-gradient(135deg, #381223 0%, #200812 100%)'
                }}
              >
                Download Resume (PDF)
              </ClayButton>

              <ClayButton
                variant="secondary"
                href={personalInfo.githubUrl}
                target="_blank"
                icon={GithubIcon}
                style={{ fontSize: '1rem', padding: '0.85rem 1.6rem' }}
              >
                GitHub
              </ClayButton>
            </div>

            {/* Real Stats Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
                gap: '1rem'
              }}
            >
              {personalInfo.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="clay-card-inset"
                  style={{
                    padding: '0.9rem 1rem',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.55rem',
                      fontWeight: 800,
                      color: 'var(--accent-rose)',
                      lineHeight: 1.1
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginTop: '0.25rem',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Ultra-Clean, Large Profile Card (Zero Badges Overlapping) */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '440px',
              margin: '0 auto'
            }}
          >
            {/* Atmospheric Wine Glow */}
            <div
              style={{
                position: 'absolute',
                width: '440px',
                height: '440px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(230, 40, 87, 0.32) 0%, rgba(156, 21, 53, 0.16) 50%, transparent 72%)',
                filter: 'blur(45px)',
                pointerEvents: 'none'
              }}
            />

            {/* Central Master Clay Profile Card */}
            <div
              className="clay-card float-animation"
              style={{
                width: '100%',
                maxWidth: '390px',
                borderRadius: '38px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'linear-gradient(145deg, #341020 0%, #19050f 100%)',
                boxShadow: 
                  '18px 26px 56px rgba(0,0,0,0.85), -6px -6px 22px rgba(255,100,150,0.08), inset 2px 2px 4px rgba(255,160,200,0.35), inset -4px -4px 8px rgba(0,0,0,0.65)',
                border: '2px solid rgba(255, 140, 180, 0.28)',
                zIndex: 2,
                textAlign: 'center',
                padding: '2.5rem 2rem',
                position: 'relative'
              }}
            >
              {/* Profile Image Container - Large, Clean & Crisp */}
              <div
                style={{
                  position: 'relative',
                  width: '250px',
                  height: '250px',
                  borderRadius: '50%',
                  padding: '6px',
                  background: 'linear-gradient(135deg, #ff477e 0%, #b81c45 50%, #20040e 100%)',
                  boxShadow: 
                    '0 14px 34px rgba(0,0,0,0.75), 0 0 24px rgba(255,71,126,0.35), inset 2px 2px 4px rgba(255,200,230,0.6)',
                  marginBottom: '1.6rem',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={personalInfo.avatar}
                  alt="Daryl Labial Profile"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    filter: 'contrast(1.06) brightness(0.98)'
                  }}
                />

                {/* Subtle specular rim */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    boxShadow: 'inset 0 0 20px rgba(156, 21, 53, 0.35)',
                    pointerEvents: 'none'
                  }}
                />
              </div>

              {/* Identity Details */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  justifyContent: 'center',
                  marginBottom: '0.35rem'
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '1.7rem',
                    color: '#fff',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1
                  }}
                >
                  {personalInfo.name} {personalInfo.surname}
                </h3>
                <span title="Verified Developer" style={{ display: 'inline-flex' }}>
                  <CheckCircle2 size={18} color="var(--accent-rose)" />
                </span>
              </div>

              <div
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  fontWeight: 500,
                  marginBottom: '1.25rem'
                }}
              >
                IoT &amp; Systems Developer
              </div>

              {/* Clickable GitHub Profile Pill */}
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => audioFeedback.playPop()}
                style={{
                  fontSize: '0.84rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-rose)',
                  background: 'rgba(230,40,87,0.12)',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '999px',
                  border: '1px solid rgba(230,40,87,0.3)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(230,40,87,0.25)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(230,40,87,0.12)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <GithubIcon size={15} />
                <span>github.com/LabialDaryl</span>
                <ExternalLink size={12} style={{ opacity: 0.7 }} />
              </a>

              {/* Clean Bottom Tech Tags */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: '0.45rem',
                  marginTop: '1.4rem',
                  paddingTop: '1.1rem',
                  borderTop: '1px solid rgba(255, 100, 140, 0.12)',
                  width: '100%'
                }}
              >
                {['Python', 'IoT', 'Robotics', 'TypeScript', 'Embedded'].map((item) => (
                  <span
                    key={item}
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '0.22rem 0.65rem',
                      borderRadius: '6px',
                      background: '#1a0610',
                      color: 'var(--text-secondary)',
                      border: '1px solid rgba(255, 100, 140, 0.12)'
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
}
