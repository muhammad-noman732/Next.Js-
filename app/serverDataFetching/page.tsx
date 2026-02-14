import Header from "@/components/Header";

interface Todos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
}

// import { Suspense } from "react";
// import Loading from "./loading";
// import Todo from "@/components/TodoList";
// import User from "@/components/UserComponent";

// const fetchTodos = async (): Promise<Todo[]> => {
// Simulate network delay
// const usersResponse = await fetch(
//   "https://jsonplaceholder.typicode.com/users?_limit=3",
// );
// const users = await usersResponse.json();
// console.log("Fetched users:", users);
// await new Promise((resolve) => setTimeout(resolve, 9000));

// const res = await fetch(
//   "https://jsonplaceholder.typicode.com/todos/?_limit=5",
//   {
//     cache: "no-store", // ensures dynamic fetch
//   },
// );
// return res.json();
// };

export default async function Posts() {
  // const todos = await fetchTodos();

  // we can also do the streaming and make parallel request and execute instead of in seperate components

  // helper
  async function fetchData(url: string) {
    const res = await fetch(url);
    return await res.json();
  }

  const [todoData, userData]: [Todos[], Users[]] = await Promise.all([
    fetchData("https://jsonplaceholder.typicode.com/todos/?_limit=5"),
    fetchData("https://jsonplaceholder.typicode.com/users?_limit=3"),
  ]);
  // const [todoData, userData]: [Todos[], Users[]] = await Promise.all([
  //   todoResponse.json(),
  //   userResponse.json(),
  // ]);

  return (
    <>
      <Header />
      <section className="space-y-4 p-4">
        {/* {todos.map((item) => (
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
      ))} */}

        {/* here using the suspence and use of different components where data is fetched in parallel */}
        {/* <h1>Todos:</h1>
      <hr /> */}

        {/* <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }
      >
        <Todo />
      </Suspense> */}

        {/* <h1>Users</h1>
      <hr /> */}
        {/* <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }
      >
        <User />
      </Suspense> */}

        {/* here usign the promise all */}

        <section className="space-y-8 p-4">
          {/* Todos Section */}
          <div>
            <h1 className="text-2xl font-bold mb-2">Todos</h1>
            <hr className="mb-4" />
            <div className="space-y-4">
              {todoData.map((todo) => (
                <div
                  key={todo.id}
                  className="p-4 bg-white rounded-lg shadow-md flex flex-col gap-2 hover:shadow-lg transition-shadow"
                >
                  <p className="text-gray-500 text-sm">
                    User ID: {todo.userId}
                  </p>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {todo.title}
                  </h2>
                  <p
                    className={`mt-1 text-sm ${
                      todo.completed ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {todo.completed ? "Completed" : "Pending"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Users Section */}
          <div>
            <h1 className="text-2xl font-bold mb-2">Users</h1>
            <hr className="mb-4" />
            <div className="space-y-4">
              {userData.map((user) => (
                <div
                  key={user.id}
                  className="p-4 bg-white rounded-lg shadow-md flex flex-col gap-2 hover:shadow-lg transition-shadow"
                >
                  <h2 className="text-lg font-semibold text-gray-800">
                    {user.name}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Username: {user.username}
                  </p>
                  <p className="text-gray-500 text-sm">Email: {user.email}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
