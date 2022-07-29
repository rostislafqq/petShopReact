import s from './Cart.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const CartFooter = () => {
  const cartValue = useSelector((state) => state.cart.cartItems);
  const cartPrice = useSelector((state) => state.cart.totalPrice);
  const footer = (
    <>
      <h4 className={s.zakaz}> Заказать </h4>
      <span className={s.itemCost}>{cartValue.length} Предмет(ов) за </span>
      <span className={s.itemCost}>
        {cartPrice} <span style={{ color: 'green' }}>$</span>
      </span>
    </>
  );
  return (
    <>
      <Link to="/">
        <button>Вернуться назад</button>
      </Link>
      <div>{cartPrice === 0 ? '' : footer}</div>
    </>
  );
};

export default CartFooter;
