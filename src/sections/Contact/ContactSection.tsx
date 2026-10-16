import { useState, FormEvent, ChangeEvent } from 'react';
import { Mail, MapPin, Sparkles, Send, AlertCircle, Info, ExternalLink } from 'lucide-react';
import { CONTACT_DATA, ContactData } from '../../data/contact';
import { cn } from '../../utils/cn';

export interface ContactSectionProps {
  data?: ContactData;
  className?: string;
}

interface FormState {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactSection({ data = CONTACT_DATA, className }: ContactSectionProps) {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMailtoPrompt, setShowMailtoPrompt] = useState(false);

  const validateField = (name: keyof FormState, value: string): string | undefined => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Email address is required.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please enter a valid email address (e.g., name@domain.com).';
        }
        return undefined;
      case 'subject':
        if (!value.trim()) return 'Subject is required.';
        if (value.trim().length < 3) return 'Subject must be at least 3 characters.';
        return undefined;
      case 'message':
        if (!value.trim()) return 'Message cannot be empty.';
        if (value.trim().length < 10) return 'Please provide at least 10 characters in your message.';
        return undefined;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear inline error when typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {
      fullName: validateField('fullName', formData.fullName),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message),
    };

    if (Object.values(newErrors).some(Boolean)) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    // As per Segment 9 rules: Backend message forwarding is not configured.
    // We do NOT display a false "Message sent" alert. We prompt the user with the direct mailto option.
    setShowMailtoPrompt(true);
    setIsSubmitting(false);
  };

  const handleOpenMailClient = () => {
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${data.info.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
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
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight"
          >
            {data.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            {data.supportingText}
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-surface-card border border-white/10 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  Current Status
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">{data.info.name}</h3>
              <p className="text-sm font-medium text-indigo-400 mb-4">{data.info.role}</p>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 mb-6">
                <p className="text-xs text-slate-300 leading-relaxed m-0">
                  {data.info.availability}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0" aria-hidden="true" />
                  <span>{data.info.location}</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Mail className="w-4 h-4 text-indigo-400 flex-shrink-0" aria-hidden="true" />
                  <a
                    href={`mailto:${data.info.email}`}
                    className="text-slate-200 hover:text-indigo-400 transition-colors focus-ring rounded"
                  >
                    {data.info.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Transparent Architecture Note */}
            <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 text-xs text-slate-400 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <Info className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="font-semibold text-slate-200 block mb-1">
                    Direct Communication Note
                  </span>
                  <span>{data.info.note}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface-card border border-white/10 shadow-xl relative overflow-hidden">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Full Name <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    placeholder="e.g. Jane Doe"
                    className={cn(
                      'w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder-slate-500 transition-colors focus-ring',
                      errors.fullName
                        ? 'border-rose-500/80 focus:border-rose-500'
                        : 'border-white/10 focus:border-indigo-500/80'
                    )}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="flex items-center gap-1.5 text-xs text-rose-400 mt-1.5 m-0">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Email Address <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    placeholder="e.g. jane@example.com"
                    className={cn(
                      'w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder-slate-500 transition-colors focus-ring',
                      errors.email
                        ? 'border-rose-500/80 focus:border-rose-500'
                        : 'border-white/10 focus:border-indigo-500/80'
                    )}
                  />
                  {errors.email && (
                    <p id="email-error" className="flex items-center gap-1.5 text-xs text-rose-400 mt-1.5 m-0">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Subject <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    placeholder="e.g. Collaboration on student project / Software inquiry"
                    className={cn(
                      'w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder-slate-500 transition-colors focus-ring',
                      errors.subject
                        ? 'border-rose-500/80 focus:border-rose-500'
                        : 'border-white/10 focus:border-indigo-500/80'
                    )}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="flex items-center gap-1.5 text-xs text-rose-400 mt-1.5 m-0">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Message <span className="text-indigo-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    placeholder="Type your message here..."
                    className={cn(
                      'w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder-slate-500 transition-colors focus-ring resize-y',
                      errors.message
                        ? 'border-rose-500/80 focus:border-rose-500'
                        : 'border-white/10 focus:border-indigo-500/80'
                    )}
                  />
                  {errors.message && (
                    <p id="message-error" className="flex items-center gap-1.5 text-xs text-rose-400 mt-1.5 m-0">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submission Notice & Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors focus-ring shadow-md shadow-indigo-600/20 disabled:opacity-50"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </form>

              {/* Truthful Dispatch Prompt (Satisfies Segment 9 Rule: No False Delivery Claims) */}
              {showMailtoPrompt && (
                <div className="mt-6 p-5 rounded-xl bg-indigo-950/40 border border-indigo-500/30">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">
                        Form Ready to Dispatch
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        Direct server-side email routing is currently in prototype mode. To guarantee Benediction receives your message without delay, click below to open your preferred email client with these details pre-filled.
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        <button
                          type="button"
                          onClick={handleOpenMailClient}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 focus-ring"
                        >
                          <span>Open in Email Client</span>
                          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowMailtoPrompt(false)}
                          className="px-3.5 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 focus-ring"
                        >
                          Keep Editing
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
