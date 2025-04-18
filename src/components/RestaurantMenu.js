import useRestaurantMenu from '../utils/useRestaurantMenu';
import Shimmer from './shimmer';
import { useParams } from 'react-router-dom';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menu = useRestaurantMenu(resId);

  if (menu === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    menu?.cards[2]?.card?.card?.info;
  const { itemCards } =
    menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

  const categories = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const finalCategories = categories.filter(
    (c) =>
      c.card?.card?.['@type'] ===
      'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  );
  console.log(finalCategories);
  return (
    <div className="text-center my-4">
      <h1>{name}</h1>
      <h3>{cuisines.join(', ')}</h3>
      <h3>{costForTwoMessage}</h3>
      {finalCategories.map((category) => {
        return <RestaurantCategory data={category?.card?.card} />;
      })}
    </div>
  );
};

export default RestaurantMenu;
