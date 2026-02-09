import { Wand } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-3xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo on the left */}
          <Link
            to="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <Wand className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg">VibeCodeJS</span>
          </Link>

          {/* Theme toggle and "post this" link on the right */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <a
              href="https://twitter.com/share?url=https%3A%2F%2Fvibecode.js.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              post this!
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
