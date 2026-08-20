// The app's mascot: a friendly studying fox wearing a graduation cap.
// Pure SVG so it stays crisp at any size — mirrors the rasterized PWA icons.
export default function FoxMascot({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <polygon points="24,40 34,8 44,38" fill="#d9632a" />
      <polygon points="56,38 66,8 76,40" fill="#d9632a" />
      <polygon points="29,36 34,16 40,36" fill="#fff6ea" />
      <polygon points="60,36 66,16 71,36" fill="#fff6ea" />

      <circle cx="50" cy="56" r="26" fill="#ef8a3d" />
      <path d="M 50 30 A 26 26 0 0 1 63 76" fill="#e0782a" opacity="0.55" />

      <ellipse cx="50" cy="64" rx="14" ry="11" fill="#fff6ea" />

      <ellipse cx="50" cy="34" rx="20" ry="6" fill="#142b47" />
      <polygon points="28,26 50,17 72,26 50,35" fill="#1e3a5f" />
      <circle cx="50" cy="26" r="2.4" fill="#142b47" />
      <circle cx="66" cy="33" r="2.2" fill="#f5c14b" />
      <rect x="62.5" y="26.5" width="1.6" height="6.5" fill="#142b47" />

      <circle cx="34" cy="63" r="4.2" fill="#ffb39d" opacity="0.5" />
      <circle cx="66" cy="63" r="4.2" fill="#ffb39d" opacity="0.5" />

      <ellipse cx="41" cy="54" rx="3.4" ry="2.6" fill="#2b221a" />
      <ellipse cx="59" cy="54" rx="3.4" ry="2.6" fill="#2b221a" />
      <circle cx="42.2" cy="52.8" r="0.9" fill="#fff" />
      <circle cx="60.2" cy="52.8" r="0.9" fill="#fff" />

      <polygon points="47.5,66 52.5,66 50,70" fill="#2b221a" />
      <path d="M 41 70.5 Q 45 74.5 49 70.8" stroke="#6b5d52" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M 51 70.8 Q 55 74.5 59 70.5" stroke="#6b5d52" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  )
}
