import { useSelector } from 'react-redux';
import ItemList from './ItemList';
import { useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center p-4 m-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="border border-black rounded-lg bg-black text-white m-4"
          onClick={handleClearCart}
        >
          clear cart
        </button>
        {cartItems.length === 0 && <h1>Go buy something . Cart is empty 🍔</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
