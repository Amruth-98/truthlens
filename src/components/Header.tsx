import React from 'react';
import { NavigationTab } from '../types';
import { ShieldCheck, Layers, Share2, Activity, Sparkles, SlidersHorizontal } from 'lucide-react';

interface HeaderProps {
  activeTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
  activeExampleId: 'real-example' | 'fake-example';
  onSelectExample: (id: 'real-example' | 'fake-example') => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  activeExampleId,
  onSelectExample
}) => {
  const navItems: { id: NavigationTab; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Overview', icon: <Activity className="w-4 h-4" /> },
    { id: 'analyze', label: 'Analyze', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'models', label: 'Models', icon: <SlidersHorizontal className="w-4 h-4" /> },
    { id: 'propagation', label: 'Propagation', icon: <Share2 className="w-4 h-4" /> }
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-8">
            <button
              type="button"
              id="brand-logo-btn"
              onClick={() => onSelectTab('overview')}
              className="flex items-center gap-3 text-left focus:outline-hidden group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-xs group-hover:bg-blue-700 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-lg text-slate-900 tracking-tight">TruthLens</span>
                  <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">AI</span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium leading-none">Automated Veracity Intelligence</p>
              </div>
            </button>

            {/* Main Navigation Tabs */}
            <nav className="hidden md:flex items-center space-x-1" aria-label="Main Navigation">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-tab-${item.id}`}
                    type="button"
                    onClick={() => onSelectTab(item.id)}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 text-sm font-semibold rounded-lg transition-all ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 border border-blue-200/80 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right Header Controls */}
          <div className="flex items-center gap-3">
            {/* Quick Demo Switcher when on Analyze tab */}
            {activeTab === 'analyze' && (
              <div className="hidden lg:flex items-center gap-2 px-2 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs">
                <span className="text-slate-500 font-medium">Viewing:</span>
                <span className={`font-bold px-2 py-0.5 rounded text-[11px] ${
                  activeExampleId === 'real-example'
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-rose-100 text-rose-800'
                }`}>
                  {activeExampleId === 'real-example' ? 'Real News Report' : 'Fake News Report'}
                </span>
              </div>
            )}

            <div className="flex items-center gap-2 border-l border-slate-200 pl-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-600 hidden sm:inline">Engine Ready (3 Models Active)</span>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Tabs */}
        <div className="flex md:hidden border-t border-slate-200 py-2 space-x-1 overflow-x-auto">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                id={`mobile-nav-${item.id}`}
                onClick={() => onSelectTab(item.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
