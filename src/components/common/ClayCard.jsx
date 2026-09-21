/**
 * ClayCard
 * Pure, high-performance claymorphic card container with static dual-direction
 * lighting and zero JS mousemove wobble calculations.
 */
export default function ClayCard({
  children,
  className = '',
  enableTilt: _enableTilt = false,
  inset = false,
  onClick,
  style = {},
  ...props
}) {
  const baseClass = inset ? 'clay-card-inset' : 'clay-card';
  const clickableClass = onClick ? 'clay-card-clickable' : '';

  return (
    <div
      className={`${baseClass} ${clickableClass} ${className}`.trim()}
      onClick={onClick}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}
