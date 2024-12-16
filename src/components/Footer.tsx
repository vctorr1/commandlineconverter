import React from 'react';

interface FooterProps {
  text: string;
}

export function Footer({ text }: FooterProps) {
  return (
    <footer className="py-6 text-center text-sm text-gray-500">
      {text} • <a 
        href="https://www.linkedin.com/in/v%C3%ADctor-r%C3%ADos-recio-0b4432299/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-600 transition-colors"
      >
        LinkedIn
      </a>
    </footer>
  );
}