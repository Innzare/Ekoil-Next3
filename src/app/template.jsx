'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function Template({ children }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      exit={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.45 }}
    >
      {children}
    </motion.div>
  );
}
