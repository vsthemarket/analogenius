"use client";
import Link from "next/link";
import { useSupabase } from "@/app/supabase-provider";

export default function LoginBanner({ user }) {
  const { supabase } = useSupabase();

  // if user is logged in, don't show the banner
  if (user) return <></>;
  return (
    <div className="alert alter-info border flex justify-center items-center shadow-lg">
      <div className="flex flex-col md:flex-row">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-current flex-shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <p className="text-start">
          Create an account and sign in to take advantage of Analogenius best
          features, such as saving your favorite responses and adding a like to
          responses generate by other users!
        </p>
        <Link href="/login">
          {" "}
          <button className="btn xl:ml-5 btn-primary bg-indigo-500 hover:bg-indigo-400 border-none min-w-[100px]">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}
