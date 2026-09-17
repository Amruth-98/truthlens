import React from 'react';
import { AnalysisVerdict } from '../types';
import { CheckCircle2, AlertTriangle, ShieldCheck, ShieldAlert, Sparkles, HelpCircle } from 'lucide-react';

interface VerdictBadgeProps {
  verdict: AnalysisVerdict;
  realProbability: number;
  fakeProbability: number;
  confidenceScore: number;
  confidenceLevel: string;
  verdictSummary: string;
}

export const VerdictBadge: React.FC<VerdictBadgeProps> = ({
  verdict,
  realProbability,
  fakeProbability,
  confidenceScore,
  confidenceLevel,
  verdictSummary
}) => {
  const isReal = verdict === 'REAL';

  return (
    <div
      id="verdict-summary-card"
      className={`rounded-2xl border p-6 sm:p-7 shadow-xs transition-all ${
        isReal
          ? 'bg-gradient-to-b from-emerald-50/50 via-white to-white border-emerald-200'
          : 'bg-gradient-to-b from-rose-50/50 via-white to-white border-rose-200'
      }`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Left: Big Verdict Indicator */}
        <div className="flex items-start sm:items-center gap-4">
          <div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-xs ${
              isReal
                ? 'bg-emerald-600 text-white'
                : 'bg-rose-600 text-white'
            }`}
          >
            {isReal ? (
              <ShieldCheck className="w-9 h-9" />
            ) : (
              <ShieldAlert className="w-9 h-9" />
            )}
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Synthesis Verdict
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                Confidence: {confidenceScore}% ({confidenceLevel})
              </span>
            </div>

            <div className="flex items-center gap-3">
              <h2
                className={`text-3xl sm:text-4xl font-black tracking-tight ${
                  isReal ? 'text-emerald-700' : 'text-rose-700'
                }`}
              >
                {isReal ? 'VERIFIED REAL' : 'CONFIRMED FAKE'}
              </h2>
              <span
                className={`px-3 py-1 text-xs font-bold rounded-full ${
                  isReal
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-rose-100 text-rose-800 border border-rose-300'
                }`}
              >
                {isReal ? 'Authentic Reporting' : 'Fabricated / Deceptive'}
              </span>
            </div>

            <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
              {verdictSummary}
            </p>
          </div>
        </div>

        {/* Right: Key Probability Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 shrink-0 lg:min-w-[340px]">
          {/* Real Probability */}
          <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
              Real Probability
            </span>
            <div className="flex items-baseline gap-1 mt-1">
              <span
                className={`text-2xl font-black ${
                  isReal ? 'text-emerald-600' : 'text-slate-700'
                }`}
              >
                {realProbability.toFixed(1)}%
              </span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2 overflow-hidden">
              <div
                className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${realProbability}%` }}
              />
            </div>
          </div>

          {/* Fake Probability */}
          <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
              Fake Probability
            </span>
            <div className="flex items-baseline gap-1 mt-1">
              <span
                className={`text-2xl font-black ${
                  !isReal ? 'text-rose-600' : 'text-slate-700'
                }`}
              >
                {fakeProbability.toFixed(1)}%
              </span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2 overflow-hidden">
              <div
                className="bg-rose-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${fakeProbability}%` }}
              />
            </div>
          </div>

          {/* Confidence Score */}
          <div className="col-span-2 sm:col-span-1 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
              Confidence
            </span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-2xl font-black text-blue-600">
                {confidenceScore.toFixed(1)}%
              </span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2 overflow-hidden">
              <div
                className="bg-blue-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${confidenceScore}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
