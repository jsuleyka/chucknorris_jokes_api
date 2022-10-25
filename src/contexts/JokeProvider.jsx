import { createContext, useState, useEffect } from "react";
import { fetchData } from "../api";

export const JokeContext = createContext();
const baseApiUrl = "https://api.chucknorris.io/jokes/random";
// const baseApiUrl = https://api.chucknorris.io/jokes/random?category={category}

const JokeProvider = ({ children }) => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetchData(baseApiUrl).then((res) => {
      setJoke(res.value);
    });
  }, []);

  return <JokeContext.Provider value={{joke}}>{children}</JokeContext.Provider>;
};

export default JokeProvider;
