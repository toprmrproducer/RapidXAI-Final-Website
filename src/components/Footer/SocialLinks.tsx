import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/rapidxai' },
  { icon: Linkedin, href: 'https://linkedin.com/company/rapidxai' },
  { icon: Github, href: 'https://github.com/rapidxai' },
];

export function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6">
      {socialLinks.map(({ icon: Icon, href }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-200"
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}