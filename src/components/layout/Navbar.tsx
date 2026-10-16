import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, NAV_CTA, DEFAULT_BRAND_LABEL } from '../../data/navigation';
import { cn } from '../../utils/cn';

export interface NavbarProps {
  /** Optional custom brand text; defaults to "Portfolio" without inventing personal info */
  brandName?: string;
  className?: string;
}

export function Navbar({ brandName = DEFAULT_BRAND_LABEL, className }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Track subtle scroll elevation state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = useCallback((href: string) => {
    setIsOpen(false);

    // If anchor target exists in DOM, handle smooth scroll
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <header
      role="banner"
      className={cn(
        'sticky top-0 z-50 w-full transition-colors duration-200',
        isScrolled
          ? 'bg-[#0b0f19]/95 backdrop-blur-md border-b border-white/10 shadow-sm'
          : 'bg-[#0b0f19]/80 backdrop-blur-sm border-b border-white/5',
        className
      )}
    >
      <div className="portfolio-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Identity */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={() => handleLinkClick('#home')}
              className="text-lg md:text-xl font-bold tracking-tight text-white hover:text-indigo-400 transition-colors focus-ring rounded-md py-1 px-1.5 inline-flex items-center gap-2"
              aria-label={`${brandName} home`}
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block" aria-hidden="true" />
              <span>{brandName}</span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2"
          >
            <ul role="list" className="flex items-center gap-1 lg:gap-2 m-0 p-0 list-none">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => handleLinkClick(item.href)}
                    className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors focus-ring"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Optional Call-to-Action Button */}
            <div className="ml-4 pl-4 border-l border-white/10">
              <a
                href={NAV_CTA.href}
                onClick={() => handleLinkClick(NAV_CTA.href)}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors focus-ring shadow-sm"
              >
                {NAV_CTA.label}
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-menu"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 focus-ring"
            >
              {isOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Dropdown Menu */}
      <div
        id="mobile-navigation-menu"
        className={cn(
          'md:hidden overflow-hidden transition-all duration-200 ease-in-out border-b border-white/10 bg-[#0e1424]',
          isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0 border-b-0'
        )}
        aria-hidden={!isOpen}
      >
        <div className="portfolio-container">
          <nav aria-label="Mobile navigation">
            <ul role="list" className="flex flex-col space-y-1 m-0 p-0 list-none">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => handleLinkClick(item.href)}
                    className="flex items-center min-h-[44px] px-3 py-2 text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-lg transition-colors focus-ring"
                    tabIndex={isOpen ? 0 : -1}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={NAV_CTA.href}
                  onClick={() => handleLinkClick(NAV_CTA.href)}
                  className="flex items-center justify-center min-h-[44px] w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors focus-ring"
                  tabIndex={isOpen ? 0 : -1}
                >
                  {NAV_CTA.label}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
