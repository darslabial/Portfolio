import { useState } from 'react';
import { X, CheckCircle2, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import ClayCard from '../common/ClayCard';
import ClayButton from '../common/ClayButton';
import { projectsData } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Projects() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  useScrollReveal();

  // Shared style for modal section headers (Challenge / Solution / Impact)
  const modalSectionHeadStyle = {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: '1rem',
    color: 'var(--text-primary)',
    marginBottom: '0.4rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const openModal = (project) => {
    setActiveCaseStudy(project);
  };

  const closeModal = () => {
    setActiveCaseStudy(null);
  };

  return (
    <section id="projects" className="section-wrapper">
      <div className="section-divider" aria-hidden="true" />
      <div className="section-ambient-glow" aria-hidden="true" />
      <div className="container">
        {/* Section Heading */}
        <div className="section-header reveal-on-scroll">
          <span className="section-tag">
            <FolderGit2 size={13} /> Engineering Repositories &amp; Production Systems
          </span>
          <h2 className="section-title">
            Featured <span className="text-gradient-ruby">Engineering Works</span>
          </h2>
          <p className="section-subtitle">
            Authentic software systems, full-stack civic platforms, and hardware interfaces published on <a href="https://github.com/LabialDaryl" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-rose)', textDecoration: 'underline' }}>GitHub (@LabialDaryl)</a> and institutional Gitea.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '2rem'
          }}
        >
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              className={`reveal-on-scroll stagger-${(idx % 4) + 1}`}
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <ClayCard
                enableTilt={true}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
              {/* Project Image Frame */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16 / 9',
                  borderRadius: '20px 20px 0 0',
                  overflow: 'hidden',
                  background: '#120409'
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(16, 4, 9, 0.85)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--accent-rose)',
                    border: '1px solid rgba(255, 100, 140, 0.25)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
                  }}
                >
                  {project.category}
                </div>

                {/* Repo tag overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0.8rem',
                    left: '1rem',
                    background: 'rgba(10, 2, 5, 0.8)',
                    backdropFilter: 'blur(6px)',
                    padding: '0.25rem 0.7rem',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    border: project.platform === 'gitea' ? '1px solid rgba(255, 77, 122, 0.4)' : '1px solid rgba(255, 100, 140, 0.2)'
                  }}
                >
                  {project.platform === 'gitea' ? (
                    <>
                      <FolderGit2 size={12} color="var(--accent-rose)" />
                      <span>Gitea · {project.repoName}</span>
                    </>
                  ) : (
                    <>
                      <GithubIcon size={12} />
                      <span>LabialDaryl/{project.repoName}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1
                }}
              >
                <h3
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    marginBottom: '0.35rem',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {project.title}
                </h3>
                <div
                  style={{
                    fontSize: '0.84rem',
                    color: 'var(--accent-rose)',
                    fontWeight: 600,
                    marginBottom: '0.9rem'
                  }}
                >
                  {project.subtitle}
                </div>

                <p
                  style={{
                    fontSize: '0.91rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem',
                    flexGrow: 1
                  }}
                >
                  {project.summary}
                </p>

                {/* Key Metric Pill */}
                <div
                  className="clay-card-inset"
                  style={{
                    padding: '0.55rem 0.95rem',
                    marginBottom: '1.25rem',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--accent-cyan)'
                    }}
                  />
                  <span>{project.metrics}</span>
                </div>

                {/* Tech Stack Pills */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '6px',
                        background: '#19060f',
                        color: 'var(--text-secondary)',
                        border: '1px solid rgba(255, 100, 140, 0.12)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.75rem',
                    marginTop: 'auto'
                  }}
                >
                  <ClayButton
                    variant="secondary"
                    onClick={() => openModal(project)}
                    icon={ArrowUpRight}
                    iconPosition="right"
                    style={{ fontSize: '0.85rem', padding: '0.65rem 1rem' }}
                  >
                    Details
                  </ClayButton>

                  <ClayButton
                    variant="primary"
                    href={project.repoUrl}
                    target="_blank"
                    icon={project.platform === 'gitea' ? FolderGit2 : GithubIcon}
                    iconPosition="right"
                    style={{ fontSize: '0.85rem', padding: '0.65rem 1rem' }}
                  >
                    {project.platform === 'gitea' ? 'Gitea Repo' : 'View Code'}
                  </ClayButton>
                </div>
              </div>
            </ClayCard>
          </div>
        ))}
      </div>
    </div>

      {/* Case Study Modal */}
      {activeCaseStudy && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 150,
            background: 'rgba(10, 2, 5, 0.85)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={closeModal}
        >
          <div
            className="clay-card"
            style={{
              maxWidth: '680px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '2.5rem',
              position: 'relative',
              background: 'linear-gradient(135deg, #2d0e1b 0%, #1a0610 100%)',
              border: '1px solid rgba(255, 140, 180, 0.3)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), inset 2px 2px 4px rgba(255, 160, 200, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#1a060f',
                border: '1px solid rgba(255, 100, 140, 0.2)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem', flexWrap: 'wrap' }}>
              <span className="section-tag" style={{ margin: 0 }}>
                System Architecture &amp; Implementation
              </span>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-rose)',
                  background: 'rgba(255, 77, 122, 0.12)',
                  border: '1px solid rgba(255, 77, 122, 0.3)',
                  padding: '0.2rem 0.65rem',
                  borderRadius: '999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                {activeCaseStudy.platform === 'gitea' ? (
                  <>
                    <FolderGit2 size={12} />
                    <span>Gitea Hosted Project</span>
                  </>
                ) : (
                  <>
                    <GithubIcon size={12} />
                    <span>GitHub Hosted Project</span>
                  </>
                )}
              </span>
            </div>

            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.4rem' }}>
              {activeCaseStudy.title}
            </h3>
            <p style={{ color: 'var(--accent-rose)', fontWeight: 600, marginBottom: '1.5rem' }}>
              {activeCaseStudy.subtitle}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Challenge */}
              <div className="clay-card-inset" style={{ padding: '1.25rem' }}>
                <div style={modalSectionHeadStyle}>
                  <span style={{ color: 'var(--accent-amber)' }}>●</span> The Technical Problem
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {activeCaseStudy.caseStudy.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="clay-card-inset" style={{ padding: '1.25rem' }}>
                <div style={modalSectionHeadStyle}>
                  <span style={{ color: 'var(--accent-cyan)' }}>●</span> System Design &amp; Architecture
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {activeCaseStudy.caseStudy.solution}
                </p>
              </div>

              {/* Impact */}
              <div className="clay-card-inset" style={{ padding: '1.25rem' }}>
                <div style={modalSectionHeadStyle}>
                  <CheckCircle2 size={16} color="var(--accent-rose)" /> Practical Results &amp; Utility
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {activeCaseStudy.caseStudy.impact}
                </p>
              </div>
            </div>

            {/* Modal Actions */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '2rem' }}>
              <ClayButton variant="secondary" onClick={closeModal}>
                Close
              </ClayButton>
              <ClayButton
                variant="primary"
                href={activeCaseStudy.repoUrl}
                target="_blank"
                icon={activeCaseStudy.platform === 'gitea' ? FolderGit2 : GithubIcon}
                iconPosition="right"
              >
                {activeCaseStudy.platform === 'gitea' ? 'Inspect on Gitea' : 'Inspect Repository'}
              </ClayButton>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
