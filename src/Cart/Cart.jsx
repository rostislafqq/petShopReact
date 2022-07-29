import s from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import CartFooter from './CartFooter';
import CartIsEmpty from './CartIsEmpty';
import CartHeader from './CartHeader';
import { deleteItems } from '../store/Slices/cartSlice';
const Cart = () => {
  const dispatch = useDispatch();
  const cartValue = useSelector((state) => state.cart.cartItems);
  const cleanItems = () => {
    dispatch(deleteItems());
  };

  return (
    <>
      <CartHeader cleanItems={cleanItems} />
      <div className={s.cartItems}>
        {cartValue.length === 0 ? (
          <CartIsEmpty />
        ) : (
          cartValue.map((val, index) => (
            <CartItem key={index} title={val.title} price={val.price} imageUrl={val.imageUrl} />
          ))
        )}
      </div>
      <div className={s.cartFooter}>
        <CartFooter />
      </div>
    </>
  );
};
export default Cart;
