
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
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('gallery.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(image.src)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium capitalize">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="sm"
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
                onClick={closeLightbox}
              >
                <X className="w-6 h-6" />
              </Button>
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center bg-green-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Visit Our Clinic?
          </h2>
          <p className="text-gray-600 mb-6">
            Experience our modern facilities and compassionate care firsthand.
          </p>
          <Button className="bg-green-600 hover:bg-green-700" size="lg">
            <a href="/contact">Schedule a Visit</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
