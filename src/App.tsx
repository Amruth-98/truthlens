import React, { useState } from 'react';
import { NavigationTab } from './types';
import { REAL_NEWS_EXAMPLE, FAKE_NEWS_EXAMPLE } from './data/mockData';
import { Header } from './components/Header';
import { SampleDataBanner } from './components/SampleDataBanner';
import { AnalysisScreen } from './components/AnalysisScreen';
import { OverviewScreen } from './components/OverviewScreen';
import { ModelsScreen } from './components/ModelsScreen';
import { PropagationScreen } from './components/PropagationScreen';
import { Shield, Sparkles, CheckCircle2, AlertOctagon, ExternalLink } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('analyze');
  const [activeExampleId, setActiveExampleId] = useState<'real-example' | 'fake-example'>('real-example');

  const currentExample = activeExampleId === 'real-example' ? REAL_NEWS_EXAMPLE : FAKE_NEWS_EXAMPLE;

  const handleSelectExample = (id: 'real-example' | 'fake-example') => {
    setActiveExampleId(id);
    setActiveTab('analyze');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-blue-100 selection:text-blue-900">
      {/* Sample Demo Data Banner */}
      <SampleDataBanner
        currentExampleId={activeExampleId}
        onSelectExample={(id) => setActiveExampleId(id)}
      />

      {/* Main App Header */}
      <Header
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        activeExampleId={activeExampleId}
        onSelectExample={setActiveExampleId}
      />

      {/* Main Content Area */}
      <main className="grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {activeTab === 'analyze' && (
          <AnalysisScreen
            example={currentExample}
            onSwitchExample={setActiveExampleId}
          />
        )}

        {activeTab === 'overview' && (
          <OverviewScreen
            onNavigateToAnalyze={handleSelectExample}
            onNavigateToModels={() => setActiveTab('models')}
            onNavigateToPropagation={() => setActiveTab('propagation')}
          />
        )}

        {activeTab === 'models' && (
          <ModelsScreen
            onSelectExample={handleSelectExample}
          />
        )}

        {activeTab === 'propagation' && (
          <PropagationScreen
            onSelectExample={handleSelectExample}
          />
        )}
      </main>

      {/* Professional SaaS Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-md bg-blue-600 flex items-center justify-center text-white">
                <Shield className="w-3 h-3" />
              </div>
              <span className="font-bold text-slate-800">TruthLens AI</span>
              <span>— Automated Veracity & Social Propagation Analysis</span>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-slate-400">
                Frontend UI Demo Specification • Presentation Ready
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleSelectExample('real-example')}
                  className="hover:text-emerald-600 transition-colors font-medium"
                >
                  Screen 1 (Real)
                </button>
                <span className="text-slate-300">•</span>
                <button
                  type="button"
                  onClick={() => handleSelectExample('fake-example')}
                  className="hover:text-rose-600 transition-colors font-medium"
                >
                  Screen 2 (Fake)
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
