import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Check, Mail, Copy, CheckCircle, Cpu, Box, Sparkles, ExternalLink } from 'lucide-react';

export default function ProductModal({ product, onClose }) {
  const { lang, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  if (!product) return null;

  const productName = product.name[lang] || product.name.en;
  const productDesc = product.shortDesc[lang] || product.shortDesc.en;

  const mailtoSubject = encodeURIComponent(`HOLYBOTICS Inquiry: ${product.name.en} (ID: ${product.id})`);
  const mailtoBody = encodeURIComponent(
    `Hello Holybotics Team,\n\nI am interested in inquiring about or placing an order for:\n` +
    `Product: ${product.name.en}\n` +
    `Product ID: ${product.id}\n` +
    `Price: ₹${product.price}\n\n` +
    `Name:\n` +
    `Phone/Contact:\n` +
    `Quantity:\n` +
    `Any questions/requirements:\n\n` +
    `Thank you!`
  );

  const mailtoUrl = `mailto:anuj@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

  const copyEmail = () => {
    navigator.clipboard.writeText('anuj@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#0e1629] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-950 border border-cyan-500/30 text-cyan-300">
              {product.badge}
            </span>
            <span className="text-xs text-slate-400 font-mono">ID: {product.id}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Title & Price */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{productName}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{productDesc}</p>

            <div className="mt-4 flex items-baseline space-x-3">
              <span className="text-3xl font-extrabold text-cyan-400 font-mono">
                ₹{product.price.toLocaleString()}
              </span>
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                product.status === 'inStock' 
                  ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30' 
                  : 'bg-purple-950/80 text-purple-300 border border-purple-500/30'
              }`}>
                {product.status === 'inStock' ? t('products.inStock') : t('products.customOrder')}
              </span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-xs rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60 font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Technical Specs */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center space-x-1.5">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>{t('products.modalSpecs')}</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {product.specs.map((spec, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span className="text-cyan-400 font-bold mt-0.5">•</span>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* In the box */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <h4 className="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center space-x-1.5">
              <Box className="w-4 h-4 text-emerald-400" />
              <span>{t('products.modalIncludes')}</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {product.inTheBox.map((item, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care Direct Order Box */}
          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 text-xs text-slate-300 space-y-2">
            <div className="flex items-center space-x-2 text-cyan-300 font-semibold">
              <Mail className="w-4 h-4" />
              <span>Customer Care Support: anuj@gmail.com</span>
            </div>
            <p>{t('products.modalOrderNotice')}</p>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="px-6 py-4 bg-slate-900/90 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={copyEmail}
            className="inline-flex items-center space-x-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-600 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">Copied anuj@gmail.com!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy Support Email</span>
              </>
            )}
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-800/80 text-slate-400 hover:text-white transition-colors"
            >
              Close
            </button>
            <a
              href={mailtoUrl}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 text-xs font-bold shadow-md shadow-cyan-500/20 transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{t('products.orderEmailPrompt')}</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

