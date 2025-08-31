"use client";
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  startValue: number;
  endValue: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({ 
  startValue, 
  endValue, 
  duration = 2000, 
  suffix = "", 
  className = "" 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(startValue);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      
      const startTime = Date.now();
      const difference = endValue - startValue;
      
      const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(startValue + (difference * easeOutQuart));
        
        setCount(currentCount);
        
        if (progress >= 1) {
          clearInterval(timer);
        }
      }, 16); // ~60fps
      
      return () => clearInterval(timer);
    }
  }, [isInView, hasAnimated, startValue, endValue, duration]);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
}

// Utility functions for calculations
export function calculateYearsFromDate(startDate: string): number {
  const start = new Date(startDate);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - start.getTime());
  const diffYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365));
  return diffYears;
}

export function calculateTeachingHours(startDate: string, hoursPerMonth: number = 15): number {
  const start = new Date(startDate);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - start.getTime());
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
  return Math.floor(diffMonths * hoursPerMonth);
}
