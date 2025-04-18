import RestaurantCard, { promotedRest } from './RestaurantCard';

import Shimmer from './shimmer';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Body = () => {
  const [State, setState] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []); //if dependency array is present , then the useEffect is only executed after the initial render of the component and only once thats all

  const PromotedRestaurant = promotedRest(RestaurantCard);
  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
    );
    //as soon as we have got this data , now we have rerender the compoenents . so we have to update the State using setState() function
    const json = await data.json();
    //optional chaining
    const infoArray =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setState(infoArray);
    setFilteredRest(infoArray);
  };
  const isOnline = useOnlineStatus();
  if (isOnline === false)
    return <h1>U r offline , please check your internet connection</h1>;

  //using useContext() hook to access the global variables  or data that is used acorss the entire application
  const { loggedInUser, setUserName } = useContext(UserContext);

  //Conditional rendering
  if (State.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4 ">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-300 m-4 rounded-lg"
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
        <div className="m-4 p-4 flex items-center">
          <button
            className="bg-blue-400 py-1 my-1 rounded-sm "
            onClick={() => {
              const FilteredList = State.filter(
                (res) => res.info.avgRating > 4.0
              );
              setFilteredRest(FilteredList);
            }}
          >
            Top rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label>user Name : </label>
          <input
            className="border border-black mx-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRest.map((restaurant) => {
          return (
            <Link
              to={'/restaurant/' + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant.info.isOpen ? (
                <PromotedRestaurant resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
