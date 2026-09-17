import { NewsExample } from '../types';

export const REAL_NEWS_EXAMPLE: NewsExample = {
  id: 'real-example',
  title: 'Example 1: Legitimate Science Wire Article',
  verdict: 'REAL',
  headline: 'James Webb Space Telescope Confirms Detection of Carbon-Bearing Molecules in Habitable-Zone Exoplanet Atmosphere',
  author: 'Dr. Evelyn Martinez, Senior Science Correspondent',
  publisher: 'Global Science Wire / Reuters Syndication',
  domain: 'reuters.com/science',
  publishedDate: 'September 12, 2025 • 14:30 UTC',
  category: 'Astrophysics & Space',
  readingTime: '4 min read',
  tags: ['JWST', 'Exoplanets', 'Astrophysics', 'NASA', 'Peer-Reviewed'],
  bodyExcerpt: [
    "NASA's James Webb Space Telescope (JWST) has identified carbon-bearing molecules, including methane (CH₄) and carbon dioxide (CO₂), within the upper atmospheric layers of exoplanet K2-18 b, situated approximately 120 light-years from Earth in the constellation Leo.",
    "The sub-Neptune world orbits within the habitable zone of cool dwarf star K2-18 and has roughly 8.6 times the mass of Earth. Spectral analysis conducted by the international research consortium revealed an abundance of carbon compounds alongside a marked scarcity of ammonia, lending empirical weight to the hycean world hypothesis.",
    "The underlying observational datasets have been archived across the Space Telescope Science Institute (STScI) public repository and independently cross-validated with observations from the University of Cambridge and ESA archives (DOI: 10.1038/s41550-023-02078-3)."
  ],
  realProbability: 94.8,
  fakeProbability: 5.2,
  confidenceScore: 97.2,
  confidenceLevel: 'Very High',
  verdictSummary: 'High factual consistency corroborated by peer-reviewed DOI publications, established institutional sources, neutral analytical tone, and organic dissemination topology.',
  models: [
    {
      name: 'TF-IDF + Logistic Regression',
      architecture: 'N-gram Tokenizer (1-3 grams) + L2 Regularized Linear Classifier',
      realProbability: 92.4,
      fakeProbability: 7.6,
      inferenceTimeMs: 14,
      keyFeature: 'High frequency of formal scientific terminology, balanced passive voice, zero clickbait tokens.'
    },
    {
      name: 'MPNet + XGBoost',
      architecture: 'All-MPNet-base-v2 (768d Embeddings) + Gradient Boosted Trees',
      realProbability: 96.5,
      fakeProbability: 3.5,
      inferenceTimeMs: 82,
      keyFeature: 'Semantic alignment of 98.4% with verified NASA/ESA astrophysics press bulletins.'
    },
    {
      name: 'MiniLM + XGBoost',
      architecture: 'All-MiniLM-L6-v2 (384d Distilled Vector) + Tuned XGBoost',
      realProbability: 95.1,
      fakeProbability: 4.9,
      inferenceTimeMs: 38,
      keyFeature: 'Absence of syntactical exaggeration; tight semantic coherence across paragraphs.'
    }
  ],
  linguistics: [
    { label: 'Factual Entity Density', score: 94, assessment: 'Contains 18 verified named entities (NASA, JWST, K2-18 b, ESA)', idealRange: 'High (>80%)' },
    { label: 'Citation / Attribution Index', score: 96, assessment: 'Direct DOI links, named scientific consortium lead, institutional wire attribution', idealRange: 'High (>85%)' },
    { label: 'Sensationalism & Urgency', score: 6, assessment: 'Clinical, neutral reporting tone without imperative or alarmist markers', idealRange: 'Low (<20%)' },
    { label: 'Emotional Valence Bias', score: 11, assessment: 'Objective sentiment balance (valence score +0.08 on -1.0 to +1.0 scale)', idealRange: 'Neutral (<25%)' },
    { label: 'Lexical Diversity (TTR)', score: 88, assessment: 'Type-token ratio 0.74, indicating nuanced vocabulary and technical depth', idealRange: 'Moderate-High' }
  ],
  timeline: [
    {
      stepNumber: 1,
      timestamp: '00:00.04s',
      title: 'Provenance & Domain Reputation Ingestion',
      description: 'Validated domain reuters.com: TLS 1.3 verified, WHOIS domain registration established 1996 (29 years), verified DNSSEC signature.',
      status: 'verified',
      evidence: 'Domain Trust Score: 98/100 • NewsGuard High Credibility'
    },
    {
      stepNumber: 2,
      timestamp: '00:00.18s',
      title: 'Syntactic & Lexical Feature Extraction',
      description: 'Tokenized 412 words. Analyzed Flesch-Kincaid grade level (13.8), punctuation cadence, capitalized letter ratio (3.2%), and absence of hyperbolic phrasing.',
      status: 'verified',
      evidence: 'Clickbait Index: 0.04 (Safe threshold < 0.25)'
    },
    {
      stepNumber: 3,
      timestamp: '00:00.39s',
      title: 'Knowledge Graph Cross-Corroboration',
      description: 'Cross-matched claim entities against scientific corpus: NASA Exoplanet Exploration Program, arXiv:2309.05566, Nature Astronomy repository.',
      status: 'verified',
      evidence: 'Fact-Check Alignment: 99.1% factual concordance'
    },
    {
      stepNumber: 4,
      timestamp: '00:00.62s',
      title: 'Multi-Model Inference Scoring',
      description: 'Parallelized classification across TF-IDF, MPNet, and MiniLM inference pipelines. All models strongly agreed with <4% variance.',
      status: 'verified',
      evidence: 'Ensemble Mean Real Probability: 94.8% • StdDev: 1.7%'
    },
    {
      stepNumber: 5,
      timestamp: '00:00.79s',
      title: 'Social Cascade & Propagation Audit',
      description: 'Analyzed early retweet & syndication network. Identified organic distribution pattern driven by accredited journalists and research universities.',
      status: 'verified',
      evidence: 'Synthetic Bot Activity: 2.3% (Normal platform background noise)'
    },
    {
      stepNumber: 6,
      timestamp: '00:00.91s',
      title: 'Final Veracity Synthesis & Cryptographic Attestation',
      description: 'Synthesized probabilistic assessment into authoritative verification manifest. Output generated with audit record TL-2025-0912-VERIFIED.',
      status: 'verified',
      evidence: 'Verdict: REAL (97.2% Confidence)'
    }
  ],
  propagation: {
    topologyType: 'Decentralized Organic Diffusion',
    botRatioPercent: 2.3,
    shareEntropyScore: 4.88,
    averageVelocityPerHour: '184 shares / hr (Natural viral arc)',
    coordinatedBurstDetected: false,
    originSource: 'Syndicated Press Bureau (Wire Service)',
    summaryNote: 'Propagation traces a textbook organic diffusion cascade: originating from accredited wire press, picked up by institutional science accounts, followed by gradual natural public engagement with high retweet diversity.',
    nodes: [
      { id: 'n1', label: 'Reuters Science Wire', type: 'origin', x: 80, y: 150, reach: 95, isSuspicious: false, notes: 'Original primary wire report' },
      { id: 'n2', label: 'NASA Goddard Desk', type: 'academic', x: 200, y: 80, reach: 88, isSuspicious: false, notes: 'Institutional corroboration' },
      { id: 'n3', label: 'Space Telescope Science Inst.', type: 'academic', x: 220, y: 220, reach: 82, isSuspicious: false, notes: 'Data repository citation' },
      { id: 'n4', label: 'BBC Science News', type: 'verified_media', x: 340, y: 70, reach: 91, isSuspicious: false, notes: 'Independent secondary coverage' },
      { id: 'n5', label: 'Scientific American', type: 'verified_media', x: 360, y: 170, reach: 76, isSuspicious: false, notes: 'Analysis commentary' },
      { id: 'n6', label: 'Cambridge Astrophysics', type: 'academic', x: 330, y: 260, reach: 74, isSuspicious: false, notes: 'Researcher lab thread' },
      { id: 'n7', label: 'Science Journalists Hub', type: 'organic_user', x: 480, y: 110, reach: 64, isSuspicious: false, notes: 'Independent journalist shares' },
      { id: 'n8', label: 'Public Discussion Community', type: 'organic_user', x: 500, y: 210, reach: 55, isSuspicious: false, notes: 'Discussion & replies' },
      { id: 'n9', label: 'Astronomy Enthusiasts', type: 'organic_user', x: 580, y: 160, reach: 45, isSuspicious: false, notes: 'General organic retweets' }
    ],
    links: [
      { source: 'n1', target: 'n2', strength: 0.9 },
      { source: 'n1', target: 'n3', strength: 0.85 },
      { source: 'n2', target: 'n4', strength: 0.8 },
      { source: 'n3', target: 'n6', strength: 0.75 },
      { source: 'n4', target: 'n5', strength: 0.7 },
      { source: 'n4', target: 'n7', strength: 0.65 },
      { source: 'n5', target: 'n8', strength: 0.6 },
      { source: 'n6', target: 'n7', strength: 0.6 },
      { source: 'n7', target: 'n8', strength: 0.7 },
      { source: 'n8', target: 'n9', strength: 0.55 }
    ]
  }
};

