import React from "react";
import { User } from "@/interfaces/user.interface";
import UserCard from "@/components/ui/user-card/UserCard";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/users", {
    cache: "no-store",
  });
  const usersData: User[] = await res.json();

  return (
    <div>
      <h1 className="px-0 sm:px-10 font-semibold text-4xl my-10">User List</h1>
      {usersData ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
          {usersData.map((user) => (
            <UserCard user={user} key={user.id} />
          ))}
        </div>
      ) : (
        <p style={{ color: "red" }}>An unexpected error occurred.</p>
      )}
    </div>
  );
}
