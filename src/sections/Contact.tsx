import { MailIcon, MessageIcon, DownloadIcon } from '../components/Icons';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import Section from '../components/Section';
import { socialLinks } from '../data/experience';

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Let's Connect"
      subtitle="I'm open to AI opportunities, internships, collaborations, freelance projects, and conversations around technology and AI."
    >
      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
        <a
          href={socialLinks.email}
          className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 hover:border-accent hover:bg-accent-soft/30 transition-colors group"
        >
          <div className="p-2 rounded-lg bg-surface text-text-muted group-hover:text-accent transition-colors">
            <MailIcon size={18} />
          </div>
          <div>
            <p className="text-xs text-text-muted">Email</p>
            <p className="text-sm font-medium text-text-main">
              {socialLinks.emailDisplay}
            </p>
          </div>
        </a>

        <a
          href={socialLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 hover:border-accent hover:bg-accent-soft/30 transition-colors group"
        >
          <div className="p-2 rounded-lg bg-surface text-text-muted group-hover:text-accent transition-colors">
            <MessageIcon size={18} />
          </div>
          <div>
            <p className="text-xs text-text-muted">WhatsApp</p>
            <p className="text-sm font-medium text-text-main">
              {socialLinks.phoneDisplay}
            </p>
          </div>
        </a>

        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 hover:border-accent hover:bg-accent-soft/30 transition-colors group"
        >
          <div className="p-2 rounded-lg bg-surface text-text-muted group-hover:text-accent transition-colors">
            <LinkedinIcon size={18} />
          </div>
          <div>
            <p className="text-xs text-text-muted">LinkedIn</p>
            <p className="text-sm font-medium text-text-main">Nour Akram Dabour</p>
          </div>
        </a>

        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 hover:border-accent hover:bg-accent-soft/30 transition-colors group"
        >
          <div className="p-2 rounded-lg bg-surface text-text-muted group-hover:text-accent transition-colors">
            <GithubIcon size={18} />
          </div>
          <div>
            <p className="text-xs text-text-muted">GitHub</p>
            <p className="text-sm font-medium text-text-main">Nour2005-11</p>
          </div>
        </a>
      </div>

      {/* Resume download */}
      <div className="mt-10">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-text-main text-sm font-medium hover:border-accent hover:text-accent transition-colors"
        >
          <DownloadIcon size={16} />
          Download Resume
        </a>
        <p className="mt-2 text-xs text-text-muted">
          Replace public/resume.pdf with the latest CV when updated.
        </p>
      </div>
    </Section>
  );
}
