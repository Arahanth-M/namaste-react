import RestaurantCard from './RestaurantCard';
import indianRestaurants from '../utils/mockData';
import Shimmer from './shimmer';
import { useState, useEffect } from 'react';

const Body = () => {
  const [State, setState] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredRest, setFilteredRest] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
    );
    //as soon as we have got this data , now we have rerender the compoenents . spo we have to update the State using setState() function
    const json = await data.json();
    const infoArray =
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

    setState(infoArray);
    setFilteredRest(infoArray);
  };

  //Conditional rendering
  if (State.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRest = State.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRest(filteredRest);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const FilteredList = State.filter(
              (res) => res.info.avgRating > 4.5
            );
            setState(FilteredList);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRest.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
