import { useState, useEffect } from 'react';
import { MENU } from '../utils/constants';
import Shimmer from './shimmer';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU + resId);
    const json = await data.json();
    setMenu(json.data);
  };
  if (menu === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    menu?.cards[2]?.card?.card?.info;
  const { itemCards } =
    menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
  console.log(name);
  console.log(itemCards);

  return (
    <div className="Menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(', ')}</h3>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} -{'Rs: '}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
