import Section from '../components/Section';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience & Leadership"
      subtitle="Academic leadership and team project experience."
    >
      <div className="space-y-6">
        {experience.map((item) => (
          <article
            key={item.id}
            className="rounded-xl border border-border bg-card p-5 sm:p-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-lg font-semibold text-text-main">
                  {item.role}
                </h3>
                <p className="text-sm text-accent mt-0.5">{item.type}</p>
              </div>
              <span className="text-sm text-text-muted shrink-0">{item.year}</span>
            </div>
            <p className="text-sm font-medium text-text-main mb-2">
              {item.project}
            </p>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              {item.description}
            </p>
            <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">
              Responsibilities
            </h4>
            <ul className="grid sm:grid-cols-2 gap-1.5">
              {item.responsibilities.map((r) => (
                <li
                  key={r}
                  className="text-sm text-text-muted flex items-start gap-2"
                >
                  <span className="text-accent mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
