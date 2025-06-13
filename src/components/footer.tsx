'use client';
import React from 'react';

const footerLinks = {
  Features: [
    'Plan',
    'Build',
    'Insights',
    'Customer Requests',
    'Linear Asks',
    'Security',
    'Mobile',
  ],
  Product: [
    'Pricing',
    'Method',
    'Integrations',
    'Changelog',
    'Documentation',
    'Download',
    'Switch',
  ],
  Company: [
    'About',
    'Customers',
    'Careers',
    'Blog',
    'README',
    'Quality',
    'Brand',
  ],
  Resources: [
    'Developers',
    'Status',
    'Startups',
    'Report vulnerability',
    'DPA',
    'Privacy',
    'Terms',
  ],
  Connect: [
    'Contact us',
    'Community',
    'X (Twitter)',
    'GitHub',
    'YouTube',
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 w-full py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        {/* Logo */}
        <div className="mb-6 md:mb-0">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-white/80 to-white" />
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 w-full">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-medium mb-4">{title}</h4>
              <ul className="space-y-2 text-sm">
                {links.map((link) => (
                  <li
                    key={link}
                    className="hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}