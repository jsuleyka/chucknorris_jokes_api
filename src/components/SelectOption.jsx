import "../stylesheets/SelectOption.css";
import { useContext } from "react";
import { JokeContext } from "../contexts/JokeProvider";

const SelectOption = () => {
  // Llamado al hook Context para despliegue de categorias con Context.Provider
  const { category, setCategory, categories } = useContext(JokeContext);

  return (
    <div className="select-container">
      <p>Select a category:</p>
      <select
        value={category}
        name="categories"
        id="categories"
        className="dropbtn"
        onChange={(e) => setCategory(e.target.value)} >
        {categories.map((el) => { //map para pintar mis categorias traidas desde la data
          return (
            <option key={el} value={el} className="option">
              {el.toUpperCase()}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectOption;
