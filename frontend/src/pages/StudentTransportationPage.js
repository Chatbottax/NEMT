import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Clock, Users, CheckCircle, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudentTransportationPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [complianceRef, complianceInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const features = [
    {
      icon: Shield,
      title: "SB 88 Compliant",
      description: "Fully compliant with California's SB 88 requirements for special needs student transportation."
    },
    {
      icon: Users,
      title: "Special Needs Expertise",
      description: "Specialized training and equipment for students with disabilities and special medical needs."
    },
    {
      icon: Clock,
      title: "Reliable Scheduling",
      description: "Consistent, on-time service that works with your district's schedule and requirements."
    },
    {
      icon: MapPin,
      title: "Door-to-Door Service",
      description: "Safe pickup and drop-off directly from home to school and back, ensuring complete peace of mind."
    }
  ];

  const complianceFeatures = [
    "FirstAlt Contract Provider",
    "DOJ/FBI Background Checks",
    "Live Scan Fingerprinting",
    "DOT Medical Examinations",
    "Child Safety Seat Certified",
    "GPS Fleet Tracking",
    "Real-time Parent Notifications",
    "Disability Support Equipment"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1527058918112-6e17a8213943"
            alt="Professional School Bus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-midnight/80"></div>
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
            Your District's Trusted{' '}
            <span className="text-transparent bg-gradient-to-r from-cyan-glow to-cta-yellow bg-clip-text">
              Transportation Partner
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-off-white/90 mb-8 leading-relaxed"
          >
            Alternative student transportation Riverside County trusts. We provide door-to-door service for students with disabilities, emphasizing safety, reliability, and compassionate care.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/contact-us"
              className="px-8 py-4 bg-cta-yellow text-midnight font-semibold rounded-xl hover:shadow-cta-glow transition-all duration-300 hover:scale-105"
            >
              Request Transportation Quote
            </Link>
            <Link 
              to="/safety-compliance"
              className="px-8 py-4 bg-transparent border-2 border-cyan-glow text-cyan-glow font-semibold rounded-xl hover:bg-cyan-glow hover:text-midnight transition-all duration-300 hover:scale-105"
            >
              View Safety Records
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={featuresRef}
            initial={{ opacity: 0, y: 50 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-exo font-bold mb-6">
              Special Needs Student Transport{' '}
              <span className="text-cyan-glow">California</span>
            </h2>
            <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
              We understand the unique transportation challenges faced by students with disabilities. Our comprehensive service ensures every child receives the care and attention they deserve.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-glass-white backdrop-blur-glass border border-glass-border rounded-2xl p-6 hover:border-cyan-glow/50 hover:shadow-glass transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-glow/20 to-cta-yellow/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-cyan-glow" />
                </div>
                
                <h3 className="text-xl font-exo font-semibold mb-3 text-off-white group-hover:text-cyan-glow transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-off-white/80 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SB 88 Compliance Section */}
      <section className="py-20 px-4 bg-glass-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={complianceRef}
            initial={{ opacity: 0, y: 50 }}
            animate={complianceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-exo font-bold mb-6">
              <span className="text-cta-yellow">FirstAlt</span> Contract Provider
            </h2>
            <p className="text-xl text-off-white/80 max-w-3xl mx-auto mb-8">
              As a certified FirstAlt contract provider, we meet all requirements for alternative student transportation in California, ensuring your district receives compliant, reliable service.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={complianceInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3 bg-glass-white backdrop-blur-glass border border-glass-border rounded-xl p-4 hover:border-cyan-glow/50 transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-cyan-glow flex-shrink-0" />
                <span className="text-off-white font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={complianceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-cyan-glow/10 to-cta-yellow/10 border border-glass-border rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-exo font-bold mb-4 text-off-white">
                Ready to Partner with Your District?
              </h3>
              <p className="text-off-white/80 mb-6">
                Contact us today to discuss your student transportation needs and learn how we can provide safe, reliable service for your special needs students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-2 text-off-white">
                  <Phone className="w-5 h-5 text-cyan-glow" />
                  <span className="font-semibold">Partnerships: 951-433-0797</span>
                </div>
                <Link 
                  to="/contact-us"
                  className="px-6 py-3 bg-cta-yellow text-midnight font-semibold rounded-lg hover:shadow-cta-glow transition-all duration-300 hover:scale-105"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StudentTransportationPage;