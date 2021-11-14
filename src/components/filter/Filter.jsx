import FilterStyle from "./filter.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

import options from "./options";

function Filter() {
  const [show, setShow] = useState(false);
  const [chosen, setChosen] = useState("Select Time");

  const handleShow = () => {
    setShow(!show);
  };

  const handleChosen = (data) => {
    setChosen(data);
    setShow(!show);
  };

  return (
    <div className={FilterStyle.filterSelect}>
      <p className={FilterStyle.placeholder}>Filter By Date</p>
      <div
        className={FilterStyle.option}
        onClick={() => {
          handleShow();
        }}>
        <p id={FilterStyle.chosen}>{chosen}</p>
        <IoIosArrowDown
          className={FilterStyle.optionArrow}
          style={
            show === false
              ? { transform: "rotate(0deg)" }
              : { transform: "rotate(180deg)" }
          }
        />
      </div>
      <ul className={FilterStyle.lists}>
        {options.filterByDate.map((data) => (
          <li
            style={show === false ? { display: "none" } : { display: "block" }}
            onClick={() => handleChosen(`${data}`)}>
            <input
              type='radio'
              name='optionsByDate'
              id='optionsByDate'
              value=''
            />
            <label htmlFor='optionsByDate'>{data}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
