import Section from '../components/Section';
import { education } from '../data/experience';
import { learningPrograms } from '../data/certifications';
import { GraduationIcon, BookIcon } from '../components/Icons';

export default function Education() {
  return (
    <Section id="education" title="Education & Learning">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Formal education */}
        <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-accent-soft text-accent">
              <GraduationIcon size={20} />
            </div>
            <h3 className="text-lg font-semibold text-text-main">Education</h3>
          </div>
          {education.map((edu) => (
            <div key={edu.institution}>
              <p className="font-medium text-text-main">{edu.institution}</p>
              <p className="text-sm text-accent mt-1">{edu.degree}</p>
              <p className="text-sm text-text-muted mt-1">
                Expected Graduation: {edu.expectedGraduation}
              </p>
            </div>
          ))}
        </div>

        {/* Currently Learning */}
        <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-accent-soft text-accent">
              <BookIcon size={20} />
            </div>
            <h3 className="text-lg font-semibold text-text-main">
              Currently Learning
            </h3>
          </div>
          <p className="text-sm font-medium text-accent mb-2">
            AI Agents & AI Engineering
          </p>
          <p className="text-sm text-text-muted leading-relaxed mb-4">
            Currently expanding my knowledge of AI Agents, LLM applications, and AI
            Engineering with a focus on understanding how intelligent systems can be
            designed, integrated, and applied to real-world problems.
          </p>
          <div className="flex flex-wrap gap-2">
            {['AI Agents', 'LLM Applications', 'Generative AI', 'AI Engineering'].map(
              (item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 text-xs rounded-full bg-surface border border-border text-text-muted"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* In-progress program */}
      <div className="mt-6 rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-base font-semibold text-text-main">
                {learningPrograms[0].title}
              </h3>
              <span className="px-2 py-0.5 text-xs rounded-full bg-accent-soft text-accent font-medium">
                {learningPrograms[0].status}
              </span>
            </div>
            <p className="text-sm text-text-muted">
              {learningPrograms[0].provider}
            </p>
            <p className="text-sm text-text-muted mt-1">
              Instructor: {learningPrograms[0].instructor}
            </p>
          </div>
          <div className="text-sm text-text-muted shrink-0">
            <p>{learningPrograms[0].start} – {learningPrograms[0].expectedCompletion}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
