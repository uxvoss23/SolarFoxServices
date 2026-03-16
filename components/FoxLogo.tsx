interface FoxLogoProps {
  size?: number;
  variant?: "dark" | "light";
  className?: string;
}

export default function FoxLogo({ size = 40, variant = "dark", className = "" }: FoxLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Solar Fox Services logo"
    >
      {variant === "dark" && (
        <rect width="100" height="100" rx="16" fill="#0D1B2A" />
      )}
      {/* Left ear */}
      <path
        d="M20 8 L38 35 L26 35 Z"
        fill="#f97316"
      />
      {/* Right ear */}
      <path
        d="M80 8 L62 35 L74 35 Z"
        fill="#f97316"
      />
      {/* Fox head / forehead area */}
      <path
        d="M26 35 Q50 22 74 35 L70 58 Q50 50 30 58 Z"
        fill="#f97316"
      />
      {/* Left cheek sweep */}
      <path
        d="M30 58 Q18 65 14 80 Q22 72 38 68 Z"
        fill="#f97316"
      />
      {/* Right cheek sweep */}
      <path
        d="M70 58 Q82 65 86 80 Q78 72 62 68 Z"
        fill="#f97316"
      />
      {/* Nose bridge / snout center */}
      <path
        d="M38 68 Q50 64 62 68 Q55 80 50 88 Q45 80 38 68 Z"
        fill="#f97316"
      />
      {/* Nose tip */}
      <circle cx="50" cy="88" r="4" fill={variant === "dark" ? "#0D1B2A" : "#fff"} />
      {/* White gap between forehead and cheeks (negative space - eye area) */}
      <path
        d="M34 52 Q38 48 44 50 Q46 55 42 57 Q36 56 34 52 Z"
        fill={variant === "dark" ? "#0D1B2A" : "#fff"}
      />
      <path
        d="M66 52 Q62 48 56 50 Q54 55 58 57 Q64 56 66 52 Z"
        fill={variant === "dark" ? "#0D1B2A" : "#fff"}
      />
    </svg>
  );
}
