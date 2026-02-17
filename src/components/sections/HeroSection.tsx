import { profile } from "@/data/profile";

export default function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-sm tracking-widest text-[var(--color-secondary)]">
        {profile.furigana} / {profile.english}
      </p>
      <h1 className="mb-6 text-5xl font-bold tracking-wide md:text-7xl">
        {profile.name}
      </h1>
      <p className="mb-8 max-w-lg text-lg tracking-wide text-[var(--color-secondary)] md:text-xl">
        {profile.tagline}
      </p>
      <p className="max-w-2xl text-sm leading-relaxed text-[var(--color-accent)] md:text-base">
        {profile.intro}
      </p>

      {/* Scroll indicator */}
      <div className="mt-16 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-[var(--color-secondary)]"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
