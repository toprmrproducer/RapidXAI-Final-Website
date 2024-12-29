import React from 'react';
import { LucideIcon } from 'lucide-react';
import { AnimatedIcon } from '../../ui/AnimatedIcon';

interface ResourceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  type: string;
}

export function ResourceCard({ title, description, icon, link, type }: ResourceCardProps) {
  return (
    <a 
      href={link}
      className="block group relative"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl opacity-20 group-hover:opacity-100 transition duration-300 blur" />
      <div className="relative bg-black p-6 rounded-2xl border border-gray-800 transition-all duration-300 group-hover:border-cyan-500/50">
        <div className="flex items-start gap-4">
          <AnimatedIcon 
            icon={icon}
            className="w-8 h-8 text-cyan-400 mt-1"
            animation="bounce"
          />
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <span className="text-xs font-medium text-cyan-400 bg-cyan-950/50 px-2 py-1 rounded-full">
                {type}
              </span>
            </div>
            <p className="text-gray-400 text-sm">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
}