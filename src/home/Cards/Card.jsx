import { useDispatch } from 'react-redux';
import { pushItem, setTotalPrice } from '../../store/Slices/cartSlice';

const Card = (props) => {
  const dispatch = useDispatch();
  // cart
  const addCartItem = () => {
    const item = {
      title: props.title,
      price: props.price,
      id: props.id,
      imageUrl: props.imageUrl,
    };

    dispatch(pushItem(item));
    dispatch(setTotalPrice(item.price));
  };
  return (
    <div className="thirdPart__Card">
      <img className="thirdPart__CardImg" src={props.imageUrl} alt=""></img>
      <h4 className="thirdPart__title"> {props.title} </h4>
      <div className="thirdPart__CardNames">
        <div
          className={
            props.types.includes(0)
              ? 'thirdPart__CardName thirdPart__CardNameActive'
              : 'thirdPart__CardName'
          }>
          Для кошек
        </div>
        <div
          className={
            props.types.includes(1)
              ? 'thirdPart__CardName thirdPart__CardNameActive'
              : 'thirdPart__CardName'
          }>
          Для собак
        </div>
      </div>
      <p>
        <button
          onClick={() => {
            addCartItem();
          }}
          className="thirdPart__btn">
          {' '}
          купить за {props.price} $
        </button>{' '}
      </p>
    </div>
  );
};

export default Card;
