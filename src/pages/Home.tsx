
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
      title: 'Compassionate Care',
      description: 'We treat every pet with love and care as if they were our own family members.'
    },
    {
      icon: Shield,
      title: 'Professional Service',
      description: 'Our experienced veterinarians provide the highest quality medical care.'
    },
    {
      icon: Clock,
      title: '24/7 Emergency',
      description: 'Round-the-clock emergency services for urgent pet health situations.'
    },
    {
      icon: Award,
      title: 'Trusted Expertise',
      description: 'Years of experience serving the Rabat community with excellence.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                {t('hero.title')}
              </h1>
              <h2 className="text-xl lg:text-2xl text-green-600 font-semibold mb-6">
                {t('hero.subtitle')}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link to="/contact">{t('hero.cta')}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
                  <Link to="/services">{t('hero.emergency')}</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&h=600&fit=crop&crop=center"
                  alt="Happy pets at veterinary clinic"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating cards */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Heart className="w-6 h-6 text-red-500" fill="currentColor" />
                  <span className="font-semibold">500+ Happy Pets</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-yellow-500" />
                  <span className="font-semibold">15+ Years Experience</span>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SOS Vet?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best possible care for your beloved pets with our experienced team and modern facilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
            {t('services.title')}
          </h2>
          <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Give Your Pet the Best Care?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to schedule an appointment or learn more about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link to="/contact">Book Appointment</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
