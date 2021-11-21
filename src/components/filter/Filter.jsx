import FilterStyle from "./filter.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useEffect } from "react";

import options from "./options";

import { useDispatch, useSelector } from "react-redux";
import { getEventsCatFetch } from "../../redux/action/actions/categories";
import { getEventsFetch } from "../../redux/action/actions/events";

function Filter({ handleSetFilterDate, handleFilterCategory, handleSort }) {
  const [show, setShow] = useState(false);
  const [showCat, setShowCat] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [chosen, setChosen] = useState("Select Time");
  const [chosenCat, setChosenCat] = useState("Any Category");
  const [chosenSort, setChosenSort] = useState("Date");

  const option = {
    filterByCategory: useSelector((state) => state.categories.data),
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEventsCatFetch());
  }, []);

  const handleShow = () => {
    setShow(!show);
  };

  const handleShowCat = () => {
    setShowCat(!showCat);
  };

  const handleShowSort = () => {
    setShowSort(!showSort);
  };

  const handleChosen = (data, value) => {
    handleSetFilterDate(value);
    setChosen(data);
    setShow(!show);
  };

  const handleChosenCat = (data, id) => {
    handleFilterCategory(id);
    setChosenCat(data);
    setShowCat(!showCat);
  };

  const handleChosenSort = (data, value) => {
    handleSort(value);
    setChosenSort(data);
    setShowSort(!showSort);
  };

  return (
    <div className={FilterStyle.filterContainer}>
      <div className={FilterStyle.filterSelect}>
        <p className={FilterStyle.placeholder}>Filter By Date</p>
        <div
          className={FilterStyle.option}
          onClick={() => {
            handleShow();
          }}
        >
          <p className={FilterStyle.chosen}>{chosen}</p>
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
          {options.filterByDate.map((data, key) => (
            <li
              key={key}
              style={
                show === false ? { display: "none" } : { display: "block" }
              }
              onClick={() => handleChosen(`${data.name}`, `${data.value}`)}
            >
              <input
                type="radio"
                name="optionsByDate"
                id="optionsByDate"
                value=""
              />
              <label htmlFor="optionsByDate">{data.name}</label>
            </li>
          ))}
        </ul>
      </div>
      <div className={FilterStyle.filterSelect}>
        <p className={FilterStyle.placeholder}>Filter By Category</p>
        <div
          className={FilterStyle.option}
          onClick={() => {
            handleShowCat();
          }}
        >
          <p className={FilterStyle.chosen}>{chosenCat}</p>
          <IoIosArrowDown
            className={FilterStyle.optionArrow}
            style={
              showCat === false
                ? { transform: "rotate(0deg)" }
                : { transform: "rotate(180deg)" }
            }
          />
        </div>
        <ul className={FilterStyle.lists}>
          {option.filterByCategory.map((data) => (
            <li
              key={data.id}
              style={
                showCat === false ? { display: "none" } : { display: "block" }
              }
              onClick={() => handleChosenCat(`${data.name}`, `${data.id}`)}
            >
              <input
                type="radio"
                name="optionsByDate"
                id="optionsByDate"
                value=""
              />
              <label htmlFor="optionsByDate">{data.name}</label>
            </li>
          ))}
        </ul>
      </div>
      <div className={FilterStyle.filterSelect}>
        <p className={FilterStyle.placeholder}>Sorting By</p>
        <div
          className={FilterStyle.option}
          onClick={() => {
            handleShowSort();
          }}
        >
          <p className={FilterStyle.chosen}>{chosenSort}</p>
          <IoIosArrowDown
            className={FilterStyle.optionArrow}
            style={
              showSort === false
                ? { transform: "rotate(0deg)" }
                : { transform: "rotate(180deg)" }
            }
          />
        </div>
        <ul className={FilterStyle.lists}>
          {options.sortingBy.map((data, key) => (
            <li
              key={key}
              style={
                showSort === false ? { display: "none" } : { display: "block" }
              }
              onClick={() => handleChosenSort(`${data.name}`, `${data.value}`)}
            >
              <input
                type="radio"
                name="optionsByDate"
                id="optionsByDate"
                value=""
              />
              <label htmlFor="optionsByDate">{data.name}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Filter;
