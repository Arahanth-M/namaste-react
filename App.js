import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"
        />
      </div>{' '}
      <div className="nav-items">
        <ul>
          <li> Home </li> <li> About Us </li> <li> Contact us </li>{' '}
          <li> Cart </li>{' '}
        </ul>{' '}
      </div>{' '}
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        alt="image"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/ba8e5491e60807af8c62dad36b5a25ed"
        className="res-logo"
      />
      <h2>{resData.name}</h2>
      <h4>{resData.cuisines}</h4>
      <h4>{resData.rating}</h4>
      <h4>{resData.cuisines}</h4>
      <h4>{resData.costForTwo}</h4>
    </div>
  );
};

const indianRestaurants = [
  {
    id: 1,
    name: 'Biryani Blues',
    rating: 4.3,
    deliveryTime: '30 mins',
    cuisines: ['Biryani', 'Hyderabadi', 'North Indian'],
    costForTwo: '₹500',
  },
  {
    id: 2,
    name: 'Behrouz Biryani',
    rating: 4.5,
    deliveryTime: '35 mins',
    cuisines: ['Biryani', 'Mughlai'],
    costForTwo: '₹550',
  },
  {
    id: 3,
    name: "Haldiram's",
    rating: 4.2,
    deliveryTime: '25 mins',
    cuisines: ['North Indian', 'Street Food', 'South Indian'],
    costForTwo: '₹400',
  },
  {
    id: 4,
    name: 'Sagar Ratna',
    rating: 4.1,
    deliveryTime: '30 mins',
    cuisines: ['South Indian', 'Vegetarian'],
    costForTwo: '₹350',
  },
  {
    id: 5,
    name: 'Rajdhani Thali Restaurant',
    rating: 4.4,
    deliveryTime: '40 mins',
    cuisines: ['Rajasthani', 'Gujarati', 'Thali'],
    costForTwo: '₹600',
  },
  {
    id: 6,
    name: 'Bikanervala',
    rating: 4.3,
    deliveryTime: '30 mins',
    cuisines: ['Indian Sweets', 'North Indian', 'Street Food'],
    costForTwo: '₹450',
  },
  {
    id: 7,
    name: 'Saravana Bhavan',
    rating: 4.5,
    deliveryTime: '35 mins',
    cuisines: ['South Indian', 'Vegetarian'],
    costForTwo: '₹400',
  },
  {
    id: 8,
    name: 'The Great Indian Dhaba',
    rating: 4.0,
    deliveryTime: '45 mins',
    cuisines: ['Dhaba', 'Punjabi', 'Tandoori'],
    costForTwo: '₹500',
  },
  {
    id: 9,
    name: 'Punjabi Rasoi',
    rating: 4.1,
    deliveryTime: '30 mins',
    cuisines: ['Punjabi', 'North Indian', 'Grill'],
    costForTwo: '₹470',
  },
  {
    id: 10,
    name: 'Kake Da Hotel',
    rating: 4.3,
    deliveryTime: '35 mins',
    cuisines: ['Mughlai', 'North Indian', 'Tandoori'],
    costForTwo: '₹520',
  },
  {
    id: 11,
    name: 'Naivedyam',
    rating: 4.6,
    deliveryTime: '30 mins',
    cuisines: ['South Indian', 'Vegetarian', 'Healthy'],
    costForTwo: '₹400',
  },
  {
    id: 12,
    name: "Nizam's Kathi Kabab",
    rating: 4.2,
    deliveryTime: '25 mins',
    cuisines: ['Rolls', 'Mughlai', 'Kebabs'],
    costForTwo: '₹480',
  },
  {
    id: 13,
    name: 'Andhra Bhavan Canteen',
    rating: 4.4,
    deliveryTime: '30 mins',
    cuisines: ['Andhra', 'South Indian', 'Spicy'],
    costForTwo: '₹350',
  },
  {
    id: 14,
    name: 'Shree Rathnam',
    rating: 4.1,
    deliveryTime: '30 mins',
    cuisines: ['North Indian', 'South Indian', 'Sweets'],
    costForTwo: '₹420',
  },
  {
    id: 15,
    name: 'Taste of India',
    rating: 4.0,
    deliveryTime: '40 mins',
    cuisines: ['North Indian', 'Tandoori', 'Biryani'],
    costForTwo: '₹490',
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search </div>
      <div className="res-container">
        {indianRestaurants.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};
const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
