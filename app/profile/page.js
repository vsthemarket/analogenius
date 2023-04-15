import supabaseServerClient from "@/utils/supabase-server";
import Link from "next/link";
import { tagConverter } from "@/utils/tagConverter";
import SignOutButton from "@/components/SignOutButton";
import LikeButton from "@/components/LikeButton";

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
  if (user) queries = await getFavorites(supabase, user);
  return (
    <div className="w-full justify-center items-center flex flex-col">
      <div className="flex justify-center  gap-5">
        <h1 className="text-4xl mb-5">Hello, {user?.email}</h1>
        <SignOutButton />
      </div>
      <h2 className="text-2xl mb-5 text-gray-400">
        Your Favorites and Past Queries
      </h2>
      <table className="table table-zebra w-full max-w-7xl gap-2 p-5">
        {/* head */}
        <thead>
          <tr>
            <th>Concept</th>

            <th>Tags</th>
            <th>Likes</th>
          </tr>
        </thead>
        <tbody>
          {queries
            .sort((a, b) => b.likes - a.likes)
            .map((query, idx) => {
              return (
                <tr key={idx} className="hover cursor-pointer">
                  <td>
                    <Link href={`/search/${query.id}`}>{query?.concept}</Link>
                  </td>

                  <td>
                    {query?.tags?.map((tag, idx) => {
                      return (
                        <div
                          key={idx}
                          className=" h-12 w-12 ml-2 mr-2 text-2xl rounded-md bg-base-100 flex justify-center items-center shadow-md"
                        >
                          {" "}
                          <p>
                            {
                              tagConverter[
                                tag.split(" ").join("").toLowerCase()
                              ]
                            }
                          </p>{" "}
                        </div>
                      );
                    })}{" "}
                  </td>
                  <td>
                    <LikeButton
                      likes={query?.likes}
                      user={user}
                      id={query.id}
                      userLiked={user?.likes?.includes(query?.id)}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
