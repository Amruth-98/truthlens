import React from 'react';
import { AlertCircle, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

interface SampleDataBannerProps {
  currentExampleId: 'real-example' | 'fake-example';
  onSelectExample: (id: 'real-example' | 'fake-example') => void;
}

export const SampleDataBanner: React.FC<SampleDataBannerProps> = ({
  currentExampleId,
  onSelectExample
}) => {
  return (
    <div className="bg-white border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs">
          {/* Disclaimer text */}
          <div className="flex items-center gap-2 text-slate-600">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded font-semibold bg-amber-50 text-amber-800 border border-amber-200">
              <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
              Demo / Sample Data
            </span>
            <span>
              All scores, probabilities, and propagation graphs shown are <strong>curated evaluation benchmarks</strong> for demonstration purposes, not live real-time predictions.
            </span>
          </div>

          {/* Quick toggle between the two screens */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-slate-500 font-medium hidden sm:inline">Switch Screen:</span>
            <div className="inline-flex bg-slate-100 p-1 rounded-lg border border-slate-200">
              <button
                type="button"
                id="btn-switch-screen-real"
                onClick={() => onSelectExample('real-example')}
                className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                  currentExampleId === 'real-example'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                Screen 1: REAL News
              </button>
              <button
                type="button"
                id="btn-switch-screen-fake"
                onClick={() => onSelectExample('fake-example')}
                className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                  currentExampleId === 'fake-example'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                Screen 2: FAKE News
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
