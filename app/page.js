import Home from "@/components/Home";
import supabaseServerClient from "@/utils/supabase-server";

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

export default async function HomePage() {
  const supabase = supabaseServerClient();
  const user = await getUser(supabase);
  return (
    <div className="w-full justify-center items-center flex">
      <Home user={user} />
    </div>
  );
}
