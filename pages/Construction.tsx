import React from 'react';
import { SERVICES } from '../constants';
import * as LucideIcons from 'lucide-react';

const Construction: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="bg-brand-navy text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2 relative z-10">Construction Services</h1>
        <p className="opacity-80 text-lg relative z-10">We don't just sell plots; we build your dreams.</p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SERVICES.map((service, idx) => {
            const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Hammer;
            return (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-brand-orange text-white rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-brand-orange/30">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-brand-dark mb-6 border-l-4 border-brand-orange pl-4">Work in Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative rounded-xl overflow-hidden group shadow-md hover:shadow-lg transition-shadow">
              <img src="assets/construction/site-1.png" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" alt="Construction Site" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <div className="text-white font-bold text-lg">Vuda Colony Phase 4</div>
                <div className="text-brand-orange text-xs font-bold uppercase tracking-wider">Foundation Work</div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden group shadow-md hover:shadow-lg transition-shadow">
              <img src="assets/construction/site-2.png" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" alt="Construction Site" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <div className="text-white font-bold text-lg">Client: Mr. Rao</div>
                <div className="text-brand-orange text-xs font-bold uppercase tracking-wider">Slab Work</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-blue text-white rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute -left-10 -top-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Thinking of building a home?</h2>
            <p className="mb-8 opacity-90 text-lg max-w-2xl mx-auto">We offer competitive construction packages using our own manufactured bricks with complete transparency.</p>
            <button className="bg-white text-brand-blue px-8 py-3 rounded-lg font-bold hover:bg-brand-orange hover:text-white transition-colors shadow-lg">
              Get a Quote
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Construction;