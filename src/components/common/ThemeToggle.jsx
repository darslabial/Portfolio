import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, Sparkles } from 'lucide-react';

/**
 * Animated Tactile Claymorphic Theme Toggle Button
 * Supports fluid spring sliding, icon rotation/morphing, and dual-direction clay shadows.
 */
export default function ThemeToggle({ className = '', style = {}, showLabel = false }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleTheme();
    }
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={!isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggleTheme}
      onKeyDown={handleKeyDown}
      className={`theme-toggle-btn ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        cursor: 'pointer',
        userSelect: 'none',
        padding: 0,
        background: 'none',
        border: 'none',
        outline: 'none',
        ...style
      }}
    >
      {/* Outer Tactile Pill Track */}
      <div
        className="theme-toggle-track"
        style={{
          position: 'relative',
          width: '56px',
          height: '30px',
          borderRadius: '9999px',
          background: isDark
            ? 'linear-gradient(135deg, #18060f 0%, #100409 100%)'
            : 'linear-gradient(135deg, #eedfe5 0%, #e5d2da 100%)',
          boxShadow: isDark
            ? 'inset 2px 2px 5px rgba(0, 0, 0, 0.75), inset -1px -1px 3px rgba(255, 120, 160, 0.12), 0 2px 6px rgba(0,0,0,0.3)'
            : 'inset 2px 2px 5px rgba(120, 50, 75, 0.22), inset -1px -1px 3px rgba(255, 255, 255, 0.9), 0 2px 6px rgba(160,90,120,0.15)',
          border: isDark
            ? '1px solid rgba(255, 120, 160, 0.18)'
            : '1px solid rgba(234, 46, 95, 0.22)',
          transition: 'all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)',
          display: 'flex',
          alignItems: 'center',
          padding: '3px',
          boxSizing: 'border-box',
          overflow: 'hidden'
        }}
      >
        {/* Background Track Icons (Subtle visual indicators on track) */}
        <div
          style={{
            position: 'absolute',
            left: '7px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: isDark ? 0.7 : 0.2,
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none'
          }}
        >
          <Moon size={13} color={isDark ? '#ff9ebb' : '#a87588'} />
        </div>

        <div
          style={{
            position: 'absolute',
            right: '7px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: isDark ? 0.2 : 0.8,
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none'
          }}
        >
          <Sun size={13} color={isDark ? '#8a5c6c' : '#f59e0b'} />
        </div>

        {/* Sliding Tactile Knob */}
        <div
          className="theme-toggle-knob"
          style={{
            width: '22px',
            height: '22px',
            borderRadius: '50%',
            transform: isDark ? 'translateX(0px)' : 'translateX(26px)',
            background: isDark
              ? 'linear-gradient(135deg, #e62857 0%, #85122e 100%)'
              : 'linear-gradient(135deg, #fbbf24 0%, #ea580c 100%)',
            boxShadow: isDark
              ? '2px 2px 6px rgba(0, 0, 0, 0.6), inset 1px 1px 2px rgba(255, 180, 210, 0.6), 0 0 10px rgba(230, 40, 87, 0.4)'
              : '2px 2px 6px rgba(180, 80, 30, 0.35), inset 1px 1px 2px rgba(255, 255, 255, 0.8), 0 0 12px rgba(251, 191, 36, 0.55)',
            transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.35s ease, box-shadow 0.35s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 2
          }}
        >
          {/* Moon Icon in Knob (Dark Mode) */}
          <div
            style={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: isDark ? 'rotate(0deg) scale(1)' : 'rotate(-90deg) scale(0)',
              opacity: isDark ? 1 : 0,
              transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease'
            }}
          >
            <Moon size={12} color="#ffffff" strokeWidth={2.4} />
          </div>

          {/* Sun Icon in Knob (Light Mode) */}
          <div
            style={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: isDark ? 'rotate(90deg) scale(0)' : 'rotate(0deg) scale(1)',
              opacity: isDark ? 0 : 1,
              transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease'
            }}
          >
            <Sun size={12} color="#ffffff" strokeWidth={2.4} />
          </div>
        </div>
      </div>

      {showLabel && (
        <span
          style={{
            fontSize: '0.86rem',
            fontWeight: 600,
            fontFamily: 'var(--font-body)',
            color: 'var(--text-primary)',
            transition: 'color 0.2s ease'
          }}
        >
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </span>
      )}
    </button>
  );
}
