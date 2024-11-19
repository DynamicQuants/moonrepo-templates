'use client';

import type { FC } from 'react';
import Image from 'next/image';

interface HeroProps {
  message: string;
}

const Hero: FC<HeroProps> = ({ message }) => {
  return (
    <>
      <Image className="mb-4" src="/nextjs-logo.webp" alt="Next.js Logo" width={150} height={150} />
      <h1 className="text-6xl font-bold text-center">{message}</h1>
      <p className="font-mono text-lg text-center mt-4">Welcome to your new Next.js app.</p>
    </>
  );
};

export default Hero;
