import React, { useState } from 'react';
import { Code2, Terminal, Cpu, Network, Database, Award, Sparkles, Download, FileText, CheckCircle2 } from 'lucide-react';
import ClayCard from '../common/ClayCard';
import TechLogo from '../common/TechLogos';
import { skillsData } from '../../data/portfolioData';
import { audioFeedback } from '../../utils/audioFeedback';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  useScrollReveal();

  const getCategoryIcon = (index) => {
    switch (index) {
      case 0:
        return Code2; // Programming Languages
      case 1:
        return Terminal; // Frameworks & Developer Tools
      case 2:
        return Cpu; // Hardware & Embedded Systems
      case 3:
        return Network; // Computer Networking & Infrastructure
      case 4:
        return Database; // Databases & Backend Architecture
      case 5:
      default:
        return Award; // Professional Competencies
    }
  };

  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <span className="section-tag">
            <Sparkles size={13} /> Resume Verified Skills
          </span>
          <h2 className="section-title">
            Technical Skills <span className="text-gradient-ruby">&amp; Competencies</span>
          </h2>
          <p className="section-subtitle">
            Curated technical proficiencies, microcontroller hardware, networking protocols, and software toolchains based directly on my official Computer Engineering resume.
          </p>

          {/* Direct Resume Alignment Callout */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.85rem',
              marginTop: '1.25rem',
              padding: '0.65rem 1.25rem',
              borderRadius: '9999px',
              background: '#19060f',
              border: '1px solid rgba(255, 77, 122, 0.25)',
              boxShadow: 'inset 1px 1px 3px rgba(0,0,0,0.6)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <FileText size={15} color="var(--accent-rose)" />
              <span style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                Aligned with <strong style={{ color: '#fff' }}>Daryl C. Labial's Resume (BSCpE)</strong>
              </span>
            </div>
            <a
              href="/Daryl_Labial_Resume.pdf"
              download="Daryl_Labial_Resume.pdf"
              onClick={() => audioFeedback.playTone(600, 'sine', 0.1)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#fff',
                background: 'linear-gradient(135deg, #e62857 0%, #9c1535 100%)',
                padding: '0.32rem 0.85rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(230,40,87,0.4)',
                transition: 'all 0.2s ease'
              }}
            >
              <Download size={13} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}
        >
          {skillsData.map((category, catIdx) => {
            const IconComponent = getCategoryIcon(catIdx);

            return (
              <div
                key={category.category}
                className={`reveal-on-scroll stagger-${(catIdx % 3) + 1}`}
                style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                <ClayCard
                  enableTilt={false}
                  style={{
                    padding: '2rem 1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                  }}
                >
                {/* Category Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    marginBottom: '0.75rem',
                    minHeight: '48px'
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '14px',
                      background: 'linear-gradient(135deg, #e62857 0%, #7d112a 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '4px 6px 14px rgba(0,0,0,0.5), inset 1px 1px 2px rgba(255,180,210,0.5)',
                      border: '1px solid rgba(255, 140, 180, 0.25)',
                      flexShrink: 0
                    }}
                  >
                    <IconComponent size={22} color="#fff" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, lineHeight: 1.25, margin: 0 }}>
                      {category.category}
                    </h3>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: '0.84rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '1.25rem',
                    lineHeight: 1.5,
                    minHeight: '40px'
                  }}
                >
                  {category.description}
                </p>

                {/* Skill Items List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {category.items.map((skill) => {
                    const isHovered = hoveredSkill === skill.name;

                    return (
                      <div
                        key={skill.name}
                        onMouseEnter={() => {
                          audioFeedback.playPop();
                          setHoveredSkill(skill.name);
                        }}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="clay-card-inset"
                        style={{
                          padding: '0.75rem 1rem',
                          cursor: 'pointer',
                          transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                          borderColor: isHovered ? 'rgba(250, 204, 21, 0.45)' : 'rgba(0,0,0,0.5)',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '0.55rem',
                            gap: '0.5rem'
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.65rem',
                              minWidth: 0,
                              flex: '1 1 auto'
                            }}
                          >
                            <div
                              style={{
                                width: '28px',
                                height: '28px',
                                borderRadius: '8px',
                                background: '#14030a',
                                border: '1px solid rgba(255, 100, 140, 0.18)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.7)'
                              }}
                            >
                              <TechLogo name={skill.name} size={17} />
                            </div>
                            <span
                              style={{
                                fontSize: '0.88rem',
                                fontWeight: 600,
                                color: isHovered ? '#fff' : 'var(--text-primary)',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                              }}
                              title={skill.name}
                            >
                              {skill.name}
                            </span>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              flexShrink: 0
                            }}
                          >
                            <span
                              style={{
                                fontSize: '0.7rem',
                                fontFamily: 'var(--font-mono)',
                                color: 'var(--text-secondary)',
                                background: 'rgba(255, 255, 255, 0.05)',
                                padding: '0.15rem 0.45rem',
                                borderRadius: '4px',
                                whiteSpace: 'nowrap'
                              }}
                            >
                              {skill.tag}
                            </span>
                            <span
                              style={{
                                fontSize: '0.75rem',
                                fontFamily: 'var(--font-mono)',
                                fontWeight: 700,
                                color: '#ffd166',
                                textShadow: '0 0 8px rgba(255, 209, 102, 0.4)',
                                minWidth: '32px',
                                textAlign: 'right',
                                whiteSpace: 'nowrap'
                              }}
                            >
                              {skill.level}%
                            </span>
                          </div>
                        </div>

                        {/* Clay Progress Bar (Yellow Level Indicator) */}
                        <div
                          style={{
                            width: '100%',
                            height: '6px',
                            background: '#0d0206',
                            borderRadius: '999px',
                            overflow: 'hidden',
                            boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.9)'
                          }}
                        >
                          <div
                            style={{
                              width: `${skill.level}%`,
                              height: '100%',
                              background: 'linear-gradient(90deg, #d97706 0%, #facc15 50%, #ffd166 100%)',
                              borderRadius: '999px',
                              boxShadow: '0 0 10px rgba(250, 204, 21, 0.75), 0 0 4px rgba(255, 209, 102, 0.9)',
                              transition: 'width 0.8s ease'
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ClayCard>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}
