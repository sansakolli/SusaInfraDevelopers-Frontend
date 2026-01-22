import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    "assets/gallery/gallery-1.png",
    "assets/gallery/gallery-2.png",
    "assets/gallery/gallery-3.png",
    "assets/gallery/gallery-4.png",
    "assets/gallery/gallery-5.png",
    "assets/gallery/gallery-6.png",
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20 pt-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-brand-dark mb-8 text-center">Project Gallery</h1>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, i) => (
            <div key={i} className="break-inside-avoid rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group relative">
              <img src={src} alt={`Gallery ${i}`} className="w-full h-auto" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold border border-white px-4 py-2 rounded">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;