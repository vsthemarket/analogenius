import supabaseServerClient from "@/utils/supabase-server";
import { tagConverter } from "@/utils/tagConverter";

async function getQuery(supabase, id) {
  const { data, error } = await supabase
    .from("queries")
    .select("*")
    .eq("id", id)
    .select("*")
    .single();
  if (error) {
    console.log(error);
    return [];
  }
  return data;
}

export default async function QueryPage({ params }) {
  const supabase = supabaseServerClient();
  const query = await getQuery(supabase, params.id);
  console.log(query);

  if (!query) {
    return <div>loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center w-full lg:w-1/2 mb-5 max-w-7xl min-h-16">
      <h1 className="text-5xl font-bold mb-5">{query[0]?.concept}</h1>
      <div className="flex justify-center items-center flex-col">
        <div className="w-full text-lg p-4  border border-base-200 shadow-lg bg-base-100">
          <p>{query[0]?.response}</p>{" "}
        </div>
        <div className="self-start flex justify-center items-center  mt-2">
          {" "}
          <p className="text-lg">Tags:</p>{" "}
          {query[0]?.tags &&
            query[0].tags.map((tag, idx) => {
              return (
                <div
                  key={idx}
                  className=" h-12 w-12 ml-2 mr-2 text-2xl rounded-md bg-base-100 flex justify-center items-center shadow-md"
                >
                  {" "}
                  <p>{tagConverter[tag]}</p>{" "}
                </div>
              );
            })}{" "}
        </div>
      </div>
    </div>
  );
}
