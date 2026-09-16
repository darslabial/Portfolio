import React from 'react';
import { audioFeedback } from '../../utils/audioFeedback';

/**
 * ClayCard
 * Pure, high-performance claymorphic card container with static dual-direction
 * lighting and zero JS mousemove wobble calculations.
 */
export default function ClayCard({
  children,
  className = '',
  enableTilt = false,
  inset = false,
  onClick,
  style = {},
  ...props
}) {
  const handleClick = (e) => {
    if (onClick) {
      audioFeedback.playPop();
      onClick(e);
    }
  };

  const baseClass = inset ? 'clay-card-inset' : 'clay-card';
  const clickableClass = onClick ? 'clay-card-clickable' : '';

  return (
    <div
      className={`${baseClass} ${clickableClass} ${className}`.trim()}
      onClick={handleClick}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}
