
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { X } from 'lucide-react';

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&h=400&fit=crop',
      alt: 'Happy dog at vet clinic',
      category: 'patients'
    },
    {
      src: 'https://images.unsplash.com/photo-1628407690480-22bce8ba8c4b?w=600&h=400&fit=crop',
      alt: 'Veterinarian examining cat',
      category: 'clinic'
    },
    {
      src: 'https://images.unsplash.com/photo-1601758228006-f2a8b6a8e29e?w=600&h=400&fit=crop',
      alt: 'Modern veterinary equipment',
      category: 'facility'
    },
    {
      src: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop',
      alt: 'Pet dental care',
      category: 'services'
    },
    {
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      alt: 'Pet grooming services',
      category: 'services'
    },
    {
      src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=400&fit=crop',
      alt: 'Cute kitten patient',
      category: 'patients'
    },
    {
      src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      alt: 'Veterinary surgery room',
      category: 'facility'
    },
    {
      src: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&h=400&fit=crop',
      alt: 'Happy rabbit patient',
      category: 'patients'
    },
    {
      src: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=400&fit=crop',
      alt: 'Emergency care facility',
      category: 'facility'
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
