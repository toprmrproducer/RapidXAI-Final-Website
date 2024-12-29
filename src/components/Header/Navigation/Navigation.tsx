import React from 'react';
import { NavDropdown } from './NavDropdown';
import { NavLink } from './NavLink';

export function Navigation() {
  return (
    <nav className="hidden md:flex items-center space-x-4">
      <NavDropdown
        label="Teams"
        items={[
          { label: 'Team Alpha', href: '/teams/alpha' },
          { label: 'Team Bravo', href: '/teams/bravo' },
          { label: 'Team Delta', href: '/teams/delta' },
          { label: 'Team Papa Bear', href: '/teams/papa' },
        ]}
      />
      <NavDropdown
        label="Solutions"
        items={[
          { label: 'Voice Solutions', href: '/solutions/voice' },
          { label: 'Marketing Automation', href: '/solutions/marketing' },
          { label: 'Customer Support', href: '/solutions/support' },
          { label: 'Custom Software', href: '/solutions/software' },
        ]}
      />
      <NavLink href="/resources">Resources</NavLink>
      <NavLink href="/testimonials">Testimonials</NavLink>
      <NavLink href="/pricing">Pricing</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </nav>
  );
}