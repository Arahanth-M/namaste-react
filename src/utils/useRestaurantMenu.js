import { MENU } from '../utils/constants';
import { useEffect, useState } from 'react';

const useRestaurantMenu = (resId) => {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU + resId);
    const json = await data.json();
    setMenu(json.data);
  };
  return menu;
};
export default useRestaurantMenu;
