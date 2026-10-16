import { Code2, Layers, GitBranch, BrainCircuit, ArrowUpRight } from 'lucide-react';
import { SKILLS_DATA, SkillsData, SkillCategory } from '../../data/skills';
import { cn } from '../../utils/cn';

export interface SkillsSectionProps {
  data?: SkillsData;
  className?: string;
}

export function SkillsSection({ data = SKILLS_DATA, className }: SkillsSectionProps) {
  const getCategoryIcon = (iconName: SkillCategory['iconName']) => {
    switch (iconName) {
      case 'code':
        return <Code2 className="w-5 h-5 text-indigo-400" aria-hidden="true" />;
      case 'layout':
        return <Layers className="w-5 h-5 text-cyan-400" aria-hidden="true" />;
      case 'terminal':
        return <GitBranch className="w-5 h-5 text-indigo-400" aria-hidden="true" />;
      case 'brain':
        return <BrainCircuit className="w-5 h-5 text-cyan-400" aria-hidden="true" />;
      default:
        return <Code2 className="w-5 h-5 text-indigo-400" aria-hidden="true" />;
    }
  };

  const getAccentBorderClass = (iconName: SkillCategory['iconName']) => {
    switch (iconName) {
      case 'code':
        return 'group-hover:border-indigo-500/40';
      case 'layout':
        return 'group-hover:border-cyan-500/40';
      case 'terminal':
        return 'group-hover:border-indigo-500/40';
      case 'brain':
        return 'group-hover:border-cyan-500/40';
      default:
        return 'group-hover:border-indigo-500/40';
    }
  };

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className={cn('relative portfolio-section border-t border-white/5 bg-[#0b0f19]', className)}
    >
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" aria-hidden="true" />
            <span>{data.eyebrow}</span>
          </div>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight"
          >
            {data.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            {data.introduction}
          </p>
        </div>

        {/* 4-Category Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {data.categories.map((category) => (
            <div
              key={category.id}
              className={cn(
                'group p-6 sm:p-8 rounded-2xl bg-surface-card border border-white/10 hover:bg-surface-card-hover transition-all duration-200 relative overflow-hidden flex flex-col justify-between',
                getAccentBorderClass(category.iconName)
              )}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex-shrink-0">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white tracking-tight">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Item Cards */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-white tracking-tight">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-300/80 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                          Active Focus
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed m-0">
                        {skill.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Learning Note */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Practiced via coursework & projects</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-indigo-400 transition-colors" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
