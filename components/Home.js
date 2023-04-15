"use client";
import Image from "next/image";
import QueryForm from "./QueryForm";
import { useState } from "react";
import LoadingScreen from "./LoadingScreen";

export default function Home() {
  const [queryResponse, setQueryResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  // create array called tags with dfferent emojis for values
  const tags = ["⛳️", "🎣", "🏀"];
  return (
    <>
      {loading && <LoadingScreen />}
      {!queryResponse && (
        <div className="hero-content flex flex-col text-center max-w-7xl ">
          <div className="flex flex-col lg:flex-row border-b-2 border-pink-400 pb-5">
            <div className="max-w-xl flex justify-start flex-col items-start ">
              <h1 className="text-5xl font-bold ">Hello there!</h1>
              <p className="py-6 text-start text-gray-300">
                <em>
                  {" "}
                  Analogenius is an AI-powered tool that teaches you difficult
                  concepts with easy to understand analogies.
                </em>
              </p>
              <ol className="text-gray-300 list-decimal text-lg ">
                <li className="text-start">
                  Input a topic you want to learn in the concept text box
                </li>
                <li className="text-start">
                  Pick an analog with a hobby/occupation/thing you are familiar
                  with
                </li>
                <li className="text-start">
                  Soak in the knowledge as the power of AI is harnessed to help
                  you better understand complex ideas with simple analogies
                </li>
              </ol>
            </div>
          </div>
          <div>
            <QueryForm setLoading={setLoading} />
          </div>
        </div>
      )}
      {queryResponse && (
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 mb-5 max-w-7xl min-h-16">
          <h1 className="text-5xl font-bold mb-5">Results</h1>
          <div className="flex justify-center items-center flex-col">
            <div className="w-full text-lg p-4  border border-base-200 shadow-lg bg-base-100">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>{" "}
            </div>
            <div className="self-start flex justify-center items-center  mt-2">
              {" "}
              <p className="text-lg">Tags:</p>{" "}
              {tags.map((tag, idx) => {
                return (
                  <div
                    key={idx}
                    className=" h-12 w-12 ml-2 mr-2 text-2xl rounded-md bg-base-100 flex justify-center items-center shadow-md"
                  >
                    {" "}
                    <p>{tag}</p>{" "}
                  </div>
                );
              })}{" "}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
