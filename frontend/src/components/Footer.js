import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Student Transportation', path: '/student-transportation' },
    { name: 'NEMT Services', path: '/nemt-services' },
    { name: 'Safety & Compliance', path: '/safety-compliance' },
    { name: 'Drive With Us', path: '/drive-with-us' },
  ];

  const services = [
    'Alternative Student Transportation',
    'Medical Transportation',
    'Wheelchair Accessible Vehicles',
    'Door-to-Door Service',
  ];

  return (
    <footer className="bg-midnight border-t border-glass-border">
      {/* Pre-footer CTA */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-glow/10 to-cta-yellow/10 border border-glass-border rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-exo font-bold mb-4 text-off-white">
              Ready to Experience Excellence?
            </h2>
            <p className="text-xl text-off-white/80 mb-8">
              Join hundreds of satisfied districts and healthcare providers who trust Your NEMT.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-cta-yellow text-midnight font-semibold rounded-xl hover:shadow-cta-glow transition-all duration-300 hover:scale-105"
            >
              <span>Get Started Today</span>
              <ExternalLink className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-glass-border py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl overflow-hidden">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_smart-transit-4/artifacts/t9bwckdk_LOGO.png"
                    alt="Your NEMT LLC Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-exo font-bold text-off-white">Your NEMT</h3>
                  <p className="text-sm text-off-white/70">Transportation Excellence</p>
                </div>
              </div>
              
              <p className="text-off-white/80 mb-6 max-w-md">
                Connecting students to their future and patients to their care through safe, reliable, and compassionate transportation services across Southern California.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-off-white/80">
                  <MapPin className="w-5 h-5 text-cyan-glow" />
                  <span>Corona, Riverside, and San Bernardino County</span>
                </div>
                <div className="flex items-center space-x-3 text-off-white/80">
                  <Phone className="w-5 h-5 text-cyan-glow" />
                  <span>Professional Transportation Services</span>
                </div>
                <div className="flex items-center space-x-3 text-off-white/80">
                  <Mail className="w-5 h-5 text-cyan-glow" />
                  <span>admin@yournemt.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-exo font-semibold text-off-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-off-white/80 hover:text-cyan-glow transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-exo font-semibold text-off-white mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="text-off-white/80">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-glass-border py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-off-white/60 text-sm">
            © 2025 Your NEMT, LLC. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-off-white/60 text-sm">HIPAA Compliant</span>
            <span className="text-off-white/60 text-sm">FirstAlt Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;