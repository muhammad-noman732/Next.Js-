interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const User = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const usersResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=3",
  );
  const users: User[] = await usersResponse.json();
  console.log("Fetched users:", users);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>user.username</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default User;
