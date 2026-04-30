interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Todo = async () => {
  // for straming response checknig

  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos/?_limit=5",
  );
  const todos: Todo[] = await res.json();

  return (
    <div>
      {todos.map((item) => (
        <div
          key={item.id}
          className="p-4 bg-white rounded-lg shadow-md flex flex-col gap-2 hover:shadow-lg transition-shadow"
        >
          <p className="text-gray-500 text-sm">User ID: {item.userId}</p>
          <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
          <p
            className={`mt-1 text-sm ${
              item.completed ? "text-green-600" : "text-red-600"
            }`}
          >
            {item.completed ? "Completed" : "Pending"}
          </p>
        </div>
      ))}
    </div>
  );
};
export default Todo;
