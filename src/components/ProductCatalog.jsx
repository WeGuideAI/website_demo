import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { productsData } from '../data/products';
import ProductModal from './ProductModal';
import { Search, X, Cpu, Tag, ExternalLink, Filter, Sparkles, Layers, ArrowUpRight } from 'lucide-react';

export default function ProductCatalog() {
  const { lang, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  const categories = [
    { id: 'all', label: t('products.allCategories') },
    { id: 'robotics', label: t('products.categoryRobotics') },
    { id: 'iot', label: t('products.categoryIoT') },
    { id: 'tools', label: t('products.categoryTools') },
    { id: 'learning', label: t('products.categoryLearning') },
  ];

  // Filter products based on search term and category
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      // Category match
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;

      if (!matchesCategory) return false;

      // Search match across English, Malayalam, Hindi, tags, specs
      if (!searchTerm.trim()) return true;

      const term = searchTerm.toLowerCase().trim();
      const nameEn = (product.name.en || '').toLowerCase();
      const nameMl = (product.name.ml || '').toLowerCase();
      const nameHi = (product.name.hi || '').toLowerCase();
      const descEn = (product.shortDesc.en || '').toLowerCase();
      const descMl = (product.shortDesc.ml || '').toLowerCase();
      const descHi = (product.shortDesc.hi || '').toLowerCase();
      const tags = product.tags.map((tg) => tg.toLowerCase()).join(' ');
      const id = product.id.toLowerCase();

      return (
        nameEn.includes(term) ||
        nameMl.includes(term) ||
        nameHi.includes(term) ||
        descEn.includes(term) ||
        descMl.includes(term) ||
        descHi.includes(term) ||
        tags.includes(term) ||
        id.includes(term)
      );
    });
  }, [searchTerm, selectedCategory]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
  };

  return (
    <section id="products" className="py-20 md:py-28 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t('products.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('products.title')}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {t('products.subtitle')}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          {/* Search Input */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-cyan-400 group-focus-within:text-cyan-300 transition-colors" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t('products.searchPlaceholder')}
              className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 shadow-xl shadow-black/30 text-sm sm:text-base transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Category Pills & Count Indicator */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
            {/* Filter pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Counter */}
            <div className="text-xs text-slate-400 font-mono flex items-center space-x-1.5 self-end sm:self-center">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>
                <strong className="text-white">{filteredProducts.length}</strong> {t('products.itemsFound')}
              </span>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => {
              const productName = product.name[lang] || product.name.en;
              const productDesc = product.shortDesc[lang] || product.shortDesc.en;

              return (
                <div
                  key={product.id}
                  className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0c1322] border border-slate-800 hover:border-cyan-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  {/* Top row: Badge & ID */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-cyan-950/80 border border-cyan-500/30 text-cyan-300">
                        {product.badge}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {product.id}
                      </span>
                    </div>

                    {/* Circuit Icon Placeholder Box */}
                    <div className="w-full h-36 rounded-xl bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800/80 flex flex-col items-center justify-center p-4 mb-5 group-hover:border-slate-700 transition-colors relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      <Cpu className="w-12 h-12 text-cyan-400/80 group-hover:scale-110 transition-transform duration-300" />
                      <span className="mt-2 text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                        Holybotics Lab Build
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1 mb-2">
                      {productName}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed mb-4">
                      {productDesc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {product.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded text-[11px] bg-slate-800/80 text-slate-300 border border-slate-700/60 font-mono"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Row: Price & Actions */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-xs text-slate-400 block font-sans">Student Cell Price</span>
                      <span className="text-xl font-black text-cyan-400 font-mono">
                        ₹{product.price.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setActiveModalProduct(product)}
                        className="px-3 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:text-white transition-colors"
                      >
                        {t('products.viewDetails')}
                      </button>
                      <button
                        onClick={() => setActiveModalProduct(product)}
                        className="px-3 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20 transition-all flex items-center space-x-1"
                      >
                        <span>{t('products.inquireBtn')}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search State */
          <div className="max-w-md mx-auto text-center py-16 px-4 bg-slate-900/40 rounded-3xl border border-slate-800">
            <div className="w-16 h-16 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center mx-auto text-slate-400 mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{t('products.noResultsTitle')}</h3>
            <p className="text-sm text-slate-400 mb-6">{t('products.noResultsDesc')}</p>
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition-all"
            >
              {t('products.resetSearch')}
            </button>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {activeModalProduct && (
        <ProductModal
          product={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
        />
      )}
    </section>
  );
}

