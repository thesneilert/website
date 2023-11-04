import React from 'react';
import { Link } from 'react-router-dom';

import MyIcon from '../../src/favicon.svg';

function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo with SVG icon (32x32) */}
          <Link to="/" className="block" aria-label="Cruip">
            <img src={MyIcon} alt="My Icon" width="32" height="32" className="text-purple-600" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
