import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Shield, FileText, Users, Car, Clock, Heart, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const SafetyCompliancePage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [driverRef, driverInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [vehicleRef, vehicleInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [regulatoryRef, regulatoryInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const driverRequirements = [
    { text: "Comprehensive background checks", icon: FileText },
    { text: "DOT medical examinations", icon: Heart },
    { text: "Drug screenings", icon: Shield },
    { text: "Live Scan fingerprinting", icon: Users },
    { text: "Virtual safety training", icon: Award },
    { text: "TB test clearance", icon: FileText },
    { text: "Clean driving records", icon: Car },
    { text: "FirstAlt certification", icon: Award },
  ];

  const vehicleRequirements = [
    { text: "Vehicle inspections (2015 or newer)", icon: Car },
    { text: "FirstAlt standard compliance", icon: Shield },
    { text: "Real-time app communication", icon: Clock },
    { text: "Dispatch oversight", icon: Users },
    { text: "Route consistency", icon: Car },
    { text: "Safety equipment verification", icon: Shield },
    { text: "Regular maintenance schedules", icon: Car },
    { text: "Emergency preparedness", icon: Heart },
  ];

  const regulatoryCompliance = [
    {
      title: "HIPAA Compliance",
      description: "We maintain strict adherence to HIPAA regulations with comprehensive administrative, physical, and technical safeguards to protect patient health information.",
      icon: Shield
    },
    {
      title: "California SB 88",
      description: "Full compliance with California's SB 88 requirements for student transportation, ensuring the highest safety standards for special needs students.",
      icon: Award
    },
    {
      title: "FirstAlt Contract Standards",
      description: "Certified FirstAlt contract provider meeting all requirements for alternative student transportation services in California school districts.",
      icon: FileText
    },
    {
      title: "DOT Compliance",
      description: "All drivers maintain current DOT medical certifications and undergo regular health assessments to ensure fitness for duty.",
      icon: Car
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1747699529551-a2d41eaebf93"
            alt="Safety and Compliance"
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
            Our Unwavering Commitment to{' '}
            <span className="text-transparent bg-gradient-to-r from-cyan-glow to-cta-yellow bg-clip-text">
              Safety
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-off-white/90 mb-8 leading-relaxed"
          >
            Safety isn't just our priority—it's our absolute standard. Every driver, vehicle, and process is held to the highest compliance requirements in the industry.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-glow/20 to-cta-yellow/20 border border-glass-border rounded-xl px-6 py-3"
          >
            <Shield className="w-6 h-6 text-cyan-glow" />
            <span className="text-off-white font-semibold">100% Compliant • Zero Compromises</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Driver Screening Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={driverRef}
            initial={{ opacity: 0, y: 50 }}
            animate={driverInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-exo font-bold mb-6">
              Our Drivers All <span className="text-cyan-glow">Pass</span>
            </h2>
            <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
              Every member of our team undergoes the most comprehensive background screening and certification process in the industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {driverRequirements.map((requirement, index) => (
              <motion.div
                key={requirement.text}
                initial={{ opacity: 0, y: 30 }}
                animate={driverInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-glass-white backdrop-blur-glass border border-glass-border rounded-xl p-6 hover:border-cyan-glow/50 hover:shadow-glass transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-glow/20 to-cta-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-cyan-glow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-off-white mb-1 group-hover:text-cyan-glow transition-colors">
                      {requirement.text}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle & Technology Section */}
      <section className="py-20 px-4 bg-glass-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={vehicleRef}
            initial={{ opacity: 0, y: 50 }}
            animate={vehicleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-exo font-bold mb-6">
              Vehicle & <span className="text-cyan-glow">Technology</span> Standards
            </h2>
            <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
              Our fleet meets FirstAlt standards and is supported by real-time technology for maximum safety and reliability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicleRequirements.map((requirement, index) => (
              <motion.div
                key={requirement.text}
                initial={{ opacity: 0, y: 30 }}
                animate={vehicleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-glass-white backdrop-blur-glass border border-glass-border rounded-xl p-6 hover:border-cyan-glow/50 hover:shadow-glass transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-glow/20 to-cta-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-cyan-glow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-off-white mb-1 group-hover:text-cyan-glow transition-colors">
                      {requirement.text}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Compliance Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={regulatoryRef}
            initial={{ opacity: 0, y: 50 }}
            animate={regulatoryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-exo font-bold mb-6">
              Regulatory <span className="text-cyan-glow">Compliance</span>
            </h2>
            <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
              We exceed all federal, state, and local regulatory requirements, ensuring complete compliance and peace of mind.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {regulatoryCompliance.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={regulatoryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-glass-white backdrop-blur-glass border border-glass-border rounded-2xl p-8 hover:border-cyan-glow/50 hover:shadow-glass transition-all duration-300 group"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-glow/20 to-cta-yellow/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-cyan-glow" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-exo font-bold mb-4 text-off-white group-hover:text-cyan-glow transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-off-white/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={regulatoryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-cyan-glow/10 to-cta-yellow/10 border border-glass-border rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-exo font-bold mb-4 text-off-white">
                Questions About Our Safety Standards?
              </h3>
              <p className="text-off-white/80 mb-6 text-lg">
                We're transparent about our safety protocols and compliance measures. Contact us for detailed information about our certifications and safety records.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-2 text-off-white">
                  <Shield className="w-5 h-5 text-cyan-glow" />
                  <span className="font-semibold">Safety First, Always</span>
                </div>
                <Link 
                  to="/contact-us"
                  className="px-6 py-3 bg-cta-yellow text-midnight font-semibold rounded-lg hover:shadow-cta-glow transition-all duration-300 hover:scale-105"
                >
                  Contact Us About Safety
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SafetyCompliancePage;