"use client";
import { useSupabase } from "@/app/supabase-provider";

export default function SignOutButton() {
  const { supabase } = useSupabase();
  return (
    <button className="btn" onClick={() => supabase.auth.signOut()}>
      Sign out
    </button>
  );
}
