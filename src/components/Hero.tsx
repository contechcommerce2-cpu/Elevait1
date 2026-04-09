import { ArrowRight } from 'lucide-react';
import elevaitLogo from '../assets/elevait_Logo.png';
import aiLogoDark from '../assets/AI_logo_-_elevait_-on_dark_bg_.png';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#2563eb] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#f97316] to-transparent opacity-20 transform skew-x-12"></div>

      <nav className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-6 pb-2 flex items-center justify-between">
        <img
          src={elevaitLogo}
          alt="elevait"
          className="h-10 w-auto object-contain"
        />
      </nav>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
              <img src={aiLogoDark} alt="" className="w-4 h-4 object-contain" />
              <span>Elevate Brand. Story. Growth.</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Revenue Growth Partner for{' '}
              <span className="text-[#f97316]">Industrial & Energy Tech</span>{' '}
              | Positioning • Marketing • Learning
            </h1>

            <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed mb-10 font-light">
              Elevait helps turn complex offerings into compelling narratives and predictable revenue
              through AI-powered content and demand generation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold text-lg transition-all duration-300 border border-white/30 hover:border-white/50">
                View Case Studies
              </button>
            </div>

            <div className="mt-12 pt-12 border-t border-white/20">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-[#f97316] mb-1">100+</div>
                  <div className="text-sm text-blue-200">Years Combined Experience</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-[#f97316] mb-1">50+</div>
                  <div className="text-sm text-blue-200">Global Brands Served</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-[#f97316] mb-1">300+</div>
                  <div className="text-sm text-blue-200">Campaigns Delivered</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-xl">
            <div className="relative">
              <div className="absolute inset-0 bg-[#f97316] rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl">
                    <div className="w-12 h-12 bg-[#f97316] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Brand DNA & Story</h3>
                      <p className="text-sm text-blue-200">Building compelling narratives that resonate</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl">
                    <div className="w-12 h-12 bg-[#f97316] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Demand Generation</h3>
                      <p className="text-sm text-blue-200">Multi-channel campaigns that convert</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl">
                    <div className="w-12 h-12 bg-[#f97316] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Measurable Results</h3>
                      <p className="text-sm text-blue-200">Data-driven optimization & transparent ROI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
