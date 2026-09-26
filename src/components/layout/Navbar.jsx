import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Menu, X, Sparkles, Send, Download } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import ClayButton from '../common/ClayButton';
import ThemeToggle from '../common/ThemeToggle';
import { personalInfo } from '../../data/portfolioData';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);
  const navMenuRef = useRef(null);
  const isClickScrollingRef = useRef(false);
  const clickTimeoutRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    opacity: 0
  });

  // Calculate and update sliding indicator pill dimensions and position
  const updateIndicator = () => {
    if (navMenuRef.current) {
      const activeEl = navMenuRef.current.querySelector(`[data-id="${activeSection}"]`);
      if (activeEl) {
        setIndicatorStyle({
          left: activeEl.offsetLeft,
          top: activeEl.offsetTop,
          width: activeEl.offsetWidth,
          height: activeEl.offsetHeight,
          opacity: 1
        });
      }
    }
  };

  useLayoutEffect(() => {
    updateIndicator();
  }, [activeSection]);

  useEffect(() => {
    window.addEventListener('resize', updateIndicator);
    const timer = setTimeout(updateIndicator, 150);
    return () => {
      window.removeEventListener('resize', updateIndicator);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // If user recently clicked a nav item, do not let intermediate scroll events override active section
      if (isClickScrollingRef.current) return;

      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      if (isBottom) {
        setActiveSection('contact');
        return;
      }

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

    const handleUserScroll = () => {
      isClickScrollingRef.current = false;
    };

    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleUserScroll, { passive: true });
    window.addEventListener('touchmove', handleUserScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleUserScroll);
      window.removeEventListener('touchmove', handleUserScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero', id: 'hero' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);

    // Lock indicator to target section while smooth scrolling traverses the page
    isClickScrollingRef.current = true;
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }
    clickTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 850);
  };

  return (
    <header ref={headerRef} className="navbar-header">
      <nav
        className="clay-dock navbar-dock"
        style={{
          boxShadow: isScrolled
            ? 'var(--clay-shadow-card-hover)'
            : 'var(--clay-shadow-card)'
        }}
      >
        {/* Daryl's Profile Avatar & Brand */}
        <a
          href="#hero"
          onClick={() => handleNavClick('hero')}
          className="navbar-brand"
        >
          <div className="navbar-avatar">
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
            <span className="navbar-brand-name">
              {personalInfo.name} {personalInfo.surname}
            </span>
            <span className="navbar-brand-handle">
              @{personalInfo.githubHandle}
            </span>
          </div>
        </a>

        {/* Desktop Links with Smooth Sliding Indicator Pill */}
        <div className="desktop-nav-menu" ref={navMenuRef}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className="desktop-nav-link"
                data-id={link.id}
                style={{
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'var(--nav-active-color)' : 'var(--text-secondary)'
                }}
              >
                {link.label}
              </a>
            );
          })}
          <span
            className="desktop-nav-indicator"
            style={{
              left: indicatorStyle.left,
              top: indicatorStyle.top,
              width: indicatorStyle.width,
              height: indicatorStyle.height,
              opacity: indicatorStyle.opacity
            }}
            aria-hidden="true"
          />
        </div>

        {/* Action Controls */}
        <div className="navbar-actions">
          {/* Animated Mode Toggle Button */}
          <ThemeToggle />

          {/* GitHub Quick Link */}
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Daryl's GitHub"
            className="nav-icon-btn"
          >
            <GithubIcon size={17} />
          </a>

          {/* Download Resume Button */}
          <a
            href="/Daryl_Labial_Resume.pdf"
            download="Daryl_Labial_Resume.pdf"
            title="Download Resume (PDF)"
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
          >
            <Send size={13} />
            <span>Contact</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-burger-btn"
            aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="clay-card navbar-mobile-drawer">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={`mobile-nav-link${activeSection === link.id ? ' is-active' : ''}`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && <Sparkles size={14} color="var(--accent-rose)" />}
              </a>
            ))}

            {/* Mobile Contact Quick Action */}
            <a
              href="#contact"
              onClick={() => handleNavClick('contact')}
              className="mobile-nav-action"
            >
              <span>Get In Touch</span>
              <Send size={14} color="var(--accent-rose)" />
            </a>

            {/* Mobile Theme Toggle Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.65rem 1rem',
                borderRadius: '12px',
                background: 'var(--bg-card-inset)',
                border: '1px solid var(--border-subtle)',
                marginTop: '0.15rem'
              }}
            >
              <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Theme Appearance
              </span>
              <ThemeToggle showLabel={true} />
            </div>

            {/* Mobile Download Resume */}
            <ClayButton
              variant="primary"
              href="/Daryl_Labial_Resume.pdf"
              download="Daryl_Labial_Resume.pdf"
              icon={Download}
              style={{ marginTop: '0.3rem', width: '100%', justifyContent: 'center' }}
            >
              Download Resume (PDF)
            </ClayButton>
          </div>
        )}
    </header>
  );
}
