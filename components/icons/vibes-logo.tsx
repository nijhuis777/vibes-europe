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
      {/* Organic curved connections forming V */}
      <path d="M11 10 Q13.5 16 14 20" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      <path d="M14 20 Q16 24 18 28" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      <path d="M18 28 Q20 32 21 35" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      <path d="M21 35 Q22.5 38 24 42" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      <path d="M37 10 Q34.5 16 34 20" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      <path d="M34 20 Q32 24 30 28" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      <path d="M30 28 Q28 32 27 35" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      <path d="M27 35 Q25.5 38 24 42" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />
      {/* Cross connections - curved */}
      <path d="M11 10 Q24 13 37 10" stroke="currentColor" strokeWidth="0.4" opacity="0.1" fill="none" />
      <path d="M14 20 Q24 22.5 34 20" stroke="currentColor" strokeWidth="0.4" opacity="0.1" fill="none" />
      <path d="M18 28 Q24 30 30 28" stroke="currentColor" strokeWidth="0.4" opacity="0.1" fill="none" />
      <path d="M21 35 Q24 36.5 27 35" stroke="currentColor" strokeWidth="0.4" opacity="0.1" fill="none" />
      {/* Diagonal cross links */}
      <path d="M11 10 Q20 22 30 28" stroke="currentColor" strokeWidth="0.3" opacity="0.07" fill="none" />
      <path d="M37 10 Q28 22 18 28" stroke="currentColor" strokeWidth="0.3" opacity="0.07" fill="none" />
      {/* Nodes */}
      <circle cx="11" cy="10" r="1.7" fill="currentColor" />
      <circle cx="37" cy="10" r="1.7" fill="currentColor" />
      <circle cx="14" cy="20" r="1.2" fill="currentColor" opacity="0.8" />
      <circle cx="34" cy="20" r="1.2" fill="currentColor" opacity="0.8" />
      <circle cx="18" cy="28" r="1" fill="currentColor" opacity="0.85" />
      <circle cx="30" cy="28" r="1" fill="currentColor" opacity="0.85" />
      <circle cx="21" cy="35" r="1.2" fill="currentColor" opacity="0.8" />
      <circle cx="27" cy="35" r="1.2" fill="currentColor" opacity="0.8" />
      {/* Central convergence node */}
      <circle cx="24" cy="42" r="2.4" fill="currentColor" />
      <circle cx="24" cy="42" r="4" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      {/* Small satellite nodes */}
      <circle cx="9" cy="14" r="0.5" fill="currentColor" opacity="0.25" />
      <circle cx="39" cy="14" r="0.5" fill="currentColor" opacity="0.25" />
      <circle cx="24" cy="15" r="0.6" fill="currentColor" opacity="0.15" />
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
