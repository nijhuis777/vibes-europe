import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
}

export function VibesLogoMark({ className, size = 40 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
    >
      {/* Left wave stroke of the V */}
      <path
        d="M10 8C12 16 16 24 20 32Q22 36 24 40"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Right wave stroke of the V */}
      <path
        d="M38 8C36 16 32 24 28 32Q26 36 24 40"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Subtle wave undulation on left */}
      <path
        d="M11 12Q14 14 13 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.3"
        fill="none"
      />
      {/* Subtle wave undulation on right */}
      <path
        d="M37 12Q34 14 35 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.3"
        fill="none"
      />
      {/* Focal point at convergence */}
      <circle cx="24" cy="42" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function VibesLogo({ className, size = 40 }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <VibesLogoMark size={size} />
      <div className="flex flex-col leading-none">
        <span
          className="font-display text-lg tracking-wide"
          style={{ fontSize: size * 0.45 }}
        >
          VIBES
        </span>
        <span
          className="text-[0.6rem] tracking-[0.25em] uppercase opacity-70"
          style={{ fontSize: size * 0.22 }}
        >
          Europe
        </span>
      </div>
    </div>
  );
}

export function VibesLogoStacked({ className, size = 48 }: LogoProps) {
  return (
    <div className={cn("flex flex-col items-center gap-1", className)}>
      <VibesLogoMark size={size} />
      <span
        className="font-display tracking-wide"
        style={{ fontSize: size * 0.4 }}
      >
        VIBES
      </span>
      <span
        className="text-[0.55rem] tracking-[0.3em] uppercase opacity-70"
        style={{ fontSize: size * 0.2 }}
      >
        Europe
      </span>
    </div>
  );
}
