import { Landmark, Home, UtensilsCrossed, Clock, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import { PROJECTS_DATA, ProjectsData, ProjectItem } from '../../data/projects';
import { cn } from '../../utils/cn';

export interface ProjectsSectionProps {
  data?: ProjectsData;
  className?: string;
}

export function ProjectsSection({ data = PROJECTS_DATA, className }: ProjectsSectionProps) {
  const getProjectIcon = (iconType: ProjectItem['iconType']) => {
    switch (iconType) {
      case 'bank':
        return <Landmark className="w-6 h-6 text-indigo-400" aria-hidden="true" />;
      case 'home':
        return <Home className="w-6 h-6 text-cyan-400" aria-hidden="true" />;
      case 'utensils':
        return <UtensilsCrossed className="w-6 h-6 text-amber-400" aria-hidden="true" />;
      default:
        return <Layers className="w-6 h-6 text-indigo-400" aria-hidden="true" />;
    }
  };

  const getStatusBadge = (status: ProjectItem['status']) => {
    switch (status) {
      case 'IN DEVELOPMENT':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            <span>In Development</span>
          </span>
        );
      case 'CONCEPT':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Concept</span>
          </span>
        );
      case 'PLANNED':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-500/10 text-purple-300 border border-purple-500/30">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Planned Project</span>
          </span>
        );
    }
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
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
            id="projects-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight"
          >
            {data.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            {data.introduction}
          </p>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {data.projects.map((project) => (
            <article
              key={project.id}
              className={cn(
                'group relative rounded-2xl flex flex-col justify-between p-6 sm:p-7 transition-all duration-300',
                project.isPrimary
                  ? 'bg-gradient-to-b from-[#151d34] to-[#12192d] border border-indigo-500/40 shadow-xl shadow-indigo-950/30 hover:border-indigo-400/60 ring-1 ring-indigo-500/20'
                  : 'bg-surface-card border border-white/10 hover:border-white/20 hover:bg-surface-card-hover'
              )}
            >
              <div>
                {/* Card Top: Primary Badge & Status */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={cn(
                        'p-2.5 rounded-xl border flex-shrink-0',
                        project.isPrimary
                          ? 'bg-indigo-500/10 border-indigo-500/30'
                          : 'bg-white/5 border-white/10'
                      )}
                    >
                      {getProjectIcon(project.iconType)}
                    </div>
                    {project.isPrimary && (
                      <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-300 bg-indigo-500/20 px-2 py-0.5 rounded border border-indigo-500/30">
                        Primary Focus
                      </span>
                    )}
                  </div>
                  {getStatusBadge(project.status)}
                </div>

                {/* Category subtitle */}
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1.5">
                  {project.category}
                </span>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Planned Highlights */}
                <div className="mb-6 pt-4 border-t border-white/5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
                    Key Exploration Areas:
                  </span>
                  <ul className="space-y-2 m-0 p-0 list-none">
                    {project.plannedFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2
                          className={cn(
                            'w-3.5 h-3.5 mt-0.5 flex-shrink-0',
                            project.isPrimary ? 'text-indigo-400' : 'text-slate-500'
                          )}
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Tech tags and truthful phase indicator */}
              <div className="pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-300 bg-white/5 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Honest Phase Status (No Fake Links) */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-white/5">
                  <span className="text-[11px] text-slate-500">
                    Phase: <span className="text-slate-300">{project.statusLabel}</span>
                  </span>
                  <span className="text-[11px] text-indigo-400/90 italic">
                    {project.status === 'IN DEVELOPMENT' && 'Under Active Construction'}
                    {project.status === 'CONCEPT' && 'Architecture & Design Phase'}
                    {project.status === 'PLANNED' && 'Future Implementation'}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
