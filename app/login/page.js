import LoginForm from "@/components/LoginForm";
import supabaseServerClient from "@/utils/supabase-server";

async function getUser(supabase) {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.log(error);
    return null;
  }
  return data;
}

export default async function login() {
  // get user session from supabase, if it exists, set user to session.user
  const supabase = supabaseServerClient();
  const user = await getUser(supabase);

  return (
    <div>
      <LoginForm user={user} />
    </div>
  );
}
