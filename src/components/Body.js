import RestaurantCard from './RestaurantCard';
import indianRestaurants from '../utils/mockData';

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

export default Body;
