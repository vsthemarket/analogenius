import { createRouteHandlerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";
// import { Configuration, OpenAIApi } from "openai";

// const config = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(config);
export const revalidate = 0;

export async function POST(req, res) {
  const supabase = createRouteHandlerSupabaseClient({
    headers,
    cookies,
  });
  // set concept and analog to reg.body props then prompt chatgpt with prompt and return response
  const body = await req.json();
  console.log(body);
  const concept = "the concept";
  const analog = "the analogy";

  const prompt = `you are an expert at breaking down complex topics in simple terms. I will ask you to explain a topic or idea in the terms of something else, meaning you will use an analogy from the activity/occupation i give you to explain the concept. your response will be just a parargraph and won't contain any filler language or such as - sure, I can do that!  or I hope this helps or certainly! - explain ${concept} to me in simple terms using ${analog} as an analogy`;

  //   const response = await openai.createChatCompletion({
  //     model: "gpt-3.5-turbo",
  //     messages: [{ role: "user", content: prompt }],
  //     temperature: 0.9,
  //   });
  return new Response("hello!");
}
