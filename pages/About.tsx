import React from 'react';
import { FOUNDER } from '../constants';
import { Award, Users, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="container mx-auto px-4 py-12">
        {/* Company Profile */}
        <section className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-brand-dark mb-6">About <span className="text-brand-orange">SUSA</span> Infra</h1>
          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            Established over 7 years ago, SUSA Infra Developers has become a household name in Vizianagaram for trust and quality. We specialize in developing residential layouts that offer high appreciation value and peaceful living environments.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="p-4 bg-slate-50 rounded-lg border-b-4 border-brand-orange shadow-sm">
              <Award className="mx-auto text-brand-blue mb-2" size={32} />
              <div className="font-bold text-2xl text-brand-dark">7+</div>
              <div className="text-xs text-gray-500 font-medium uppercase">Years Excellence</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border-b-4 border-brand-orange shadow-sm">
              <Users className="mx-auto text-brand-blue mb-2" size={32} />
              <div className="font-bold text-2xl text-brand-dark">500+</div>
              <div className="text-xs text-gray-500 font-medium uppercase">Happy Families</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border-b-4 border-brand-orange shadow-sm">
              <TrendingUp className="mx-auto text-brand-blue mb-2" size={32} />
              <div className="font-bold text-2xl text-brand-dark">100%</div>
              <div className="text-xs text-gray-500 font-medium uppercase">Appreciation</div>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="bg-brand-dark text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center border border-gray-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brand-navy/50 to-transparent pointer-events-none"></div>
          
          <img src={FOUNDER.image} alt="Dileep Kumar" className="relative z-10 w-64 h-64 rounded-full object-cover border-4 border-brand-orange shadow-2xl" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-1">Meet The Founder</h2>
            <h3 className="text-xl text-brand-orange mb-4 font-semibold">{FOUNDER.name} <span className="text-gray-400 text-sm font-normal">(M-Pharmacy)</span></h3>
            <p className="text-gray-300 leading-relaxed mb-4 text-lg italic">
              "My journey started with a simple vision: to make land ownership hassle-free. With a background in Pharmacy, I bring precision and care to every deal. Real estate is not just about land; it's about the trust you place in us."
            </p>
            <div className="mt-6 flex gap-3">
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm border border-white/10 text-brand-blue font-bold">Visionary</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm border border-white/10 text-brand-blue font-bold">Customer First</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;