"use client";
import Link from "next/link";

export default function Navigation({ user }) {
  return (
    <div className="navbar bg-base-100 absolute">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/learn">Learn</Link>
            </li>
            <li>
              <Link href="/search">Search</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
        <a
          href="/"
          className="cursor-pointer normal-case text-2xl lg:text-4xl pl-2 lg:pl-5"
        >
          {" "}
          🚀
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/learn">Learn</Link>
          </li>
          <li>
            <Link href="/search">Search</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end pr-5">
        {!user && (
          <Link className="btn" href="/login">
            Login
          </Link>
        )}
        {user && (
          <Link href="/profile">
            <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                <span>{user?.user?.email.slice(0, 1).toUpperCase()}</span>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
