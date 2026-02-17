export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <div className="mx-auto max-w-4xl px-6 text-center text-sm text-[var(--color-secondary)]">
        &copy; {new Date().getFullYear()} Jongsong Lee. All rights reserved.
      </div>
    </footer>
  );
}
