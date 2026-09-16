import React from 'react';
import { audioFeedback } from '../../utils/audioFeedback';

export default function ClayButton({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'inset'
  icon: Icon,
  iconPosition = 'left',
  className = '',
  onClick,
  href,
  target,
  rel,
  disabled = false,
  active = false,
  ...props
}) {
  const handleClick = (e) => {
    if (disabled) return;
    audioFeedback.playPress();
    if (onClick) onClick(e);
  };

  const handleMouseEnter = () => {
    if (!disabled) {
      audioFeedback.playPop();
    }
  };

  const variantClass = 
    variant === 'primary' 
      ? 'clay-btn-primary' 
      : variant === 'inset' 
        ? `clay-btn-inset ${active ? 'active' : ''}` 
        : 'clay-btn-secondary';

  const combinedClass = `clay-btn ${variantClass} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={18} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={18} />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        className={combinedClass}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={combinedClass}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}
