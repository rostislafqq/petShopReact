import Card from './Cards/Card';
import Categories from './CategoriesSort/Categories';
import Sort from './CategoriesSort/Sort';
import { useEffect, useState } from 'react';
import CardScelet from './Cards/CardScelet';
import { useSelector } from 'react-redux';
import HeaderSearch from './Search';

const Home = () => {
  //категории

  const [catChosen, setCatChosen] = useState(0);

  //cортировка

  const [isVisable, setIsVisable] = useState(false);
  const [chosenSortItem, setChosenSortItem] = useState(0);

  //card
  const [items, setItems] = useState([]);
  const [itemsIsLoaded, setItemsIsLoaded] = useState(false);
  const searcherValue = useSelector((state) => state.search.value);

  useEffect(() => {
    setItemsIsLoaded(false);

    fetch(
      `https://62dfc3bd976ae7460bf328c3.mockapi.io/PetShop?${
        catChosen === 0 ? '' : 'category=' + catChosen
      }&sortBy=price&order=${chosenSortItem === 0 ? 'asc' : 'desc'}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setItemsIsLoaded(true);
        setItems(res);
        window.scroll(0, 0);
      });
  }, [catChosen, chosenSortItem]);

  const goods = items
    .filter((val) => {
      if (val.title.toLowerCase().includes(searcherValue.toLowerCase())) return true;
    })
    .map((val) => (
      <Card
        key={val.id}
        imageUrl={val.imageUrl}
        title={val.title}
        types={val.types}
        price={val.price}
      />
    ));

  return (
    <>
      <div className="secondPart">
        <Categories catChosen={catChosen} setCatChosen={setCatChosen} />
        <HeaderSearch />
        <Sort
          isVisable={isVisable}
          setIsVisable={setIsVisable}
          chosenSortItem={chosenSortItem}
          setChosenSortItem={setChosenSortItem}
        />
      </div>
      <div className="thirdPart">
        {!itemsIsLoaded ? [...new Array(8)].map((val, index) => <CardScelet key={index} />) : goods}
      </div>
    </>
  );
};

export default Home;
