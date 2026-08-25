export function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`container-lux ${className}`} aria-hidden="true">
      <div className="relative flex items-center justify-center">
        <div className="gold-rule w-full opacity-70" />
        <svg
          viewBox="0 0 40 24"
          className="absolute h-5 w-8 bg-background px-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <g className="text-accent">
            <path d="M14 22V8l4-4 4 4v14" />
            <path d="M22 22V12l4-3v13" />
            <path d="M18 4V0" />
          </g>
        </svg>
      </div>
    </div>
  );
}