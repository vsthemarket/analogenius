import supabaseServerClient from "@/utils/supabase-server";
import Link from "next/link";
import { tagConverter } from "@/utils/tagConverter";
import SignOutButton from "@/components/SignOutButton";
import LikeButton from "@/components/LikeButton";
import { useRouter } from "next/navigation";
import FavoritesList from "@/components/FavoritesList";

async function getUser(supabase) {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.log(error);
    return null;
  }
  const { data: userData, error: userError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", data.user.id);

  if (userError) {
    console.log(userError);
    return null;
  }
  return userData[0];
}

async function getFavorites(supabase, user) {
  const { data, error } = await supabase
    .from("queries")
    .select("id, concept, analog, tags, likes")
    .in("id", user?.favorites);
  if (error) {
    console.log(error);
    return [];
  }
  return data;
}

export default async function profile() {
  const supabase = supabaseServerClient();
  const user = await getUser(supabase);
  let queries = [];
  if (user?.favorites !== null) queries = await getFavorites(supabase, user);
  return (
    <div className="w-full justify-center items-center flex flex-col">
      <div className="flex justify-center  gap-5">
        <h1 className="text-xl md:text-4xl mb-5">Hello, {user?.email}</h1>
        <SignOutButton />
      </div>
      <h2 className="text-lg md:text-2xl mb-5 text-gray-400">
        Your Favorites and Past Queries
      </h2>
      <FavoritesList queries={queries} user={user} />
    </div>
  );
}
