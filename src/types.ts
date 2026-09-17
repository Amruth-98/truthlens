export type AnalysisVerdict = 'REAL' | 'FAKE';

export interface ModelScore {
  name: string;
  architecture: string;
  realProbability: number;
  fakeProbability: number;
  inferenceTimeMs: number;
  keyFeature: string;
}

export interface TimelineStep {
  stepNumber: number;
  timestamp: string;
  title: string;
  description: string;
  status: 'verified' | 'warning' | 'flagged' | 'neutral';
  evidence: string;
}

export interface NetworkNode {
  id: string;
  label: string;
  type: 'origin' | 'verified_media' | 'academic' | 'organic_user' | 'bot_cluster' | 'amplifier';
  x: number;
  y: number;
  reach: number;
  isSuspicious: boolean;
  notes?: string;
}

export interface NetworkLink {
  source: string;
  target: string;
  strength: number;
  isSuspicious?: boolean;
}

export interface PropagationData {
  topologyType: string;
  botRatioPercent: number;
  shareEntropyScore: number;
  averageVelocityPerHour: string;
  coordinatedBurstDetected: boolean;
  originSource: string;
  nodes: NetworkNode[];
  links: NetworkLink[];
  summaryNote: string;
}

export interface LinguisticMetric {
  label: string;
  score: number; // 0 to 100
  assessment: string;
  idealRange: string;
}

export interface NewsExample {
  id: 'real-example' | 'fake-example';
  title: string;
  verdict: AnalysisVerdict;
  headline: string;
  author: string;
  publisher: string;
  domain: string;
  publishedDate: string;
  category: string;
  readingTime: string;
  bodyExcerpt: string[];
  tags: string[];
  
  // Probabilities and Confidence
  realProbability: number; // 0 - 100
  fakeProbability: number; // 0 - 100
  confidenceScore: number; // 0 - 100
  confidenceLevel: 'Very High' | 'High' | 'Moderate' | 'Low';
  verdictSummary: string;
  
  // Models
  models: ModelScore[];
  
  // Linguistics / simple chart features
  linguistics: LinguisticMetric[];

  // Timeline
  timeline: TimelineStep[];

  // Propagation
  propagation: PropagationData;
}

export type NavigationTab = 'overview' | 'analyze' | 'models' | 'propagation';
