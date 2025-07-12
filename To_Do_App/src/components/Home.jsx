import NewTodo from "./NewTodo";
import Todos from "./Todos";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid';



const Home = () => {
  const [todos, setTodos] = useState([]);

  const handleTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, {id: uuidv4() ,todo}]);
  }

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen bg-gray-400">
      <h1 className="text-4xl font-bold mb-4 text-white">TO DO APP</h1>
      <NewTodo onAddTodo={handleTodo} />
      <Todos todos={todos} />
    </div>
  );
};

export default Home;
