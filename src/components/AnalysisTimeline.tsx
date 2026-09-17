import React from 'react';
import { TimelineStep } from '../types';
import { Clock, CheckCircle2, AlertTriangle, XCircle, Search, Database, Network, ShieldCheck } from 'lucide-react';

interface AnalysisTimelineProps {
  timeline: TimelineStep[];
  verdict: 'REAL' | 'FAKE';
}

export const AnalysisTimeline: React.FC<AnalysisTimelineProps> = ({
  timeline,
  verdict
}) => {
  const isReal = verdict === 'REAL';

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-7">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-5 border-b border-slate-100 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">
              Analysis Verification Timeline
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Millisecond-level forensic verification stages from ingestion to final cryptographic attestation
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-slate-50 px-3 py-1 rounded-lg border border-slate-200">
          <span>Total Pipeline Execution:</span>
          <strong className="text-slate-800 font-bold">0.94 seconds</strong>
        </div>
      </div>

      {/* Timeline Steps */}
      <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3.5 sm:before:left-4.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
        {timeline.map((step) => {
          const isFlagged = step.status === 'flagged';
          const isWarning = step.status === 'warning';

          return (
            <div key={step.stepNumber} className="relative group">
              {/* Step indicator dot on timeline */}
              <div
                className={`absolute -left-6 sm:-left-8 top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center bg-white transition-colors ${
                  isFlagged
                    ? 'border-rose-500 text-rose-500 ring-4 ring-rose-50'
                    : isWarning
                    ? 'border-amber-500 text-amber-500 ring-4 ring-amber-50'
                    : 'border-emerald-500 text-emerald-600 ring-4 ring-emerald-50'
                }`}
              >
                {isFlagged ? (
                  <XCircle className="w-3 h-3 text-rose-600" />
                ) : isWarning ? (
                  <AlertTriangle className="w-3 h-3 text-amber-600" />
                ) : (
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                )}
              </div>

              {/* Step Card Content */}
              <div
                className={`p-4 rounded-xl border transition-all ${
                  isFlagged
                    ? 'bg-rose-50/40 border-rose-200/90'
                    : 'bg-slate-50/60 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-200/80 text-slate-700 font-mono">
                      Phase {step.stepNumber}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      {step.title}
                    </h3>
                  </div>

                  <span className="text-xs font-mono font-medium text-slate-500">
                    +{step.timestamp}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Evidence badge */}
                <div className="mt-2.5 pt-2.5 border-t border-slate-200/60 flex items-center gap-2 text-xs">
                  <span className="text-slate-400 font-semibold">Evidence / Signal:</span>
                  <span
                    className={`font-medium ${
                      isFlagged
                        ? 'text-rose-700 font-semibold'
                        : 'text-slate-700'
                    }`}
                  >
                    {step.evidence}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
