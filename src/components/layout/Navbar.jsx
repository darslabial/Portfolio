import { useState, useEffect, useRef } from 'react';
import { Menu, X, Sparkles, Send, Download } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import ClayButton from '../common/ClayButton';
import { personalInfo } from '../../data/portfolioData';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

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
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
  };

  return (
    <header ref={headerRef} className="navbar-header">
      <nav
        className="clay-dock navbar-dock"
        style={{
          boxShadow: isScrolled
            ? '0 20px 48px rgba(0,0,0,0.85), inset 1px 1px 2px rgba(255,160,200,0.35)'
            : '0 12px 32px rgba(0,0,0,0.6), inset 1px 1px 2px rgba(255,160,200,0.18)'
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

        {/* Desktop Links */}
        <div className="desktop-nav-menu">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className="desktop-nav-link"
                style={{
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  background: isActive
                    ? 'linear-gradient(135deg, #381121 0%, #200812 100%)'
                    : 'transparent',
                  boxShadow: isActive
                    ? '3px 4px 10px rgba(0,0,0,0.5), inset 1px 1px 2px rgba(255,140,180,0.25), inset -1px -1px 2px rgba(0,0,0,0.4)'
                    : 'none',
                  border: isActive
                    ? '1px solid rgba(255,120,160,0.25)'
                    : '1px solid transparent'
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="navbar-actions">
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
