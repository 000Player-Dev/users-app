import { User } from "@/interfaces/user.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  user: User;
}

const UserCard = ({ user }: Props) => {
  return (
    <div className=" rounded-md overflow-hidden max-w-max">
      <Link className=" hover:bg-opacity-10" href={`/user/${user.id}`}>
        <Image
          key={user.id}
          src={`/images/${user.id}.png`}
          alt="user image"
          width={300}
          height={300}
        />
      </Link>
      <div className="p-4 flex flex-col">
        <Link
          className="hover:underline font-semibold text-blue-600"
          href={`/user/${user.id}`}
        >
          {user.name} profile
        </Link>
        <span>{user.gender}</span>
        <span>{user.email}</span>
      </div>
    </div>
  );
};

export default UserCard;
