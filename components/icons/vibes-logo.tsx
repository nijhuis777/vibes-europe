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
      {/* Main V-arm connections */}
      <path d="M11 8 Q13.5 14 14.5 19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
      <path d="M14.5 19 Q16.5 24 18.5 28" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
      <path d="M18.5 28 Q20.5 32 21.5 35" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
      <path d="M21.5 35 Q23 38 24 41" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
      <path d="M37 8 Q34.5 14 33.5 19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
      <path d="M33.5 19 Q31.5 24 29.5 28" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
      <path d="M29.5 28 Q27.5 32 26.5 35" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
      <path d="M26.5 35 Q25 38 24 41" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
      {/* Cross connections - curved */}
      <path d="M11 8 Q24 12 37 8" stroke="currentColor" strokeWidth="0.7" opacity="0.2" fill="none" />
      <path d="M14.5 19 Q24 22 33.5 19" stroke="currentColor" strokeWidth="0.7" opacity="0.2" fill="none" />
      <path d="M18.5 28 Q24 30.5 29.5 28" stroke="currentColor" strokeWidth="0.7" opacity="0.18" fill="none" />
      <path d="M21.5 35 Q24 36.5 26.5 35" stroke="currentColor" strokeWidth="0.6" opacity="0.15" fill="none" />
      {/* Diagonal cross links */}
      <path d="M11 8 Q20 20 29.5 28" stroke="currentColor" strokeWidth="0.5" opacity="0.12" fill="none" />
      <path d="M37 8 Q28 20 18.5 28" stroke="currentColor" strokeWidth="0.5" opacity="0.12" fill="none" />
      {/* Nodes — coral accent */}
      <circle cx="11" cy="8" r="2.8" fill="#FF6B5A" />
      <circle cx="37" cy="8" r="2.8" fill="#FF6B5A" />
      <circle cx="14.5" cy="19" r="2" fill="#FF8A7A" />
      <circle cx="33.5" cy="19" r="2" fill="#FF8A7A" />
      <circle cx="18.5" cy="28" r="1.8" fill="#FF9E90" />
      <circle cx="29.5" cy="28" r="1.8" fill="#FF9E90" />
      <circle cx="21.5" cy="35" r="2" fill="#FF8A7A" />
      <circle cx="26.5" cy="35" r="2" fill="#FF8A7A" />
      {/* Central convergence node */}
      <circle cx="24" cy="41" r="3.5" fill="#FF6B5A" />
      <circle cx="24" cy="41" r="5.5" fill="none" stroke="#FF6B5A" strokeWidth="0.6" opacity="0.25" />
      {/* Small satellite nodes */}
      <circle cx="8" cy="13" r="0.8" fill="currentColor" opacity="0.3" />
      <circle cx="40" cy="13" r="0.8" fill="currentColor" opacity="0.3" />
      <circle cx="24" cy="13" r="0.9" fill="currentColor" opacity="0.2" />
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
