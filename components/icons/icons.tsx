import { SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGElement> {
  size?: number;
}

/** Harvest / olive branch icon for Sweat & Soil */
export function IconHarvest({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      {/* Main branch curve */}
      <path
        d="M4 20Q8 16 12 12Q16 8 20 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Leaf 1 */}
      <path
        d="M8 14Q6 11 9 10Q12 11 10 14Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Leaf 2 */}
      <path
        d="M13 9Q11 6 14 5Q17 6 15 9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Small olive/berry */}
      <circle cx="17" cy="7" r="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

/** Overlapping circles / Venn diagram for GGZ Intervisie */
export function IconIntervisie({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <circle cx="10" cy="10" r="5.5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="14" cy="10" r="5.5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="12" cy="14" r="5.5" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Center dot */}
      <circle cx="12" cy="11.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

/** Seedling / sprout icon for future initiatives */
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
      {/* Stem */}
      <path
        d="M12 20V10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Left leaf */}
      <path
        d="M12 14Q8 12 7 8Q11 8 12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Right leaf */}
      <path
        d="M12 10Q16 8 17 4Q13 4 12 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Ground line */}
      <path
        d="M8 20H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/** Connected people for community */
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
      {/* Person 1 - left */}
      <circle cx="8" cy="7" r="2.5" stroke="currentColor" strokeWidth="2" fill="none" />
      <path
        d="M4 17Q4 13 8 13Q12 13 12 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Person 2 - right */}
      <circle cx="16" cy="7" r="2.5" stroke="currentColor" strokeWidth="2" fill="none" />
      <path
        d="M12 17Q12 13 16 13Q20 13 20 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/** Tangled to straight line — simplify */
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
      {/* Tangled part */}
      <path
        d="M3 12Q5 8 6 12Q7 16 8 12Q9 8 10 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Straight part with arrow */}
      <path
        d="M10 12H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M17 9L20 12L17 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/** Puzzle pieces clicking together — specialists */
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
      {/* Left puzzle piece */}
      <path
        d="M3 6H8V8Q9.5 7 9.5 9Q9.5 11 8 10V14H3V10Q4.5 11 4.5 9Q4.5 7 3 8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Right puzzle piece */}
      <path
        d="M13 6H18V8Q19.5 7 19.5 9Q19.5 11 18 10V14H13V10Q14.5 11 14.5 9Q14.5 7 13 8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Arrow showing connection */}
      <path
        d="M9.5 10H13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeDasharray="2 2"
        fill="none"
      />
    </svg>
  );
}
