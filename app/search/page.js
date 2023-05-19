import { tagConverter } from "@/utils/tagConverter";
import supabaseServerClient from "@/utils/supabase-server";
import Link from "next/link";
import QueryList from "@/components/QueryList";

export const revalidate = 0;

async function getQueries(supabase) {
  const { data, error } = await supabase.from("queries").select("*");
  if (error) {
    console.log(error);
    return [];
  }
  return data;
}
async function getUser(supabase) {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.log(error);
    return null;
  }
  const { data: userData, error: userError } = await supabase
    .from("profiles")
    .select("*")
    .eq("email", data.user.email);

  if (userError) {
    console.log(userError);
    return null;
  }
  return userData[0];
}

export default async function search() {
  const supabase = supabaseServerClient();
  const userData = getUser(supabase);
  const queriesData = getQueries(supabase);
  const [user, queries] = await Promise.all([userData, queriesData]);
  return (
    <>
      <div className="overflow-x-auto w-full flex flex-col justify-center items-center">
        <QueryList queries={queries} user={user} />
      </div>
    </>
  );
}
