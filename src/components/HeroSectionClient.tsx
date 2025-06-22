'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const HeroSection = dynamic(
  () => import('@/components/HeroSection').then((mod) => mod.default),
  { 
    ssr: false,
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }
);

export default function HeroSectionClient() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    }>
      <HeroSection />
    </Suspense>
  );
}
