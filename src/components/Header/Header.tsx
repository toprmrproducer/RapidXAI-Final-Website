import React from 'react';
import { Logo } from '../Logo/Logo';
import { Navigation } from './Navigation/Navigation';
import { Button } from '../Button';

export function Header() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-cyan-950/30 backdrop-blur-xl border border-cyan-500/20 rounded-full px-6 py-3 shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:border-cyan-500/30 transition-all duration-300">
        <div className="flex items-center space-x-8">
          <a href="/" className="interactive">
            <Logo />
          </a>
          
          <Navigation />

          <Button 
            size="sm" 
            className="bg-gradient-to-r from-fuchsia-600 to-cyan-600 hover:from-fuchsia-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-cyan-500/20"
            onClick={() => window.open('https://calendly.com/shreyasrajsony11/30min', '_blank')}
          >
            Get Quote
          </Button>
        </div>
      </div>
    </header>
  );
}