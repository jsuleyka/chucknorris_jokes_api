import { createContext, useState, useEffect } from "react";
import { fetchData } from "../api";

export const JokeContext = createContext();
const baseApiUrl = "https://api.chucknorris.io/jokes/random"; //url para pintar la api de chistes random
const categoryUrl = "https://api.chucknorris.io/jokes/categories"; //url para pintar la api de categorias

const JokeProvider = ({ children }) => {
  // Uso de estados hooks para obtener y deplegar las categorias y los chistes
  const [joke, setJoke] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  // Obtener la lista de categorias
  useEffect(() => {
    fetchData(categoryUrl).then((res) => {
      setCategories(res);
    });
  }, []);

  // Desplegar la broma basado en la categoria seleccionada en el select con try-catch
  useEffect(() => {
    try {
      // Validar que categoria no sea null, vacio o undefined, siendo verdadera imprime el 
      // chiste basado en la categoria
      const categoryJokesURL = !!category ? `${baseApiUrl}?category=${category}` : baseApiUrl;
      
      fetchData(categoryJokesURL).then((res) => {
        setJoke(res.value);
      });
    } catch (error) {
      console.log(error);
    }
  }, [category]);

  return <JokeContext.Provider value={{joke, category, setCategory, categories}}>{children}</JokeContext.Provider>;
};

export default JokeProvider;
