import React from 'react';
import { AnalysisVerdict } from '../types';
import { Globe, User, Calendar, Clock, Tag, ExternalLink, BookmarkCheck, AlertOctagon } from 'lucide-react';

interface ArticleCardProps {
  headline: string;
  verdict: AnalysisVerdict;
  author: string;
  publisher: string;
  domain: string;
  publishedDate: string;
  category: string;
  readingTime: string;
  bodyExcerpt: string[];
  tags: string[];
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  headline,
  verdict,
  author,
  publisher,
  domain,
  publishedDate,
  category,
  readingTime,
  bodyExcerpt,
  tags
}) => {
  const isReal = verdict === 'REAL';

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
      {/* Article Header & Metadata Bar */}
      <div className="border-b border-slate-100 bg-slate-50/60 px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              <Globe className="w-3.5 h-3.5" />
              {domain}
            </span>
            <span className="text-slate-400">•</span>
            <span className="font-semibold text-slate-700">{publisher}</span>
          </div>

          <div className="flex items-center gap-4 text-slate-500">
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {publishedDate}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {readingTime}
            </span>
          </div>
        </div>
      </div>

      {/* Main Headline & Excerpt */}
      <div className="p-6 sm:p-7">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
            {category}
          </span>
          <span className="text-slate-300">|</span>
          <span className="inline-flex items-center gap-1 text-xs text-slate-600 font-medium">
            <User className="w-3.5 h-3.5 text-slate-400" />
            {author}
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
          {headline}
        </h1>

        {/* Article Excerpt Box */}
        <div className="mt-6 pt-6 border-t border-slate-100">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Analyzed Text Sample
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              3 Paragraphs • Ingested via Parser
            </span>
          </div>

          <div className="space-y-3.5 text-slate-700 text-sm sm:text-base leading-relaxed font-normal bg-slate-50/50 p-5 rounded-xl border border-slate-200/80">
            {bodyExcerpt.map((paragraph, index) => (
              <p key={index} className="text-slate-700">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap items-center gap-1.5 pt-4 border-t border-slate-100">
          <span className="text-xs font-semibold text-slate-400 inline-flex items-center gap-1 mr-1">
            <Tag className="w-3 h-3" /> Extracted Entities:
          </span>
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md font-medium bg-slate-100 text-slate-700 hover:bg-slate-200/70 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
