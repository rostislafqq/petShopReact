import s from './Cart.module.css';

const CartHeader = (props) => {
  return (
    <div className={s.cartHeader}>
      <h1>Корзина</h1>
      <p
        className={s.clean}
        onClick={() => {
          props.cleanItems();
        }}>
        Очистить корзину
      </p>
    </div>
  );
};

export default CartHeader;
