
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      key: 'wellness',
      image: 'https://images.unsplash.com/photo-1628407690480-22bce8ba8c4b?w=400&h=300&fit=crop',
      icon: '🩺'
    },
    {
      key: 'vaccination',
      image: 'https://images.unsplash.com/photo-1601758228006-f2a8b6a8e29e?w=400&h=300&fit=crop',
      icon: '💉'
    },
    {
      key: 'surgery',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      icon: '⚕️'
    },
    {
      key: 'dental',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop',
      icon: '🦷'
    },
    {
      key: 'emergency',
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop',
      icon: '🚨'
    },
    {
      key: 'grooming',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      icon: '✂️'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-vet-secondary mb-6 animate-slide-up">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={service.key} className="group hover:shadow-xl transition-all duration-300 overflow-hidden animate-slide-up" style={{ animationDelay: `${0.1 * index}s` }}>
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={t(`services.${service.key}.title`)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-3xl">{service.icon}</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-vet-secondary group-hover:text-vet-primary transition-colors duration-300">
                  {t(`services.${service.key}.title`)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {t(`services.${service.key}.description`)}
                </p>
                <Button asChild variant="outline" className="w-full group-hover:bg-vet-primary group-hover:text-white transition-colors duration-300 border-vet-primary text-vet-primary">
                  <Link to={`/services/${service.key}`}>{t('services.learnMore')}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Contact Section */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center animate-slide-up">
          <h2 className="text-2xl font-bold text-red-800 mb-4">
            {t('contact.emergencyServices')}
          </h2>
          <p className="text-red-700 mb-6">
            {t('contact.emergencyDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-vet-primary hover:bg-vet-primary/90 hover:scale-105 transition-all duration-300" size="lg">
              <Link to="/contact">{t('contact.emergencyContact')}</Link>
            </Button>
            <Button variant="outline" className="border-vet-primary text-vet-primary hover:bg-vet-light hover:scale-105 transition-all duration-300" size="lg">
              {t('contact.call')}: +212 537-XX-XX-XX
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
