"use client";
import { useState, useEffect, useRef } from 'react';

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
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
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
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    observer.observe(element);

    // Fallback: Start animation after 3 seconds if intersection observer doesn't trigger
    const fallbackTimer = setTimeout(() => {
      if (!hasAnimated) {
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
      }
    }, 3000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [hasAnimated, startValue, endValue, duration]);

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

export function calculateTeachingHours(startDate: string, hoursPerWeek: number = 20): number {
  const start = new Date(startDate);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - start.getTime());
  const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
  const totalHours = diffWeeks * hoursPerWeek;
  // Round down to nearest thousand
  return Math.floor(totalHours / 1000) * 1000;
}
