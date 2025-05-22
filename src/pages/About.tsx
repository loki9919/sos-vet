
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const About = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: 'Dr. Fatima El Mansouri',
      title: 'Lead Veterinarian',
      experience: '15',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
      specialties: ['Surgery', 'Internal Medicine', 'Emergency Care'],
      description: 'Dr. El Mansouri has been practicing veterinary medicine for over 15 years and is passionate about providing the highest quality care for all animals.'
    },
    {
      name: 'Dr. Ahmed Benali',
      title: 'Veterinary Surgeon',
      experience: '12',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
      specialties: ['Orthopedic Surgery', 'Dental Care', 'Anesthesiology'],
      description: 'Specializing in advanced surgical procedures, Dr. Benali ensures every pet receives expert surgical care with compassion and precision.'
    },
    {
      name: 'Dr. Leila Radi',
      title: 'Small Animal Specialist',
      experience: '8',
      image: 'https://images.unsplash.com/photo-1594824473291-71f76b1c8a47?w=400&h=400&fit=crop&crop=face',
      specialties: ['Dermatology', 'Nutrition', 'Behavioral Health'],
      description: 'Dr. Radi focuses on preventive care and specialized treatments for small animals, helping pets live healthier, happier lives.'
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
              Meet our experienced and dedicated veterinary professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-green-600 font-semibold mb-2">
                      {member.title}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      {member.experience} {t('about.experience')}
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
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
