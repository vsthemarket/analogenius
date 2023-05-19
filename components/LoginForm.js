"use client";

import { useSupabase } from "@/app/supabase-provider";
import { useState } from "react";
import SuccessToast from "./SuccessToast";
import ErrorToast from "./ErrorToast";

export default function LoginForm({ user }) {
  const { supabase } = useSupabase();
  const frontendUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [signedUp, setSignedUp] = useState(false);
  const signInWithMagicLink = async (email) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: frontendUrl || "http://localhost:3000",
      },
    });
    if (error) {
      setLoading(false);
      setError("There was an error signing you up. Please try again.");
      console.log(error);
    }
    if (data) {
      setSignedUp(true);
      setLoading(false);
      console.log(data);
    }
  };

  return (
    <>
      {!user && (
        <>
          <div className="flex flex-col justify-center items-start gap-5">
            {signedUp && (
              <SuccessToast msg="Check your email for a magic link!" />
            )}{" "}
            {error && <ErrorToast msg={error} />}
            <h1 className="text-xl font-bold">Sign in with email magic link</h1>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="input input-bordered input-primary w-full max-w-xs "
            />
            <button
              onClick={() => signInWithMagicLink(email)}
              className={`btn ${loading ? "loading" : ""}`}
            >
              Get Magic Link
            </button>
          </div>
        </>
      )}
      {user && (
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-5xl font-bold">Hi, {user?.user?.email}</h1>
          <h2 className="text-2xl">You are already signed in!</h2>
        </div>
      )}
    </>
  );
}
