import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="px-3 py-1.5 text-sm font-medium text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-cyan-500 hover:bg-clip-text transition-all duration-300"
    >
      {children}
    </a>
  );
}