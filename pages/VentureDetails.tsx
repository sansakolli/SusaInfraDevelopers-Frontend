import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { VENTURES, CONTACT_INFO } from '../constants';
import { CheckCircle, MapPin, Download, Video, Phone, Calendar } from 'lucide-react';

const VentureDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const venture = VENTURES.find(v => v.id === id);
  const [showBrochureModal, setShowBrochureModal] = useState(false);

  if (!venture) {
    return <div className="min-h-screen flex items-center justify-center">Venture not found</div>;
  }

  const handleBrochureRequest = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! The brochure has been sent to your number via WhatsApp.");
    setShowBrochureModal(false);
  };

  return (
    <div className="bg-white min-h-screen pb-[100px] md:pb-20">
      {/* Hero */}
      <div className="relative h-[45vh] md:h-[500px]">
        <img src={venture.image} alt={venture.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex items-end">
          <div className="container mx-auto px-4 pb-8 md:pb-12 text-white">
            <div className="bg-brand-orange text-white inline-block px-3 py-1 rounded-md text-[10px] font-bold mb-3 uppercase tracking-wider shadow-lg">
              {venture.status}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-2 leading-tight">{venture.title}</h1>
            <p className="flex items-center gap-2 opacity-90 text-sm md:text-base font-medium">
              <MapPin size={16} className="text-brand-orange" /> {venture.location}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          
          <section className="bg-white">
            <h2 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-brand-orange rounded-full"></span> About Project
            </h2>
            <p className="text-gray-600 leading-relaxed text-base font-light">
              {venture.description}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
               <span className="w-1.5 h-6 bg-brand-orange rounded-full"></span> Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {venture.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-blue/30 transition-colors">
                  <div className="bg-white p-1.5 rounded-full shadow-sm text-brand-orange">
                    <CheckCircle size={16} />
                  </div>
                  <span className="font-medium text-gray-700 text-sm">{h}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-brand-orange rounded-full"></span> Amenities
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {venture.amenities.map((a, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-4 bg-white shadow-soft border border-gray-50 rounded-2xl text-center aspect-square">
                   <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue mb-2">
                     <CheckCircle size={18} />
                   </div>
                   <span className="text-xs font-medium text-gray-600 leading-tight">{a}</span>
                </div>
              ))}
            </div>
          </section>
          
          <section>
             <h2 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
               <span className="w-1.5 h-6 bg-brand-orange rounded-full"></span> Location
             </h2>
             <div className="bg-gray-100 h-64 rounded-3xl overflow-hidden shadow-inner relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121783.7431320499!2d83.35928800000001!3d17.925565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3955682121e739%3A0x6b4a3c1e2d788e0!2sVizianagaram%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1714521231231" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy"
                  title="Map"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none rounded-3xl border border-black/5"></div>
             </div>
          </section>

        </div>

        {/* Sidebar (Desktop) */}
        <div className="hidden lg:block space-y-6">
           <div className="bg-white p-6 rounded-3xl shadow-card border border-gray-100 sticky top-24">
             <h3 className="text-xl font-bold mb-6">Interested?</h3>
             <button 
                onClick={() => setShowBrochureModal(true)}
                className="w-full bg-brand-navy text-white font-bold py-4 rounded-xl mb-3 flex items-center justify-center gap-2 hover:bg-brand-orange transition-all shadow-lg shadow-brand-navy/20"
             >
               <Download size={18} /> Download Brochure
             </button>
             <Link 
                to="/contact"
                className="w-full bg-white border-2 border-brand-navy text-brand-navy font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"
             >
               <Calendar size={18} /> Book Site Visit
             </Link>
           </div>
        </div>

      </div>

      {/* Mobile Sticky Action Bar - "App Like" */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 pb-safe z-50 flex gap-3 md:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
        <a 
          href={`tel:${CONTACT_INFO.phone}`}
          className="flex-1 bg-white border border-gray-200 text-brand-dark font-bold py-3 rounded-xl flex items-center justify-center gap-2 active:bg-gray-50"
        >
          <Phone size={18} /> Call
        </a>
        <button 
           onClick={() => setShowBrochureModal(true)}
           className="flex-[2] bg-brand-orange text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/30 active:scale-95 transition-transform"
        >
          <Download size={18} /> Brochure
        </button>
      </div>

      {/* Brochure Modal */}
      {showBrochureModal && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 w-full max-w-sm animate-fade-in-up shadow-2xl">
            <div className="text-center mb-6">
               <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 text-brand-orange">
                 <Download size={24} />
               </div>
               <h3 className="text-xl font-bold text-brand-dark">Get Brochure</h3>
               <p className="text-xs text-gray-500 mt-1">We'll send the layout PDF to your WhatsApp.</p>
            </div>
            
            <form onSubmit={handleBrochureRequest} className="space-y-4">
              <div>
                <input type="text" placeholder="Your Name" required className="w-full bg-slate-50 border border-gray-200 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all font-medium text-sm" />
              </div>
              <div>
                <input type="tel" placeholder="Phone Number" required className="w-full bg-slate-50 border border-gray-200 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all font-medium text-sm" />
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowBrochureModal(false)} className="flex-1 bg-white border border-gray-200 text-gray-700 py-3 rounded-xl font-bold text-sm">Cancel</button>
                <button type="submit" className="flex-1 bg-brand-orange text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-brand-orange/20">Download</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VentureDetails;