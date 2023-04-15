import { tagConverter } from "@/utils/tagConverter";
import supabaseServerClient from "@/utils/supabase-server";
import Link from "next/link";

async function getQueries(supabase) {
  const { data, error } = await supabase.from("queries").select("*");
  if (error) {
    console.log(error);
    return [];
  }
  return data;
}

export default async function search() {
  const supabase = supabaseServerClient();
  const queries = await getQueries(supabase);
  return (
    <>
      <div className="overflow-x-auto w-full flex flex-col justify-center items-center">
        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered input-info w-full max-w-xs mt-5 mb-5"
        />

        <table className="table table-zebra w-full max-w-7xl gap-2 p-5">
          {/* head */}
          <thead>
            <tr>
              <th>Concept</th>
              <th>Analog</th>
              <th>Tags</th>
            </tr>
          </thead>
          <tbody>
            {queries.map((query, idx) => {
              return (
                <tr key={idx} className="hover cursor-pointer">
                  <td>
                    <Link href={`/search/${query.id}`}>{query?.concept}</Link>
                  </td>

                  <td>{query?.analog}</td>
                  <td>
                    {query?.tags?.map((tag, idx) => {
                      return (
                        <div
                          key={idx}
                          className=" h-12 w-12 ml-2 mr-2 text-2xl rounded-md bg-base-100 flex justify-center items-center shadow-md"
                        >
                          {" "}
                          <p>{tagConverter[tag.toLowerCase()]}</p>{" "}
                        </div>
                      );
                    })}{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
