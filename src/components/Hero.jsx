import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, ArrowRight, Bot, Cpu, ShieldCheck, Mail, MapPin, Zap } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden cyber-grid">
      {/* Glow Orbs in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium mb-6 shadow-lg shadow-cyan-500/10">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-semibold">{t('hero.badge')}</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Holy Trinity School, Kanjikode</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {t('hero.titleStart')}{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              {t('hero.titleGradient')}
            </span>{' '}
            {t('hero.titleEnd')}
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          {/* CTA Actions */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#products"
              className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <Cpu className="w-4 h-4 text-slate-950" />
              <span>{t('hero.exploreProducts')}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="mailto:anuj@gmail.com"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all hover:border-cyan-500/50"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>{t('hero.contactSupport')}: <span className="text-cyan-300 font-mono">anuj@gmail.com</span></span>
            </a>

            <a
              href="#location"
              className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-slate-900/40 hover:bg-slate-800/80 border border-slate-800 text-slate-400 hover:text-white font-medium text-sm transition-all"
            >
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>{t('hero.locateUs')}</span>
            </a>
          </div>

          {/* Quick info strip */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">45+</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">{t('hero.statsInnovators')}</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">20+</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">{t('hero.statsProjects')}</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono">15+</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">{t('hero.statsWorkshops')}</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">150+</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">{t('hero.statsKits')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

