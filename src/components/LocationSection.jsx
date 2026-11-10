import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Navigation, School, Clock, Phone, ExternalLink, CheckCircle } from 'lucide-react';

export default function LocationSection() {
  const { t } = useLanguage();

  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Holy+Trinity+School+Kanjikode+Pudussery+Central+Kerala+678623";
  const searchUrl = "https://www.google.com/search?q=holy+trinity+school+address+kanjikode+pudussery";

  return (
    <section id="location" className="py-20 md:py-28 bg-[#070b14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t('location.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('location.title')}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {t('location.subtitle')}
          </p>
        </div>

        {/* Location Grid: Details Card + Map Card */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Details Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-[#0d1424] border border-slate-800 shadow-xl space-y-6">
              {/* School & Cell Badge */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <School className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t('location.schoolTitle')}</h3>
                  <p className="text-xs text-cyan-400 font-mono mt-0.5">{t('location.cellName')}</p>
                </div>
              </div>

              {/* Exact Address Box */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>{t('location.addressLabel')}</span>
                </div>
                <p className="text-base font-semibold text-slate-100 leading-snug">
                  {t('location.address')}
                </p>
                <p className="text-xs text-slate-400">
                  {t('location.landmark')}
                </p>
              </div>

              {/* Working Hours */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 space-y-1.5">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t('location.labHoursLabel')}</span>
                </div>
                <p className="text-xs font-medium text-slate-200">
                  {t('location.labHours')}
                </p>
                <p className="text-[11px] text-slate-400">
                  {t('location.visitorsNote')}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>{t('location.getDirections')}</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                <a
                  href={searchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-1.5 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-colors"
                >
                  <span>Google Info</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Map Embed Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900/50 p-2">
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-xl overflow-hidden bg-slate-950">
                <iframe
                  title="Holy Trinity School Location Map"
                  src="https://maps.google.com/maps?q=Holy+Trinity+School+Kanjikode+Pudussery+Central+Kerala+678623&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter brightness-90 contrast-110"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                {/* Overlaid Badge */}
                <div className="absolute top-4 left-4 bg-[#0a1020]/90 backdrop-blur-md border border-slate-700 px-3.5 py-2 rounded-xl text-xs text-white shadow-xl flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-semibold">Holy Trinity School Campus</span>
                </div>
              </div>

              <div className="mt-3 px-4 py-2 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-cyan-400">Coordinates: Kanjikode, Palakkad 678623</span>
                <span className="text-slate-400">Interactive Google Map</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

