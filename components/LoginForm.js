"use client";

import { useSupabase } from "@/app/supabase-provider";
import { useState } from "react";
import SuccessToast from "./SuccessToast";

export default function LoginForm({ user }) {
  const { supabase } = useSupabase();
  const [email, setEmail] = useState("");
  const [signedUp, setSignedUp] = useState(true);
  const signInWithMagicLink = async (email) => {
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: "localhost:3000/",
      },
    });
    if (error) console.log(error);
    if (data) {
      setSignedUp(true);
      console.log(data);
    }
  };

  return (
    <>
      {!user && (
        <>
          <div className="flex flex-col justify-center items-start gap-5">
            {signedUp && (
              <SuccessToast msg="You have successfully signed up. Check your email for a magic link!" />
            )}{" "}
            <h1>Sign in with email magic link</h1>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="input input-bordered input-primary w-full max-w-xs "
            />
            <button onClick={() => signInWithMagicLink(email)} className="btn">
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
