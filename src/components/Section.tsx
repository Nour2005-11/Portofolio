import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-text-main tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2 text-text-muted text-sm sm:text-base max-w-2xl">
                {subtitle}
              </p>
            )}
            <div className="mt-4 h-0.5 w-12 bg-accent rounded-full" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
