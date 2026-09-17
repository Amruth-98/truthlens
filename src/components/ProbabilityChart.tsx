import React from 'react';
import { ModelScore, LinguisticMetric } from '../types';
import { BarChart3, Sliders, Shield, Award } from 'lucide-react';

interface ProbabilityChartProps {
  models: ModelScore[];
  realProbability: number;
  fakeProbability: number;
  linguistics: LinguisticMetric[];
  verdict: 'REAL' | 'FAKE';
}

export const ProbabilityChart: React.FC<ProbabilityChartProps> = ({
  models,
  realProbability,
  fakeProbability,
  linguistics,
  verdict
}) => {
  const isReal = verdict === 'REAL';

  // Chart entries: 3 models + ensemble aggregate
  const comparisonItems = [
    ...models.map((m) => ({
      name: m.name.split(' + ')[0],
      sub: m.name.split(' + ')[1] || '',
      real: m.realProbability,
      fake: m.fakeProbability
    })),
    {
      name: 'Ensemble',
      sub: 'Weighted Consensus',
      real: realProbability,
      fake: fakeProbability
    }
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-7">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-5 border-b border-slate-100 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <BarChart3 className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">
              Comparative Probability Distribution
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Visual consensus between individual architectures and weighted ensemble aggregation
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
          <Award className="w-3.5 h-3.5 text-blue-600" />
          Ensemble Agreement: {isReal ? 'High Veracity (Real)' : 'Critical Disinformation (Fake)'}
        </div>
      </div>

      {/* Grid: Left is Probability Bars Chart, Right is Linguistic Indicators */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Probability Comparison Chart */}
        <div className="lg:col-span-6 bg-slate-50/70 p-5 rounded-xl border border-slate-200/80">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-4 flex items-center justify-between">
            <span>Model Probability Comparison</span>
            <span className="text-[11px] font-normal text-slate-400">Scale: 0% – 100%</span>
          </h3>

          <div className="space-y-4">
            {comparisonItems.map((item) => (
              <div key={item.name} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-slate-800">{item.name}</span>
                    <span className="text-[11px] text-slate-400 font-mono">({item.sub})</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="text-emerald-700 font-bold">{item.real.toFixed(1)}% Real</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-rose-700 font-bold">{item.fake.toFixed(1)}% Fake</span>
                  </div>
                </div>

                {/* Dual bar representing probability distribution */}
                <div className="h-4 bg-slate-200 rounded-md overflow-hidden flex shadow-inner">
                  <div
                    className="bg-emerald-500 h-full transition-all duration-500"
                    style={{ width: `${item.real}%` }}
                    title={`${item.name} Real: ${item.real}%`}
                  />
                  <div
                    className="bg-rose-500 h-full transition-all duration-500"
                    style={{ width: `${item.fake}%` }}
                    title={`${item.name} Fake: ${item.fake}%`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-xs bg-emerald-500" />
              <span>Real Probability Ratio</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-xs bg-rose-500" />
              <span>Fake Probability Ratio</span>
            </div>
          </div>
        </div>

        {/* Right: Linguistic Feature Matrix */}
        <div className="lg:col-span-6 bg-slate-50/70 p-5 rounded-xl border border-slate-200/80">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-4 flex items-center justify-between">
            <span>Stylometric & Linguistic Markers</span>
            <span className="text-[11px] font-normal text-slate-400">Heuristic Signals</span>
          </h3>

          <div className="space-y-3">
            {linguistics.map((metric) => {
              // Decide color based on whether high is good or bad
              const isSensational = metric.label.includes('Sensationalism') || metric.label.includes('Emotional');
              let barColor = 'bg-blue-600';
              if (isSensational) {
                barColor = metric.score > 50 ? 'bg-rose-500' : 'bg-emerald-500';
              } else {
                barColor = metric.score > 60 ? 'bg-emerald-500' : 'bg-rose-500';
              }

              return (
                <div key={metric.label} className="bg-white p-3 rounded-lg border border-slate-200/60 shadow-xs">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-800">{metric.label}</span>
                    <span className="font-mono font-bold text-slate-900">{metric.score}/100</span>
                  </div>
                  
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden mb-1.5">
                    <div
                      className={`${barColor} h-full rounded-full transition-all duration-500`}
                      style={{ width: `${metric.score}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="truncate max-w-[280px]">{metric.assessment}</span>
                    <span className="text-slate-400 font-mono shrink-0 ml-2">Target: {metric.idealRange}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
