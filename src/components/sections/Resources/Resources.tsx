import React from 'react';
import { Book, Video, FileText, Download, ExternalLink } from 'lucide-react';
import { SectionTitle } from '../../ui/SectionTitle';
import { ResourceCard } from './ResourceCard';
import { ResourceCategory } from './ResourceCategory';

const resources = {
  guides: [
    {
      title: 'Getting Started with AI',
      description: 'A comprehensive guide to understanding AI basics',
      icon: Book,
      link: '#',
      type: 'PDF Guide'
    },
    {
      title: 'AI Implementation Roadmap',
      description: 'Step-by-step guide to implementing AI in your business',
      icon: FileText,
      link: '#',
      type: 'Interactive Guide'
    }
  ],
  videos: [
    {
      title: 'AI Voice Solutions Demo',
      description: 'See Team Alpha in action with real-world examples',
      icon: Video,
      link: '#',
      type: 'Video Tutorial'
    },
    {
      title: 'Marketing Automation Masterclass',
      description: 'Learn how Team Bravo transforms outbound marketing',
      icon: Video,
      link: '#',
      type: 'Webinar Recording'
    }
  ],
  tools: [
    {
      title: 'ROI Calculator',
      description: 'Calculate potential savings with AI automation',
      icon: Download,
      link: '#',
      type: 'Interactive Tool'
    },
    {
      title: 'AI Readiness Assessment',
      description: 'Evaluate your business\'s AI implementation readiness',
      icon: ExternalLink,
      link: '#',
      type: 'Online Tool'
    }
  ]
};

export function Resources() {
  return (
    <section className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Free Resources & Learning"
          description="Explore our library of guides, videos, and tools to master AI implementation"
          gradient
        />

        <div className="mt-16 space-y-16">
          <ResourceCategory
            title="Learning Guides"
            description="Comprehensive guides to help you understand and implement AI"
            resources={resources.guides}
          />

          <ResourceCategory
            title="Video Tutorials"
            description="Watch our experts demonstrate AI solutions in action"
            resources={resources.videos}
          />

          <ResourceCategory
            title="Free Tools"
            description="Interactive tools to help you evaluate and plan your AI journey"
            resources={resources.tools}
          />
        </div>
      </div>
    </section>
  );
}