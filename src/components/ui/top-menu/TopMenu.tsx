import Link from "next/link";
import React from "react";

const TopMenu = () => {
  return (
    <nav className="flex content-center p-3 m-3 w-screen border-solid border-b-2">
      <Link href="/">
        <h1 className="antialiased font-bold text-2xl">Home</h1>
      </Link>
    </nav>
  );
};

export default TopMenu;
