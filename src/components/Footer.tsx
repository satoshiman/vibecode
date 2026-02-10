interface FooterProps {
  onPrivacyClick: () => void;
  onTermsClick: () => void;
}

export function Footer({ onPrivacyClick, onTermsClick }: FooterProps) {
  return (
    <footer className="border-t border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 mt-16">
      {/* Development notice */}
      <div className="text-center mt-4 pt-4">
        <p className="text-xs text-muted-foreground">
          🚧 The content is currently in development. New features coming soon
          👀
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Terms and conditions links */}
          <div className="flex items-center space-x-6">
            <button
              onClick={onTermsClick}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms and Conditions
            </button>
            <button
              onClick={onPrivacyClick}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </button>
          </div>

          {/* GitHub link */}
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/satoshiman/vibecode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <span className="text-xs text-muted-foreground">
              © 2026 VibeCodeJS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
