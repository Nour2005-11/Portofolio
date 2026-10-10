import { MessageIcon, MailIcon } from './Icons';
import { GithubIcon, LinkedinIcon } from './Icons';
import { socialLinks } from '../data/experience';

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-text-main">Nour Akram Dabour</p>
            <p className="text-sm text-text-muted">AI Engineer</p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors"
              aria-label="WhatsApp"
            >
              <MessageIcon size={18} />
            </a>
            <a
              href={socialLinks.email}
              className="text-text-muted hover:text-accent transition-colors"
              aria-label="Email"
            >
              <MailIcon size={18} />
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-text-muted">
          © 2026 Nour Akram Dabour. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
