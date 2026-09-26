import { useState } from 'react';
import { Mail, Copy, Check, Send, Sparkles, MessageSquare, Phone, Download, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, FacebookIcon } from '../common/SocialIcons';
import confetti from 'canvas-confetti';
import ClayCard from '../common/ClayCard';
import ClayButton from '../common/ClayButton';
import { personalInfo } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Contact() {
  useScrollReveal();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web App / Architecture',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#e62857', '#ff4d7a', '#ffd166', '#ffffff']
      });
    }, 900);
  };

  const projectTypes = [
    'IoT & Hardware Prototype',
    'Python Automation / System',
    'Full-Stack Web App',
    'Robotics & Teleoperation',
    'Project Collaboration'
  ];

  return (
    <section id="contact" className="section-wrapper">
      <div className="section-divider" aria-hidden="true" />
      <div className="section-ambient-glow" aria-hidden="true" />
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <span className="section-tag">
            <Sparkles size={13} /> Initiate Contact
          </span>
          <h2 className="section-title">
            Let’s Build Systems <span className="text-gradient-ruby">Together</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an upcoming IoT challenge, require Python automation, or want to collaborate on robotics and web software — I'd love to connect.
          </p>
        </div>

        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '2rem'
          }}
        >
          {/* Left Column: Direct Connect & Info */}
          <div className="reveal-on-scroll reveal-left" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Quick Email Copy Clay Card */}
            <ClayCard enableTilt={false} style={{ padding: 'clamp(1.25rem, 3vw, 2rem)' }}>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #e62857 0%, #7d112a 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  boxShadow: '4px 6px 16px rgba(0,0,0,0.5), inset 1px 1px 2px rgba(255,180,210,0.5)'
                }}
              >
                <Mail size={24} color="#fff" />
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                Direct Electronic Mail
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                Quickest way to reach me for project inquiries and advisory discussions.
              </p>

              <div
                className="clay-card-inset"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  marginBottom: '1rem'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    color: 'var(--text-primary)',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {personalInfo.email}
                </span>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    background: copied ? 'var(--accent-rose)' : 'var(--bg-card-inset)',
                    color: copied ? '#fff' : 'var(--text-primary)',
                    border: '1px solid var(--border-subtle)',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '8px',
                    fontSize: '0.78rem',
                    cursor: 'pointer',
                    boxShadow: 'var(--clay-shadow-button)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Direct Phone Number */}
              <div
                className="clay-card-inset"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  marginBottom: '1rem'
                }}
              >
                <Phone size={16} color="var(--accent-rose)" />
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    color: 'var(--text-primary)',
                    textDecoration: 'none'
                  }}
                >
                  {personalInfo.phone}
                </a>
              </div>

              {/* Direct Facebook Account */}
              <div
                className="clay-card-inset"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  marginBottom: '1.25rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0 }}>
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '6px',
                      background: '#1877F2',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <FacebookIcon size={14} color="#fff" />
                  </div>
                  <a
                    href={personalInfo.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    facebook.com/DAreal4ryl
                  </a>
                </div>

                <a
                  href={personalInfo.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    background: '#1877F2',
                    color: '#fff',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    textDecoration: 'none',
                    fontWeight: 600,
                    transition: 'all 0.2s ease',
                    flexShrink: 0
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  <span>Connect</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* Download Resume Action */}
              <ClayButton
                variant="primary"
                href="/Daryl_Labial_Resume.pdf"
                download="Daryl_Labial_Resume.pdf"
                icon={Download}
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  fontSize: '0.9rem',
                  marginBottom: '0.75rem'
                }}
              >
                Download Resume (PDF)
              </ClayButton>

              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Response time: Usually within 24 hours &bull; Available for Opportunities
              </div>
            </ClayCard>

            {/* Social Channels Clay Card */}
            <ClayCard enableTilt={false} style={{ padding: 'clamp(1.25rem, 3vw, 2rem)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem' }}>
                Professional Networks &amp; Socials
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0.75rem' }}>
                {personalInfo.socials.map((social) => {
                  let Icon = MessageSquare;
                  if (social.name === 'Facebook') Icon = FacebookIcon;
                  if (social.name === 'GitHub') Icon = GithubIcon;
                  if (social.name === 'LinkedIn') Icon = LinkedinIcon;
                  if (social.name.includes('Twitter')) Icon = TwitterIcon;
                  if (social.name === 'Email') Icon = Mail;
                  if (social.name === 'Phone') Icon = Phone;

                  return (
                    <ClayButton
                      key={social.name}
                      variant="secondary"
                      href={social.url}
                      target="_blank"
                      icon={Icon}
                      style={{
                        padding: '0.7rem 0.85rem',
                        fontSize: '0.82rem',
                        justifyContent: 'flex-start'
                      }}
                    >
                      {social.name}
                    </ClayButton>
                  );
                })}
              </div>
            </ClayCard>
          </div>

          {/* Right Column: Tactile Message Transmission Form */}
          <ClayCard
            enableTilt={false}
            className="reveal-on-scroll reveal-right"
            style={{ padding: 'clamp(1.25rem, 3vw, 2.25rem)' }}
          >
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.4rem' }}>
              Transmit a Message
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
              Fill in your inquiry details below. All transmissions receive prompt attention.
            </p>

            {isSubmitted ? (
              <div
                className="clay-card-inset"
                style={{
                  padding: '2.5rem 1.5rem',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #e62857 0%, #85122e 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem auto',
                    boxShadow: '0 0 24px rgba(230,40,87,0.6)'
                  }}
                >
                  <Check size={30} color="#fff" />
                </div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  Transmission Confirmed!
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  Thank you for reaching out. I've received your note and will review it shortly.
                </p>
                <ClayButton
                  variant="secondary"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', projectType: 'Web App / Architecture', message: '' });
                  }}
                >
                  Send Another Note
                </ClayButton>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label className="form-label">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={handleChange}
                    className="clay-input"
                  />
                </div>

                <div>
                  <label className="form-label">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. alex@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="clay-input"
                  />
                </div>

                <div>
                  <label className="form-label">
                    INQUIRY SCOPE
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, projectType: type });
                        }}
                        className={`clay-pill ${formData.projectType === type ? 'active' : ''}`}
                        style={{
                          cursor: 'pointer',
                          background: formData.projectType === type ? 'var(--accent-rose)' : 'var(--bg-card-inset)',
                          borderColor: formData.projectType === type ? 'var(--accent-rose)' : 'var(--border-subtle)',
                          color: formData.projectType === type ? '#fff' : 'var(--text-secondary)'
                        }}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="form-label">
                    MESSAGE / PROJECT BRIEF
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project goals, timeline, and vision..."
                    value={formData.message}
                    onChange={handleChange}
                    className="clay-input"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <ClayButton
                  type="submit"
                  variant="primary"
                  icon={Send}
                  iconPosition="right"
                  disabled={isSubmitting}
                  style={{ marginTop: '0.5rem', width: '100%', padding: '0.9rem' }}
                >
                  {isSubmitting ? 'Transmitting...' : 'Dispatch Message'}
                </ClayButton>
              </form>
            )}
          </ClayCard>
        </div>
      </div>
    </section>
  );
}
