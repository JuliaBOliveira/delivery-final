import React from 'react';
import './index.css';
import '../../App.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Cat } from '../../Assets/MainIcon.svg';
import { UserContext } from '../../UserContext';

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header>
      <nav className="container">
        <Link to="/" className="links">
          <Cat className="mainIcon" />
        </Link>

        {data ? (
          <Link to="/conta" className="login">
            {data.nome}
          </Link>
        ) : (
          <Link to="/login" className="login">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
