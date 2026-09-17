import React, { useState } from 'react';
import { REAL_NEWS_EXAMPLE, FAKE_NEWS_EXAMPLE } from '../data/mockData';
import { PropagationNetwork } from './PropagationNetwork';
import { Share2, Network, ShieldCheck, ShieldAlert, ArrowRight, Activity, GitFork } from 'lucide-react';

interface PropagationScreenProps {
  onSelectExample: (id: 'real-example' | 'fake-example') => void;
}

export const PropagationScreen: React.FC<PropagationScreenProps> = ({ onSelectExample }) => {
  const [activeNetworkMode, setActiveNetworkMode] = useState<'real' | 'fake'>('real');

  const currentData = activeNetworkMode === 'real' ? REAL_NEWS_EXAMPLE : FAKE_NEWS_EXAMPLE;

  return (
    <div className="space-y-8 pb-16">
      {/* Header & Controls */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-7">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold mb-2">
              <Share2 className="w-3.5 h-3.5" />
              Information Cascade & Social Topology
            </div>
            <h1 className="text-2xl font-bold text-slate-900">
              Social Propagation Analysis Engine
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              Inspect how stories diffuse through digital networks. Organic truth spreads through diverse, credible hubs with natural velocity, while fabricated disinformation relies on astroturfed bot swarms and synchronized burst amplification.
            </p>
          </div>

          {/* Toggle between the 2 networks */}
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200 self-start sm:self-auto">
            <button
              type="button"
              id="prop-tab-real"
              onClick={() => setActiveNetworkMode('real')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg transition-all ${
                activeNetworkMode === 'real'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Organic Diffusion (Real)
            </button>
            <button
              type="button"
              id="prop-tab-fake"
              onClick={() => setActiveNetworkMode('fake')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg transition-all ${
                activeNetworkMode === 'fake'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              Astroturfed Bots (Fake)
            </button>
          </div>
        </div>
      </div>

      {/* Network Component for the active example */}
      <PropagationNetwork
        propagation={currentData.propagation}
        verdict={currentData.verdict}
      />

      {/* Comparative Diagnostic Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-7">
        <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Activity className="w-4 h-4 text-blue-600" />
          Comparative Diffusion Forensics
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-200">
              <tr>
                <th className="px-4 py-3">Diffusion Attribute</th>
                <th className="px-4 py-3 text-emerald-800 bg-emerald-50/50">Screen 1: Organic Network (Real)</th>
                <th className="px-4 py-3 text-rose-800 bg-rose-50/50">Screen 2: Coordinated Network (Fake)</th>
                <th className="px-4 py-3">Diagnostic Significance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-4 py-3 font-bold text-slate-800">Cascade Topology</td>
                <td className="px-4 py-3 font-semibold text-emerald-700">Decentralized Multi-Hub Graph</td>
                <td className="px-4 py-3 font-semibold text-rose-700">Dense Star Graph with Synthetic Satellite Hubs</td>
                <td className="px-4 py-3 text-slate-500">True news has multiple organic entry and verification nodes</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-bold text-slate-800">Bot Ratio</td>
                <td className="px-4 py-3 font-bold text-emerald-700">2.3% (Normal baseline)</td>
                <td className="px-4 py-3 font-bold text-rose-700">89.2% (Severe anomaly)</td>
                <td className="px-4 py-3 text-slate-500">Bot presence &gt;35% is a prime flag of manufactured virality</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-bold text-slate-800">Share Entropy</td>
                <td className="px-4 py-3 font-bold text-slate-900">4.88 / 5.0 (High diversity)</td>
                <td className="px-4 py-3 font-bold text-rose-700">1.14 / 5.0 (Low diversity)</td>
                <td className="px-4 py-3 text-slate-500">Low entropy signals identical automated repost scripts</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-bold text-slate-800">Velocity Curve</td>
                <td className="px-4 py-3 text-slate-700">Gradual logistic adoption curve</td>
                <td className="px-4 py-3 text-rose-700 font-semibold">Immediate exponential burst within 15 min</td>
                <td className="px-4 py-3 text-slate-500">Pre-programmed coordination triggers rapid volume spikes</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-bold text-slate-800">Full Analysis Report</td>
                <td className="px-4 py-3">
                  <button
                    type="button"
                    onClick={() => onSelectExample('real-example')}
                    className="font-bold text-emerald-700 hover:underline inline-flex items-center gap-1"
                  >
                    View Screen 1 Report <ArrowRight className="w-3 h-3" />
                  </button>
                </td>
                <td className="px-4 py-3">
                  <button
                    type="button"
                    onClick={() => onSelectExample('fake-example')}
                    className="font-bold text-rose-700 hover:underline inline-flex items-center gap-1"
                  >
                    View Screen 2 Report <ArrowRight className="w-3 h-3" />
                  </button>
                </td>
                <td className="px-4 py-3 text-slate-400">Jump to full analysis view</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
