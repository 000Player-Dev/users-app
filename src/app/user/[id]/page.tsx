import { User } from "@/interfaces/user.interface";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    id: number;
  };
}

export default async function Page({ params }: Props) {
  const { id } = params;
  const res = await fetch(`http://localhost:3000/api/users/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }
  const userData: User = await res.json();

  return (
    <div className="flex justify-center mt-7">
      {/* Profile picture */}
      <div className="max-w-screen-md self-end items-end justify-end content-end align-middle">
        <Image
          src={`/images/${userData.id}.png`}
          width={300}
          height={300}
          key={userData.id}
          className="mr-10 max-w-lg md:flex-grow"
          alt="user profile image"
        />
      </div>

      {/* User information */}
      <div className="px-5 max-w-screen-md antialiased text-xl">
        <h1 className="font-semibold text-2xl mb-5">{userData.name}</h1>
        <p>
          <strong>Email: </strong>
          {userData.email}
        </p>
        <p>
          <strong>Phone: </strong>
          {userData.phone}
        </p>
        <p>
          <strong>Username: </strong>
          {userData.username}
        </p>
        <p>
          <strong>Country: </strong>
          {userData.country}
        </p>
        <p>
          <strong>City: </strong>
          {userData.city}
        </p>
        <p>
          <strong>Description: </strong>
          {userData.description}
        </p>
      </div>

      {/* User friend list */}
      <div>
        {userData.friends && (
          <div>
            <h1 className="text-xl font-semibold mb-3">
              {userData.name} friends:
            </h1>
            {userData.friends.map((friend) => (
              <Link key={friend.id} href={`/user/${friend.id}`}>
                <Image
                  src={`/images/${friend.id}.png`}
                  width={100}
                  height={100}
                  alt="friend profile image"
                />
                <h3 className="mb-3 font-light text-blue-600 hover:underline">
                  {friend.name}
                </h3>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
