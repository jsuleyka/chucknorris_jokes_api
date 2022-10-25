import "../stylesheets/Main.css";
import { useContext } from "react";
import { JokeContext } from '../contexts/JokeProvider';
import Button from './Button';

const Main = () => {
  const {joke} = useContext(JokeContext);
  
  return (
    <div className="joke-container">
      <h2>{joke}</h2>
      <Button />
    </div>
  );
};

export default Main;