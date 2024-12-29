import React from 'react';
import { Card } from '../../ui/Card';

const videos = [
  {
    id: 'IIjhViAlMTA',
    title: 'Client Success Story 1',
  },
  {
    id: 'ktfwr3nOFeU',
    title: 'Client Success Story 2',
  },
  {
    id: 'Oe2s8j6JomQ',
    title: 'Client Success Story 3',
  },
];

export function VideoTestimonials() {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-white text-center mb-8">
        Watch Our Client Success Stories
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {videos.map((video) => (
          <Card key={video.id} className="overflow-hidden">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}