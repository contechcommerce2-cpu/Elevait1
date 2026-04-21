import { ArrowRight } from 'lucide-react';
import elevaitLogoWhite from '../assets/elevait_-_logo_in_white_.png';

export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden min-h-screen flex flex-col">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* Deep blue overlay — brand-consistent and keeps text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f4e]/95 via-[#1e3a8a]/88 to-[#1e3a8a]/60"></div>
        {/* Subtle orange accent bleed on the right edge */}
        <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-[#f97316]/25 to-transparent"></div>
        {/* Fine grid texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-60"></div>
      </div>

      {/* Nav */}
      <nav className="relative max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 pt-6 pb-2 flex items-center justify-between">
        <img
          src={elevaitLogoWhite}
          alt="elevait"
          className="h-10 w-auto object-contain"
        />
      </nav>

      {/* Content */}
      <div className="relative flex-1 flex items-center max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full">

          {/* Left: headline + CTA */}
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#f97316]/20 border border-[#f97316]/40 rounded-full text-sm font-medium text-[#f97316] mb-6 backdrop-blur-sm">
              B2B Revenue Growth Partner
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              We Create Brand Story,{' '}
              <span className="text-[#f97316]">Build Authority</span>{' '}
              &amp; Generate Demand
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-10 font-light max-w-xl">
              Elevait helps Industrial, Energy Tech &amp; SaaS brands turn complex offerings into compelling narratives and predictable revenue through AI-powered content and demand generation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="mt-12 pt-10 border-t border-white/20 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#f97316] mb-1">100+</div>
                <div className="text-sm text-blue-200 leading-snug">Years Combined Experience</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#f97316] mb-1">50+</div>
                <div className="text-sm text-blue-200 leading-snug">Global Brands Served</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#f97316] mb-1">300+</div>
                <div className="text-sm text-blue-200 leading-snug">Campaigns Delivered</div>
              </div>
            </div>
          </div>

          {/* Right: floating image card */}
          <div className="hidden lg:flex flex-1 max-w-lg justify-end">
            <div className="relative w-full">
              {/* Glow */}
              <div className="absolute -inset-4 bg-[#f97316]/20 rounded-3xl blur-2xl"></div>

              {/* Main image card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="B2B marketing strategy session"
                  className="w-full h-80 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f4e]/80 via-transparent to-transparent"></div>

                {/* Floating stat badge */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                  <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-center">
                    <div className="text-2xl font-bold text-[#f97316]">5x</div>
                    <div className="text-xs text-blue-200">Average ROI</div>
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-center">
                    <div className="text-2xl font-bold text-[#f97316]">2,500+</div>
                    <div className="text-xs text-blue-200">Leads Generated</div>
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-center">
                    <div className="text-2xl font-bold text-[#f97316]">65%</div>
                    <div className="text-xs text-blue-200">Avg. Ranking Lift</div>
                  </div>
                </div>
              </div>

              {/* Small floating card top-right */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 border border-gray-100">
                <div className="w-10 h-10 bg-[#1e3a8a] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">MoM Growth</div>
                  <div className="text-lg font-bold text-[#1e3a8a]">+50%</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
