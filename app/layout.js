import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LoginBanner from "@/components/LoginBanner";
import SupabaseProvider from "./supabase-provider";
import supabaseServerClient from "@/utils/supabase-server";

async function getUser(supabase) {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.log(error);
    return null;
  }
  return data;
}

export default async function RootLayout({ children }) {
  const supabase = supabaseServerClient();
  const user = await getUser(supabase);

  return (
    <html lang="en">
      <body className="bg-green-200">
        <SupabaseProvider>
          <Navigation user={user} />
          <div className="background-gradient flex flex-col justify-start items-center pt-20 gap-10 min-h-[calc(100vh-53px)] p-2  bg-base-200">
            <LoginBanner user={user} />
            {children}
          </div>
          <Footer />
        </SupabaseProvider>
      </body>
    </html>
  );
}
