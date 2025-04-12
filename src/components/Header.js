import { LOGO } from '../utils/constants';
import { useState } from 'react';

const Header = () => {
  const [State, setState] = useState('login'); //here 'login' is the default initial value
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO} />
      </div>{' '}
      <div className="nav-items">
        <ul>
          <li> Home </li> <li> About Us </li> <li> Contact us </li>{' '}
          <li> Cart </li>{' '}
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
