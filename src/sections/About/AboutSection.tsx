import { GraduationCap, BookOpen, Code2, Lightbulb, Sparkles, Quote } from 'lucide-react';
import { ABOUT_DATA, AboutData, MindsetPillar } from '../../data/about';
import { cn } from '../../utils/cn';

export interface AboutSectionProps {
  data?: AboutData;
  className?: string;
}

export function AboutSection({ data = ABOUT_DATA, className }: AboutSectionProps) {
  const getPillarIcon = (icon: MindsetPillar['icon']) => {
    switch (icon) {
      case 'education':
        return <BookOpen className="w-5 h-5 text-indigo-400" aria-hidden="true" />;
      case 'code':
        return <Code2 className="w-5 h-5 text-cyan-400" aria-hidden="true" />;
      case 'entrepreneurship':
        return <Lightbulb className="w-5 h-5 text-amber-400" aria-hidden="true" />;
      case 'growth':
        return <Sparkles className="w-5 h-5 text-emerald-400" aria-hidden="true" />;
      default:
        return <Code2 className="w-5 h-5 text-indigo-400" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className={cn('relative portfolio-section border-t border-white/5', className)}
    >
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" aria-hidden="true" />
            <span>{data.eyebrow}</span>
          </div>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            {data.heading}
          </h2>
        </div>

        {/* Asymmetric 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Narrative Journey & Closing Quote */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
              {data.narrative.map((paragraph, index) => (
                <p key={index} className="m-0">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Featured Closing Statement Callout */}
            <div className="mt-8 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-surface-card to-surface-card border border-indigo-500/30 shadow-lg relative overflow-hidden">
              <div
                className="absolute -right-6 -bottom-6 w-28 h-28 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"
                aria-hidden="true"
              />
              <div className="flex items-start gap-4 relative z-10">
                <div className="flex-shrink-0 p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Quote className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-1.5">
                    Guiding Perspective
                  </p>
                  <blockquote className="m-0 text-lg sm:text-xl font-medium text-white italic leading-snug">
                    "{data.closingQuote}"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Educational Journey & Mindset Pillars */}
          <div className="lg:col-span-5 space-y-6">
            {/* Academic Journey Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-surface-card border border-white/10 hover:border-white/15 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Academic Journey
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {data.education.status}
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 flex-shrink-0">
                  <GraduationCap className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {data.education.program}
                  </h3>
                  <p className="text-sm font-medium text-indigo-300 mb-2">
                    {data.education.institution}
                  </p>
                  <p className="text-xs text-slate-400 leading-normal">
                    Focus: {data.education.focus}
                  </p>
                </div>
              </div>
            </div>

            {/* Mindset & Approach Pillars */}
            <div className="space-y-3.5">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 px-1">
                Mindset & Approach
              </p>
              {data.mindsetPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-5 rounded-xl bg-surface-card/70 border border-white/5 hover:border-white/15 hover:bg-surface-card-hover transition-all"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex-shrink-0 mt-0.5">
                      {getPillarIcon(pillar.icon)}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed m-0">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
