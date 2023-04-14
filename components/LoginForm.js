"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSupabase } from "@/app/supabase-provider";
import { useState } from "react";

export default function LoginForm({ user }) {
  const { supabase } = useSupabase();
  const [email, setEmail] = useState("");
  const signInWithMagicLink = async (email) => {
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: "localhost:3000/",
      },
    });
  };

  return (
    <>
      {!user && (
        <div className="flex flex-col justify-center items-start gap-5">
          <h1>Sign in with email magic link</h1>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="input input-bordered input-primary w-full max-w-xs mt-5"
          />
          <button onClick={() => signInWithMagicLink(email)} className="btn">
            Get Magic Link
          </button>
        </div>
      )}
      {user && (
        <div>
          <h1>Hi, {user?.user?.email}</h1>
          <button onClick={() => supabase.auth.signOut()}>Sign out</button>
          <h2>You are already signed in!</h2>
        </div>
      )}
    </>
    // <Auth
    //   supabaseClient={supabase}
    //   appearance={{
    //     theme: ThemeSupa,
    //     variables: {
    //       default: {
    //         colors: {
    //           brandAccent: "rgb(244 114 182)",
    //           brand: "bg-base-200",
    //           inputBackground: "rgb(255 255 255)",
    //         },
    //       },
    //     },
    //   }}
    //   providers={["google"]}
    // />
  );
}
