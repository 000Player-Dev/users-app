import Link from "next/link";

export default function UserNotFound() {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
      <div className="text-center px-5 mx-5">
        <h1 className=" antialiased text-9xl">404</h1>
        <p className=" font-semibold text-xl">User not Found...</p>
        <Link
          className="hover:underline transition-all font-semibold text-blue-600"
          href="/"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
