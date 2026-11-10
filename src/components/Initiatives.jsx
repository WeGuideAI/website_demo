import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Terminal, Trophy, Presentation, Calendar, Users, Award, Sparkles } from 'lucide-react';

export default function Initiatives() {
  const { t } = useLanguage();

  const initiatives = [
    {
      icon: <Terminal className="w-6 h-6 text-cyan-400" />,
      title: t('initiatives.card1Title'),
      desc: t('initiatives.card1Desc'),
      tag: 'Hands-on Training',
      badgeColor: 'text-cyan-300 bg-cyan-950/80 border-cyan-500/30'
    },
    {
      icon: <Trophy className="w-6 h-6 text-amber-400" />,
      title: t('initiatives.card2Title'),
      desc: t('initiatives.card2Desc'),
      tag: 'Competition',
      badgeColor: 'text-amber-300 bg-amber-950/80 border-amber-500/30'
    },
    {
      icon: <Presentation className="w-6 h-6 text-emerald-400" />,
      title: t('initiatives.card3Title'),
      desc: t('initiatives.card3Desc'),
      tag: 'Startup Pitching',
      badgeColor: 'text-emerald-300 bg-emerald-950/80 border-emerald-500/30'
    }
  ];

  return (
    <section id="initiatives" className="py-20 md:py-28 bg-[#090e1c] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('initiatives.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('initiatives.title')}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {t('initiatives.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {initiatives.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/90 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${item.badgeColor}`}>
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Held at Holy Trinity Campus</span>
                </span>
                <span className="font-mono text-cyan-400 font-semibold">Active</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

