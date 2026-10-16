import { GraduationCap, Code2, Lightbulb, Compass } from 'lucide-react';
import { EXPERIENCE_DATA, ExperienceData, MilestoneItem } from '../../data/experience';
import { cn } from '../../utils/cn';

export interface ExperienceSectionProps {
  data?: ExperienceData;
  className?: string;
}

export function ExperienceSection({ data = EXPERIENCE_DATA, className }: ExperienceSectionProps) {
  const getMilestoneIcon = (icon: MilestoneItem['icon']) => {
    switch (icon) {
      case 'education':
        return <GraduationCap className="w-5 h-5 text-indigo-400" aria-hidden="true" />;
      case 'code':
        return <Code2 className="w-5 h-5 text-cyan-400" aria-hidden="true" />;
      case 'concept':
        return <Lightbulb className="w-5 h-5 text-indigo-400" aria-hidden="true" />;
      case 'ambition':
        return <Compass className="w-5 h-5 text-cyan-400" aria-hidden="true" />;
      default:
        return <GraduationCap className="w-5 h-5 text-indigo-400" aria-hidden="true" />;
    }
  };

  const getCategoryBadgeClass = (category: MilestoneItem['category']) => {
    switch (category) {
      case 'Education':
        return 'text-indigo-300 bg-indigo-500/15 border-indigo-500/30';
      case 'Technical Development':
        return 'text-cyan-300 bg-cyan-500/15 border-cyan-500/30';
      case 'Project Exploration':
        return 'text-purple-300 bg-purple-500/15 border-purple-500/30';
      case 'Future Goals':
        return 'text-emerald-300 bg-emerald-500/15 border-emerald-500/30';
    }
  };

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className={cn('relative portfolio-section border-t border-white/5 bg-[#0b0f19]', className)}
    >
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" aria-hidden="true" />
            <span>{data.eyebrow}</span>
          </div>
          <h2
            id="experience-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight"
          >
            {data.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            {data.introduction}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Guide Line */}
          <div
            className="absolute top-0 bottom-0 left-5 md:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-indigo-500 via-cyan-500 to-indigo-500/10 pointer-events-none"
            aria-hidden="true"
          />

          <div className="space-y-12 md:space-y-16">
            {data.milestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={milestone.id}
                  className="relative flex flex-col md:flex-row items-start md:items-center"
                >
                  {/* Timeline Central Node Icon */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-[#0b0f19] border-2 border-indigo-500/80 shadow-lg shadow-indigo-950/50 z-10">
                    {getMilestoneIcon(milestone.icon)}
                  </div>

                  {/* Desktop Alternating Card Layout */}
                  <div
                    className={cn(
                      'w-full md:w-1/2 pl-14 md:pl-0',
                      isEven ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12 md:text-left'
                    )}
                  >
                    <div className="group p-6 sm:p-7 rounded-2xl bg-surface-card border border-white/10 hover:border-white/20 hover:bg-surface-card-hover transition-all duration-200 shadow-md">
                      {/* Step Number & Category Badge */}
                      <div
                        className={cn(
                          'flex items-center gap-2 mb-3',
                          isEven ? 'md:justify-end' : 'md:justify-start'
                        )}
                      >
                        <span className="text-xs font-mono font-bold text-slate-500">
                          {milestone.stepNumber}
                        </span>
                        <span
                          className={cn(
                            'text-[11px] font-mono px-2.5 py-0.5 rounded-full border',
                            getCategoryBadgeClass(milestone.category)
                          )}
                        >
                          {milestone.category}
                        </span>
                      </div>

                      {/* Milestone Context Kicker */}
                      <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 block mb-1">
                        {milestone.context}
                      </span>

                      {/* Milestone Title */}
                      <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-indigo-300 transition-colors">
                        {milestone.title}
                      </h3>

                      {/* Milestone Narrative Description */}
                      <p className="text-sm text-slate-300 leading-relaxed mb-5">
                        {milestone.description}
                      </p>

                      {/* Tag Chips */}
                      {milestone.tags && (
                        <div
                          className={cn(
                            'flex flex-wrap gap-1.5 pt-3 border-t border-white/5',
                            isEven ? 'md:justify-end' : 'md:justify-start'
                          )}
                        >
                          {milestone.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-white/5 border border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
