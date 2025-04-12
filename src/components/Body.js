import RestaurantCard from './RestaurantCard';
import indianRestaurants from '../utils/mockData';
import { useState } from 'react';

const Body = () => {
  const [State, setState] = useState(indianRestaurants);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const FilteredList = State.filter((res) => res.rating > 4.2);
            setState(FilteredList);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {State.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
