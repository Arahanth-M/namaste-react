import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="py-2 m-2  border-gray-200 border-b-2 text-left"
        >
          <div>
            <span>{item?.card?.info?.name}</span>
            <span> - ₹ {item?.card?.info?.price / 100}</span>
            <button
              className="mx-10 bg-slate-600 text-white rounded-lg shadow-lg"
              onClick={() => handleAddItem(item)}
            >
              Add+
            </button>
          </div>
          <p className="text-xs opacity-50">{item?.card?.info?.description}</p>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
