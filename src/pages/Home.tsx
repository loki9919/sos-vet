
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Heart, Shield, Clock, Award } from 'lucide-react';

const Home = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Heart,
      title: t('features.compassionateCare'),
      description: t('features.compassionateCareDesc')
    },
    {
      icon: Shield,
      title: t('features.professionalService'),
      description: t('features.professionalServiceDesc')
    },
    {
      icon: Clock,
      title: t('features.emergencyService'),
      description: t('features.emergencyServiceDesc')
    },
    {
      icon: Award,
      title: t('features.trustedExpertise'),
      description: t('features.trustedExpertiseDesc')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-vet-light to-blue-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl lg:text-6xl font-bold text-vet-secondary mb-6">
                {t('hero.title')}
              </h1>
              <h2 className="text-xl lg:text-2xl text-vet-primary font-semibold mb-6">
                {t('hero.subtitle')}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-vet-primary hover:bg-vet-primary/90 hover:scale-105 transition-all duration-300">
                  <Link to="/contact">{t('hero.cta')}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-vet-primary text-vet-primary hover:bg-vet-light hover:scale-105 transition-all duration-300">
                  <Link to="/services">{t('hero.emergency')}</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl animate-pulse-gentle">
                <img
                  src={`${import.meta.env.BASE_URL}acceuil.jpg`}
                  alt="SOS Vet Rabat clinic"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error("Home image failed to load:", e);
                    e.currentTarget.src = `${import.meta.env.BASE_URL}placeholder.svg`;
                  }}
                />
              </div>
              {/* Floating cards */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-lg shadow-lg animate-float">
                <div className="flex items-center space-x-2">
                  <Heart className="w-6 h-6 text-vet-primary" fill="currentColor" />
                  <span className="font-semibold">{t('features.happyPets')}: 500+</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-vet-primary" />
                  <span className="font-semibold">10+ {t('features.yearsExperience')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-vet-secondary mb-4">
              {t('about.whyChoose')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('about.whyChooseDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-vet-light group hover:border-vet-primary">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-vet-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-vet-primary group-hover:text-white transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-vet-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-vet-secondary mb-3 group-hover:text-vet-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-20 bg-gradient-to-r from-vet-primary to-vet-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              {t('services.title')}
            </h2>
            <p className="text-xl text-vet-light mb-8 max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Link to="/services" className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="h-40 relative">
                <img
                  src={`${import.meta.env.BASE_URL}Wellness_Exams.jpg`}
                  alt={t('services.wellness.title')}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `${import.meta.env.BASE_URL}placeholder.svg`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-2 left-2">
                  <span className="text-2xl">🩺</span>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-vet-secondary mb-1">{t('services.wellness.title')}</h3>
                <p className="text-gray-600 text-xs">{t('services.wellness.description')}</p>
              </div>
            </Link>

            <Link to="/services" className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="h-40 relative">
                <img
                  src={`${import.meta.env.BASE_URL}Vaccinations.jpg`}
                  alt={t('services.vaccination.title')}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `${import.meta.env.BASE_URL}placeholder.svg`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-2 left-2">
                  <span className="text-2xl">💉</span>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-vet-secondary mb-1">{t('services.vaccination.title')}</h3>
                <p className="text-gray-600 text-xs">{t('services.vaccination.description')}</p>
              </div>
            </Link>

            <Link to="/services" className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="h-40 relative">
                <img
                  src={`${import.meta.env.BASE_URL}Surgery.jpg`}
                  alt={t('services.surgery.title')}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `${import.meta.env.BASE_URL}placeholder.svg`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-2 left-2">
                  <span className="text-2xl">⚕️</span>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-vet-secondary mb-1">{t('services.surgery.title')}</h3>
                <p className="text-gray-600 text-xs">{t('services.surgery.description')}</p>
              </div>
            </Link>

            <Link to="/services" className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="h-40 relative">
                <img
                  src={`${import.meta.env.BASE_URL}Emergency_Care.jpg`}
                  alt={t('services.emergency.title')}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `${import.meta.env.BASE_URL}placeholder.svg`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-2 left-2">
                  <span className="text-2xl">🚨</span>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-vet-secondary mb-1">{t('services.emergency.title')}</h3>
                <p className="text-gray-600 text-xs">{t('services.emergency.description')}</p>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-vet-primary hover:bg-vet-light hover:scale-105 transition-all duration-300">
              <Link to="/services">{t('services.viewAll')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-vet-secondary mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-vet-primary hover:bg-vet-primary/90 hover:scale-105 transition-all duration-300">
              <Link to="/contact">{t('cta.bookAppointment')}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-vet-primary text-vet-primary hover:bg-vet-light hover:scale-105 transition-all duration-300">
              <Link to="/about">{t('cta.learnMore')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
