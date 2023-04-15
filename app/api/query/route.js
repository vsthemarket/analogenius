import { createRouteHandlerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";
// import { Configuration, OpenAIApi } from "openai";

// const config = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(config);
export const revalidate = 0;

// logical flow:
// 1. get user input from form: email, concept, analog
// 2. get user's favorites array from db
// 3. prompt chatgpt with concept and analog
// 4. save response to db in queries table
// 5. update user's favorites array with the new query id
// 6. return query response to client

export async function POST(req, res) {
  const supabase = createRouteHandlerSupabaseClient({
    headers,
    cookies,
  });
  // set concept and analog to reg.body props then prompt chatgpt with prompt and return response
  const { concept, analog, email } = await req.json();

  // select users favorites array from db
  const { data: favoritesArr, error: favoritesError } = await supabase
    .from("profiles")
    .select("favorites")
    .eq("email", email)
    .single();

  console.log(favoritesArr);

  const sampleResponse =
    "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum";
  const prompt = `you are an expert at breaking down complex topics in simple terms. I will ask you to explain a topic or idea in the terms of something else, meaning you will use an analogy from the activity/occupation i give you to explain the concept. your response will be just a parargraph and won't contain any filler language or such as - sure, I can do that!  or I hope this helps or certainly! - explain ${concept} to me in simple terms using ${analog} as an analogy`;
  const { data, error } = await supabase
    .from("queries")
    .insert([
      { concept, response: sampleResponse, tags: [analog], analog: analog },
    ])
    .select("*")
    .single();
  // after inserting the query to db, update user's favorites array with the new query id
  const { data: userData, error: userError } = await supabase
    .from("profiles")
    .update({
      favorites: favoritesArr
        ? [...favoritesArr.favorites, data.id]
        : [data.id],
    })
    .eq("email", email);

  //   const response = await openai.createChatCompletion({
  //     model: "gpt-3.5-turbo",
  //     messages: [{ role: "user", content: prompt }],
  //     temperature: 0.9,
  //   });
  return new Response(data);
}
