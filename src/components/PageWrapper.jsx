import React from 'react';
import { motion } from 'framer-motion';

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-24 md:py-32"
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;