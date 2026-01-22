import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { VENTURES } from '../constants';
import { MapPin, Ruler } from 'lucide-react';

const Ventures: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Ongoing' | 'Completed'>('All');

  const filteredVentures = filter === 'All' 
    ? VENTURES 
    : VENTURES.filter(v => v.status === filter);

  return (
    <div className="min-h-screen bg-slate-50 pb-24 pt-8 px-4 md:px-6">
       <div className="container mx-auto">
         <div className="text-center mb-8">
           <h1 className="text-3xl font-bold text-brand-dark mb-2">Our Ventures</h1>
           <p className="text-gray-500 text-sm max-w-lg mx-auto">VMRDA/DTCP approved layouts with clear titles.</p>
         </div>

         {/* Segmented Control Filter */}
         <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-gray-200 flex mb-8 max-w-md mx-auto relative">
           {['All', 'Ongoing', 'Completed'].map((f) => (
             <button
               key={f}
               onClick={() => setFilter(f as any)}
               className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all relative z-10 ${
                 filter === f 
                  ? 'text-brand-orange bg-orange-50 shadow-sm' 
                  : 'text-gray-500 hover:bg-gray-50'
               }`}
             >
               {f}
             </button>
           ))}
         </div>

         {/* Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {filteredVentures.map((venture) => (
             <Link key={venture.id} to={`/ventures/${venture.id}`} className="bg-white rounded-3xl overflow-hidden shadow-card border border-gray-100 flex flex-col group active:scale-[0.98] transition-transform">
               <div className="relative h-56">
                 <img src={venture.image} alt={venture.title} className="w-full h-full object-cover" />
                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-brand-dark text-[10px] font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wide border border-white/50">
                   {venture.status}
                 </div>
                 <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                 <div className="absolute bottom-4 left-5 text-white">
                    <h2 className="text-2xl font-bold leading-none mb-1">{venture.title}</h2>
                    <div className="flex items-center gap-1 text-gray-200 text-xs font-medium">
                      <MapPin size={12} className="text-brand-orange" />
                      <span>{venture.location}</span>
                    </div>
                 </div>
               </div>
               
               <div className="p-5 flex-grow flex flex-col">
                 <div className="grid grid-cols-2 gap-3 mb-4">
                   <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                     <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Area</div>
                     <div className="font-bold text-brand-dark">{venture.area}</div>
                   </div>
                   <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                     <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Type</div>
                     <div className="font-bold text-brand-dark">Residential</div>
                   </div>
                 </div>

                 <p className="text-gray-500 text-sm mb-5 line-clamp-2 leading-relaxed">{venture.description}</p>
                 
                 <div className="mt-auto w-full bg-brand-navy text-white py-3.5 rounded-xl font-bold text-center text-sm shadow-lg shadow-brand-navy/20 group-hover:bg-brand-orange transition-colors">
                   View Details
                 </div>
               </div>
             </Link>
           ))}
         </div>
       </div>
    </div>
  );
};

export default Ventures;