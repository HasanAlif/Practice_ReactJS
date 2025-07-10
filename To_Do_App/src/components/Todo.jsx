
const Todo = (props) => {
  const { title, id, desc } = props.todo;
  return (
    <article className="bg-[#222] m-[0.5rem] p-[0.5rem] flex justify-between items-center rounded-lg border border-gray-600 hover:bg-[#111]">
      <div>
        <h2>{title}</h2>
        <p className="opacity-70">{desc}</p>
      </div>
      <div>
        <button className=" bg-red-400 rounded-lg p-[0.5rem] hover:bg-red-700 hover:text-white transition-colors duration-300 cursor-pointer">
            <i className="fa fa-trash fa-2x"></i>
        </button>
      </div>
    </article>
  );
};

export default Todo;
