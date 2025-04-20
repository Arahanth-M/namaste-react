import Header from '../Header';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';

it('should render header component with a single logo', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //query
  const img = screen.getAllByRole('img');
  //Assertion
  expect(img.length).toBe(1);
});

it('should render header component with a login button', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //query
  const button = screen.getByRole('button', { name: 'login' }); //second argument is optional and it is provided to be more specific
  //Assertion
  expect(button).toBeInTheDocument();
});

// it('should render header component with a 0 items in the cart', () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );
//   //query
//   const cart = screen.getByText('🛒 : (0 items)');
//   //Assertion
//   expect(cart).toBeInTheDocument();
// });

it('should render header component with a cart ', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //query
  const cartItems = screen.getByText(/Cart/); //can also write only REGEX
  //Assertion
  expect(cartItems).toBeInTheDocument();
});

it('should render header login shoulc change to logout on click', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //query
  const logInButton = screen.getByRole('button', { name: 'login' });
  fireEvent.click(logInButton);
  const logOutButton = screen.getByRole('button', { name: 'logout' });
  //Assertion
  expect(logOutButton).toBeInTheDocument();
});
