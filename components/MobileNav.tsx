import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, LandPlot, Building2, PhoneCall } from 'lucide-react';

const MobileNav: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/ventures', icon: LandPlot, label: 'Plots' },
    { path: '/construction', icon: Building2, label: 'Build' },
    { path: '/about', icon: Users, label: 'About' },
    { path: '/contact', icon: PhoneCall, label: 'Contact' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50 md:hidden pb-safe">
      <div className="flex justify-around items-center h-[70px] pb-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`relative flex flex-col items-center justify-center w-full h-full transition-all duration-300 group ${isActive ? 'text-brand-orange' : 'text-slate-400'
                }`}
            >
              {/* Active Indicator Line at Top */}
              {isActive && (
                <span className="absolute top-0 w-8 h-0.5 bg-brand-orange rounded-b-md shadow-[0_0_10px_rgba(240,90,40,0.5)]"></span>
              )}

              <div className={`p-1.5 rounded-xl transition-all duration-300 ${isActive ? 'bg-orange-50 translate-y-1' : 'group-active:scale-90'}`}>
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={`text-[10px] font-medium transition-all ${isActive ? 'font-bold translate-y-0' : 'translate-y-0.5'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNav;