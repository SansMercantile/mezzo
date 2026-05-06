import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

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
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-deep-space/80 backdrop-blur-2xl border-b border-glow-blue/10 shadow-lg shadow-deep-space/50' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-9 h-9 rounded-lg bg-gradient-accent flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-deep-space" />
              </div>
              <div className="absolute inset-0 w-9 h-9 rounded-lg bg-gradient-accent blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-display text-xl font-bold tracking-wider text-white">
                MEZZO
              </span>
              <span className="font-display text-sm font-medium text-glow-blue/70">
                :ANIMA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 font-display text-sm tracking-wider transition-all duration-300 rounded-lg ${
                    isActive
                      ? 'text-glow-blue'
                      : 'text-muted-text hover:text-light-text'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-indicator"
                        className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-accent rounded-full"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/collaborate"
              className="px-5 py-2.5 text-sm font-display tracking-wider bg-gradient-accent text-deep-space rounded-lg font-semibold hover:shadow-glow-blue transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden relative z-50 p-2 rounded-lg hover:bg-surface-light transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-glow-blue" />
            ) : (
              <Menu className="h-6 w-6 text-light-text" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-deep-space/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `font-display text-3xl tracking-wider transition-colors duration-300 ${
                        isActive ? 'text-glow-blue text-glow-blue' : 'text-muted-text'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to="/collaborate"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-8 py-3 font-display text-lg tracking-wider bg-gradient-accent text-deep-space rounded-xl font-semibold"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;