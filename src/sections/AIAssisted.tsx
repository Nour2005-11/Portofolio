import Section from '../components/Section';
import { SparklesIcon } from '../components/Icons';

export default function AIAssisted() {
  return (
    <Section id="ai-assisted" className="!py-12">
      <div className="rounded-xl border border-border bg-card p-6 sm:p-8 flex flex-col sm:flex-row gap-5 items-start">
        <div className="p-3 rounded-xl bg-accent-soft text-accent shrink-0">
          <SparklesIcon size={24} />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-text-main mb-2">
            AI-Assisted Development
          </h2>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl">
            I use AI tools as development assistants to accelerate implementation,
            understand unfamiliar technologies, troubleshoot errors, explore
            solutions, and improve my development workflow. AI supports my learning
            and productivity — the projects and decisions remain my own.
          </p>
        </div>
      </div>
    </Section>
  );
}
