import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Sparkles, Send, Download } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import { audioFeedback } from '../../utils/audioFeedback';
import { personalInfo } from '../../data/portfolioData';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isAudioOn, setIsAudioOn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'projects', 'skills', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const newState = audioFeedback.toggle();
    setIsAudioOn(newState);
  };

  const navLinks = [
    { label: 'Overview', href: '#hero', id: 'hero' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  const handleNavClick = (id) => {
    audioFeedback.playPress();
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: '1.25rem',
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 1.25rem',
        transition: 'all 0.3s ease'
      }}
    >
      <nav
        className="clay-dock"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.6rem 1.15rem',
          maxWidth: '1060px',
          width: '100%',
          transition: 'all 0.3s ease',
          boxShadow: isScrolled
            ? '0 20px 48px rgba(0,0,0,0.75), inset 1px 1px 2px rgba(255,160,200,0.3)'
            : '0 12px 32px rgba(0,0,0,0.55), inset 1px 1px 2px rgba(255,160,200,0.15)'
        }}
      >
        {/* Daryl's Profile Avatar & Brand */}
        <a
          href="#hero"
          onClick={() => handleNavClick('hero')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none'
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              padding: '2px',
              background: 'linear-gradient(135deg, #f03362 0%, #750e27 100%)',
              boxShadow: '3px 4px 12px rgba(0, 0, 0, 0.6), inset 1px 1px 2px rgba(255, 200, 220, 0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}
          >
            <img
              src={personalInfo.avatar}
              alt="Daryl Labial"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
                filter: 'contrast(1.06) brightness(0.95)'
              }}
            />
          </div>
          <div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.05rem',
                letterSpacing: '-0.01em',
                color: '#fff',
                display: 'block',
                lineHeight: 1.1
              }}
            >
              {personalInfo.name} {personalInfo.surname}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--accent-rose)',
                display: 'block'
              }}
            >
              @{personalInfo.githubHandle}
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.4rem'
          }}
          className="desktop-nav-menu"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  padding: '0.45rem 0.95rem',
                  borderRadius: '9999px',
                  background: isActive
                    ? 'linear-gradient(135deg, #381121 0%, #200812 100%)'
                    : 'transparent',
                  boxShadow: isActive
                    ? '3px 4px 10px rgba(0,0,0,0.5), inset 1px 1px 2px rgba(255,140,180,0.25), inset -1px -1px 2px rgba(0,0,0,0.4)'
                    : 'none',
                  border: isActive
                    ? '1px solid rgba(255,120,160,0.25)'
                    : '1px solid transparent',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          {/* GitHub Quick Link */}
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Daryl's GitHub"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#16050b',
              border: '1px solid rgba(255, 100, 140, 0.16)',
              color: 'var(--text-primary)',
              boxShadow: 'var(--clay-shadow-button)',
              transition: 'all 0.2s ease'
            }}
          >
            <GithubIcon size={18} />
          </a>

          {/* Sound Toggle */}
          <button
            type="button"
            onClick={toggleSound}
            title={isAudioOn ? 'Disable Tactile Sound' : 'Enable Tactile Sound'}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: isAudioOn ? 'linear-gradient(135deg, #3d1223 0%, #230814 100%)' : '#16050b',
              border: isAudioOn ? '1px solid rgba(255, 77, 122, 0.4)' : '1px solid rgba(255, 100, 140, 0.12)',
              color: isAudioOn ? 'var(--accent-rose)' : 'var(--text-muted)',
              cursor: 'pointer',
              boxShadow: isAudioOn ? '0 0 14px rgba(255,77,122,0.3), inset 1px 1px 2px rgba(255,160,200,0.3)' : 'var(--clay-shadow-inset)',
              transition: 'all 0.2s ease'
            }}
          >
            {isAudioOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* Download Resume Button */}
          <a
            href="/Daryl_Labial_Resume.pdf"
            download="Daryl_Labial_Resume.pdf"
            title="Download Resume (PDF)"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontFamily: 'var(--font-display)',
              fontSize: '0.84rem',
              fontWeight: 600,
              padding: '0.48rem 0.95rem',
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, #2d0e1b 0%, #1a0610 100%)',
              color: 'var(--text-primary)',
              boxShadow: 'var(--clay-shadow-button)',
              border: '1px solid rgba(255,120,160,0.22)',
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
            className="desktop-resume-btn"
          >
            <Download size={13} color="var(--accent-rose)" />
            <span>Resume</span>
          </a>

          {/* Quick Contact CTA */}
          <a
            href="#contact"
            onClick={() => handleNavClick('contact')}
            className="desktop-contact-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontFamily: 'var(--font-display)',
              fontSize: '0.85rem',
              fontWeight: 600,
              padding: '0.5rem 1.15rem',
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, #e62857 0%, #9c1535 100%)',
              color: '#fff',
              boxShadow: '4px 6px 16px rgba(0,0,0,0.5), 0 0 14px rgba(230,40,87,0.35), inset 1px 1px 2px rgba(255,180,210,0.5)',
              border: '1px solid rgba(255,140,180,0.35)',
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <Send size={13} />
            <span>Contact</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => {
              audioFeedback.playPop();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="mobile-burger-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              borderRadius: '12px',
              background: '#19060f',
              border: '1px solid rgba(255, 120, 160, 0.15)',
              color: '#fff',
              cursor: 'pointer'
            }}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div
          className="clay-card"
          style={{
            position: 'absolute',
            top: '4.8rem',
            left: '1.25rem',
            right: '1.25rem',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.6rem',
            zIndex: 99
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => handleNavClick(link.id)}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                fontWeight: 600,
                color: activeSection === link.id ? 'var(--accent-rose)' : 'var(--text-primary)',
                padding: '0.75rem 1rem',
                borderRadius: '12px',
                background: activeSection === link.id ? '#1e0812' : 'transparent',
                border: activeSection === link.id ? '1px solid rgba(255,77,122,0.3)' : 'none',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{link.label}</span>
              {activeSection === link.id && <Sparkles size={14} color="var(--accent-rose)" />}
            </a>
          ))}

          {/* Mobile Download Resume Link */}
          <a
            href="/Daryl_Labial_Resume.pdf"
            download="Daryl_Labial_Resume.pdf"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              fontWeight: 700,
              color: '#ffffff',
              padding: '0.85rem 1rem',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #e62857 0%, #9c1535 100%)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '0.4rem',
              boxShadow: '0 4px 12px rgba(230,40,87,0.4)'
            }}
          >
            <Download size={16} />
            <span>Download Resume (PDF)</span>
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav-menu {
            display: flex !important;
          }
          .mobile-burger-btn {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .desktop-contact-btn,
          .desktop-resume-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
