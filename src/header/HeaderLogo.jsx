import { Link } from 'react-router-dom';

const HeaderLogo = () => {
  return (
    <div className="header__logo">
      <Link to="/">
        <h2 className="header__text"> Petshop </h2>
        <p className="header__text">Друг вашего питомца</p>
      </Link>
    </div>
  );
};
export default HeaderLogo;
