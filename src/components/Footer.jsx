import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'About', path: '/about' },
    { name: 'Core', path: '/core' },
    { name: 'Collaborate', path: '/collaborate' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/SansMercantile/mezzo-anima' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Email', icon: Mail, href: 'mailto:contact@mezzoanima.com' },
  ];

  return (
    <footer className="relative z-10 border-t border-glow-blue/10 bg-deep-space/50 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center">
                <Heart className="h-5 w-5 text-deep-space" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-display text-2xl font-bold tracking-wider text-white">
                  MEZZO
                </span>
                <span className="font-display text-sm font-medium text-glow-blue/70">
                  :ANIMA
                </span>
              </div>
            </Link>
            <p className="text-muted-text max-w-md mb-6 leading-relaxed">
              Preserving the essence of human consciousness through advanced AI. 
              Building technology that resonates with the soul.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-surface-light border border-glow-blue/10 flex items-center justify-center text-muted-text hover:text-glow-blue hover:border-glow-blue/30 hover:shadow-glow-blue transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-wider text-light-text mb-4">
              QUICK LINKS
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-text hover:text-glow-blue transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-wider text-light-text mb-4">
              CONTACT
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@mezzoanima.com"
                  className="text-muted-text hover:text-glow-blue transition-colors duration-300"
                >
                  contact@mezzoanima.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/SansMercantile/mezzo-anima"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-text hover:text-glow-blue transition-colors duration-300"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-glow-blue/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-text text-sm">
            &copy; {currentYear} Sans Mercantile. All rights reserved.
          </p>
          <p className="text-muted-text text-sm flex items-center gap-2">
            Made with <Heart className="h-4 w-4 text-glow-pink fill-glow-pink" /> for humanity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;