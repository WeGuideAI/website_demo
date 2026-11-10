import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Bot, Mail, MapPin, School, Globe, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const { lang, setLang, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ml', label: 'മലയാളം' },
    { code: 'hi', label: 'हिन्दी' },
  ];

  return (
    <footer className="bg-[#050811] border-t border-slate-800 text-slate-400 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-[2px]">
                <div className="w-full h-full bg-[#080d1a] rounded-[10px] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div>
                <span className="font-black text-xl tracking-wider text-white font-mono">
                  HOLY<span className="text-cyan-400">BOTICS</span>
                </span>
                <span className="block text-[10px] text-cyan-400 font-mono">
                  STUDENT ENTREPRENEURSHIP CELL
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {t('footer.description')}
            </p>

            <div className="flex items-center space-x-2 text-xs text-slate-400 pt-1">
              <School className="w-4 h-4 text-cyan-400" />
              <span>Holy Trinity School, Kanjikode, Kerala 678623</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-400 transition-colors">
                  {t('nav.products')}
                </a>
              </li>
              <li>
                <a href="#initiatives" className="hover:text-cyan-400 transition-colors">
                  {t('nav.initiatives')}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-cyan-400 transition-colors">
                  {t('nav.location')}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care & Language (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Customer Support & Care
            </h4>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Customer Care Email:</span>
              </div>
              <a
                href="mailto:anuj@gmail.com"
                className="block font-mono text-cyan-300 hover:text-cyan-200 font-bold text-sm"
              >
                anuj@gmail.com
              </a>
              <p className="text-[11px] text-slate-400">
                Reach out for product orders, replacement parts, or robotics workshop questions.
              </p>
            </div>

            {/* Language Switcher in Footer */}
            <div>
              <span className="block text-xs text-slate-400 mb-2">{t('nav.language')}:</span>
              <div className="flex space-x-2">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`px-3 py-1 text-xs rounded-lg border transition-all ${
                      lang === l.code
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-bold'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom micro bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} HOLYBOTICS. {t('footer.legalNotice')}</p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

