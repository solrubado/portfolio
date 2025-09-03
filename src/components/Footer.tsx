import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-slate-400 mb-4 md:mb-0">
            <p className="flex items-center gap-2">
              Made with <Heart className="text-red-500 fill-current" size={16} /> by Maria Sol Rubado
            </p>
          </div>
          <div className="text-slate-400 text-sm">
            © 2025 Maria Sol Rubado. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;