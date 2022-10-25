import "../stylesheets/SelectOption.css";
import { useContext } from "react";
import { CategoryContext } from "../contexts/CategoryProvider";

const SelectOption = () => {
  const { categories } = useContext(CategoryContext);

  return (
    <>
      <div className="select-container">
        <p>Select a category:</p>
        <select name="categories" id="categories" className="dropbtn">
          {categories.map((el) => {
            return (
              <option key={el} value={el} className="option">
                {el.toUpperCase()}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default SelectOption;
