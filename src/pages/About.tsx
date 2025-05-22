
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const About = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: 'Dr. Zineb Bennani',
      title: 'Lead Veterinarian',
      experience: '15',
      image: '/dr-zineb-bennani.jpg',
      specialties: ['Surgery', 'Internal Medicine', 'Emergency Care', 'Preventive Medicine'],
      description: 'Dr. Zineb Bennani is a highly skilled veterinarian with over 10 years of experience in animal healthcare. She is dedicated to providing compassionate and comprehensive care for all animals, with special expertise in surgery and emergency medicine.'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {t('about.mission')}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Located in the heart of Rabat, we combine modern veterinary technology with
              traditional compassionate care to provide comprehensive health services for all types of pets.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1628407690480-22bce8ba8c4b?w=600&h=400&fit=crop"
              alt="Veterinarian caring for pet"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('about.team')}
            </h2>
            <p className="text-lg text-gray-600">
              Meet our lead veterinarian who provides exceptional care for your beloved pets
            </p>
          </div>

          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 max-w-xl">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-48 h-48 rounded-full mx-auto object-cover mb-6"
                    />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-green-600 font-semibold mb-3 text-lg">
                      {member.title}
                    </p>
                    <p className="text-gray-500 mb-4">
                      {member.experience} {t('about.experience')}
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-sm px-3 py-1">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-green-100">Happy Pets Treated</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-green-100">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-green-100">Emergency Care</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-green-100">Dedicated Care</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
