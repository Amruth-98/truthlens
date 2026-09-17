import React from 'react';
import { NewsExample } from '../types';
import { VerdictBadge } from './VerdictBadge';
import { ArticleCard } from './ArticleCard';
import { ModelProbabilityBars } from './ModelProbabilityBars';
import { ProbabilityChart } from './ProbabilityChart';
import { AnalysisTimeline } from './AnalysisTimeline';
import { PropagationNetwork } from './PropagationNetwork';
import { CheckCircle2, ShieldAlert, Sparkles, RefreshCw, FileText, ArrowRight } from 'lucide-react';

interface AnalysisScreenProps {
  example: NewsExample;
  onSwitchExample: (id: 'real-example' | 'fake-example') => void;
}

export const AnalysisScreen: React.FC<AnalysisScreenProps> = ({
  example,
  onSwitchExample
}) => {
  const isReal = example.verdict === 'REAL';

  return (
    <div className="space-y-8 pb-16">
      {/* Top Breadcrumb & Screen Selector Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-3">
          <div
            className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm ${
              isReal
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                : 'bg-rose-100 text-rose-800 border border-rose-300'
            }`}
          >
            {isReal ? 'S1' : 'S2'}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Active Analysis Screen
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-mono text-slate-400">ID: {example.id}</span>
            </div>
            <h1 className="text-lg font-bold text-slate-900 leading-none mt-0.5">
              {example.title}
            </h1>
          </div>
        </div>

        {/* Action button to switch to the counterpart example */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            id="switch-example-cta"
            onClick={() => onSwitchExample(isReal ? 'fake-example' : 'real-example')}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 shadow-xs transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5 text-blue-600" />
            <span>Switch to {isReal ? 'Screen 2 (Fake News Example)' : 'Screen 1 (Real News Example)'}</span>
            <ArrowRight className="w-3 h-3 text-slate-400" />
          </button>
        </div>
      </div>

      {/* 1. VERDICT BADGE & PROBABILITY CARDS */}
      <VerdictBadge
        verdict={example.verdict}
        realProbability={example.realProbability}
        fakeProbability={example.fakeProbability}
        confidenceScore={example.confidenceScore}
        confidenceLevel={example.confidenceLevel}
        verdictSummary={example.verdictSummary}
      />

      {/* 2. REALISTIC / FABRICATED ARTICLE SAMPLE */}
      <ArticleCard
        headline={example.headline}
        verdict={example.verdict}
        author={example.author}
        publisher={example.publisher}
        domain={example.domain}
        publishedDate={example.publishedDate}
        category={example.category}
        readingTime={example.readingTime}
        bodyExcerpt={example.bodyExcerpt}
        tags={example.tags}
      />

      {/* 3. THREE MODEL PROBABILITY BARS */}
      <ModelProbabilityBars
        models={example.models}
        verdict={example.verdict}
      />

      {/* 4. SIMPLE PROBABILITY CHART & LINGUISTIC FEATURES */}
      <ProbabilityChart
        models={example.models}
        realProbability={example.realProbability}
        fakeProbability={example.fakeProbability}
        linguistics={example.linguistics}
        verdict={example.verdict}
      />

      {/* 5. CLEAN ANALYSIS TIMELINE */}
      <AnalysisTimeline
        timeline={example.timeline}
        verdict={example.verdict}
      />

      {/* 6. PROPAGATION NETWORK SECTION */}
      <PropagationNetwork
        propagation={example.propagation}
        verdict={example.verdict}
      />
    </div>
  );
};
