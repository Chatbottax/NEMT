import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Clock, Shield, Send, CheckCircle } from 'lucide-react';

const ContactUsPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formRef, formInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          inquiry: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Partnerships",
      subtitle: "Sami Abdullah, President",
      details: "951-433-0797",
      description: "District partnerships, contract negotiations, and strategic partnerships"
    },
    {
      icon: Phone,
      title: "Operations",
      subtitle: "Adam",
      details: "714-854-2795",
      description: "Daily operations, scheduling, and service coordination"
    },
    {
      icon: Mail,
      title: "General Inquiries",
      subtitle: "Email Support",
      details: "admin@yournemt.com",
      description: "General questions, documentation requests, and information"
    },
    {
      icon: MapPin,
      title: "Service Area",
      subtitle: "Primary Coverage",
      details: "Riverside County & Surrounding Areas",
      description: "Southern California regional transportation services"
    }
  ];

  const inquiryTypes = [
    "New District Partnership",
    "NEMT Booking Inquiry", 
    "Driver Application",
    "General Question"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/8101455/pexels-photo-8101455.jpeg"
            alt="Customer Service Professional"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-midnight/85"></div>
        </div>

        <motion.div 
          ref={heroRef}
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-exo font-bold mb-6"
          >
            Let's Connect &{' '}
            <span className="text-transparent bg-gradient-to-r from-cyan-glow to-cta-yellow bg-clip-text">
              Get Started
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-off-white/90 mb-8 leading-relaxed"
          >
            Ready to experience the future of transportation? Our team is here to answer your questions and create a customized solution for your needs.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center space-x-4 text-off-white/80"
          >
            <Clock className="w-5 h-5 text-cyan-glow" />
            <span>24/7 Emergency Support Available</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-exo font-bold mb-8 text-off-white">
                Direct Contact <span className="text-cyan-glow">Information</span>
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-glass-white backdrop-blur-glass border border-glass-border rounded-xl p-6 hover:border-cyan-glow/50 hover:shadow-glass transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-glow/20 to-cta-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-6 h-6 text-cyan-glow" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-exo font-bold text-off-white mb-1 group-hover:text-cyan-glow transition-colors">
                          {info.title}
                        </h3>
                        <p className="text-cyan-glow font-semibold mb-1">
                          {info.subtitle}
                        </p>
                        <p className="text-cta-yellow font-bold text-lg mb-2">
                          {info.details}
                        </p>
                        <p className="text-off-white/80 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: 50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-glass-white backdrop-blur-glass border border-glass-border rounded-2xl p-8"
            >
              <h2 className="text-3xl md:text-4xl font-exo font-bold mb-8 text-off-white">
                Send Us a <span className="text-cyan-glow">Message</span>
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-cyan-glow mx-auto mb-6" />
                  <h3 className="text-2xl font-exo font-bold text-off-white mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-off-white/80">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-off-white font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-glass-white/50 border border-glass-border rounded-lg text-off-white placeholder-off-white/60 focus:border-cyan-glow focus:outline-none transition-colors duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-off-white font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-glass-white/50 border border-glass-border rounded-lg text-off-white placeholder-off-white/60 focus:border-cyan-glow focus:outline-none transition-colors duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-off-white font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-glass-white/50 border border-glass-border rounded-lg text-off-white placeholder-off-white/60 focus:border-cyan-glow focus:outline-none transition-colors duration-300"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-off-white font-medium mb-2">
                        How can we help? *
                      </label>
                      <select
                        name="inquiry"
                        value={formData.inquiry}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-glass-white/50 border border-glass-border rounded-lg text-off-white focus:border-cyan-glow focus:outline-none transition-colors duration-300"
                      >
                        <option value="">Select an option</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type} className="bg-midnight text-off-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-off-white font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-glass-white/50 border border-glass-border rounded-lg text-off-white placeholder-off-white/60 focus:border-cyan-glow focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell us more about your transportation needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-glass-white/50 text-off-white/50 cursor-not-allowed'
                        : 'bg-cta-yellow text-midnight hover:shadow-cta-glow hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-midnight/30 border-t-midnight rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* HIPAA Compliance Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-8 flex items-center justify-center space-x-2 text-off-white/70 text-sm"
              >
                <Shield className="w-4 h-4 text-cyan-glow" />
                <span>HIPAA Compliant • Your information is secure</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Area Map Placeholder */}
      <section className="py-20 px-4 bg-glass-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-8 text-off-white">
              Our <span className="text-cyan-glow">Service Area</span>
            </h2>
            
            <div className="bg-glass-white backdrop-blur-glass border border-glass-border rounded-2xl p-12">
              <MapPin className="w-16 h-16 text-cyan-glow mx-auto mb-6" />
              <h3 className="text-2xl font-exo font-bold text-off-white mb-4">
                Serving Riverside County & Beyond
              </h3>
              <p className="text-off-white/80 text-lg max-w-2xl mx-auto">
                We provide comprehensive transportation services throughout Southern California, with primary coverage in Riverside County and extending to surrounding districts and healthcare facilities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;