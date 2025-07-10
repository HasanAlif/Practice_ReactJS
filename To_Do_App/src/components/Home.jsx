import NewTodo from "./NewTodo";
import Todos from "./Todos";

const dummyTodos = [
  {
    id: 1,
    title: "Learn React",
    desc: "Learn the basics of React including components, state, and props.",
  },
  {
    id: 2,
    title: "Build a To Do App",
    desc: "Create a simple To Do application using React to manage tasks.",
  },
];

const Home = () => {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen bg-gray-400">
      <h1 className="text-4xl font-bold mb-4 text-white">TO DO APP</h1>
      <NewTodo />
      <Todos todos={dummyTodos} />
    </div>
  );
};

export default Home;
