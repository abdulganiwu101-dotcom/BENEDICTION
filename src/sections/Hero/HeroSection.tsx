import { ArrowRight, Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { USER_PROFILE, UserProfile } from '../../data/profile';
import { cn } from '../../utils/cn';

export interface HeroSectionProps {
  profile?: UserProfile;
  className?: string;
}

export function HeroSection({ profile = USER_PROFILE, className }: HeroSectionProps) {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'github':
        return <Github className="w-5 h-5" aria-hidden="true" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5" aria-hidden="true" />;
      case 'email':
        return <Mail className="w-5 h-5" aria-hidden="true" />;
      default:
        return <Mail className="w-5 h-5" aria-hidden="true" />;
    }
  };

  const handleSmoothScroll = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className={cn(
        'relative portfolio-section flex items-center min-h-[calc(100vh-5rem)] overflow-hidden',
        className
      )}
    >
      {/* Subtle background ambient radial gradient */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="portfolio-container w-full">
        <div className="max-w-3xl">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{profile.availability.label}</span>
          </div>

          {/* Name & Greeting */}
          <p className="text-sm md:text-base font-mono uppercase tracking-wider text-indigo-400 mb-2">
            Hi, I'm {profile.name}
          </p>

          {/* Primary Role & Headline */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.12]"
          >
            {profile.headline}
          </h1>

          {/* Bio Summary / Value Proposition */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
            {profile.bioSummary}
          </p>

          {/* Location indicator */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <MapPin className="w-4 h-4 text-slate-500" aria-hidden="true" />
            <span>{profile.location}</span>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            {profile.heroActions.map((action) => {
              if (action.isPrimary) {
                return (
                  <a
                    key={action.label}
                    href={action.href}
                    onClick={() => handleSmoothScroll(action.href)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors focus-ring shadow-md shadow-indigo-600/20"
                  >
                    <span>{action.label}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                );
              }

              return (
                <a
                  key={action.label}
                  href={action.href}
                  onClick={() => handleSmoothScroll(action.href)}
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-colors focus-ring"
                >
                  {action.label}
                </a>
              );
            })}
          </div>

          {/* Social Quick Links Bar */}
          <div className="pt-6 border-t border-white/10 flex items-center gap-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
              Connect:
            </span>
            <div className="flex items-center gap-2">
              {profile.socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors focus-ring"
                >
                  {getSocialIcon(social.platform)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
