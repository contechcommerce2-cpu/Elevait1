import { ArrowLeft, Target, TrendingUp, Users, BarChart3, CheckCircle, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import elevaitLogoWhite from '../assets/elevait_-_logo_in_white_.png';
import fireflyLogo from '../assets/All_clients_logo-40.png';
import ingramLogo from '../assets/All_clients_logo-11.png';

const caseStudies = [
  {
    id: 'firefly',
    company: 'FireFly Networks',
    industry: 'Telecom & Connectivity',
    tagline: 'Building a challenger brand identity in a crowded telecom market',
    color: 'from-[#1e3a8a] to-[#2563eb]',
    accentColor: 'text-[#f97316]',
    logo: fireflyLogo,
    overview: 'FireFly Networks is an emerging telecom provider targeting enterprise and mid-market clients with high-availability connectivity solutions. They needed to differentiate in a commoditized market dominated by legacy players and communicate complex technical capabilities to non-technical decision-makers.',
    challenge: 'Despite a superior product, FireFly lacked a distinctive brand voice and struggled to convert awareness into qualified pipeline. Their messaging was technical-first, failing to resonate with business buyers focused on reliability, uptime, and business continuity.',
    approach: [
      'Conducted deep ICP research across enterprise IT, Operations, and C-suite personas',
      'Rebuilt the brand story around business outcomes — reliability, resilience, and scalability — rather than technical specs',
      'Launched a multi-channel demand gen program spanning LinkedIn, Google Search, and programmatic display',
      'Developed a content engine including thought leadership articles, comparison guides, and ROI calculators',
      'Built automated lead nurturing workflows in HubSpot to qualify and route inbound leads',
    ],
    metrics: [
      { value: '4x', label: 'Increase in MQL Volume', icon: TrendingUp },
      { value: '60%', label: 'Reduction in CPL', icon: BarChart3 },
      { value: '35%', label: 'Improvement in Lead-to-Demo Rate', icon: Users },
      { value: '3 Mo.', label: 'Time to First Qualified Pipeline', icon: Target },
    ],
    outcome: 'FireFly Networks went from an unknown challenger to a credible alternative for enterprise connectivity buyers. Their pipeline grew consistently month-over-month, and the brand became associated with reliability and responsiveness — the exact values their ideal customers cared about.',
    quote: null,
  },
  {
    id: 'haystacks',
    company: 'Haystacks Analytics',
    industry: 'Data & Analytics SaaS',
    tagline: 'Driving PLG-to-Enterprise conversion for a B2B analytics platform',
    color: 'from-[#0f2357] to-[#1e3a8a]',
    accentColor: 'text-[#f97316]',
    logo: null,
    overview: 'Haystacks Analytics is a SaaS platform that helps businesses unify data from disparate sources and surface actionable insights without needing a dedicated data science team. Their product had strong free-tier adoption but struggled to convert self-serve users into enterprise contracts.',
    challenge: 'The gap between product-led growth (PLG) and enterprise sales was widening. Free users loved the product but lacked the internal context or urgency to champion enterprise upgrades. The sales team had no structured motion to identify and engage expansion-ready accounts.',
    approach: [
      'Mapped the full free-to-paid conversion journey, identifying key activation and intent signals',
      'Developed an ABM strategy targeting companies with 3+ active free-tier users as high-conversion accounts',
      'Built persona-specific content for Champions (power users) and Economic Buyers (CFO/VP of Data)',
      'Implemented a LinkedIn Sponsored Content program targeting lookalike audiences based on converted accounts',
      'Created a sales enablement playbook with objection handling, ROI benchmarks, and competitive positioning',
    ],
    metrics: [
      { value: '220%', label: 'Growth in Enterprise Pipeline', icon: TrendingUp },
      { value: '38%', label: 'Free-to-Paid Conversion Lift', icon: BarChart3 },
      { value: '55%', label: 'Shorter Sales Cycle', icon: Target },
      { value: '2.8x', label: 'Average Contract Value Increase', icon: Users },
    ],
    outcome: "Haystacks Analytics established a repeatable enterprise motion that complemented their PLG flywheel. Revenue from enterprise accounts grew from 22% to 51% of ARR within two quarters, fundamentally changing the company's growth trajectory.",
    quote: null,
  },
  {
    id: 'ingram',
    company: 'Ingram Micro',
    industry: 'Technology Distribution',
    tagline: 'Localising a global channel marketing program for the India market',
    color: 'from-[#1e3a8a] to-[#1d4ed8]',
    accentColor: 'text-[#f97316]',
    logo: ingramLogo,
    overview: "Ingram Micro is one of the world's largest technology distributors, serving thousands of reseller partners across India. Their India marketing team needed to run coordinated demand generation and partner enablement programs that felt locally relevant while staying aligned to global brand standards.",
    challenge: "Global campaign assets didn't translate directly to the India market — messaging that worked in North America or EMEA felt generic to Indian IT resellers and enterprise buyers. The team needed a local execution partner who understood both the global brand and the nuances of the Indian B2B tech ecosystem.",
    approach: [
      "Partnered with Ingram Micro's India marketing team as an embedded execution arm",
      'Adapted global campaign briefs into locally relevant content — case studies, event collateral, digital ads',
      'Managed end-to-end execution of partner event marketing across 6 cities',
      'Ran LinkedIn and Google campaigns targeting IT decision-makers across key verticals (BFSI, Manufacturing, Retail)',
      'Produced co-branded content with key vendor partners including Microsoft, Cisco, and HP',
    ],
    metrics: [
      { value: '6', label: 'City Partner Events Executed', icon: Target },
      { value: '40%', label: 'Increase in Partner Engagement', icon: Users },
      { value: '3x', label: 'Digital Reach vs. Prior Year', icon: TrendingUp },
      { value: '25+', label: 'Co-Branded Campaigns Delivered', icon: BarChart3 },
    ],
    outcome: "Ingram Micro's India marketing operations became more agile and locally resonant without sacrificing global brand consistency. Partner engagement scores improved significantly and the team was able to scale campaign output without growing headcount.",
    quote: null,
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 flex items-center justify-between">
          <Link to="/">
            <img src={elevaitLogoWhite} alt="elevait" className="h-9 w-auto object-contain" />
          </Link>
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-blue-200 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-br from-[#0f2357] via-[#1e3a8a] to-[#1e40af] text-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
            <BarChart3 className="w-4 h-4 text-[#f97316]" />
            <span>Client Success Stories</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            A deeper look at how we've helped B2B brands solve real marketing challenges and drive measurable growth.
          </p>
        </div>
      </div>

      {/* Case Studies */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28 space-y-24">
        {caseStudies.map((cs, idx) => (
          <article key={cs.id} className="scroll-mt-8" id={cs.id}>
            {/* Company Header */}
            <div className={`bg-gradient-to-r ${cs.color} rounded-2xl p-8 sm:p-12 text-white mb-8`}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 rounded-full text-xs font-semibold tracking-wide">
                      <Target className="w-3.5 h-3.5 text-[#f97316]" />
                      {cs.industry}
                    </div>
                    <span className="text-white/40 text-xs">Case Study {String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-2">{cs.company}</h2>
                  <p className="text-blue-100 text-lg">{cs.tagline}</p>
                </div>
                {cs.logo && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 flex items-center justify-center flex-shrink-0">
                    <img src={cs.logo} alt={cs.company} className="h-12 w-auto object-contain brightness-0 invert opacity-90" />
                  </div>
                )}
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left: Narrative */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">Overview</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{cs.overview}</p>
                </div>

                <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-red-500 mb-3">The Challenge</h3>
                  <p className="text-gray-700 leading-relaxed">{cs.challenge}</p>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Our Approach</h3>
                  <ul className="space-y-3">
                    {cs.approach.map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">Outcome</h3>
                  <p className="text-gray-700 leading-relaxed">{cs.outcome}</p>
                </div>
              </div>

              {/* Right: Metrics */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Key Results</h3>
                {cs.metrics.map((metric, i) => {
                  const Icon = metric.icon;
                  return (
                    <div
                      key={i}
                      className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#f97316]/40 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-9 h-9 bg-[#1e3a8a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-[#1e3a8a]" />
                        </div>
                        <div className="text-3xl font-bold text-[#f97316]">{metric.value}</div>
                      </div>
                      <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {idx < caseStudies.length - 1 && (
              <div className="mt-16 border-b border-gray-100"></div>
            )}
          </article>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#2563eb] text-white py-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to write your own{' '}
            <span className="text-[#f97316]">success story?</span>
          </h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            Let's talk about your growth challenges and how Elevait can help you build a predictable, scalable marketing engine.
          </p>
          <Link
            to="/#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Contact Us
            <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
