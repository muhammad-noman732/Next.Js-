import { getAllUsers } from "@/lib/api";
import { HoverPrefetchLink } from "@/components/HoverPrefetchLink";

export default async function UsersPage() {
  const users = await getAllUsers();

  return (
    <div>
      <h1>Users page </h1>
      <div>
        {users.slice(0, 20).map((user) => (
          <div key={user.id}>
            <HoverPrefetchLink href={`users/${user.id}`}>
              <h1>Name :{user.name}</h1>
            </HoverPrefetchLink>
          </div>
        ))}
      </div>
    </div>
  );
}
