import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Car, Heart, DollarSign, Users, CheckCircle, ExternalLink, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const DriveWithUsPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [requirementsRef, requirementsInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Pay",
      description: "Above-market rates with performance bonuses and regular pay increases based on safety record and reliability."
    },
    {
      icon: Heart,
      title: "Meaningful Work",
      description: "Make a real difference in the lives of students and patients who depend on safe, reliable transportation."
    },
    {
      icon: Car,
      title: "Modern Fleet",
      description: "Drive well-maintained, technology-equipped vehicles with GPS, safety systems, and comfort features."
    },
    {
      icon: Users,
      title: "Supportive Team",
      description: "Join a professional team that values safety, compassion, and excellence in everything we do."
    }
  ];

  const requirements = [
    "Valid California Commercial Driver's License (CDL)",
    "Clean driving record with no major violations",
    "Pass comprehensive background check (DOJ/FBI)",
    "Complete Live Scan fingerprinting",
    "DOT medical examination certification",
    "TB test clearance",
    "Commitment to safety and professionalism",
    "Excellent communication and interpersonal skills"
  ];

  const positions = [
    {
      title: "Student Transportation Driver",
      type: "Full-Time / Part-Time",
      description: "Transport students with special needs to and from school. Requires patience, compassion, and dedication to child safety.",
      highlights: ["Morning and afternoon routes", "Special needs experience preferred", "Benefits package available"]
    },
    {
      title: "NEMT Driver",
      type: "Full-Time / Part-Time / On-Call",
      description: "Provide medical transportation for patients requiring ambulatory, wheelchair, or stretcher transport.",
      highlights: ["Flexible scheduling", "Medical transport training provided", "Opportunity for advancement"]
    },
    {
      title: "Lead Driver / Supervisor",
      type: "Full-Time",
      description: "Experienced drivers can advance to leadership roles, mentoring new team members and ensuring route efficiency.",
      highlights: ["Leadership opportunities", "Training responsibilities", "Competitive salary package"]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/8101455/pexels-photo-8101455.jpeg"
            alt="Professional Driver Opportunities"
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
            Join a Team That{' '}
            <span className="text-transparent bg-gradient-to-r from-cyan-glow to-cta-yellow bg-clip-text">
              Cares
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-off-white/90 mb-8 leading-relaxed"
          >
            Drive with purpose. Every day, you'll help students reach their potential and patients access the care they need. Join Southern California's premier transportation team.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="#open-positions"
              className="px-8 py-4 bg-cta-yellow text-midnight font-semibold rounded-xl hover:shadow-cta-glow transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <span>View Open Positions</span>
              <ExternalLink className="w-5 h-5" />
            </a>
            <Link 
              to="/contact-us"
              className="px-8 py-4 bg-transparent border-2 border-cyan-glow text-cyan-glow font-semibold rounded-xl hover:bg-cyan-glow hover:text-midnight transition-all duration-300 hover:scale-105"
            >
              Contact Our Hiring Team
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={benefitsRef}
            initial={{ opacity: 0, y: 50 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-exo font-bold mb-6">
              Why Drive with <span className="text-cyan-glow">Your NEMT</span>?
            </h2>
            <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
              We invest in our drivers because we know that happy, supported team members provide the best service to our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-glass-white backdrop-blur-glass border border-glass-border rounded-2xl p-8 hover:border-cyan-glow/50 hover:shadow-glass transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-glow/20 to-cta-yellow/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-cyan-glow" />
                </div>
                
                <h3 className="text-2xl font-exo font-semibold mb-4 text-off-white group-hover:text-cyan-glow transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-off-white/80 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-4 bg-glass-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={requirementsRef}
            initial={{ opacity: 0, y: 50 }}
            animate={requirementsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-exo font-bold mb-6">
              Driver <span className="text-cyan-glow">Requirements</span>
            </h2>
            <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
              We maintain the highest standards to ensure the safety and security of everyone we serve.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {requirements.map((requirement, index) => (
              <motion.div
                key={requirement}
                initial={{ opacity: 0, x: -20 }}
                animate={requirementsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3 bg-glass-white backdrop-blur-glass border border-glass-border rounded-xl p-4 hover:border-cyan-glow/50 transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-cyan-glow flex-shrink-0" />
                <span className="text-off-white font-medium text-sm">{requirement}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={requirementsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-cyan-glow/10 to-cta-yellow/10 border border-glass-border rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-exo font-bold mb-4 text-off-white">
                Don't Meet All Requirements Yet?
              </h3>
              <p className="text-off-white/80 mb-6">
                We believe in investing in the right people. If you're committed to safety and serving others, we may be able to help you obtain the necessary certifications.
              </p>
              <Link 
                to="/contact-us"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-cta-yellow text-midnight font-semibold rounded-lg hover:shadow-cta-glow transition-all duration-300 hover:scale-105"
              >
                <span>Contact Our Training Coordinator</span>
                <Phone className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-exo font-bold mb-6">
              Current <span className="text-cyan-glow">Opportunities</span>
            </h2>
            <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
              Join our growing team and make a meaningful impact in your community.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-glass-white backdrop-blur-glass border border-glass-border rounded-2xl p-8 hover:border-cyan-glow/50 hover:shadow-glass transition-all duration-300"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-exo font-bold text-off-white mb-2">
                    {position.title}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-cyan-glow/20 text-cyan-glow rounded-full text-sm font-medium">
                    {position.type}
                  </span>
                </div>

                <p className="text-off-white/80 mb-6 leading-relaxed">
                  {position.description}
                </p>

                <div className="space-y-2 mb-6">
                  {position.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-glow flex-shrink-0" />
                      <span className="text-off-white/80 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full px-6 py-3 bg-cta-yellow text-midnight font-semibold rounded-lg hover:shadow-cta-glow transition-all duration-300 hover:scale-105">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>

          {/* Application Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-glow/10 to-cta-yellow/10 border border-glass-border rounded-2xl p-8"
          >
            <h3 className="text-3xl font-exo font-bold text-center mb-8 text-off-white">
              Ready to Apply?
            </h3>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-exo font-semibold mb-4 text-cyan-glow">
                  Application Process:
                </h4>
                <ol className="space-y-3 text-off-white/80">
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-cyan-glow text-midnight rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <span>Submit your application through our online portal</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-cyan-glow text-midnight rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <span>Complete background check and medical examination</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-cyan-glow text-midnight rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <span>Attend orientation and safety training</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-cyan-glow text-midnight rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    <span>Start making a difference in your community!</span>
                  </li>
                </ol>
              </div>

              <div className="text-center">
                <p className="text-off-white/80 mb-6">
                  Questions about our positions or application process?
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2 text-off-white">
                    <Phone className="w-4 h-4 text-cyan-glow" />
                    <span className="font-semibold">Operations: 714-854-2795</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-off-white">
                    <Mail className="w-4 h-4 text-cyan-glow" />
                    <span className="font-semibold">admin@yournemt.com</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DriveWithUsPage;