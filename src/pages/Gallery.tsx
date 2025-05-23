
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { X } from 'lucide-react';

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: `${import.meta.env.BASE_URL}can.jpg`,
      alt: 'Dog patient at SOS Vet',
      category: 'patients'
    },
    {
      src: `${import.meta.env.BASE_URL}cat.jpg`,
      alt: 'Cat patient at SOS Vet',
      category: 'patients'
    },
    {
      src: `${import.meta.env.BASE_URL}zaza.jpg`,
      alt: 'Zaza at SOS Vet',
      category: 'patients'
    },
    {
      src: `${import.meta.env.BASE_URL}berg_all.jpg`,
      alt: 'Berg at SOS Vet',
      category: 'patients'
    },
    {
      src: `${import.meta.env.BASE_URL}kbir.jpg`,
      alt: 'Kbir at SOS Vet',
      category: 'patients'
    },
    {
      src: `${import.meta.env.BASE_URL}Wellness_Exams.jpg`,
      alt: 'Wellness examination at SOS Vet',
      category: 'services'
    },
    {
      src: `${import.meta.env.BASE_URL}acceuil.jpg`,
      alt: 'SOS Vet Rabat clinic',
      category: 'facility'
    },
    {
      src: `${import.meta.env.BASE_URL}Emergency_Care.jpg`,
      alt: 'Emergency care at SOS Vet',
      category: 'services'
    },
    {
      src: `${import.meta.env.BASE_URL}Surgery.jpg`,
      alt: 'Surgery at SOS Vet',
      category: 'services'
    }
  ];

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-vet-secondary mb-6 animate-slide-up">
            {t('gallery.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer animate-slide-up"
              onClick={() => openLightbox(image.src)}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Gallery image failed to load: ${image.alt}`, e);
                    e.currentTarget.src = `${import.meta.env.BASE_URL}placeholder.svg`;
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium capitalize">{image.category}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-vet-primary text-white rounded-full p-2 scale-0 group-hover:scale-100 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-zoom-in" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                  <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
                  <path fillRule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="sm"
                className="absolute -top-12 right-0 text-white hover:text-gray-300 hover:scale-110 transition-all duration-300"
                onClick={closeLightbox}
              >
                <X className="w-6 h-6" />
              </Button>
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-lg animate-scale-in"
                onError={(e) => {
                  console.error(`Lightbox image failed to load`, e);
                  e.currentTarget.src = `${import.meta.env.BASE_URL}placeholder.svg`;
                }}
              />
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center bg-vet-light rounded-lg p-8 animate-slide-up">
          <h2 className="text-2xl font-bold text-vet-secondary mb-4">
            {t('gallery.readyToVisit')}
          </h2>
          <p className="text-gray-600 mb-6">
            {t('gallery.visitDescription')}
          </p>
          <Button className="bg-vet-primary hover:bg-vet-primary/90 hover:scale-105 transition-all duration-300" size="lg">
            <a href="/contact">{t('gallery.scheduleVisit')}</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
