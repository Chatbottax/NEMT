import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Users, Award, MapPin, Phone } from 'lucide-react';

const AboutUsPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [missionRef, missionInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [leadershipRef, leadershipInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every passenger receives dignified, respectful treatment with genuine care for their well-being and comfort."
    },
    {
      icon: Users,
      title: "Safety First",
      description: "Uncompromising commitment to safety through rigorous training, background checks, and vehicle maintenance."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Continuous improvement in service quality, technology adoption, and professional development."
    },
    {
      icon: MapPin,
      title: "Community Focus",
      description: "Deep roots in Southern California with a commitment to serving our neighbors and building lasting relationships."
    }
  ];

  const leadership = [
    {
      name: "Sami Abdullah",
      title: "President & Founder",
      image: "https://images.unsplash.com/photo-1666830070102-0c2f74d2e692",
      bio: "With over 15 years of experience in transportation and healthcare services, Sami founded Your NEMT with a vision to transform how vulnerable populations access essential services. His commitment to safety and innovation has made Your NEMT the trusted partner for districts and healthcare providers across Southern California.",
      phone: "951-433-0797",
      specialty: "Strategic Partnerships & Business Development"
    },
    {
      name: "Adam",
      title: "Operations Director",
      image: "https://images.unsplash.com/photo-1609436132311-e4b0c9370469",
      bio: "Adam brings a wealth of operational expertise and a hands-on approach to daily operations. His dedication to efficient routing, driver support, and customer service ensures every trip meets our exacting standards. He personally oversees our technology integration and continuous improvement initiatives.",
      phone: "714-854-2795",
      specialty: "Operations Management & Service Coordination"
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
            Connecting Lives Through{' '}
            <span className="text-transparent bg-gradient-to-r from-cyan-glow to-cta-yellow bg-clip-text">
              Safe Transportation
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-off-white/90 leading-relaxed"
          >
            Founded with a mission to provide exceptional transportation services, Your NEMT has become Southern California's most trusted partner for student and medical transportation.
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
              <h3 className="text-3xl font-exo font-bold mb-6 text-off-white">
                Connecting Students to Their Future, Safely and Reliably
              </h3>
              <p className="text-xl text-off-white/90 leading-relaxed mb-6">
                We believe every student deserves safe, reliable transportation to access their education, and every patient deserves dignified transport to essential medical care. Our mission extends beyond simply moving people from point A to point B.
              </p>
              <p className="text-lg text-off-white/80 leading-relaxed">
                Based in Riverside County, we specialize in serving children with disabilities and patients requiring medical transportation. Our comprehensive approach combines cutting-edge technology, rigorous safety protocols, and genuine human compassion to create transportation experiences that families and healthcare providers can trust completely.
              </p>
            </div>
          </motion.div>
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
              Our Core <span className="text-cyan-glow">Values</span>
            </h2>
            <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
              These principles guide every decision we make and every service we provide.
            </p>
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

      {/* Leadership Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={leadershipRef}
            initial={{ opacity: 0, y: 50 }}
            animate={leadershipInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-exo font-bold mb-6">
              Meet Our <span className="text-cyan-glow">Leadership</span>
            </h2>
            <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
              Experienced professionals dedicated to excellence in transportation services.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 50 }}
                animate={leadershipInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className="bg-glass-white backdrop-blur-glass border border-glass-border rounded-2xl p-8 hover:border-cyan-glow/50 hover:shadow-glass transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    <img 
                      src={leader.image}
                      alt={leader.name}
                      className="w-32 h-32 rounded-xl object-cover border-2 border-glass-border"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-exo font-bold text-off-white mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-cyan-glow font-semibold mb-2">
                      {leader.title}
                    </p>
                    <p className="text-cta-yellow text-sm font-medium mb-4">
                      {leader.specialty}
                    </p>
                    
                    <p className="text-off-white/80 leading-relaxed mb-6">
                      {leader.bio}
                    </p>

                    <div className="flex items-center space-x-2 text-off-white">
                      <Phone className="w-4 h-4 text-cyan-glow" />
                      <span className="font-semibold">{leader.phone}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats / Achievements */}
      <section className="py-20 px-4 bg-glass-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-exo font-bold mb-16">
              Our <span className="text-cyan-glow">Impact</span>
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-exo font-bold text-cyan-glow mb-4">15+</div>
                <div className="text-off-white font-semibold">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-exo font-bold text-cta-yellow mb-4">100%</div>
                <div className="text-off-white font-semibold">Safety Compliance</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-exo font-bold text-cyan-glow mb-4">24/7</div>
                <div className="text-off-white font-semibold">Emergency Support</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-exo font-bold text-cta-yellow mb-4">50+</div>
                <div className="text-off-white font-semibold">Partner Districts</div>
              </div>
            </div>

            <div className="mt-16 bg-gradient-to-r from-cyan-glow/10 to-cta-yellow/10 border border-glass-border rounded-2xl p-8">
              <h3 className="text-2xl font-exo font-bold mb-4 text-off-white">
                Ready to Partner with Us?
              </h3>
              <p className="text-off-white/80 mb-6 max-w-2xl mx-auto">
                Experience the difference that comes from working with a transportation company that truly cares about the communities we serve.
              </p>
              <motion.a
                href="/contact-us"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-cta-yellow text-midnight font-semibold rounded-xl hover:shadow-cta-glow transition-all duration-300"
              >
                <span>Contact Our Team</span>
                <Phone className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;