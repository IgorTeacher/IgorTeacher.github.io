"use client";

import { useTranslation } from '@/hooks/useTranslation';
import { X, Cookie } from 'lucide-react';

interface ConsentBannerProps {
  onAccept: () => void;
  onDecline: () => void;
  onClose: () => void;
}

export default function ConsentBanner({ onAccept, onDecline, onClose }: ConsentBannerProps) {
  const { t } = useTranslation();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-3 flex-1">
            <Cookie className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <div className="text-sm text-neutral-700 dark:text-neutral-300">
              <p className="font-medium mb-1">
                {t('consent.title')}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400">
                {t('consent.description')}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={onDecline}
              className="px-4 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
            >
              {t('consent.decline')}
            </button>
            <button
              onClick={onAccept}
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t('consent.accept')}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
