import { useState } from 'react';
import ItemList from './ItemList';

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleToggle = () => {
    setShowItems(!showItems);
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleToggle}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems ? '🔼' : '🔽'}</span>
        </div>

        {/* Accordion Content */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
