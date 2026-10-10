import Section from '../components/Section';

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-3xl space-y-4 text-text-muted text-base sm:text-lg leading-relaxed">
        <p>
          I'm Nour Akram Dabour, an Artificial Intelligence Engineering student at
          the University of Palestine, passionate about turning data and AI concepts
          into practical solutions.
        </p>
        <p>
          My learning journey has focused on Machine Learning, Data Analysis with
          Python, and Artificial Intelligence. I've worked on academic and personal
          projects involving classification, regression, data cleaning, web
          development, and AI-assisted application development.
        </p>
        <p>
          I'm currently expanding my knowledge in AI Agents, LLM applications, and
          AI Engineering while continuing to build practical projects and strengthen
          my technical foundation.
        </p>
      </div>
    </Section>
  );
}
