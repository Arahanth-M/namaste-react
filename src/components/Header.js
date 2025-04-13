import { LOGO } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [State, setState] = useState('login'); //here 'login' is the default initial value
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO} />
      </div>{' '}
      <div className="nav-items">
        <ul>
          <li>
            {' '}
            <Link to="/">Home</Link>{' '}
          </li>{' '}
          <li>
            {' '}
            <Link to="/about">About Us</Link>{' '}
          </li>{' '}
          <li>
            {' '}
            <Link to="/contact">Contact us</Link>{' '}
          </li>{' '}
          <li>
            {' '}
            <Link to="/"> Cart </Link>
          </li>{' '}
          <button
            className="login"
            onClick={() => {
              State == 'login' ? setState('logout') : setState('login');
            }}
          >
            {State}
          </button>
        </ul>{' '}
      </div>{' '}
    </div>
  );
};

export default Header;
