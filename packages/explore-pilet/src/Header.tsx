import * as React from 'react';
import { Link } from 'react-router-dom';
import type { ExtensionComponentProps } from 'app';
import Navigation from './components/Navigation';

const Header: React.FC<ExtensionComponentProps<any>> = ({ piral }) => {
  return (
    <header className="e_Header" data-boundary="explore">
      <div className="e_Header__cutter">
        <div className="e_Header__inner">
          <Link className="e_Header__link" to="/">
            <img
              className="e_Header__logo"
              src="https://blueprint.the-tractor.store/cdn/img/logo.svg"
              alt="Micro Frontends - Tractor Store"
            />
          </Link>
          <div className="e_Header__navigation">
            <Navigation />
          </div>
          <div className="e_Header__cart">
            <piral.Extension name="mini-cart" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
