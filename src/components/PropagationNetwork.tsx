import React, { useState } from 'react';
import { PropagationData, NetworkNode } from '../types';
import { Share2, Bot, Gauge, Zap, AlertTriangle, ShieldCheck, Info, UserCheck, HelpCircle } from 'lucide-react';

interface PropagationNetworkProps {
  propagation: PropagationData;
  verdict: 'REAL' | 'FAKE';
}

export const PropagationNetwork: React.FC<PropagationNetworkProps> = ({
  propagation,
  verdict
}) => {
  const isReal = verdict === 'REAL';
  const [selectedNode, setSelectedNode] = useState<NetworkNode | null>(propagation.nodes[0] || null);

  // Helper for node styling
  const getNodeColor = (node: NetworkNode) => {
    if (node.isSuspicious) {
      return {
        fill: '#f43f5e', // rose-500
        stroke: '#be123c', // rose-700
        glow: 'rgba(244, 63, 94, 0.2)'
      };
    }
    if (node.type === 'origin') {
      return {
        fill: '#2563eb', // blue-600
        stroke: '#1d4ed8', // blue-700
        glow: 'rgba(37, 99, 235, 0.2)'
      };
    }
    if (node.type === 'academic' || node.type === 'verified_media') {
      return {
        fill: '#059669', // emerald-600
        stroke: '#047857',
        glow: 'rgba(5, 150, 105, 0.2)'
      };
    }
    return {
      fill: '#64748b', // slate-500
      stroke: '#475569',
      glow: 'rgba(100, 116, 139, 0.15)'
    };
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-7">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-5 border-b border-slate-100 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Share2 className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">
              Social Propagation & Network Diffusion
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Structural topology inspection, bot cluster detection, and cascade dissemination entropy
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold ${
              isReal
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                : 'bg-rose-50 text-rose-800 border border-rose-200'
            }`}
          >
            {isReal ? <ShieldCheck className="w-3.5 h-3.5" /> : <AlertTriangle className="w-3.5 h-3.5" />}
            {propagation.topologyType}
          </span>
        </div>
      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-6">
        {/* Bot Activity Ratio */}
        <div className="bg-slate-50/70 p-3.5 rounded-xl border border-slate-200/80">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span className="font-semibold uppercase tracking-wider text-[10px]">Bot Activity Ratio</span>
            <Bot className={`w-3.5 h-3.5 ${propagation.botRatioPercent > 30 ? 'text-rose-500' : 'text-slate-400'}`} />
          </div>
          <div className="flex items-baseline gap-2">
            <span
              className={`text-2xl font-black ${
                propagation.botRatioPercent > 30 ? 'text-rose-600' : 'text-emerald-700'
              }`}
            >
              {propagation.botRatioPercent}%
            </span>
            <span className="text-[11px] text-slate-500 font-medium">
              {propagation.botRatioPercent > 30 ? 'High Inauthenticity' : 'Normal Baseline'}
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-1 mt-2">
            <div
              className={`h-full rounded-full ${
                propagation.botRatioPercent > 30 ? 'bg-rose-500' : 'bg-emerald-500'
              }`}
              style={{ width: `${Math.min(100, propagation.botRatioPercent)}%` }}
            />
          </div>
        </div>

        {/* Share Entropy */}
        <div className="bg-slate-50/70 p-3.5 rounded-xl border border-slate-200/80">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span className="font-semibold uppercase tracking-wider text-[10px]">Cascade Entropy</span>
            <Gauge className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-slate-900">
              {propagation.shareEntropyScore.toFixed(2)}
            </span>
            <span className="text-[11px] text-slate-500 font-medium">
              {propagation.shareEntropyScore > 3.0 ? 'Diverse Organic' : 'Low / Synchronized'}
            </span>
          </div>
          <p className="text-[10px] text-slate-500 mt-1.5 font-mono">
            Scale: 0.0 (Astroturfed) – 5.0 (Organic)
          </p>
        </div>

        {/* Spread Velocity */}
        <div className="bg-slate-50/70 p-3.5 rounded-xl border border-slate-200/80">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span className="font-semibold uppercase tracking-wider text-[10px]">Viral Velocity</span>
            <Zap className="w-3.5 h-3.5 text-amber-500" />
          </div>
          <div className="text-sm font-bold text-slate-900 mt-1 leading-snug">
            {propagation.averageVelocityPerHour}
          </div>
          <p className="text-[10px] text-slate-500 mt-1 font-mono">
            Burst Trigger: {propagation.coordinatedBurstDetected ? 'DETECTED (Synthetic)' : 'None (Natural)'}
          </p>
        </div>

        {/* Origin Seed */}
        <div className="bg-slate-50/70 p-3.5 rounded-xl border border-slate-200/80">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span className="font-semibold uppercase tracking-wider text-[10px]">Seed Origin Point</span>
            <UserCheck className="w-3.5 h-3.5 text-blue-500" />
          </div>
          <div className="text-xs font-bold text-slate-900 mt-1 line-clamp-2 leading-tight">
            {propagation.originSource}
          </div>
          <p className="text-[10px] text-slate-400 mt-1 font-mono">
            {isReal ? 'Verified News Bureau' : 'Disposable Burner Channel'}
          </p>
        </div>
      </div>

      {/* Network Graph Visual Canvas & Node Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Interactive SVG Network Diagram */}
        <div className="lg:col-span-8 bg-slate-50/60 rounded-xl border border-slate-200/80 p-4 relative overflow-hidden">
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="font-bold text-slate-700 flex items-center gap-1.5">
              <span>Interactive Diffusion Topology</span>
              <span className="text-[11px] font-normal text-slate-400">(Click any node to inspect forensics)</span>
            </span>

            {/* Legend */}
            <div className="flex items-center gap-3 text-[11px]">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                Origin
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                Verified/Academic
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                Bot Cluster/Suspicious
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                Organic
              </span>
            </div>
          </div>

          {/* SVG Diagram Canvas */}
          <div className="w-full h-80 sm:h-96 relative bg-white rounded-lg border border-slate-200 shadow-inner flex items-center justify-center">
            <svg
              className="w-full h-full"
              viewBox="0 0 700 340"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Background grid pattern */}
              <defs>
                <pattern id={`grid-${verdict}`} width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="700" height="340" fill={`url(#grid-${verdict})`} />

              {/* Links / Edges */}
              {propagation.links.map((link, idx) => {
                const sourceNode = propagation.nodes.find((n) => n.id === link.source);
                const targetNode = propagation.nodes.find((n) => n.id === link.target);
                if (!sourceNode || !targetNode) return null;

                const isLinkSuspicious = link.isSuspicious || sourceNode.isSuspicious || targetNode.isSuspicious;

                return (
                  <line
                    key={`link-${idx}`}
                    x1={sourceNode.x}
                    y1={sourceNode.y}
                    x2={targetNode.x}
                    y2={targetNode.y}
                    stroke={isLinkSuspicious ? '#fca5a5' : '#cbd5e1'}
                    strokeWidth={link.strength * 2.8}
                    strokeDasharray={isLinkSuspicious ? '4 3' : undefined}
                    className="transition-all"
                  />
                );
              })}

              {/* Nodes */}
              {propagation.nodes.map((node) => {
                const isSelected = selectedNode?.id === node.id;
                const colors = getNodeColor(node);
                const radius = Math.max(12, Math.min(22, node.reach / 4.5));

                return (
                  <g
                    key={node.id}
                    className="cursor-pointer transition-transform hover:scale-110"
                    onClick={() => setSelectedNode(node)}
                  >
                    {/* Pulsing ring if selected or suspicious bot swarm */}
                    {(isSelected || (node.isSuspicious && !isReal)) && (
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={radius + 6}
                        fill="none"
                        stroke={colors.fill}
                        strokeWidth="2"
                        opacity={isSelected ? 0.9 : 0.4}
                        strokeDasharray={node.isSuspicious ? '3 2' : undefined}
                      />
                    )}

                    {/* Node base circle */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={radius}
                      fill={colors.fill}
                      stroke="#ffffff"
                      strokeWidth="2.5"
                    />

                    {/* Node label */}
                    <text
                      x={node.x}
                      y={node.y + radius + 13}
                      textAnchor="middle"
                      className="text-[10px] font-semibold select-none pointer-events-none fill-slate-700"
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Right: Selected Node Forensics Inspector */}
        <div className="lg:col-span-4 bg-slate-50/70 rounded-xl border border-slate-200/80 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-200/70 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Node Inspector
              </span>
              {selectedNode?.isSuspicious ? (
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800">
                  FLAGGED ANOMALY
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  LEGITIMATE NODE
                </span>
              )}
            </div>

            {selectedNode ? (
              <div className="space-y-3">
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    {selectedNode.label}
                  </h4>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">
                    Category: {selectedNode.type.replace('_', ' ').toUpperCase()}
                  </p>
                </div>

                <div className="bg-white p-3 rounded-lg border border-slate-200/70 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Influence Reach Index:</span>
                    <span className="font-bold text-slate-800">{selectedNode.reach} / 100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Authenticity Score:</span>
                    <span className={`font-bold ${selectedNode.isSuspicious ? 'text-rose-600' : 'text-emerald-600'}`}>
                      {selectedNode.isSuspicious ? 'Low (Suspicious Bot Behavior)' : 'High (Verified Activity)'}
                    </span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-lg border border-slate-200/70">
                  <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                    Forensic Notes
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {selectedNode.notes || 'Normal organic user participating in open news discussion.'}
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-10 text-slate-400 text-xs">
                Select any node from the network graph to view its verification properties.
              </div>
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200/70">
            <p className="text-xs text-slate-600 leading-relaxed bg-white p-3 rounded-lg border border-slate-200/60">
              <strong className="text-slate-800">Diffusion Summary:</strong> {propagation.summaryNote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
