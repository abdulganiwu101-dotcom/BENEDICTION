import { ArrowUp, Mail } from 'lucide-react';
import { NAV_ITEMS } from '../../data/navigation';
import { CONTACT_DATA } from '../../data/contact';
import { cn } from '../../utils/cn';

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <footer
      role="contentinfo"
      className={cn('relative bg-[#070a12] border-t border-white/10 pt-14 pb-12', className)}
    >
      <div className="portfolio-container">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          {/* Brand & Tagline Column */}
          <div className="md:col-span-5 space-y-3">
            <a
              href="#home"
              onClick={() => handleSmoothScroll('#home')}
              className="inline-flex items-center gap-2 text-xl font-bold tracking-tight text-white hover:text-indigo-400 transition-colors focus-ring rounded py-1"
              aria-label="Benediction portfolio home"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block" aria-hidden="true" />
              <span>Benediction</span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm m-0">
              Building ideas into digital possibilities.
            </p>
            <p className="text-xs font-mono text-slate-500 m-0">
              Computer Science • Accra Technical University
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
              Navigation
            </h4>
            <ul role="list" className="grid grid-cols-2 gap-2.5 m-0 p-0 list-none">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => handleSmoothScroll(item.href)}
                    className="text-sm text-slate-300 hover:text-white transition-colors focus-ring rounded py-1 inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Contact Details Column */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${CONTACT_DATA.info.email}`}
                className="inline-flex items-center gap-2.5 text-sm text-slate-300 hover:text-indigo-400 transition-colors focus-ring rounded py-1"
                aria-label={`Send direct email to ${CONTACT_DATA.info.email}`}
              >
                <div className="p-1.5 rounded-md bg-white/5 border border-white/10 text-indigo-400">
                  <Mail className="w-4 h-4" aria-hidden="true" />
                </div>
                <span className="truncate">{CONTACT_DATA.info.email}</span>
              </a>
              <p className="text-xs text-slate-500 m-0">
                {CONTACT_DATA.info.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back-to-Top Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="m-0">
            &copy; {currentYear} Benediction. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors focus-ring rounded px-2 py-1"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
