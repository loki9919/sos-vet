
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const About = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: 'Dr. Zineb Bennani',
      title: t('about.doctorTitle'),
      experience: '10',
      image: import.meta.env.BASE_URL + 'dr-zineb-bennani.png',
      specialties: [
        t('about.specialties.surgery'),
        t('about.specialties.internalMedicine'),
        t('about.specialties.emergencyCare'),
        t('about.specialties.preventiveMedicine')
      ],
      description: t('about.doctorDescription')
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('about.missionTitle')}</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {t('about.mission')}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about.missionExtra')}
            </p>
            <div className="mt-8 flex items-center">
              <div className="w-12 h-1 bg-green-500 mr-4"></div>
              <p className="text-green-600 font-semibold">SOS Vet Rabat</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-100 rounded-full opacity-70 z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-full opacity-70 z-0"></div>
            <img
              src={`${import.meta.env.BASE_URL}our _mission.jpg`}
              alt="SOS Vet Rabat mission"
              className="rounded-lg shadow-lg relative z-10"
              onError={(e) => {
                console.error("Mission image failed to load:", e);
                e.currentTarget.src = `${import.meta.env.BASE_URL}placeholder.svg`;
              }}
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
              {t('about.teamDescription')}
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
                      className="w-48 h-48 rounded-full mx-auto object-cover mb-6 border-4 border-green-500"
                      onError={(e) => {
                        console.error("Image failed to load:", e);
                        e.currentTarget.src = import.meta.env.BASE_URL + 'placeholder.svg';
                      }}
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
          <h2 className="text-3xl font-bold mb-8">{t('about.impact')}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-green-100">Happy Pets Treated</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
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
