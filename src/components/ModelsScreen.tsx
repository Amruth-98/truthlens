import React from 'react';
import { MODEL_SPECS, REAL_NEWS_EXAMPLE, FAKE_NEWS_EXAMPLE } from '../data/mockData';
import { SlidersHorizontal, Zap, Database, CheckCircle, ShieldAlert, Award, ArrowRight } from 'lucide-react';

interface ModelsScreenProps {
  onSelectExample: (id: 'real-example' | 'fake-example') => void;
}

export const ModelsScreen: React.FC<ModelsScreenProps> = ({ onSelectExample }) => {
  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-7">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold mb-2">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Machine Learning Architecture Specifications
            </div>
            <h1 className="text-2xl font-bold text-slate-900">
              Multi-Model Inference Pipelines
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              TruthLens AI leverages a heterogeneous ensemble of statistical n-gram tokenizers and dense contextual transformer embeddings to evaluate credibility from both lexical and semantic perspectives.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onSelectExample('real-example')}
              className="px-3 py-2 text-xs font-bold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-colors"
            >
              Test with Real News
            </button>
            <button
              type="button"
              onClick={() => onSelectExample('fake-example')}
              className="px-3 py-2 text-xs font-bold rounded-lg bg-rose-600 hover:bg-rose-700 text-white shadow-xs transition-colors"
            >
              Test with Fake News
            </button>
          </div>
        </div>
      </div>

      {/* Model Spec Cards */}
      <div className="space-y-6">
        {MODEL_SPECS.map((model) => (
          <div
            key={model.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-7"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-5 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-bold text-slate-900">{model.name}</h2>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                    {model.type}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mt-2 max-w-3xl">
                  {model.description}
                </p>
              </div>

              {/* Quick Metrics */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-center min-w-[90px]">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Benchmark Acc</span>
                  <span className="text-base font-extrabold text-slate-900">{model.accuracy}</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-center min-w-[90px]">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">F1 Score</span>
                  <span className="text-base font-extrabold text-blue-600">{model.f1Score}</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-center min-w-[90px]">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Latency</span>
                  <span className="text-base font-extrabold text-amber-600">{model.avgLatency}</span>
                </div>
              </div>
            </div>

            {/* Model Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Technical Parameters */}
              <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-200/80 space-y-2.5 text-xs">
                <h3 className="font-bold text-slate-800 uppercase tracking-wider text-[11px] mb-3">
                  Pipeline Specifications
                </h3>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Training Corpus:</span>
                  <span className="font-semibold text-slate-800 text-right max-w-[240px]">{model.trainingCorpus}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Feature Dimensions:</span>
                  <span className="font-mono text-slate-800">{model.featureDimensions}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Memory Footprint:</span>
                  <span className="font-mono text-slate-800">{model.memoryFootprint}</span>
                </div>
              </div>

              {/* Strengths & Edge Cases */}
              <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-200/80 space-y-3 text-xs">
                <div>
                  <h3 className="font-bold text-emerald-800 uppercase tracking-wider text-[11px] mb-1.5 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    Key Algorithmic Strengths
                  </h3>
                  <ul className="space-y-1 text-slate-700 list-disc list-inside">
                    {model.strengths.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-slate-200/60">
                  <h3 className="font-bold text-amber-800 uppercase tracking-wider text-[11px] mb-1.5 flex items-center gap-1">
                    <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                    Known Limitations & Edge Cases
                  </h3>
                  <ul className="space-y-1 text-slate-600 list-disc list-inside">
                    {model.limitations.map((l, i) => (
                      <li key={i}>{l}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Performance on the 2 Demo Screens */}
            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <span className="text-slate-500 font-semibold">Evaluation on Current Examples:</span>
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5 text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Screen 1 (Real): {REAL_NEWS_EXAMPLE.models.find(m => m.name === model.name)?.realProbability}% Real
                </span>
                <span className="inline-flex items-center gap-1.5 text-rose-800 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Screen 2 (Fake): {FAKE_NEWS_EXAMPLE.models.find(m => m.name === model.name)?.fakeProbability}% Fake
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
