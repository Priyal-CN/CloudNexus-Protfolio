import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ConsultationBooking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [consultationType, setConsultationType] = useState('discovery');
  const [isBooking, setIsBooking] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const consultationTypes = [
    {
      id: 'discovery',
      title: 'Discovery Call',
      duration: '30 minutes',
      description: 'Initial consultation to understand your needs and explore how we can help.',
      icon: 'Search',
      popular: true
    },
    {
      id: 'technical',
      title: 'Technical Deep Dive',
      duration: '60 minutes',
      description: 'Detailed technical discussion about your project requirements and solutions.',
      icon: 'Code',
      popular: false
    },
    {
      id: 'strategy',
      title: 'Strategy Session',
      duration: '45 minutes',
      description: 'Strategic planning session to align technology with your business goals.',
      icon: 'Target',
      popular: false
    }
  ];

  const availableDates = [
    { value: '2025-01-08', label: 'Today, Jan 8', available: true },
    { value: '2025-01-09', label: 'Tomorrow, Jan 9', available: true },
    { value: '2025-01-10', label: 'Friday, Jan 10', available: true },
    { value: '2025-01-13', label: 'Monday, Jan 13', available: true },
    { value: '2025-01-14', label: 'Tuesday, Jan 14', available: true },
    { value: '2025-01-15', label: 'Wednesday, Jan 15', available: false }
  ];

  const availableTimes = [
    { value: '09:00', label: '9:00 AM PST', available: true },
    { value: '10:00', label: '10:00 AM PST', available: false },
    { value: '11:00', label: '11:00 AM PST', available: true },
    { value: '14:00', label: '2:00 PM PST', available: true },
    { value: '15:00', label: '3:00 PM PST', available: true },
    { value: '16:00', label: '4:00 PM PST', available: true }
  ];

  const handleBooking = async () => {
    setIsBooking(true);
    
    // Simulate booking process
    setTimeout(() => {
      setIsBooking(false);
      setIsBooked(true);
    }, 2000);
  };

  if (isBooked) {
    return (
      <section className="py-16 bg-trust">
        <div className="container-brand">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Calendar" size={40} className="text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Consultation Booked Successfully!
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Your {consultationTypes?.find(t => t?.id === consultationType)?.title} is scheduled for{' '}
              {availableDates?.find(d => d?.value === selectedDate)?.label} at{' '}
              {availableTimes?.find(t => t?.value === selectedTime)?.label}.
            </p>
            
            <div className="bg-card rounded-lg p-6 mb-8 text-left">
              <h3 className="font-semibold text-foreground mb-4">What to expect:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <Icon name="Mail" size={16} className="text-accent mt-1" />
                  <span>You'll receive a calendar invite with meeting details</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="FileText" size={16} className="text-accent mt-1" />
                  <span>We'll send a preparation guide to help you get the most out of our call</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="Video" size={16} className="text-accent mt-1" />
                  <span>The meeting will be conducted via Google Meet or Zoom</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="Clock" size={16} className="text-accent mt-1" />
                  <span>If you need to reschedule, please let us know 24 hours in advance</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">
                Add to Calendar
              </Button>
              <Button 
                variant="default"
                onClick={() => {
                  setIsBooked(false);
                  setSelectedDate('');
                  setSelectedTime('');
                  setConsultationType('discovery');
                }}
              >
                Book Another Session
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-trust">
      <div className="container-brand">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Schedule Your Free Consultation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book a personalized consultation with our experts. No commitment required.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Consultation Types */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Choose Your Consultation Type
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {consultationTypes?.map((type) => (
                <div
                  key={type?.id}
                  className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    consultationType === type?.id
                      ? 'border-accent bg-accent/5 shadow-lg'
                      : 'border-border bg-card hover:border-accent/50'
                  }`}
                  onClick={() => setConsultationType(type?.id)}
                >
                  {type?.popular && (
                    <div className="absolute -top-3 left-6">
                      <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                      consultationType === type?.id ? 'bg-accent text-white' : 'bg-accent/10 text-accent'
                    }`}>
                      <Icon name={type?.icon} size={24} />
                    </div>
                    
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {type?.title}
                    </h4>
                    <p className="text-sm text-accent font-medium mb-3">
                      {type?.duration}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {type?.description}
                    </p>
                  </div>
                  
                  <div className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    consultationType === type?.id
                      ? 'border-accent bg-accent' :'border-gray-300'
                  }`}>
                    {consultationType === type?.id && (
                      <Icon name="Check" size={16} className="text-white" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Date and Time Selection */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Date Selection */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Select Date
              </h3>
              <div className="space-y-3">
                {availableDates?.map((date) => (
                  <button
                    key={date?.value}
                    onClick={() => date?.available && setSelectedDate(date?.value)}
                    disabled={!date?.available}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                      selectedDate === date?.value
                        ? 'border-accent bg-accent/5'
                        : date?.available
                        ? 'border-border bg-card hover:border-accent/50' :'border-border bg-gray-50 cursor-not-allowed opacity-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-medium ${
                        selectedDate === date?.value ? 'text-accent' : 'text-foreground'
                      }`}>
                        {date?.label}
                      </span>
                      {!date?.available && (
                        <span className="text-xs text-red-500 font-medium">
                          Fully Booked
                        </span>
                      )}
                      {selectedDate === date?.value && (
                        <Icon name="Check" size={20} className="text-accent" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Select Time
              </h3>
              {!selectedDate ? (
                <div className="text-center py-12 text-muted-foreground">
                  <Icon name="Calendar" size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Please select a date first</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  {availableTimes?.map((time) => (
                    <button
                      key={time?.value}
                      onClick={() => time?.available && setSelectedTime(time?.value)}
                      disabled={!time?.available}
                      className={`p-3 rounded-lg border-2 text-center transition-all duration-200 ${
                        selectedTime === time?.value
                          ? 'border-accent bg-accent text-white'
                          : time?.available
                          ? 'border-border bg-card hover:border-accent/50 text-foreground'
                          : 'border-border bg-gray-50 cursor-not-allowed opacity-50 text-muted-foreground'
                      }`}
                    >
                      <span className="text-sm font-medium">
                        {time?.label}
                      </span>
                      {!time?.available && (
                        <div className="text-xs text-red-500 mt-1">
                          Booked
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Booking Summary and CTA */}
          {selectedDate && selectedTime && (
            <div className="mt-12 bg-card rounded-xl p-8 card-elevation">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Booking Summary
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Icon name="Calendar" size={20} className="text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-medium text-foreground">
                      {availableDates?.find(d => d?.value === selectedDate)?.label}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Time</p>
                    <p className="font-medium text-foreground">
                      {availableTimes?.find(t => t?.value === selectedTime)?.label}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="User" size={20} className="text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Type</p>
                    <p className="font-medium text-foreground">
                      {consultationTypes?.find(t => t?.id === consultationType)?.title}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedDate('');
                    setSelectedTime('');
                  }}
                  className="sm:w-auto"
                >
                  Change Selection
                </Button>
                <Button
                  variant="default"
                  onClick={handleBooking}
                  loading={isBooking}
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-cta hover:bg-cta/90 cta-shadow flex-1 sm:flex-none"
                >
                  {isBooking ? 'Booking...' : 'Confirm Booking'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ConsultationBooking;