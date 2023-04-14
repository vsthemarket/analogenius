import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";

const supabaseServerClient = () =>
  createServerComponentSupabaseClient({
    headers,
    cookies,
  });

export default supabaseServerClient;
