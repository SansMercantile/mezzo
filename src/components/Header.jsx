import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Core', path: '/core' },
    { name: 'Collaborate', path: '/collaborate' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card-bg/80 backdrop-blur-lg border-b border-glow-blue/20' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-orbitron text-2xl font-bold text-glow-blue text-glow-blue">
            MEZZO:ANIMA
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative font-orbitron transition-colors duration-300 hover:text-glow-blue ${
                    isActive ? 'text-glow-blue' : 'text-light-text'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-link"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-glow-blue"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden z-50">
            {isMenuOpen ? <X className="h-6 w-6 text-glow-blue" /> : <Menu className="h-6 w-6 text-light-text" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-deep-space/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-orbitron text-3xl transition-colors duration-300 ${
                      isActive ? 'text-glow-blue' : 'text-light-text'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;