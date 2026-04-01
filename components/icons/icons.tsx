import { SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGElement> {
  size?: number;
}

/** Sweat & Soil text mark — wordmark with terracotta ampersand */
export function IconSweatAndSoil({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <text x="12" y="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="5.5" fill="currentColor">Sweat</text>
      <text x="12" y="16" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="5.5" fill="currentColor">
        <tspan fill="#C4704B">&amp;</tspan> Soil
      </text>
    </svg>
  );
}

/** Intervisio logo — triangle of connected nodes forming a V */
export function IconIntervisio({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      {/* Three main nodes in triangle */}
      <circle cx="8" cy="6" r="2.5" fill="#3D8C7E" />
      <circle cx="16" cy="6" r="2.5" fill="#3D8C7E" />
      <circle cx="12" cy="16" r="2.5" fill="#3D8C7E" />
      {/* V-shape lines from top nodes to bottom */}
      <line x1="8" y1="6" x2="12" y2="16" stroke="#3D8C7E" strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="6" x2="12" y2="16" stroke="#3D8C7E" strokeWidth="2" strokeLinecap="round" />
      {/* Top connecting line */}
      <line x1="8" y1="6" x2="16" y2="6" stroke="#3D8C7E" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Constellation initiative icon — upward growing node network */
export function IconInitiative({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      {/* Root node */}
      <circle cx="12" cy="20" r="1.8" fill="currentColor" />
      {/* Stem nodes */}
      <circle cx="12" cy="14" r="1.5" fill="currentColor" opacity="0.8" />
      <circle cx="12" cy="8" r="1.3" fill="currentColor" opacity="0.7" />
      {/* Branch nodes */}
      <circle cx="7" cy="10" r="1.2" fill="currentColor" opacity="0.5" />
      <circle cx="17" cy="6" r="1.2" fill="currentColor" opacity="0.5" />
      {/* Top spark */}
      <circle cx="12" cy="3" r="1.8" fill="currentColor" />
      <circle cx="12" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      {/* Connections */}
      <line x1="12" y1="20" x2="12" y2="14" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
      <line x1="12" y1="14" x2="12" y2="8" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
      <line x1="12" y1="8" x2="12" y2="3" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
      {/* Branch connections */}
      <line x1="12" y1="14" x2="7" y2="10" stroke="currentColor" strokeWidth="0.6" opacity="0.2" />
      <line x1="12" y1="8" x2="17" y2="6" stroke="currentColor" strokeWidth="0.6" opacity="0.2" />
      {/* Cross */}
      <line x1="7" y1="10" x2="12" y2="8" stroke="currentColor" strokeWidth="0.4" opacity="0.1" />
      {/* Ground dots */}
      <circle cx="9" cy="21" r="0.6" fill="currentColor" opacity="0.3" />
      <circle cx="15" cy="21" r="0.6" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

/** Constellation community icon — people as connected node pairs */
export function IconCommunity({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      {/* Person nodes - left cluster */}
      <circle cx="7" cy="6" r="2" fill="currentColor" />
      <circle cx="5" cy="13" r="1.3" fill="currentColor" opacity="0.6" />
      <circle cx="9" cy="13" r="1.3" fill="currentColor" opacity="0.6" />
      {/* Person nodes - right cluster */}
      <circle cx="17" cy="6" r="2" fill="currentColor" />
      <circle cx="15" cy="13" r="1.3" fill="currentColor" opacity="0.6" />
      <circle cx="19" cy="13" r="1.3" fill="currentColor" opacity="0.6" />
      {/* Bridge connection */}
      <circle cx="12" cy="9" r="1" fill="currentColor" opacity="0.4" />
      {/* Internal connections */}
      <line x1="7" y1="6" x2="5" y2="13" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />
      <line x1="7" y1="6" x2="9" y2="13" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />
      <line x1="17" y1="6" x2="15" y2="13" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />
      <line x1="17" y1="6" x2="19" y2="13" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />
      {/* Cross cluster */}
      <line x1="7" y1="6" x2="12" y2="9" stroke="currentColor" strokeWidth="0.6" opacity="0.2" />
      <line x1="17" y1="6" x2="12" y2="9" stroke="currentColor" strokeWidth="0.6" opacity="0.2" />
      <line x1="9" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="0.4" opacity="0.1" />
      {/* Bottom convergence */}
      <circle cx="12" cy="18" r="1.5" fill="currentColor" opacity="0.5" />
      <line x1="5" y1="13" x2="12" y2="18" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
      <line x1="19" y1="13" x2="12" y2="18" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
    </svg>
  );
}

/** Constellation simplify icon — tangled nodes converging to single path */
export function IconSimplify({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      {/* Scattered input nodes */}
      <circle cx="3" cy="6" r="1.2" fill="currentColor" opacity="0.5" />
      <circle cx="5" cy="14" r="1.2" fill="currentColor" opacity="0.5" />
      <circle cx="3" cy="18" r="1.2" fill="currentColor" opacity="0.5" />
      <circle cx="7" cy="10" r="1" fill="currentColor" opacity="0.4" />
      {/* Convergence node */}
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      {/* Output node */}
      <circle cx="21" cy="12" r="2" fill="currentColor" />
      <circle cx="21" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      {/* Messy input connections */}
      <line x1="3" y1="6" x2="12" y2="12" stroke="currentColor" strokeWidth="0.7" opacity="0.25" />
      <line x1="5" y1="14" x2="12" y2="12" stroke="currentColor" strokeWidth="0.7" opacity="0.25" />
      <line x1="3" y1="18" x2="12" y2="12" stroke="currentColor" strokeWidth="0.7" opacity="0.25" />
      <line x1="7" y1="10" x2="12" y2="12" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
      {/* Cross connections in chaos */}
      <line x1="3" y1="6" x2="5" y2="14" stroke="currentColor" strokeWidth="0.3" opacity="0.08" />
      <line x1="5" y1="14" x2="3" y2="18" stroke="currentColor" strokeWidth="0.3" opacity="0.08" />
      {/* Clean output line */}
      <line x1="12" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1.2" opacity="0.5" strokeLinecap="round" />
    </svg>
  );
}

/** Constellation specialists icon — distinct nodes clicking into a network */
export function IconSpecialists({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      {/* Specialist nodes in a pentagon-ish arrangement */}
      <circle cx="12" cy="4" r="1.8" fill="currentColor" />
      <circle cx="5" cy="10" r="1.8" fill="currentColor" />
      <circle cx="19" cy="10" r="1.8" fill="currentColor" />
      <circle cx="7" cy="18" r="1.8" fill="currentColor" />
      <circle cx="17" cy="18" r="1.8" fill="currentColor" />
      {/* Center hub */}
      <circle cx="12" cy="12" r="1.3" fill="currentColor" opacity="0.6" />
      {/* Connections to center */}
      <line x1="12" y1="4" x2="12" y2="12" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />
      <line x1="5" y1="10" x2="12" y2="12" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />
      <line x1="19" y1="10" x2="12" y2="12" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />
      <line x1="7" y1="18" x2="12" y2="12" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />
      <line x1="17" y1="18" x2="12" y2="12" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />
      {/* Outer ring connections */}
      <line x1="12" y1="4" x2="5" y2="10" stroke="currentColor" strokeWidth="0.4" opacity="0.12" />
      <line x1="12" y1="4" x2="19" y2="10" stroke="currentColor" strokeWidth="0.4" opacity="0.12" />
      <line x1="5" y1="10" x2="7" y2="18" stroke="currentColor" strokeWidth="0.4" opacity="0.12" />
      <line x1="19" y1="10" x2="17" y2="18" stroke="currentColor" strokeWidth="0.4" opacity="0.12" />
      <line x1="7" y1="18" x2="17" y2="18" stroke="currentColor" strokeWidth="0.4" opacity="0.12" />
    </svg>
  );
}
