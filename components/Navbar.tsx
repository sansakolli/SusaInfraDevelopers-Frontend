import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'text-brand-orange font-bold relative after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-brand-orange after:rounded-full' : 'text-slate-600 hover:text-brand-orange font-medium transition-colors';

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40 hidden md:block transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Representation */}
        <Link to="/" className="flex items-center gap-2 group">
           <div className="flex flex-col items-start leading-none">
             <span className="text-3xl font-extrabold text-brand-orange tracking-tighter drop-shadow-sm">SUSA</span>
             <span className="text-[10px] font-bold text-brand-blue tracking-[0.2em] uppercase">Infra Developers</span>
           </div>
        </Link>
        
        <div className="flex gap-8 items-center bg-gray-50/50 px-6 py-2 rounded-full border border-gray-100">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/about" className={isActive('/about')}>About</Link>
          <Link to="/ventures" className={isActive('/ventures')}>Ventures</Link>
          <Link to="/construction" className={isActive('/construction')}>Construction</Link>
          <Link to="/gallery" className={isActive('/gallery')}>Gallery</Link>
          <Link to="/contact" className={isActive('/contact')}>Contact</Link>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex flex-col items-end text-right">
             <span className="text-xs text-gray-500 font-medium">Need Assistance?</span>
             <span className="text-sm font-bold text-brand-dark">{CONTACT_INFO.phone}</span>
          </div>
          <a href={`tel:${CONTACT_INFO.phone}`} className="bg-brand-orange text-white p-3 rounded-full hover:bg-orange-600 hover:scale-105 transition-all shadow-lg shadow-brand-orange/20 active:scale-95">
             <Phone size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;