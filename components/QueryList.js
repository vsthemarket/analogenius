"use client";
import Link from "next/link";
import { useState } from "react";
import { tagConverter } from "@/utils/tagConverter";
import LikeButton from "./LikeButton";
import { useRouter } from "next/navigation";

export default function QueryList({ queries, user }) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const [filteredQueries, setFilteredQueries] = useState(queries);
  const [selectedFilter, setSelectedFilter] = useState("concept");

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-5">
        <input
          type="text"
          onChange={(e) => {
            if (selectedFilter === "concept") {
              if (e.target.value === "") setFilteredQueries(queries);
              const newSearch = e.target.value;
              setSearch(newSearch);
              setFilteredQueries(
                queries.filter((query) =>
                  query.concept.toLowerCase().includes(newSearch.toLowerCase())
                )
              );
            }
            if (selectedFilter === "analog") {
              if (e.target.value === "") setFilteredQueries(queries);
              const newSearch = e.target.value;
              setSearch(newSearch);
              setFilteredQueries(
                queries.filter((query) =>
                  query.analog.toLowerCase().includes(newSearch.toLowerCase())
                )
              );
            }
          }}
          placeholder="Search..."
          className="input input-bordered input-info w-full max-w-xs mt-5 mb-5"
        />
        <div className="flex flex-col ">
          <h2 className="text-xl">Filter by:</h2>
          <div className="flex  justify-center items-center ">
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Concept</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio ml-2 checked:bg-black"
                  onChange={() => {
                    setSelectedFilter("concept");
                  }}
                  checked={selectedFilter === "concept"}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Analog</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio ml-2 checked:bg-black"
                  onChange={() => setSelectedFilter("analog")}
                  checked={selectedFilter === "analog"}
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      <table className="table table-zebra w-full max-w-7xl gap-2 p-5 border shadow-sm mb-5">
        {/* head */}
        <thead>
          <tr>
            <th>Concept</th>
            <th>Tags</th>
            <th>Likes</th>
          </tr>
        </thead>
        <tbody>
          {filteredQueries
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
                      userLiked={
                        user?.likes && user?.likes?.includes(query?.id)
                      }
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
