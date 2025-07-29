import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Users, Award, MapPin, Phone, Shield, CheckCircle } from 'lucide-react';

const AboutUsPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [missionRef, missionInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [processRef, processInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const whyChooseUs = [
    {
      icon: Award,
      title: "FirstAlt-Approved & Compliant",
      description: "Fully registered and credentialed with FirstAlt, we follow their recognized standards—including comprehensive background checks, DOT medical exams, drug screenings, Live Scan fingerprinting, and safety training."
    },
    {
      icon: Users,
      title: "Reliability Through Familiarity",
      description: "Our drivers consistently serve the same routes, so students benefit from routine. We coordinate closely with dispatch and support every route with our driver app for real-time communication and oversight."
    },
    {
      icon: Heart,
      title: "Focused on Special Needs Students",
      description: "We prioritize building a calm, respectful experience tailored to each student's needs. Safety and clarity guide every mile."
    },
    {
      icon: MapPin,
      title: "Local, Flexible Work Opportunities",
      description: "Our model offers weekday-only school-hour schedules, ideal for dependable part-time work. Whether you're a retiree, a stay-at-home parent, or a local community member looking for meaningful work, we offer a structured yet flexible role."
    }
  ];

  const processSteps = [
    {
      title: "Driver Onboarding & Training",
      description: "Our drivers all passed comprehensive background checks, drug screening, DOT medical exam, TB test, Live Scan fingerprinting, and virtual safety training before beginning routes."
    },
    {
      title: "Vehicle Readiness",
      description: "Home vehicles (2015 or newer) are inspected to meet FirstAlt's standards. We help coordinate inspections and required paperwork."
    },
    {
      title: "Consistent Route Assignments",
      description: "Each driver is assigned tailored morning and afternoon routes based on student needs. We ensure reliable schedules and transparent communication through our app."
    },
    {
      title: "Ongoing Support & Supervision",
      description: "Our dispatch team provides real-time support and guidance. Any incidents, delays, or route adjustments are communicated promptly."
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Every decision—from driver screening to app-based oversight—prioritizes student safety."
    },
    {
      icon: Users,
      title: "Trust Through Consistency",
      description: "We ensure students see familiar faces, routes, and environments every day."
    },
    {
      icon: Heart,
      title: "Respect and Compassion",
      description: "Our approach is rooted in dignity and understanding for each child's experience."
    },
    {
      icon: MapPin,
      title: "Community-Centered Work",
      description: "We serve local families and bring local support to communities that need it."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1609436132311-e4b0c9370469"
            alt="Professional Leadership"
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
            About{' '}
            <span className="text-transparent bg-gradient-to-r from-cyan-glow to-cta-yellow bg-clip-text">
              YOUR NEMT, LLC
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-off-white/90 leading-relaxed"
          >
            At YOUR NEMT, LLC, we specialize in providing safe, reliable, and personalized student transportation services for children with special needs.
          </motion.p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={missionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-exo font-bold mb-8">
              Our <span className="text-cyan-glow">Mission</span>
            </h2>
            
            <div className="bg-gradient-to-r from-cyan-glow/10 to-cta-yellow/10 border border-glass-border rounded-2xl p-12 max-w-5xl mx-auto">
              <p className="text-xl text-off-white/90 leading-relaxed mb-6">
                We believe quality transportation is more than getting from point A to B. It's about delivering care, consistency, and peace of mind. As an independent contractor-based service, our drivers become familiar faces in students' daily routines—creating trust, stability, and a positive start and end to each school day.
              </p>
              <p className="text-lg text-off-white/80 leading-relaxed">
                As a licensed and trusted FirstAlt transportation provider operating throughout Corona, Riverside, and San Bernardino County, our mission is to ensure every ride supports a child's comfort, independence, and well-being.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-glass-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-exo font-bold mb-6">
              Why Choose <span className="text-cyan-glow">Us</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
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
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={processRef}
            initial={{ opacity: 0, y: 50 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-exo font-bold mb-6">
              Our <span className="text-cyan-glow">Process</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-glass-white backdrop-blur-glass border border-glass-border rounded-xl p-6 hover:border-cyan-glow/50 hover:shadow-glass transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-glow text-midnight rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-exo font-bold text-off-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-off-white/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-glass-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={valuesRef}
            initial={{ opacity: 0, y: 50 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-exo font-bold mb-6">
              Values That <span className="text-cyan-glow">Drive Us</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-glass-white backdrop-blur-glass border border-glass-border rounded-2xl p-8 hover:border-cyan-glow/50 hover:shadow-glass transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-glow/20 to-cta-yellow/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-cyan-glow" />
                </div>
                
                <h3 className="text-2xl font-exo font-semibold mb-4 text-off-white group-hover:text-cyan-glow transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-off-white/80 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment to Growth Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-exo font-bold mb-16">
              Join Us on the <span className="text-cyan-glow">Journey</span>
            </h2>

            <div className="bg-gradient-to-r from-cyan-glow/10 to-cta-yellow/10 border border-glass-border rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-exo font-bold mb-6 text-off-white">
                Commitment to Growth
              </h3>
              <p className="text-off-white/90 mb-6 text-lg leading-relaxed">
                As YOUR NEMT, LLC expands in Southern California, we nurture opportunities for drivers to take additional routes and enhance community impact.
              </p>
              <p className="text-off-white/80 mb-8 text-lg leading-relaxed">
                YOUR NEMT, LLC is more than a transportation company—it's a partner in student success. Explore opportunities to drive through a company that makes a difference.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-2 text-off-white">
                  <Heart className="w-5 h-5 text-cyan-glow" />
                  <span className="font-semibold">Making a Difference Every Day</span>
                </div>
                <motion.a
                  href="/contact-us"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-cta-yellow text-midnight font-semibold rounded-xl hover:shadow-cta-glow transition-all duration-300"
                >
                  <span>Contact Our Team</span>
                  <Phone className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;