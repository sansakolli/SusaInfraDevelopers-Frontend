import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    const message = encodeURIComponent(CONTACT_INFO.whatsappMessage);
    const url = `https://wa.me/91${CONTACT_INFO.phone.replace(/\s/g, '')}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-20 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center animate-bounce-slow md:bottom-8"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="white" />
    </button>
  );
};

export default WhatsAppButton;