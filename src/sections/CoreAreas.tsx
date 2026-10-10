import Section from '../components/Section';
import { coreAreas } from '../data/skills';

export default function CoreAreas() {
  return (
    <Section
      id="skills"
      title="What I Work With"
      subtitle="Core areas I focus on through projects, coursework, and continuous learning."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {coreAreas.map((area) => (
          <div
            key={area.title}
            className="rounded-xl border border-border bg-card p-5 hover:border-border-hover transition-colors"
          >
            <h3 className="text-sm font-semibold text-accent mb-3 tracking-wide uppercase">
              {area.title}
            </h3>
            <ul className="space-y-1.5">
              {area.items.map((item) => (
                <li key={item} className="text-sm text-text-muted flex items-start gap-2">
                  <span className="text-accent mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
