import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Bot, Lightbulb, Rocket, Users, Wrench, Shield, CheckCircle2 } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: <Bot className="w-6 h-6 text-cyan-400" />,
      title: t('about.pillar1Title'),
      desc: t('about.pillar1Desc'),
      color: 'border-cyan-500/30 bg-cyan-950/20 hover:border-cyan-500/60'
    },
    {
      icon: <Rocket className="w-6 h-6 text-emerald-400" />,
      title: t('about.pillar2Title'),
      desc: t('about.pillar2Desc'),
      color: 'border-emerald-500/30 bg-emerald-950/20 hover:border-emerald-500/60'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: t('about.pillar3Title'),
      desc: t('about.pillar3Desc'),
      color: 'border-purple-500/30 bg-purple-950/20 hover:border-purple-500/60'
    },
    {
      icon: <Wrench className="w-6 h-6 text-amber-400" />,
      title: t('about.pillar4Title'),
      desc: t('about.pillar4Desc'),
      color: 'border-amber-500/30 bg-amber-950/20 hover:border-amber-500/60'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#090e1c] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>{t('about.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('about.title')}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            {t('about.leadText')}
          </p>
        </div>

        {/* Narrative & Story Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">From Classrooms to Market Innovations</h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {t('about.paragraph1')}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-md text-xs font-medium bg-slate-800 text-cyan-300 border border-slate-700">Holy Trinity School</span>
              <span className="px-3 py-1 rounded-md text-xs font-medium bg-slate-800 text-emerald-300 border border-slate-700">Student Led</span>
              <span className="px-3 py-1 rounded-md text-xs font-medium bg-slate-800 text-purple-300 border border-slate-700">Palakkad, Kerala</span>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Entrepreneurial Mindset & Execution</h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {t('about.paragraph2')}
            </p>
            <div className="mt-6 flex items-center space-x-3 text-xs text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Full product lifecycle: Design, Sourcing, Assembly, Support</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all duration-300 ${pillar.color}`}
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-4 shadow-md">
                {pillar.icon}
              </div>
              <h4 className="text-base font-bold text-white mb-2">{pillar.title}</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

