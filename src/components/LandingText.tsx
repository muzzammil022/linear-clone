'use client';
import { motion } from 'framer-motion';
import React from 'react';

export const LandingText = ({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.h2
      initial={{ opacity: 0, filter: 'blur(20px)', y: 20 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      transition={{ duration: 1, delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.h2>
  );
};