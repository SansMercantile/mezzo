import React from 'react';
import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-glow-blue/20 bg-deep-space/50 py-8">
      <div className="container mx-auto px-4 text-center text-light-text/60">
        <div className="flex justify-center items-center space-x-6 mb-4">
          <a
            href="https://github.com/SansMercantile/mezzo-anima"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-text/60 hover:text-glow-blue transition-colors duration-300"
            aria-label="GitHub Repository"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Sans Mercantile. All rights reserved.</p>
        <p className="text-sm mt-2">Technology that resonates with the soul.</p>
      </div>
    </footer>
  );
};

export default Footer;