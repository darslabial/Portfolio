import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, Code2, Clock } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { audioFeedback } from '../../utils/audioFeedback';
import { GithubIcon, FacebookIcon } from '../common/SocialIcons';

export default function Footer() {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    audioFeedback.playPress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 100, 140, 0.12)',
        background: 'linear-gradient(180deg, #0d0206 0%, #080103 100%)',
        padding: '3.5rem 0 2.5rem 0',
        marginTop: '4rem',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid rgba(255, 100, 140, 0.08)'
          }}
        >
          {/* Brand & Tagline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  padding: '2px',
                  background: 'linear-gradient(135deg, #e62857 0%, #750e27 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  boxShadow: '0 3px 8px rgba(0,0,0,0.6)'
                }}
              >
                <img
                  src={personalInfo.avatar}
                  alt="Daryl Labial"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%'
                  }}
                />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.2rem',
                  color: '#fff'
                }}
              >
                {personalInfo.name} {personalInfo.surname}
              </span>
            </div>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', maxWidth: '440px' }}>
              {personalInfo.tagline}
            </p>
          </div>

          {/* Status & Local Time */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <div
              className="clay-card-inset"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 0.9rem',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-secondary)'
              }}
            >
              <Clock size={13} color="var(--accent-rose)" />
              <span>{timeString} (LOCAL)</span>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <a
                href={personalInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook: DAreal4ryl"
                onClick={() => audioFeedback.playPop()}
                className="clay-card-inset"
                style={{
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#1877F2';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <FacebookIcon size={16} />
              </a>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub: LabialDaryl"
                onClick={() => audioFeedback.playPop()}
                className="clay-card-inset"
                style={{
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-rose)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <GithubIcon size={16} />
              </a>
            </div>

            {/* Back to Top */}
            <button
              type="button"
              onClick={scrollToTop}
              title="Return to top"
              className="clay-btn clay-btn-secondary"
              style={{
                padding: '0.55rem 1.15rem',
                fontSize: '0.82rem',
                gap: '0.4rem'
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            paddingTop: '1.75rem',
            fontSize: '0.82rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name} {personalInfo.surname}. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>Engineered with React, Tactile Claymorphism &amp; Care</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
