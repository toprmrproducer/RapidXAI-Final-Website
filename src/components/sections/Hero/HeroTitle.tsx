import React from 'react';
import { Logo } from '../../Logo/Logo';
import { TypewriterText } from '../../effects/TypewriterText';
import { RotatingText } from './RotatingText';

export function HeroTitle() {
  return (
    <div className="flex flex-col items-center space-y-12">
      <div className="transform scale-[3]">
        <Logo />
      </div>
      <div className="space-y-6">
        <TypewriterText
          text="Transform Your Business with"
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400 tracking-wider"
          speed={70}
        />
        <RotatingText />
      </div>
    </div>
  );
}