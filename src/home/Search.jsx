import { createRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pushValue, removeValue } from '../store/Slices/headSearchSlice';
const HeaderSearch = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.search.value);
  const input = createRef();
  const pusherValue = (el) => {
    dispatch(pushValue(el));
  };

  return (
    <div className="header__input">
      <svg
        className="header__serch"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="15"
        height="15"
        viewBox="0 0 48 48">
        <path d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z"></path>
      </svg>
      <input
        ref={input}
        className="header__inputTxt"
        type="text"
        name=""
        id=""
        placeholder="Введите название товара"
        value={searchValue}
        onChange={(el) => {
          pusherValue(el.target.value);
        }}
      />

      <svg
        onClick={() => {
          dispatch(removeValue());
          input.current.focus();
        }}
        className={searchValue.length === 0 ? 'header__close' : 'header__closeA'}
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="15"
        height="15"
        viewBox="0 0 48 48">
        <path d="M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z"></path>
      </svg>
    </div>
  );
};
export default HeaderSearch;
