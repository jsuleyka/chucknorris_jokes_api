import { createContext, useState, useEffect } from "react";
import { fetchData } from "../api";

export const CategoryContext = createContext();
const baseApiUrl = "https://api.chucknorris.io/jokes/categories";

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData(baseApiUrl).then((res) => {
      setCategories(res);
    });
  }, []);

  return <CategoryContext.Provider value={{categories}}>{children}</CategoryContext.Provider>;
};

export default CategoryProvider;
