import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, FileText, CalendarCheck, ShieldCheck, BrickWall, Sparkles } from 'lucide-react';
import { FOUNDER, VENTURES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-0 pb-6 md:pb-0">
      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[650px] flex items-center justify-center text-white overflow-hidden rounded-b-[2.5rem] md:rounded-b-[4rem] shadow-2xl z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-brand-navy/90 z-10" />
        <img
          src="./assets/hero-bg.png"
          alt="SUSA Infra Ventures"
          className="absolute inset-0 w-full h-full object-cover animate-fade-in scale-105"
        />
        <div className="relative z-20 container mx-auto px-6 text-center md:text-left md:px-16 pt-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider animate-fade-in-up">
            <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"></span>
            Premium Real Estate in Vizianagaram
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-[1.1] drop-shadow-lg tracking-tight animate-fade-in-up delay-100">
            Build Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400">Future</span> With Us
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl mx-auto md:mx-0 font-light leading-relaxed animate-fade-in-up delay-200">
            Secure, approved, and premium plots. We make your dream of land ownership a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up delay-300">
            <Link to="/ventures" className="bg-brand-orange text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/40 active:scale-95 flex items-center justify-center gap-2">
              View Ventures <ChevronRight size={20} />
            </Link>
            <Link to="/contact" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all active:scale-95 flex items-center justify-center gap-2">
              Book Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Ventures - Horizontal Scroll on Mobile */}
      <section className="py-12 md:py-20 bg-slate-50 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-8 px-2">
            <div>
              <h2 className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-2">Our Portfolio</h2>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-dark">Featured Projects</h3>
            </div>
            <Link to="/ventures" className="text-brand-orange text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              See All <ChevronRight size={16} />
            </Link>
          </div>

          {/* Scroll Container */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-8 -mx-4 px-6 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 scrollbar-hide">
            {VENTURES.slice(0, 3).map((venture) => (
              <Link to={`/ventures/${venture.id}`} key={venture.id} className="snap-center shrink-0 w-[85vw] md:w-auto group bg-white rounded-3xl shadow-card hover:shadow-2xl transition-all duration-300 border border-white overflow-hidden relative active:scale-[0.98]">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 bg-brand-navy/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1.5 rounded-full z-10 uppercase tracking-wide border border-white/10">
                    {venture.status}
                  </div>
                  <img src={venture.image} alt={venture.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                    <h4 className="text-2xl font-bold mb-1 leading-tight">{venture.title}</h4>
                    <p className="text-gray-300 text-xs flex items-center gap-1">
                      <MapPinIcon size={12} className="text-brand-orange" /> {venture.location}
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {venture.highlights.slice(0, 2).map((h, i) => (
                      <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium">{h}</span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                    <span className="text-xs text-gray-400 font-medium">{venture.area}</span>
                    <span className="text-brand-orange font-bold text-sm flex items-center gap-1">
                      Details <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Grid */}
      <section className="py-12 bg-white px-4 md:px-6 rounded-[2.5rem] md:rounded-[4rem] shadow-soft z-0 mx-2 md:mx-8 mb-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-10">Why <span className="text-brand-orange relative inline-block">SUSA<svg className="absolute w-full h-2 bottom-0 left-0 text-brand-orange opacity-20" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" /></svg></span> Infra?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: FileText, label: "Spot Registration", sub: "Hassle-free process" },
              { icon: ShieldCheck, label: "Clear Titles", sub: "100% Legal verification" },
              { icon: BrickWall, label: "Top Quality", sub: "Premium Materials" },
              { icon: CalendarCheck, label: "On Time", sub: "Guaranteed Delivery" },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-5 md:p-8 rounded-3xl border border-slate-100 flex flex-col items-center gap-3 active:scale-95 transition-transform">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-blue mb-2">
                  <item.icon size={28} />
                </div>
                <h4 className="font-bold text-gray-800 text-sm md:text-base">{item.label}</h4>
                <p className="text-xs text-gray-500">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-brand-dark text-white px-4 md:px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="container mx-auto relative z-10">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 md:p-12 flex flex-col md:flex-row gap-8 items-center">
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-brand-orange rounded-full blur-xl opacity-40"></div>
              <img src={FOUNDER.image} alt="Founder" className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-white/20 relative z-10 shadow-2xl" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-brand-orange font-bold text-xs uppercase tracking-widest mb-2">Leadership</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{FOUNDER.name}</h2>
              <p className="text-gray-400 text-sm mb-4">{FOUNDER.experience}</p>
              <p className="text-gray-300 italic font-light text-sm md:text-base leading-relaxed">"{FOUNDER.bio}"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - App Carousel Style */}
      <section className="py-16 bg-slate-50 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-10 text-brand-dark">Client Stories</h2>
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-4 px-6 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 scrollbar-hide">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="snap-center shrink-0 w-[85vw] md:w-auto bg-white p-6 rounded-3xl border border-gray-100 shadow-soft flex gap-4 items-center">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover shrink-0 border-2 border-slate-100" />
                <div>
                  <p className="text-gray-600 text-xs md:text-sm italic mb-2 line-clamp-3">"{t.content}"</p>
                  <div className="font-bold text-brand-dark text-sm">{t.name}</div>
                  <div className="text-[10px] text-brand-blue font-semibold uppercase tracking-wide">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const MapPinIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);

export default Home;