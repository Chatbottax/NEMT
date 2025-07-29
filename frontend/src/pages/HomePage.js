import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Shield, MapPin, Heart, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const features = [
    {
      icon: Shield,
      title: "Unmatched Safety",
      description: "Our drivers clear the most rigorous background checks, including DOJ/FBI, Live Scan, and DOT medical exams."
    },
    {
      icon: MapPin,
      title: "Real-Time Visibility",
      description: "Our entire fleet is equipped with GPS and telematics, giving districts and parents peace of mind."
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We provide more than a ride; we provide a comfortable, engaging, and supportive experience for every child."
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1596753599476-7a7c2f7677fc"
            alt="Modern Transportation Technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-midnight/70 backdrop-blur-sm"></div>
        </div>

        {/* Hero Content */}
        <motion.div 
          ref={heroRef}
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-exo font-bold mb-6 leading-tight"
          >
            The Future of{' '}
            <span className="text-transparent bg-gradient-to-r from-cyan-glow to-cta-yellow bg-clip-text">
              Transportation
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-off-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Your NEMT combines next-generation technology with unwavering safety protocols to provide California's most reliable student and medical transport solutions.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link 
              to="/student-transportation"
              className="group relative px-8 py-4 bg-cta-yellow text-midnight font-semibold rounded-xl hover:shadow-cta-glow transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <span>Student Transportation Solutions</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/nemt-services"
              className="group relative px-8 py-4 bg-transparent border-2 border-cyan-glow text-cyan-glow font-semibold rounded-xl hover:bg-cyan-glow hover:text-midnight transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <span>NEMT Services & Rates</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
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
              Why Choose <span className="text-cyan-glow">Your NEMT</span>?
            </h2>
            <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
              We're not just a transportation company - we're your trusted partner in safety, reliability, and excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative bg-glass-white backdrop-blur-glass border border-glass-border rounded-2xl p-8 hover:border-cyan-glow/50 hover:shadow-glass transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-glow/20 to-cta-yellow/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-cyan-glow" />
                </div>
                
                <h3 className="text-2xl font-exo font-semibold mb-4 text-off-white group-hover:text-cyan-glow transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-off-white/80 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;