import React from 'react';
import { ModelScore } from '../types';
import { Cpu, Zap, BarChart2, Info } from 'lucide-react';

interface ModelProbabilityBarsProps {
  models: ModelScore[];
  verdict: 'REAL' | 'FAKE';
}

export const ModelProbabilityBars: React.FC<ModelProbabilityBarsProps> = ({
  models,
  verdict
}) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-7">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-5 border-b border-slate-100 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Cpu className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">
              Multi-Model Probability Breakdown
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Independent evaluations across three distinct natural language processing pipelines
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-xs bg-emerald-500" />
            <span className="font-medium text-slate-600">Real Probability</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-xs bg-rose-500" />
            <span className="font-medium text-slate-600">Fake Probability</span>
          </div>
        </div>
      </div>

      {/* The 3 Model Bars */}
      <div className="space-y-6">
        {models.map((model, idx) => {
          const isRealFavored = model.realProbability >= model.fakeProbability;

          return (
            <div
              key={model.name}
              id={`model-bar-row-${idx}`}
              className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:border-slate-300 transition-colors"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2.5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-900">
                      {model.name}
                    </span>
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                        isRealFavored
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {isRealFavored ? 'Votes REAL' : 'Votes FAKE'}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">
                    {model.architecture}
                  </span>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-auto text-xs">
                  <span className="inline-flex items-center gap-1 text-slate-500 font-mono bg-white px-2 py-0.5 rounded border border-slate-200">
                    <Zap className="w-3 h-3 text-amber-500" />
                    {model.inferenceTimeMs}ms
                  </span>
                  <div className="flex items-center gap-1.5 font-bold">
                    <span className="text-emerald-700">{model.realProbability.toFixed(1)}% R</span>
                    <span className="text-slate-300">/</span>
                    <span className="text-rose-700">{model.fakeProbability.toFixed(1)}% F</span>
                  </div>
                </div>
              </div>

              {/* Visual Split Probability Bar */}
              <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden flex shadow-inner">
                {/* Real Bar */}
                <div
                  className="bg-emerald-500 h-full transition-all duration-500 flex items-center justify-end pr-1 text-[9px] text-white font-bold"
                  style={{ width: `${model.realProbability}%` }}
                  title={`Real Probability: ${model.realProbability}%`}
                />
                {/* Fake Bar */}
                <div
                  className="bg-rose-500 h-full transition-all duration-500 flex items-center justify-start pl-1 text-[9px] text-white font-bold"
                  style={{ width: `${model.fakeProbability}%` }}
                  title={`Fake Probability: ${model.fakeProbability}%`}
                />
              </div>

              {/* Key Diagnostic Note */}
              <div className="flex items-start gap-2 mt-2.5 text-xs text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200/60">
                <Info className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-800">Key Feature Influence:</strong> {model.keyFeature}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
