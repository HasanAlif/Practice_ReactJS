import Todo from "./Todo";

const Todos = (props) => {
  console.log(props.todos);
  return (
    <section className="bg-[#333] text-white p-[0.5rem] border rounded-lg overflow-hidden h-[60vh] w-[50%]">
      {props.todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo.todo}
          id={todo.id}
          onRemoveTodo={props.onRemoveTodo}
        />
      ))}
    </section>
  );
};

export default Todos;
