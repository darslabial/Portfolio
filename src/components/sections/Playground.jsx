import React, { useState } from 'react';
import { Sliders, Sparkles, Volume2, PartyPopper, Check, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import ClayCard from '../common/ClayCard';
import ClayButton from '../common/ClayButton';
import { audioFeedback } from '../../utils/audioFeedback';

export default function Playground() {
  const [clickCount, setClickCount] = useState(0);
  const [activeTheme, setActiveTheme] = useState('ruby');
  const [depthValue, setDepthValue] = useState(16);

  const themes = [
    { id: 'ruby', name: 'Ruby Wine', color: '#e62857', glow: 'rgba(230, 40, 87, 0.4)' },
    { id: 'bordeaux', name: 'Deep Merlot', color: '#9c1535', glow: 'rgba(156, 21, 53, 0.4)' },
    { id: 'lilac', name: 'Cyber Violet', color: '#b5179e', glow: 'rgba(181, 23, 158, 0.4)' },
    { id: 'gold', name: 'Champagne', color: '#f8961e', glow: 'rgba(248, 150, 30, 0.4)' }
  ];

  const handleThemeChange = (theme) => {
    audioFeedback.playTone(560, 'sine', 0.08);
    setActiveTheme(theme.id);
    document.documentElement.style.setProperty('--accent-rose', theme.color);
    document.documentElement.style.setProperty('--accent-glow', theme.glow);
  };

  const handleDepthChange = (e) => {
    const val = e.target.value;
    setDepthValue(val);
    document.documentElement.style.setProperty(
      '--clay-shadow-card',
      `${val}px ${val * 1.3}px ${val * 2.5}px rgba(0, 0, 0, 0.7), -4px -4px 16px rgba(255, 90, 140, 0.04), inset 2px 2px 3px rgba(255, 140, 180, 0.25), inset -3px -3px 6px rgba(0, 0, 0, 0.55)`
    );
  };

  const handleConfetti = (e) => {
    audioFeedback.playSuccess();
    setClickCount((prev) => prev + 1);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 75,
      spread: 70,
      origin: { x, y },
      colors: ['#e62857', '#ff4d7a', '#ffd166', '#b5179e', '#ffffff']
    });
  };

  return (
    <section id="playground" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={13} /> Interactive Clay Lab
          </span>
          <h2 className="section-title">
            Test The <span className="text-gradient-ruby">Tactile Physics</span>
          </h2>
          <p className="section-subtitle">
            Experience the responsive depth firsthand. Experiment with live lighting shaders, audio haptics, and physics tokens.
          </p>
        </div>

        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}
        >
          {/* Module 1: Live Lighting & Accent Switcher */}
          <ClayCard enableTilt={true} style={{ padding: '2rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                marginBottom: '1rem'
              }}
            >
              <Sliders size={20} color="var(--accent-rose)" />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Accent Lighting Engine</h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Switch the site's live radiant glow and specular reflections:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {themes.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => handleThemeChange(t)}
                  className={`clay-btn ${activeTheme === t.id ? 'clay-btn-primary' : 'clay-btn-secondary'}`}
                  style={{
                    padding: '0.65rem 0.9rem',
                    fontSize: '0.82rem',
                    justifyContent: 'flex-start',
                    gap: '0.6rem'
                  }}
                >
                  <span
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: t.color,
                      boxShadow: `0 0 8px ${t.color}`,
                      display: 'inline-block'
                    }}
                  />
                  <span>{t.name}</span>
                </button>
              ))}
            </div>
          </ClayCard>

          {/* Module 2: Shadow Depth & Elevation Tuner */}
          <ClayCard enableTilt={true} style={{ padding: '2rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                marginBottom: '1rem'
              }}
            >
              <RefreshCw size={20} color="var(--accent-rose)" />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Clay Elevation ({depthValue}px)</h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Drag to adjust the clay surface displacement and bevel intensity:
            </p>

            <div className="clay-card-inset" style={{ padding: '1.25rem', marginBottom: '1rem' }}>
              <input
                type="range"
                min="8"
                max="28"
                value={depthValue}
                onChange={handleDepthChange}
                style={{
                  width: '100%',
                  accentColor: 'var(--accent-rose)',
                  cursor: 'pointer'
                }}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)',
                  marginTop: '0.5rem'
                }}
              >
                <span>Subtle (8px)</span>
                <span>Default (16px)</span>
                <span>Deep Inflated (28px)</span>
              </div>
            </div>

            <div
              style={{
                textAlign: 'center',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-mono)'
              }}
            >
              Realtime CSS variable override
            </div>
          </ClayCard>

          {/* Module 3: Haptic & Celebration Cannon */}
          <ClayCard
            enableTilt={true}
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              gridColumn: '1 / -1'
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
                marginBottom: '1rem',
                boxShadow: '0 0 20px rgba(230,40,87,0.5), inset 1px 1px 2px rgba(255,180,210,0.6)'
              }}
            >
              <PartyPopper size={28} color="#fff" />
            </div>

            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Interactive Celebration Trigger
            </h3>
            <p
              style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                maxWidth: '480px',
                marginBottom: '1.5rem'
              }}
            >
              Click below to fire a custom physics confetti burst and synthesized major arpeggio.
            </p>

            <ClayButton
              variant="primary"
              onClick={handleConfetti}
              icon={PartyPopper}
              style={{ padding: '0.9rem 2.2rem', fontSize: '1rem' }}
            >
              Celebrate Craftsmanship {clickCount > 0 && `(${clickCount})`}
            </ClayButton>
          </ClayCard>
        </div>
      </div>
    </section>
  );
}
