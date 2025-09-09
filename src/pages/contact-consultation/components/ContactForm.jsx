import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    message: '',
    newsletter: false,
    privacy: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const budgetOptions = [
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-50k', label: '$10,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-500k', label: '$100,000 - $500,000' },
    { value: 'over-500k', label: 'Over $500,000' },
    { value: 'discuss', label: 'Prefer to discuss' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-3-months', label: '1-3 months' },
    { value: '3-6-months', label: '3-6 months' },
    { value: '6-12-months', label: '6-12 months' },
    { value: 'planning', label: 'Just planning' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData?.firstName?.trim()) newErrors.firstName = 'First name is required';
    if (!formData?.lastName?.trim()) newErrors.lastName = 'Last name is required';
    if (!formData?.email?.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/?.test(formData?.email)) newErrors.email = 'Email is invalid';
    if (!formData?.phone?.trim()) newErrors.phone = 'Phone number is required';
    if (!formData?.company?.trim()) newErrors.company = 'Company name is required';
    if (!formData?.message?.trim()) newErrors.message = 'Message is required';
    if (!formData?.privacy) newErrors.privacy = 'You must accept the privacy policy';
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors)?.length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <section className="py-16 bg-background">
        <div className="container-brand">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={40} className="text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Thank You for Reaching Out!
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We've received your message and will get back to you within 2 hours during business hours.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-foreground mb-2">What happens next?</h3>
              <ul className="text-sm text-muted-foreground space-y-2 text-left">
                <li className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-blue-600" />
                  <span>Our team will review your inquiry within 1-2 hours</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} className="text-blue-600" />
                  <span>We'll contact you to schedule a consultation call</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Calendar" size={16} className="text-blue-600" />
                  <span>Prepare a customized proposal for your needs</span>
                </li>
              </ul>
            </div>
            <Button 
              variant="outline" 
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  firstName: '', lastName: '', email: '', phone: '', company: '',
                  jobTitle: '', message: '', newsletter: false, privacy: false
                });
              }}
            >
              Submit Another Inquiry
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="container-brand">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll get back to you within 2 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl p-6 card-elevation">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon name="Phone" size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">+91 8793830447</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon name="Mail" size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a href="mailto:work@CloudNexus.in" className="text-muted-foreground">
  work@CloudNexus.in
</a>
                    </div>
                  </div>                
                
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-4">Why Choose CloudNexus?</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span>10+ years of experience</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span>500+ successful projects</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span>98% client satisfaction</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span>24/7 support available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 card-elevation">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Input
                    label="First Name"
                    type="text"
                    name="firstName"
                    value={formData?.firstName}
                    onChange={handleInputChange}
                    error={errors?.firstName}
                    required
                    placeholder="John"
                  />
                  
                  <Input
                    label="Last Name"
                    type="text"
                    name="lastName"
                    value={formData?.lastName}
                    onChange={handleInputChange}
                    error={errors?.lastName}
                    required
                    placeholder="Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData?.email}
                    onChange={handleInputChange}
                    error={errors?.email}
                    required
                    placeholder="john@company.com"
                  />
                  
                  <Input
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    value={formData?.phone}
                    onChange={handleInputChange}
                    error={errors?.phone}
                    required
                    placeholder="+91 8793830447"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Input
                    label="Company Name"
                    type="text"
                    name="company"
                    value={formData?.company}
                    onChange={handleInputChange}
                    error={errors?.company}
                    required
                    placeholder="Your Company Inc."
                  />
                  
                  <Input
                    label="Job Title"
                    type="text"
                    name="jobTitle"
                    value={formData?.jobTitle}
                    onChange={handleInputChange}
                    placeholder="CTO, Product Manager, etc."
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData?.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent resize-none"
                    placeholder="Tell us about your project, requirements, or any questions you have..."
                    required
                  />
                  {errors?.message && (
                    <p className="text-sm text-red-600 mt-1">{errors?.message}</p>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  <Checkbox
                    label="I'd like to receive updates about CloudNexus services and industry insights"
                    checked={formData?.newsletter}
                    onChange={(e) => setFormData(prev => ({ ...prev, newsletter: e?.target?.checked }))}
                  />
                  
                  <Checkbox
                    label="I agree to the Privacy Policy and Terms of Service"
                    checked={formData?.privacy}
                    onChange={(e) => setFormData(prev => ({ ...prev, privacy: e?.target?.checked }))}
                    error={errors?.privacy}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  iconName="Send"
                  iconPosition="right"
                  className="bg-cta hover:bg-cta/90 cta-shadow"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  By submitting this form, you agree to our Privacy Policy. We'll never share your information with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;