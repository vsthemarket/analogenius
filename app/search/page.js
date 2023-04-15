import { tagConverter } from "@/utils/tagConverter";
import supabaseServerClient from "@/utils/supabase-server";
import Link from "next/link";
import QueryList from "@/components/QueryList";

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
        <QueryList queries={queries} />
      </div>
    </>
  );
}
