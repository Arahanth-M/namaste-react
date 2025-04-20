import { LOGO } from '../utils/constants';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const [State, setState] = useState('login'); //here 'login' is the default initial value
  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);
  const { loggedInUser } = useContext(UserContext);

  //subscibing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-40" src={LOGO} />
      </div>{' '}
      <div className="flex items-center">
        <ul className="flex p-10 m-4">
          <li className="px-4">
            {' '}
            <Link to="/">Home</Link>{' '}
          </li>{' '}
          <li className="px-4">
            {' '}
            <Link to="/about">About Us</Link>{' '}
          </li>{' '}
          <li className="px-4">
            {' '}
            <Link to="/contact">Contact us</Link>{' '}
          </li>{' '}
          <li className="px-4">
            {' '}
            <Link to="/cart" className="px-2 font-bold text-xl">
              {' '}
              Cart 🛒 : ({cartItems.length} items){' '}
            </Link>
          </li>{' '}
          <li className="px-4">online Status: {onlineStatus ? '✅' : '🔴'}</li>
          <button
            className="login"
            onClick={() => {
              State == 'login' ? setState('logout') : setState('login');
            }}
          >
            {State}
          </button>
          <li className="font-bold mx-2">{loggedInUser}</li>
        </ul>{' '}
      </div>{' '}
    </div>
  );
};

export default Header;
