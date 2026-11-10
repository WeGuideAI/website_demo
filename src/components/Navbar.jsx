import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Bot, Mail, Globe, Menu, X, ChevronRight, School, Sparkles } from 'lucide-react';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.products'), href: '#products' },
    { label: t('nav.initiatives'), href: '#initiatives' },
    { label: t('nav.location'), href: '#location' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const languages = [
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'ml', label: 'മലയാളം', short: 'ML' },
    { code: 'hi', label: 'हिन्दी', short: 'HI' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#080d1a]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      {/* Top micro bar for school and customer care */}
      <div className="bg-[#0b1329] border-b border-slate-800/60 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-slate-400">
          <div className="flex items-center space-x-2">
            <School className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-medium text-slate-300">Holy Trinity School</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Kanjikode, Palakkad, Kerala</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-slate-500">{t('nav.customerCare')}:</span>
            <a 
              href="mailto:anuj@gmail.com" 
              className="inline-flex items-center space-x-1.5 text-cyan-400 hover:text-cyan-300 font-mono transition-colors"
            >
              <Mail className="w-3 h-3" />
              <span>anuj@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-[2px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
              <div className="w-full h-full bg-[#080d1a] rounded-[10px] flex items-center justify-center">
                <Bot className="w-6 h-6 text-cyan-400 group-hover:rotate-6 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-black text-xl tracking-wider text-white font-mono">
                  HOLY<span className="text-cyan-400">BOTICS</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-950/80 border border-emerald-500/30 text-emerald-300">
                  E-CELL
                </span>
              </div>
              <p className="text-[11px] text-slate-400 tracking-tight font-medium hidden sm:block">
                {t('nav.tagline')}
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/40 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right actions: Language Switcher + Customer Care CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Language Selector */}
            <div className="flex items-center bg-slate-900/90 border border-slate-700/80 rounded-xl p-1 shadow-inner">
              <Globe className="w-3.5 h-3.5 text-cyan-400 ml-2 mr-1" />
              {languages.map((item) => (
                <button
                  key={item.code}
                  onClick={() => setLang(item.code)}
                  title={item.label}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                    lang === item.code
                      ? 'bg-cyan-500 text-slate-950 shadow-md font-bold'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.short}
                </button>
              ))}
            </div>

            {/* Email Direct Button */}
            <a
              href="mailto:anuj@gmail.com"
              className="inline-flex items-center space-x-2 px-4 py-2 text-xs font-semibold bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 hover:from-cyan-500/30 hover:to-emerald-500/30 border border-cyan-500/40 text-cyan-300 rounded-xl transition-all shadow-sm shadow-cyan-500/10 hover:shadow-cyan-500/20"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>anuj@gmail.com</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center space-x-2 sm:hidden">
            {/* Language pills on mobile */}
            <div className="flex bg-slate-900 border border-slate-700/80 rounded-lg p-0.5">
              {languages.map((item) => (
                <button
                  key={item.code}
                  onClick={() => setLang(item.code)}
                  className={`px-1.5 py-0.5 text-[10px] font-bold rounded ${
                    lang === item.code ? 'bg-cyan-500 text-slate-950' : 'text-slate-400'
                  }`}
                >
                  {item.short}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0a1020] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="py-2 border-b border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <span>{t('nav.schoolName')}</span>
            <span className="text-cyan-400">Kanjikode, Kerala</span>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800/60 hover:text-cyan-400"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800">
            <p className="text-xs text-slate-400 mb-2">{t('nav.customerCare')}:</p>
            <a
              href="mailto:anuj@gmail.com"
              className="flex items-center justify-center space-x-2 w-full py-2.5 px-4 bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 rounded-xl text-sm font-mono font-medium"
            >
              <Mail className="w-4 h-4" />
              <span>anuj@gmail.com</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

