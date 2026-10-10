import { useState } from 'react';
import { AwardIcon, ChevronDownIcon, ChevronUpIcon } from '../components/Icons';
import Section from '../components/Section';
import {
  certifications,
  certCategories,
  type Certification,
} from '../data/certifications';

export default function Certifications() {
  const [filter, setFilter] = useState<string>('All');
  const [showAll, setShowAll] = useState(false);

  const featured = certifications.filter((c) => c.featured);
  const filtered =
    filter === 'All'
      ? certifications
      : certifications.filter((c) => c.category === filter);

  const displayList = showAll ? filtered : featured;

  return (
    <Section
      id="certifications"
      title="Certifications"
      subtitle="Selected credentials in Data Science, Machine Learning, and Generative AI."
    >
      {/* Featured cards */}
      {!showAll && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {featured.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </div>
      )}

      {/* View all toggle + filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="inline-flex items-center gap-2 text-sm text-accent hover:underline font-medium"
        >
          {showAll ? (
            <>
              <ChevronUpIcon size={16} /> Show Featured Only
            </>
          ) : (
            <>
              <ChevronDownIcon size={16} /> View All Certifications ({certifications.length})
            </>
          )}
        </button>

        {showAll && (
          <div className="flex flex-wrap gap-2">
            {certCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                  filter === cat
                    ? 'bg-accent-soft border-accent text-accent'
                    : 'border-border text-text-muted hover:border-border-hover'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Full list */}
      {showAll && (
        <div className="space-y-3">
          {displayList.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 rounded-lg border border-border bg-card px-4 py-3 hover:border-border-hover transition-colors"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-text-main truncate">
                  {cert.title}
                </p>
                <p className="text-xs text-text-muted mt-0.5">
                  {cert.issuer} · {cert.scope}
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs px-2 py-0.5 rounded-full bg-surface border border-border text-text-muted">
                  {cert.category}
                </span>
                <span className="text-xs text-text-muted w-28 text-right">
                  {cert.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}

function CertCard({ cert }: { cert: Certification }) {
  return (
    <article className="rounded-xl border border-border bg-card p-5 hover:border-border-hover transition-colors">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-accent-soft text-accent shrink-0">
          <AwardIcon size={18} />
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-text-main leading-snug">
            {cert.title}
          </h3>
          <p className="text-xs text-text-muted mt-1">{cert.issuer}</p>
          <p className="text-xs text-text-muted mt-0.5">{cert.scope}</p>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-xs px-2 py-0.5 rounded-full bg-accent-soft text-accent">
              {cert.category}
            </span>
            <span className="text-xs text-text-muted">{cert.date}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
