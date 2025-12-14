import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Diaa Aldeen Alsawalhi. Built with React, Tailwind & Gemini AI.
        </p>
      </div>
    </footer>
  );
};

export default Footer;