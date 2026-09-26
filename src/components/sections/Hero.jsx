import { ArrowRight, ExternalLink, CheckCircle2, Download } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import ClayButton from '../common/ClayButton';
import TypewriterText from '../common/TypewriterText';
import { personalInfo } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Hero() {
  // Explicitly register scroll reveal so this section doesn't depend on siblings
  useScrollReveal();

  return (
    <section
      id="hero"
      className="section-wrapper"
      style={{
        /* Extra top padding to clear the fixed navbar; overrides .section-wrapper default */
        paddingTop: '8.5rem',
        paddingBottom: '5rem',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Headline, Bio & Action */}
          <div className="hero-intro-col reveal-on-scroll" style={{ maxWidth: '640px' }}>
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
              I’m <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{personalInfo.name} {personalInfo.surname}</strong> (
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
                gap: '0.85rem'
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
                  padding: '0.85rem 1.8rem'
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
          </div>

          {/* Right Column: Ultra-Clean, Large Profile Card */}
          <div
            className="hero-profile-col"
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
                width: 'clamp(280px, 80vw, 440px)',
                height: 'clamp(280px, 80vw, 440px)',
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
                background: 'var(--hero-card-bg)',
                boxShadow: 'var(--hero-card-shadow)',
                border: '2px solid var(--hero-card-border)',
                zIndex: 2,
                textAlign: 'center',
                padding: 'clamp(1.5rem, 3.5vw, 2.5rem) clamp(1rem, 2.5vw, 2rem)',
                position: 'relative',
                boxSizing: 'border-box'
              }}
            >
              {/* Profile Image Container - Large, Clean & Crisp */}
              <div
                style={{
                  position: 'relative',
                  width: 'clamp(190px, 50vw, 250px)',
                  height: 'clamp(190px, 50vw, 250px)',
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
                    color: 'var(--text-primary)',
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
                style={{
                  fontSize: '0.84rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-rose)',
                  background: 'var(--badge-bg)',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '999px',
                  border: '1px solid var(--border-subtle)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  boxShadow: 'var(--clay-shadow-pill)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
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
                  borderTop: '1px solid var(--border-subtle)',
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
                      background: 'var(--bg-card-inset)',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Bar (Degree, Repositories, Target) */}
          <div className="hero-stats-col reveal-on-scroll" style={{ width: '100%', maxWidth: '640px' }}>
            <div className="hero-stats-grid">
              {personalInfo.stats.map((stat, idx) => {
                const isNumeric = /^\d/.test(stat.value);
                return (
                  <div
                    key={idx}
                    className="clay-card-inset hero-stat-card"
                  >
                    <div className="hero-stat-label">
                      {stat.label}
                    </div>
                    <div className={`hero-stat-value ${isNumeric ? 'is-metric' : 'is-text'}`}>
                      {stat.value}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
