import React from 'react';
import './index.css';
import '../../App.css';

import { Link } from 'react-router-dom';
import { ReactComponent as Cat } from '../../Assets/MainIcon.svg';

const Header = () => {
  return (
    <header>
      <nav className="container">
        <Link to="/" className="links">
          <Cat className="mainIcon" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
