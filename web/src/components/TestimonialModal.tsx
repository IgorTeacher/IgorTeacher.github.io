"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X, ExternalLink, Instagram, Linkedin, Facebook } from "lucide-react";
import type { Testimonial } from "@/lib/types";

interface TestimonialModalProps {
  testimonial: Testimonial | null;
  isOpen: boolean;
  onClose: () => void;
  locale: string;
}

export default function TestimonialModal({ 
  testimonial, 
  isOpen, 
  onClose, 
  locale 
}: TestimonialModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Handle click outside modal
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || !testimonial) return null;

  const isTranslated = testimonial.originalLanguage && testimonial.originalLanguage !== locale;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      {/* Modal */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl transform transition-all duration-300 ease-out"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-600">
          <h3 id="modal-title" className="text-lg font-semibold text-neutral-900 dark:text-white">
            {testimonial.name}&apos;s Review
          </h3>
          <button
            onClick={onClose}
            className="p-2 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Translation indicator */}
          {isTranslated && (
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm rounded-full">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Translated from {testimonial.originalLanguage?.toUpperCase()}
            </div>
          )}

          {/* Full review */}
          <blockquote className="text-neutral-800 dark:text-neutral-200 text-lg leading-relaxed mb-6">
            &ldquo;{testimonial.fullReview || testimonial.quote}&rdquo;
          </blockquote>

          {/* Author info */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-600">
            <div className="flex items-center gap-4">
              {/* Avatar */}
              {testimonial.avatar && (
                <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-neutral-200 dark:ring-neutral-600">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              {/* Name and details */}
              <div>
                <div className="font-semibold text-neutral-900 dark:text-white">
                  {testimonial.name}
                  {testimonial.age && (
                    <span className="text-neutral-600 dark:text-neutral-400 font-normal">, {testimonial.age}</span>
                  )}
                </div>
                {testimonial.location && (
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    {testimonial.location}
                  </div>
                )}
              </div>
            </div>

            {/* Social link */}
            {testimonial.profileUrl && (
              <a
                href={testimonial.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white transition-colors rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700"
                aria-label={`${testimonial.name} profile`}
              >
                {testimonial.platform === "linkedin" ? (
                  <Linkedin className="h-4 w-4" />
                ) : testimonial.platform === "instagram" ? (
                  <Instagram className="h-4 w-4" />
                ) : testimonial.platform === "facebook" ? (
                  <Facebook className="h-4 w-4" />
                ) : (
                  <ExternalLink className="h-4 w-4" />
                )}
                <span className="text-sm font-medium">
                  {testimonial.platform === "linkedin" ? "LinkedIn" : 
                   testimonial.platform === "instagram" ? "Instagram" :
                   testimonial.platform === "facebook" ? "Facebook" : "Profile"}
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
