import React from 'react';
import { ResourceCard } from './ResourceCard';
import { LucideIcon } from 'lucide-react';

interface Resource {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  type: string;
}

interface ResourceCategoryProps {
  title: string;
  description: string;
  resources: Resource[];
}

export function ResourceCategory({ title, description, resources }: ResourceCategoryProps) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        <p className="text-gray-400">{description}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <ResourceCard key={index} {...resource} />
        ))}
      </div>
    </div>
  );
}