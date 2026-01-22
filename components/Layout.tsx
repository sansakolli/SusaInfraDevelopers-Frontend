import React from 'react';
import Navbar from './Navbar';
import MobileNav from './MobileNav';
import WhatsAppButton from './WhatsAppButton';
import { CONTACT_INFO } from '../constants';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MapPin } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  // Hide MobileNav on details page because we show a sticky action bar instead
  const isDetailsPage = location.pathname.includes('/ventures/') && location.pathname !== '/ventures';

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-body">
      <Navbar />
      
      {/* Mobile Top Header (Logo only) - Glassmorphism */}
      <div className="md:hidden bg-white/90 backdrop-blur-md px-4 py-3 flex justify-between items-center sticky top-0 z-40 shadow-sm border-b border-gray-100/50">
        <Link to="/" className="flex flex-col items-start leading-none">
           <span className="text-2xl font-extrabold text-brand-orange tracking-tighter">SUSA</span>
           <span className="text-[9px] font-bold text-brand-blue tracking-[0.2em] uppercase">Infra Developers</span>
        </Link>
        <a href={`tel:${CONTACT_INFO.phone}`} className="text-brand-orange bg-orange-50 p-2.5 rounded-full hover:bg-orange-100 transition-colors">
           <PhoneIcon size={18} />
        </a>
      </div>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-brand-dark text-gray-300 py-12 pb-32 md:pb-12 border-t-4 border-brand-orange rounded-t-[2rem] md:rounded-none mt-auto">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="mb-4">
              <span className="text-3xl font-extrabold text-white tracking-tighter">SUSA</span>
              <span className="text-xs font-bold text-brand-blue tracking-widest ml-2 uppercase">Infra Developers</span>
            </div>
            <p className="text-sm opacity-80 mb-6 leading-relaxed font-light">
              Building trust and delivering dreams. Your partner for premium plots and quality construction in Vizianagaram.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/5 p-2.5 rounded-full hover:bg-brand-orange hover:text-white transition-all backdrop-blur-sm border border-white/10"><Facebook size={18} /></a>
              <a href="#" className="bg-white/5 p-2.5 rounded-full hover:bg-brand-orange hover:text-white transition-all backdrop-blur-sm border border-white/10"><Instagram size={18} /></a>
              <a href="#" className="bg-white/5 p-2.5 rounded-full hover:bg-brand-orange hover:text-white transition-all backdrop-blur-sm border border-white/10"><Youtube size={18} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-brand-orange rounded-full"></span> Quick Links
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/ventures" className="hover:text-brand-orange transition-colors flex items-center gap-2 opacity-80 hover:opacity-100">Current Ventures</Link></li>
              <li><Link to="/construction" className="hover:text-brand-orange transition-colors flex items-center gap-2 opacity-80 hover:opacity-100">Construction Services</Link></li>
              <li><Link to="/about" className="hover:text-brand-orange transition-colors flex items-center gap-2 opacity-80 hover:opacity-100">About Founder</Link></li>
              <li><Link to="/contact" className="hover:text-brand-orange transition-colors flex items-center gap-2 opacity-80 hover:opacity-100">Book Site Visit</Link></li>
            </ul>
          </div>

          <div>
             <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-brand-orange rounded-full"></span> Contact Us
             </h3>
             <ul className="space-y-5 text-sm">
               <li className="flex items-start gap-4">
                 <div className="mt-1 text-brand-orange bg-brand-orange/10 p-2 rounded-lg"><MapPin size={18} /></div>
                 <span className="text-gray-400 leading-relaxed">{CONTACT_INFO.address}</span>
               </li>
               <li className="flex items-center gap-4">
                 <div className="text-brand-orange bg-brand-orange/10 p-2 rounded-lg"><PhoneIcon size={18} /></div>
                 <span className="text-white font-semibold tracking-wide text-lg">{CONTACT_INFO.phone}</span>
               </li>
             </ul>
          </div>
        </div>
        <div className="text-center mt-12 text-xs opacity-40 border-t border-white/10 pt-6">
          © {new Date().getFullYear()} SUSA Infra Developers. All rights reserved.
        </div>
      </footer>

      <WhatsAppButton />
      
      {/* Conditionally render MobileNav if NOT on a detailed venture page */}
      {!isDetailsPage && <MobileNav />}
    </div>
  );
};

const PhoneIcon = ({ size }: { size: number }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

export default Layout;