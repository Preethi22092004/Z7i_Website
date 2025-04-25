import React from 'react';
import { motion } from 'framer-motion';

const Downloads = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-container"
    >
      <h1>Downloads</h1>
      {/* Add content here */}
    </motion.div>
  );
};

export default Downloads;