export const FAKE_NEWS_EXAMPLE: NewsExample = {
  id: 'fake-example',
  title: 'Example 2: Fabricated Disinformation Article',
  verdict: 'FAKE',
  headline: 'Emergency Directive #9412 Signed: Mandatory 45% Federal Surtax on Private Wells & Off-Grid Solar Starting Next Month',
  author: 'Patriot Sentinel Staff (Anonymous)',
  publisher: 'FreedomAlertDaily-News.co.vu',
  domain: 'freedomalertdaily-news.co.vu/breaking',
  publishedDate: 'October 04, 2025 • 03:14 UTC',
  category: 'Public Policy / Crisis Rumors',
  readingTime: '2 min read',
  tags: ['Well Water Tax', 'Off-Grid Bans', 'Secret Directive', 'Federal Order', 'Viral Alert'],
  bodyExcerpt: [
    "BREAKING EXCLUSIVE: In an unprecedented midnight executive session behind closed doors, federal bureaucrats signed Emergency Directive #9412 imposing an immediate 45% excise tax on private groundwater wells and off-grid residential solar panel generation nationwide.",
    "Whistleblowers inside the regulatory agency claim armed inspection teams will begin mandatory meter installations on private homesteads starting next Monday. Major corporate news outlets are actively suppressing this news under direct federal gag orders.",
    "Legal scholars warn that citizens who fail to register their wellhead coordinates before the deadline face immediate property liens and asset seizures without trial. Share this viral emergency alert everywhere before tech oligarchs delete it!"
  ],
  realProbability: 3.6,
  fakeProbability: 96.4,
  confidenceScore: 98.4,
  confidenceLevel: 'Very High',
  verdictSummary: 'Critical deception indicators detected: fabricated government directive with 0 official records, extreme panic-inducing rhetoric, anonymous author, burner domain, and synchronized bot network amplification.',
  models: [
    {
      name: 'TF-IDF + Logistic Regression',
      architecture: 'N-gram Tokenizer (1-3 grams) + L2 Regularized Linear Classifier',
      realProbability: 5.1,
      fakeProbability: 94.9,
      inferenceTimeMs: 12,
      keyFeature: 'High density of urgency triggers ("BREAKING", "midnight", "gag orders", "seizures without trial", "share before deleted").'
    },
    {
      name: 'MPNet + XGBoost',
      architecture: 'All-MPNet-base-v2 (768d Embeddings) + Gradient Boosted Trees',
      realProbability: 2.8,
      fakeProbability: 97.2,
      inferenceTimeMs: 79,
      keyFeature: 'Cosine similarity 0.96 with known fabricated sovereign-citizen tax rumor vector archetypes.'
    },
    {
      name: 'MiniLM + XGBoost',
      architecture: 'All-MiniLM-L6-v2 (384d Distilled Vector) + Tuned XGBoost',
      realProbability: 3.9,
      fakeProbability: 96.1,
      inferenceTimeMs: 36,
      keyFeature: 'Absence of verifiable legislative citations, zero cross-statute references in embedding manifold.'
    }
  ],
  linguistics: [
    { label: 'Factual Entity Density', score: 12, assessment: 'Fails verification: "Directive #9412" does not exist in the Federal Register', idealRange: 'High (>80%)' },
    { label: 'Citation / Attribution Index', score: 4, assessment: 'Zero verifiable links; cites vague "unnamed whistleblowers" and "legal scholars"', idealRange: 'High (>85%)' },
    { label: 'Sensationalism & Urgency', score: 98, assessment: 'Extreme urgency: All-caps words, impending doom deadlines, calls to viral redistribution', idealRange: 'Low (<20%)' },
    { label: 'Emotional Valence Bias', score: 94, assessment: 'Intense negative fear/anger arousal index (-0.89 on sentiment axis)', idealRange: 'Neutral (<25%)' },
    { label: 'Lexical Diversity (TTR)', score: 32, assessment: 'Repetitive emotive phrasing, shallow syntax, heavy rhetorical exaggeration', idealRange: 'Moderate-High' }
  ],
  timeline: [
    {
      stepNumber: 1,
      timestamp: '00:00.03s',
      title: 'Domain & Origin Provenance Triage',
      description: 'Flagged domain freedomalertdaily-news.co.vu: Registered only 8 days ago via offshore privacy shield, hosted on known bulletproof server.',
      status: 'flagged',
      evidence: 'Domain Trust Score: 4/100 • Blacklist Status: Flagged on 3 DNS threat feeds'
    },
    {
      stepNumber: 2,
      timestamp: '00:00.14s',
      title: 'Lexical Deconstruction & Disinformation Markers',
      description: 'Identified 26 severe manipulative rhetoric patterns including coercive calls to action ("Share before it is deleted"), unverified conspiracies, and threat framing.',
      status: 'flagged',
      evidence: 'Sensationalism Score: 98/100 (Severe Anomaly)'
    },
    {
      stepNumber: 3,
      timestamp: '00:00.36s',
      title: 'Legislative Database & Federal Register Lookup',
      description: 'Queried Federal Register API, Congress.gov legislation indices, and IRS regulatory bulletins for "Directive #9412" and "Well Water Excise Surtax".',
      status: 'flagged',
      evidence: 'Corroboration: 0 matches found • Confirmed nonexistent legislation'
    },
    {
      stepNumber: 4,
      timestamp: '00:00.58s',
      title: 'Parallel Model Classification Ensemble',
      description: 'Evaluated text through all three model engines. Every model independently returned >94% fake news classification with unanimous consensus.',
      status: 'flagged',
      evidence: 'Ensemble Mean Fake Probability: 96.4% • Model Agreement: 100%'
    },
    {
      stepNumber: 5,
      timestamp: '00:00.74s',
      title: 'Propagation Network & Inauthentic Behavior Detection',
      description: 'Audited initial dissemination wave across social platforms. Detected 1,850 synchronized reposts within 12 minutes from zero-follower bot clusters.',
      status: 'flagged',
      evidence: 'Synthetic Bot Share Rate: 89.2% • Coordinated Inauthentic Activity'
    },
    {
      stepNumber: 6,
      timestamp: '00:00.88s',
      title: 'Final Veracity Synthesis & Threat Advisory Generation',
      description: 'Generated critical disinformation advisory report with forensic hash TL-2025-1004-FLAGGED-CRITICAL.',
      status: 'flagged',
      evidence: 'Verdict: FAKE (98.4% Confidence)'
    }
  ],
  propagation: {
    topologyType: 'Astroturfed Bot Cluster / Coordinated Disinformation',
    botRatioPercent: 89.2,
    shareEntropyScore: 1.14,
    averageVelocityPerHour: '1,420 shares / hr (Artificial coordinated spike)',
    coordinatedBurstDetected: true,
    originSource: 'Untraceable Disposable Domain -> Coordinated Telegram Bot Pods',
    summaryNote: 'Propagation exhibits distinct characteristics of synthetic disinformation: an abrupt burst within minutes of publication driven by newly registered bot accounts with synchronized messaging, extremely low retweet entropy, and lack of any verified secondary coverage.',
    nodes: [
      { id: 'fn1', label: 'freedomalertdaily-news.co.vu', type: 'origin', x: 80, y: 150, reach: 92, isSuspicious: true, notes: 'Disposable burner origin domain (8 days old)' },
      { id: 'fn2', label: 'Anon Telegram Broadcast', type: 'origin', x: 190, y: 80, reach: 84, isSuspicious: true, notes: 'Private channel seed point' },
      { id: 'fn3', label: 'Bot Swarm Alpha (420 accts)', type: 'bot_cluster', x: 260, y: 160, reach: 96, isSuspicious: true, notes: 'Automated script reposters (created <14d ago)' },
      { id: 'fn4', label: 'Bot Swarm Beta (380 accts)', type: 'bot_cluster', x: 270, y: 250, reach: 90, isSuspicious: true, notes: 'Synchronized copy-paste retweets' },
      { id: 'fn5', label: 'Hyper-Partisan Echo Page', type: 'amplifier', x: 390, y: 90, reach: 85, isSuspicious: true, notes: 'Click-farming aggregation page' },
      { id: 'fn6', label: 'Suspicious Influencer Mirror', type: 'amplifier', x: 410, y: 200, reach: 78, isSuspicious: true, notes: 'Unverified aggregator with engagement farming' },
      { id: 'fn7', label: 'Coordinated Comment Spammers', type: 'bot_cluster', x: 490, y: 130, reach: 68, isSuspicious: true, notes: 'Copy-pasted fear-inducing replies' },
      { id: 'fn8', label: 'Unwitting Social Amplifiers', type: 'organic_user', x: 530, y: 240, reach: 52, isSuspicious: false, notes: 'Minor organic users tricked by fear triggers' },
      { id: 'fn9', label: 'Debunking Attempt (Buried)', type: 'verified_media', x: 600, y: 80, reach: 35, isSuspicious: false, notes: 'Fact-checker counter-link drowned out by volume' }
    ],
    links: [
      { source: 'fn1', target: 'fn2', strength: 0.95, isSuspicious: true },
      { source: 'fn2', target: 'fn3', strength: 0.98, isSuspicious: true },
      { source: 'fn2', target: 'fn4', strength: 0.96, isSuspicious: true },
      { source: 'fn3', target: 'fn5', strength: 0.9, isSuspicious: true },
      { source: 'fn4', target: 'fn6', strength: 0.88, isSuspicious: true },
      { source: 'fn5', target: 'fn7', strength: 0.85, isSuspicious: true },
      { source: 'fn6', target: 'fn8', strength: 0.65, isSuspicious: false },
      { source: 'fn7', target: 'fn8', strength: 0.6, isSuspicious: false },
      { source: 'fn8', target: 'fn9', strength: 0.3, isSuspicious: false }
    ]
  }
};

