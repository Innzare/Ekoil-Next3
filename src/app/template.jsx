'use client';

import { motion } from 'framer-motion';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

export default function Template({ children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname, searchParams]);

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      exit={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
}
