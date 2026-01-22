import React, { useState } from 'react';
import { CONTACT_INFO, VENTURES } from '../constants';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    venture: 'General Enquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Enquiry sent successfully! Our team will contact you shortly.');
    setFormData({ name: '', phone: '', venture: 'General Enquiry', message: '' });
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20 pt-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-brand-dark mb-12">Get In Touch</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-6 text-brand-dark">Contact Information</h2>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <div className="bg-orange-50 p-3 rounded-full text-brand-orange">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Phone</div>
                    <div className="font-semibold text-lg text-brand-dark">{CONTACT_INFO.phone}</div>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="bg-orange-50 p-3 rounded-full text-brand-orange">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="font-semibold text-brand-dark">{CONTACT_INFO.email}</div>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="bg-orange-50 p-3 rounded-full text-brand-orange">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Address</div>
                    <div className="font-semibold text-brand-dark">{CONTACT_INFO.address}</div>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Map */}
            <div className="bg-gray-200 h-64 rounded-xl overflow-hidden shadow-sm border border-gray-200">
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.234!2d83.3!3d18.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDA2JzAwLjAiTiA4M8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1625634567890!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy"
                  title="Office Location"
                ></iframe>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-orange">
            <h2 className="text-2xl font-bold mb-2 text-brand-dark">Schedule Site Visit</h2>
            <p className="text-gray-500 mb-6 text-sm">Fill the form below and we will arrange a cab for your site visit.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  required 
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  required 
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Interested Project</label>
                <select 
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  value={formData.venture}
                  onChange={e => setFormData({...formData, venture: e.target.value})}
                >
                  <option>General Enquiry</option>
                  {VENTURES.map(v => <option key={v.id} value={v.title}>{v.title}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date Preference (Optional)</label>
                <input type="date" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-orange" />
              </div>

              <button type="submit" className="w-full bg-brand-orange text-white font-bold py-4 rounded-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">
                Send Request
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;