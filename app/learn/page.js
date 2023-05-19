import QueryForm from "@/components/QueryForm";
import Learn from "@/components/Learn";
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

export default async function LearnPage() {
  const supabase = supabaseServerClient();
  const user = await getUser(supabase);
  return (
    <div className="w-full flex justify-center items-center">
      <Learn user={user} />
    </div>
  );
}
