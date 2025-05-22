
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petName: '',
    service: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success('Appointment request submitted successfully! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      petName: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.address'),
      content: t('contact.location')
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      content: '+212 537-XX-XX-XX'
    },
    {
      icon: Mail,
      title: t('contact.email'),
      content: 'info@sosvet.ma'
    },
    {
      icon: Clock,
      title: t('contact.hours'),
      content: 'Mon-Fri: 8AM-8PM\nSat-Sun: 9AM-6PM\nEmergency: 24/7'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-vet-secondary mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-vet-secondary mb-8">Get in Touch</h2>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-vet-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-vet-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-vet-secondary mb-1">{info.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                    {info.title === t('contact.address') && (
                      <a
                        href="https://www.google.com/maps/place/SOS+V%C3%A9t%C3%A9rinaire+%C3%A0+domicile+Rabat/@33.9382018,-6.9692213,13z/data=!4m10!1m2!2m1!1ssos+vet+rabat!3m6!1s0xda7132be74a4c3f:0xfe9e567cd0ce6066!8m2!3d33.9382018!4d-6.8930036!15sCg1zb3MgdmV0IHJhYmF0Wg8iDXNvcyB2ZXQgcmFiYXSSAQx2ZXRlcmluYXJpYW6aASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUmtjbkEzVTNwM1JSQUKqAUUKDS9nLzExc2hwczA2czcQATIfEAEiG9vAv8QYSWOmqubBVCoEh2FZ3KztvrJYOW_YyDIREAIiDXNvcyB2ZXQgcmFiYXTgAQD6AQQILBBK!16s%2Fg%2F11ng6gjk4b?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-vet-primary text-sm hover:underline inline-block mt-1"
                      >
                        {t('contact.viewOnGoogleMaps')}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="space-y-4">
              <div className="rounded-lg h-80 overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.5762860976033!2d-6.895192324999999!3d33.938201800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7132be74a4c3f%3A0xfe9e567cd0ce6066!2sSOS%20V%C3%A9t%C3%A9rinaire%20%C3%A0%20domicile%20Rabat!5e0!3m2!1sen!2sus!4v1716410000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SOS Vet Rabat Location"
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="flex justify-center">
                <Button asChild className="bg-vet-primary hover:bg-vet-primary/90">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=SOS+V%C3%A9t%C3%A9rinaire+%C3%A0+domicile+Rabat&destination_place_id=ChIJP0x0dL4TpA0RZmDOzW3W6f4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('contact.getDirections')}
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-vet-secondary">
                  {t('contact.form.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.name')}
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.email')}
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.phone')}
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.pet')}
                      </label>
                      <Input
                        type="text"
                        value={formData.petName}
                        onChange={(e) => handleInputChange('petName', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.service')}
                    </label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wellness">Wellness Exam</SelectItem>
                        <SelectItem value="vaccination">Vaccination</SelectItem>
                        <SelectItem value="surgery">Surgery</SelectItem>
                        <SelectItem value="dental">Dental Care</SelectItem>
                        <SelectItem value="emergency">Emergency</SelectItem>
                        <SelectItem value="grooming">Grooming</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.message')}
                    </label>
                    <Textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your pet's needs..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-vet-primary hover:bg-vet-primary/90" size="lg">
                    {t('contact.form.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="mt-16 bg-red-50 border border-red-200 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-red-800 mb-4">
            {t('contact.emergencyServices')}
          </h2>
          <p className="text-red-700 mb-6">
            {t('contact.emergencyDescription')}
          </p>
          <Button className="bg-vet-primary hover:bg-vet-primary/90" size="lg">
            {t('contact.emergencyContact')}: +212 537-XX-XX-XX
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
