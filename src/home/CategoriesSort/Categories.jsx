const Categories = (props) => {
  const category = ['Все', 'Аксессуары для кошек', 'Аксессуары для собак'];

  return (
    <ul className="secondPart__categoriesUl">
      {category.map((val, index) => (
        <li
          className={
            index === props.catChosen
              ? 'secondPart__categoriesli secondPart__categoriesActiveli'
              : 'secondPart__categoriesli'
          }
          key={index}
          onClick={() => {
            props.setCatChosen(index);
          }}>
          {val}
        </li>
      ))}
    </ul>
  );
};
export default Categories;
