import React from 'react';
import { REAL_NEWS_EXAMPLE, FAKE_NEWS_EXAMPLE, MODEL_SPECS } from '../data/mockData';
import { ShieldCheck, ShieldAlert, Cpu, Share2, Layers, CheckCircle2, ArrowRight, BarChart2, Zap, FileSearch } from 'lucide-react';

interface OverviewScreenProps {
  onNavigateToAnalyze: (exampleId: 'real-example' | 'fake-example') => void;
  onNavigateToModels: () => void;
  onNavigateToPropagation: () => void;
}

export const OverviewScreen: React.FC<OverviewScreenProps> = ({
  onNavigateToAnalyze,
  onNavigateToModels,
  onNavigateToPropagation
}) => {
  return (
    <div className="space-y-8 pb-16">
      {/* Hero Welcome Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            TruthLens AI Platform
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Automated Veracity Intelligence & Disinformation Detection
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            TruthLens AI combines multi-architecture language models, forensic timeline verification, and social propagation network auditing to provide comprehensive, presentation-ready credibility assessments for digital news articles.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-6">
            <button
              type="button"
              id="hero-btn-screen1"
              onClick={() => onNavigateToAnalyze('real-example')}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors"
            >
              <span>View Screen 1: REAL News Report</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              id="hero-btn-screen2"
              onClick={() => onNavigateToAnalyze('fake-example')}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold rounded-xl border border-slate-200 transition-colors"
            >
              <span>View Screen 2: FAKE News Report</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Side-by-Side Example Comparison Cards */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Interactive Example Analysis Reports
            </h2>
            <p className="text-xs text-slate-500">
              Select either analysis report below to inspect the full verification breakdown
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Example 1: Real News Card */}
          <div
            onClick={() => onNavigateToAnalyze('real-example')}
            className="group cursor-pointer bg-white rounded-2xl border border-emerald-200 hover:border-emerald-400 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  SCREEN 1: REAL NEWS
                </span>
                <span className="text-xs font-mono font-bold text-emerald-700">
                  94.8% Real Prob
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2">
                {REAL_NEWS_EXAMPLE.headline}
              </h3>

              <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                {REAL_NEWS_EXAMPLE.bodyExcerpt[0]}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded-lg bg-slate-50">
                  <span className="text-[10px] text-slate-400 block uppercase">Confidence</span>
                  <span className="font-bold text-slate-800">{REAL_NEWS_EXAMPLE.confidenceScore}%</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50">
                  <span className="text-[10px] text-slate-400 block uppercase">Bot Ratio</span>
                  <span className="font-bold text-emerald-600">{REAL_NEWS_EXAMPLE.propagation.botRatioPercent}%</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50">
                  <span className="text-[10px] text-slate-400 block uppercase">Models Consensus</span>
                  <span className="font-bold text-slate-800">3 / 3 Real</span>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between text-xs font-bold text-emerald-700 pt-3 border-t border-slate-100">
              <span>Open Screen 1 Report</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Example 2: Fake News Card */}
          <div
            onClick={() => onNavigateToAnalyze('fake-example')}
            className="group cursor-pointer bg-white rounded-2xl border border-rose-200 hover:border-rose-400 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-200">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  SCREEN 2: FAKE NEWS
                </span>
                <span className="text-xs font-mono font-bold text-rose-700">
                  96.4% Fake Prob
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 group-hover:text-rose-700 transition-colors line-clamp-2">
                {FAKE_NEWS_EXAMPLE.headline}
              </h3>

              <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                {FAKE_NEWS_EXAMPLE.bodyExcerpt[0]}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded-lg bg-slate-50">
                  <span className="text-[10px] text-slate-400 block uppercase">Confidence</span>
                  <span className="font-bold text-slate-800">{FAKE_NEWS_EXAMPLE.confidenceScore}%</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50">
                  <span className="text-[10px] text-slate-400 block uppercase">Bot Ratio</span>
                  <span className="font-bold text-rose-600">{FAKE_NEWS_EXAMPLE.propagation.botRatioPercent}%</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50">
                  <span className="text-[10px] text-slate-400 block uppercase">Models Consensus</span>
                  <span className="font-bold text-rose-700">3 / 3 Fake</span>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between text-xs font-bold text-rose-700 pt-3 border-t border-slate-100">
              <span>Open Screen 2 Report</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>

      {/* Model Architectures Teaser */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Three-Engine Ensemble Stack
            </h3>
            <p className="text-xs text-slate-500">
              Combines statistical n-gram tokenization with dense transformer representations
            </p>
          </div>
          <button
            type="button"
            onClick={onNavigateToModels}
            className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 self-start sm:self-auto"
          >
            <span>Inspect All Model Specs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {MODEL_SPECS.map((model) => (
            <div key={model.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-bold text-slate-900">{model.name}</span>
                <span className="text-[11px] font-mono text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                  {model.avgLatency}
                </span>
              </div>
              <span className="text-[11px] text-slate-500 block mb-2 font-mono">
                {model.type}
              </span>
              <p className="text-xs text-slate-600 line-clamp-3">
                {model.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