export const MODEL_SPECS = [
  {
    id: 'tfidf_logreg',
    name: 'TF-IDF + Logistic Regression',
    type: 'Lexical Statistical Baseline',
    trainingCorpus: '350,000 Verified News & Rumor Articles',
    featureDimensions: '50,000 N-gram Features (Uni, Bi, Tri-grams)',
    accuracy: '89.4%',
    f1Score: '0.889',
    avgLatency: '12ms - 15ms',
    memoryFootprint: '~180 MB',
    description: 'Ultra-fast statistical benchmark model evaluating surface vocabulary frequencies, clickbait token patterns, and term weighting distributions. Exceptionally sensitive to hyperbolic styling and emotive buzzwords.',
    strengths: ['Sub-15ms lightning evaluation', 'Complete mathematical explainability via regression coefficients', 'Highly effective on sensationalist headline phrasing'],
    limitations: ['Vulnerable to sophisticated factual misdirection that uses clean, academic phrasing', 'Lacks contextual semantic awareness']
  },
  {
    id: 'mpnet_xgboost',
    name: 'MPNet + XGBoost',
    type: 'Dense Transformer Embedding + Gradient Boosting',
    trainingCorpus: 'all-mpnet-base-v2 fine-tuned on Credibility Benchmarks (ISOT, LIAR, CoAID)',
    featureDimensions: '768-dimensional contextual vector representation',
    accuracy: '96.2%',
    f1Score: '0.961',
    avgLatency: '78ms - 85ms',
    memoryFootprint: '~850 MB',
    description: 'High-precision deep embedding model capturing subtle semantic nuances, thematic coherence, and deep context across full paragraphs. Classifies vector representations through regularized gradient-boosted decision trees.',
    strengths: ['Outstanding semantic comprehension', 'Resistant to subtle paraphrasing or synonym substitution', 'Deep contextual grounding'],
    limitations: ['Moderate compute and memory footprint compared to sparse linear models']
  },
  {
    id: 'minilm_xgboost',
    name: 'MiniLM + XGBoost',
    type: 'Distilled Lightweight Transformer + Gradient Boosting',
    trainingCorpus: 'all-MiniLM-L6-v2 distilled architecture fine-tuned on Fact-Check datasets',
    featureDimensions: '384-dimensional compressed vector representation',
    accuracy: '94.7%',
    f1Score: '0.945',
    avgLatency: '34ms - 40ms',
    memoryFootprint: '~240 MB',
    description: 'Production-optimized 6-layer distilled transformer offering the optimal balance between high semantic precision and ultra-low latency. Ideal for real-time edge screening and high-throughput ingestion pipelines.',
    strengths: ['2.2x faster inference than full-sized transformers', 'Maintains 98.4% of MPNet accuracy with half the memory', 'Low false-positive rate'],
    limitations: ['Minor sensitivity drop on long-form essays exceeding 800 tokens']
  }
];
