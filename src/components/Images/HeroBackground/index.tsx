import Image from 'next/image';
import React from 'react';

export function Index() {
  return (
    <div className="absolute w-screen h-screen z-0">
      <Image
        priority
        src="/images/Hero/hero.ca446000.jpg"
        alt="Hero Section background"
        fill
        className="w-[100vw] h-[100vw] backdrop-blur-2xl bg-repeat"
      />
      <div className='absolute w-full h-full z-10 bg-StartupBackground opacity-50' />
    </div>
  );
}
