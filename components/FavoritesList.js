"use client";
import { tagConverter } from "@/utils/tagConverter";
import LikeButton from "./LikeButton";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function FavoritesList({ queries, user }) {
  const router = useRouter();
  return (
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
              <tr
                key={idx}
                className="hover cursor-pointer"
                onClick={() => {
                  router.push(`/search/${query.id}`);
                }}
              >
                <td>
                  <Link href={`/search/${query.id}`}>{query?.concept}</Link>
                </td>

                <td>
                  {query?.tags?.map((tag, idx) => {
                    return (
                      <div
                        key={idx}
                        className=" h-12 p-2 w-fit  ml-2 mr-2 text-2xl rounded-md bg-base-100 flex justify-center items-center shadow-md"
                      >
                        {" "}
                        <p>
                          {tagConverter[tag.split(" ").join("").toLowerCase()]}
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
                    userLiked={user?.likes && user?.likes?.includes(query?.id)}
                  />
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
