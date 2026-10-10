import { MessageIcon, MailIcon } from '../components/Icons';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { socialLinks } from '../data/experience';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 pb-12"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <p className="text-accent text-sm font-medium tracking-wide mb-3 animate-fade-up">
              Artificial Intelligence Engineering Student
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-main tracking-tight leading-tight animate-fade-up animate-fade-up-delay-1">
              Nour Akram Dabour
            </h1>
            <p className="mt-2 text-xl sm:text-2xl text-accent font-medium animate-fade-up animate-fade-up-delay-2">
              AI Engineer
            </p>
            <p className="mt-1 text-text-muted text-sm sm:text-base animate-fade-up animate-fade-up-delay-2">
              Artificial Intelligence Engineering Student | Aspiring AI Engineer
            </p>
            <p className="mt-6 text-text-muted text-base sm:text-lg leading-relaxed max-w-xl text-balance animate-fade-up animate-fade-up-delay-3">
              I'm an Artificial Intelligence Engineering student building practical
              experience in Machine Learning, Data Analysis, and AI applications —
              with a growing focus on AI Agents and LLM-based systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 animate-fade-up animate-fade-up-delay-4">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-accent text-bg font-medium text-sm hover:bg-accent/90 transition-colors"
              >
                View My Projects
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center px-5 py-2.5 rounded-lg border border-border text-text-main font-medium text-sm hover:border-accent hover:text-accent transition-colors"
              >
                Contact Me
              </button>
            </div>

            <div className="mt-8 flex items-center gap-4 animate-fade-up animate-fade-up-delay-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors"
                aria-label="WhatsApp"
              >
                <MessageIcon size={20} />
              </a>
              <a
                href={socialLinks.email}
                className="text-text-muted hover:text-accent transition-colors"
                aria-label="Email"
              >
                <MailIcon size={20} />
              </a>
            </div>
          </div>

          {/* Photo with rotating + glowing frame */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up">
            <div className="photo-frame">
              <img
                src="/nour-photo.jpg"
                alt="Nour Akram Dabour"
                className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-cover"
                width={256}
                height={256}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
