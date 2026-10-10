import { useState } from 'react';
import { ExternalLinkIcon, XIcon } from '../components/Icons';
import { GithubIcon } from '../components/Icons';
import Section from '../components/Section';
import { projects, projectCategories, type Project } from '../data/projects';

export default function Projects() {
  const [filter, setFilter] = useState<string>('All');
  const [selected, setSelected] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filtered =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  const featured = filtered.filter((p) => p.featured);
  const more = filtered.filter((p) => !p.featured);

  // When not showing all, show featured + a "More Projects" section
  const visibleProjects = showAll || filter !== 'All' ? filtered : featured;

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Selected work in Machine Learning, Data Analysis, and web development."
    >
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat);
              setShowAll(cat !== 'All');
            }}
            className={`px-3 py-1.5 text-xs sm:text-sm rounded-full border transition-colors ${
              filter === cat
                ? 'bg-accent-soft border-accent text-accent'
                : 'border-border text-text-muted hover:border-border-hover hover:text-text-main'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid sm:grid-cols-2 gap-5">
        {visibleProjects.map((project) => (
          <article
            key={project.id}
            className="group rounded-xl border border-border bg-card overflow-hidden hover:border-border-hover transition-all hover:bg-card-hover"
          >
            <div className="p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="inline-block px-2.5 py-0.5 text-xs rounded-full bg-accent-soft text-accent font-medium">
                  {project.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-text-main mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-2">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs rounded bg-surface text-text-muted border border-border"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-2 py-0.5 text-xs text-text-muted">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setSelected(project)}
                  className="text-sm text-accent hover:underline font-medium"
                >
                  View Details
                </button>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-accent transition-colors"
                  >
                    <GithubIcon size={14} />
                    GitHub
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-accent transition-colors"
                  >
                    <ExternalLinkIcon size={14} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* More projects toggle */}
      {!showAll && filter === 'All' && more.length > 0 && (
        <div className="mt-10">
          <h3 className="text-lg font-medium text-text-main mb-4">More Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {more.map((project) => (
              <article
                key={project.id}
                className="rounded-xl border border-border bg-card p-4 hover:border-border-hover transition-colors"
              >
                <span className="text-xs text-accent">{project.category}</span>
                <h4 className="text-sm font-semibold text-text-main mt-1 mb-2">
                  {project.title}
                </h4>
                <p className="text-xs text-text-muted line-clamp-2 mb-3">
                  {project.shortDescription}
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelected(project)}
                    className="text-xs text-accent hover:underline"
                  >
                    Details
                  </button>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-text-muted hover:text-accent"
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-text-muted hover:text-accent"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />
          <div className="relative w-full sm:max-w-lg max-h-[90vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-surface border border-border p-6 sm:p-8">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 p-1.5 text-text-muted hover:text-text-main rounded-md"
              aria-label="Close"
            >
              <XIcon size={20} />
            </button>

            <span className="inline-block px-2.5 py-0.5 text-xs rounded-full bg-accent-soft text-accent font-medium mb-3">
              {selected.category}
            </span>
            <h3
              id="project-modal-title"
              className="text-xl font-semibold text-text-main mb-4 pr-8"
            >
              {selected.title}
            </h3>

            <div className="space-y-4 text-sm">
              <div>
                <h4 className="text-accent font-medium mb-1">Problem</h4>
                <p className="text-text-muted leading-relaxed">{selected.problem}</p>
              </div>
              <div>
                <h4 className="text-accent font-medium mb-1">Approach</h4>
                <p className="text-text-muted leading-relaxed">{selected.approach}</p>
              </div>
              <div>
                <h4 className="text-accent font-medium mb-1">Technologies</h4>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {selected.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs rounded bg-card text-text-muted border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {selected.learningOutcome && (
                <div>
                  <h4 className="text-accent font-medium mb-1">What I Learned</h4>
                  <p className="text-text-muted leading-relaxed">
                    {selected.learningOutcome}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {selected.github && (
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-bg text-sm font-medium hover:bg-accent/90 transition-colors"
                >
                  <GithubIcon size={16} />
                  View on GitHub
                </a>
              )}
              {selected.liveDemo && (
                <a
                  href={selected.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-text-main text-sm font-medium hover:border-accent hover:text-accent transition-colors"
                >
                  <ExternalLinkIcon size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
