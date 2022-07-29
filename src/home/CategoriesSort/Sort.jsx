const Sort = (props) => {
  const sortItems = ['Цене (возрастанию)', 'Цене (убыванию)'];
  const arrowUp = (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="10px"
      height="10px"
      viewBox="0 0 1095.000000 1280.000000"
      preserveAspectRatio="xMidYMid meet">
      <g
        transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none">
        <path
          d="M5165 12794 c-534 -42 -1031 -198 -1605 -505 -685 -365 -1374 -901
 -2080 -1615 -722 -730 -1279 -1486 -1441 -1954 -27 -80 -33 -110 -33 -190 -1
 -87 1 -99 28 -148 39 -70 93 -117 180 -158 201 -92 574 -97 1102 -14 361 58
 796 153 1224 269 118 32 216 57 216 57 1 -1 -4 -388 -12 -861 -49 -3175 -50
 -5606 -4 -6535 12 -236 35 -453 55 -525 50 -179 287 -260 945 -324 464 -46
 748 -55 1595 -55 845 0 1119 9 1595 55 581 55 840 127 927 254 83 122 110 663
 120 2425 5 1024 -5 2636 -27 4060 -5 333 -12 809 -16 1057 l-7 452 69 -20
 c506 -148 1258 -304 1689 -351 181 -19 509 -17 620 5 185 37 322 131 361 249
 71 216 -125 632 -591 1253 -546 726 -1279 1457 -2016 2010 -844 633 -1621 994
 -2344 1090 -116 15 -448 27 -550 19z"
        />
      </g>
    </svg>
  );
  const arrowDown = (
    <svg
      className="secondPart__sortArrow"
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="10px"
      height="10px"
      viewBox="0 0 1095.000000 1280.000000"
      preserveAspectRatio="xMidYMid meet">
      <g
        transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none">
        <path
          d="M5165 12794 c-534 -42 -1031 -198 -1605 -505 -685 -365 -1374 -901
 -2080 -1615 -722 -730 -1279 -1486 -1441 -1954 -27 -80 -33 -110 -33 -190 -1
 -87 1 -99 28 -148 39 -70 93 -117 180 -158 201 -92 574 -97 1102 -14 361 58
 796 153 1224 269 118 32 216 57 216 57 1 -1 -4 -388 -12 -861 -49 -3175 -50
 -5606 -4 -6535 12 -236 35 -453 55 -525 50 -179 287 -260 945 -324 464 -46
 748 -55 1595 -55 845 0 1119 9 1595 55 581 55 840 127 927 254 83 122 110 663
 120 2425 5 1024 -5 2636 -27 4060 -5 333 -12 809 -16 1057 l-7 452 69 -20
 c506 -148 1258 -304 1689 -351 181 -19 509 -17 620 5 185 37 322 131 361 249
 71 216 -125 632 -591 1253 -546 726 -1279 1457 -2016 2010 -844 633 -1621 994
 -2344 1090 -116 15 -448 27 -550 19z"
        />
      </g>
    </svg>
  );
  return (
    <div className="secondPart__sort">
      <div className="secondPart__sortLabel">
        <svg
          className={props.isVisable ? 'secondPart__svgA' : 'secondPart__svg'}
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 330 330">
          <path
            id="XMLID_222_"
            d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
  C255,161.018,253.42,157.202,250.606,154.389z"
          />
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
        <b> Сортировать по </b>
        <i
          className="secondPart__sortI"
          onClick={() => {
            props.setIsVisable(!props.isVisable);
          }}>
          Цене {props.chosenSortItem === 0 ? arrowUp : arrowDown}
        </i>
      </div>
      <div className="secondPart__popUp">
        <ul className={props.isVisable ? 'secondPart__popUpUlA' : 'secondPart__popUpUl'}>
          {sortItems.map((val, index) => (
            <li
              key={index}
              onClick={() => {
                props.setChosenSortItem(index);
                props.setIsVisable(!props.isVisable);
              }}>
              {val}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sort;
