import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Clock, Shield, ChevronRight, Users, Car, Truck, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const NEMTServicesPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [pricingRef, pricingInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [faqRef, faqInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const [activeCard, setActiveCard] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const serviceCards = [
    {
      id: 'ambulatory',
      icon: Users,
      title: 'Ambulatory',
      baseRate: '$25+',
      perMile: '$3+',
      description: 'For patients who can walk and sit in standard vehicle seating with minimal assistance.'
    },
    {
      id: 'wheelchair',
      icon: User,
      title: 'Wheelchair',
      baseRate: '$45+',
      perMile: '$4+',
      description: 'Wheelchair-accessible vehicles with proper securing equipment and trained operators.'
    },
    {
      id: 'gurney',
      icon: Truck,
      title: 'Gurney/Stretcher',
      baseRate: '$150+',
      perMile: '$5+',
      description: 'Full stretcher transport for patients requiring horizontal positioning during transport.'
    }
  ];

  const pricingData = [
    {
      type: 'Ambulatory - Base Rate',
      weekday: '$25 - $35',
      weekend: '$35 - $45',
      holiday: '$45 - $55'
    },
    {
      type: 'Wheelchair - Base Rate',
      weekday: '$45 - $60',
      weekend: '$65 - $80',
      holiday: '$85 - $100'
    },
    {
      type: 'Gurney/Stretcher - Base Rate',
      weekday: '$150 - $200',
      weekend: '$175 - $225',
      holiday: '$200 - $250'
    },
    {
      type: 'Mileage Fee (Per Mile)',
      weekday: '$3 - $4',
      weekend: '$4 - $5',
      holiday: '$5 - $6'
    },
    {
      type: 'Wait-Time Fee (per 15 min)',
      weekday: '$15 (First 15 min free)',
      weekend: '$15 (First 15 min free)',
      holiday: '$20 (First 15 min free)'
    },
    {
      type: 'Additional Attendant Fee',
      weekday: '$25',
      weekend: '$30',
      holiday: '$40'
    },
    {
      type: 'Stair-Chair Assist Fee',
      weekday: '$25',
      weekend: '$35',
      holiday: '$45'
    }
  ];

  const faqs = [
    {
      question: 'How is NEMT Cost Calculated?',
      answer: 'The total cost for your transportation is based on several factors, including the level of assistance required, the total mileage of the trip, the time of day, and any additional services needed. For a precise quote, please contact our transport coordinators.'
    },
    {
      question: 'Does Insurance Cover NEMT?',
      answer: 'We proudly partner with major healthcare brokers, including Modivcare and MTM. We strongly recommend contacting your insurance provider or broker directly to confirm your coverage. Medicare may also cover limited, medically necessary NEMT services with a written doctor\'s order.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We provide NEMT services throughout Southern California, with primary coverage in Riverside County and surrounding areas. Contact us to confirm service availability in your specific location.'
    },
    {
      question: 'How far in advance should I book?',
      answer: 'We recommend booking at least 48 hours in advance for routine appointments. However, we understand medical emergencies occur and will accommodate same-day requests whenever possible.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1721411480070-fcb558776d54"
            alt="Medical Transportation"
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
            Intelligent{' '}
            <span className="text-transparent bg-gradient-to-r from-cyan-glow to-cta-yellow bg-clip-text">
              NEMT Services
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-off-white/90 mb-8 leading-relaxed"
          >
            Partnering with California's leading healthcare brokers and providers to ensure timely, safe, and dignified medical transportation for every patient.
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
              Book Transportation Now
            </Link>
            <Link 
              to="/safety-compliance"
              className="px-8 py-4 bg-transparent border-2 border-cyan-glow text-cyan-glow font-semibold rounded-xl hover:bg-cyan-glow hover:text-midnight transition-all duration-300 hover:scale-105"
            >
              HIPAA Compliance Info
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Healthcare Partners */}
      <section className="py-16 px-4 bg-glass-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-exo font-bold mb-8 text-off-white">
            Trusted by Leading Healthcare Partners
          </h2>
          <div className="flex justify-center items-center space-x-12 opacity-80">
            <div className="text-center">
              <div className="w-20 h-20 bg-glass-white border border-glass-border rounded-xl flex items-center justify-center mb-2">
                <span className="text-cyan-glow font-bold text-lg">MTM</span>
              </div>
              <p className="text-off-white/80 text-sm">MTM Inc.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-glass-white border border-glass-border rounded-xl flex items-center justify-center mb-2">
                <span className="text-cyan-glow font-bold text-lg">MV</span>
              </div>
              <p className="text-off-white/80 text-sm">Modivcare</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Service Cards */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={servicesRef}
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-exo font-bold mb-6">
              NEMT Services{' '}
              <span className="text-cyan-glow">Southern California</span>
            </h2>
            <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
              Comprehensive medical transportation solutions designed to meet every patient's unique needs with dignity and care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {serviceCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative bg-glass-white backdrop-blur-glass border rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  activeCard === card.id 
                    ? 'border-cyan-glow shadow-glow' 
                    : 'border-glass-border hover:border-cyan-glow/50'
                }`}
                onMouseEnter={() => setActiveCard(card.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-glow/20 to-cta-yellow/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <card.icon className="w-8 h-8 text-cyan-glow" />
                  </div>
                  
                  <h3 className="text-2xl font-exo font-bold mb-2 text-off-white">
                    {card.title}
                  </h3>
                  
                  <div className="mb-4">
                    <div className="text-cta-yellow text-lg font-semibold">
                      Base Rate: {card.baseRate}
                    </div>
                    <div className="text-cyan-glow text-lg font-semibold">
                      Per Mile: {card.perMile}
                    </div>
                  </div>
                  
                  <p className="text-off-white/80 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {activeCard === card.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-cyan-glow/10 to-cta-yellow/10 rounded-2xl pointer-events-none"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Pricing Table */}
      <section className="py-20 px-4 bg-glass-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={pricingRef}
            initial={{ opacity: 0, y: 50 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-exo font-bold mb-6">
              Transparent <span className="text-cyan-glow">Pricing</span>
            </h2>
            <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
              Clear, upfront pricing with no hidden fees. All rates include professional service and insurance coverage.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="overflow-x-auto bg-glass-white backdrop-blur-glass border border-glass-border rounded-2xl"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="text-left p-6 font-exo font-bold text-off-white">Type of Charge</th>
                  <th className="text-center p-6 font-exo font-bold text-cyan-glow">Weekday Business Hours</th>
                  <th className="text-center p-6 font-exo font-bold text-cta-yellow">Weekends & Off-Hours</th>
                  <th className="text-center p-6 font-exo font-bold text-off-white">Holidays</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row, index) => (
                  <motion.tr
                    key={row.type}
                    initial={{ opacity: 0, x: -20 }}
                    animate={pricingInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="border-b border-glass-border/50 hover:bg-glass-white/5 transition-colors duration-300"
                  >
                    <td className="p-6 font-medium text-off-white">{row.type}</td>
                    <td className="p-6 text-center text-off-white/90">{row.weekday}</td>
                    <td className="p-6 text-center text-off-white/90">{row.weekend}</td>
                    <td className="p-6 text-center text-off-white/90">{row.holiday}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-8"
          >
            <Link 
              to="/contact-us"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-cta-yellow text-midnight font-semibold rounded-xl hover:shadow-cta-glow transition-all duration-300 hover:scale-105"
            >
              <span>Get Personalized Quote</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={faqRef}
            initial={{ opacity: 0, y: 50 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-exo font-bold mb-6">
              Frequently Asked <span className="text-cyan-glow">Questions</span>
            </h2>
            <p className="text-xl text-off-white/80">
              Get answers to common questions about our NEMT services.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-glass-white backdrop-blur-glass border border-glass-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-glass-white/5 transition-colors duration-300"
                >
                  <h3 className="text-lg font-exo font-semibold text-off-white pr-4">
                    {faq.question}
                  </h3>
                  <ChevronRight 
                    className={`w-5 h-5 text-cyan-glow transition-transform duration-300 ${
                      openFaq === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-off-white/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NEMTServicesPage;