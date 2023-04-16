"use client";
import Image from "next/image";
import QueryForm from "./QueryForm";
import { useState } from "react";
import LoadingScreen from "./LoadingScreen";
import SuccessToast from "./SuccessToast";
import ErrorToast from "./ErrorToast";
import { tagConverter } from "../utils/tagConverter";

export default function Home({ user }) {
  const [queryResponse, setQueryResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  // create array called tags with dfferent emojis for values
  const tags = ["⛳️", "🎣", "🏀"];
  return (
    <div className="w-full flex justify-center items-center">
      {loading && <LoadingScreen />}
      {!queryResponse && (
        <div className="hero-content flex flex-col text-center max-w-7xl ">
          <div className="flex flex-col lg:flex-row border-b-2 border-pink-400 pb-5">
            <div className="max-w-xl flex justify-start flex-col items-start ">
              <h1 className="text-5xl font-bold ">
                Welcome to <span className="text-gradient">Analogenius!</span>
              </h1>
              <p className="py-6 text-start text-gray-300">
                <em>
                  {" "}
                  An AI-powered tool that teaches you difficult concepts with
                  easy to understand analogies.
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
            <QueryForm
              setLoading={setLoading}
              setQueryResponse={setQueryResponse}
              user={user}
            />
          </div>
        </div>
      )}
      {queryResponse && (
        <div className="flex flex-col text-center justify-center items-center w-full lg:w-1/2 mb-5 max-w-7xl min-h-16">
          <h1 className="text-5xl font-bold mb-5">{queryResponse?.concept}</h1>
          <div className="flex justify-center items-center flex-col">
            <div className="w-full text-lg p-4  border border-base-200 shadow-lg bg-base-100">
              <p>{queryResponse?.response}</p>{" "}
            </div>
            <div className="self-start flex justify-center items-center  mt-2">
              {" "}
              {queryResponse?.tags.map((tag, idx) => {
                return (
                  <div
                    key={idx}
                    className=" h-12 w-12 ml-2 mr-2 text-2xl rounded-md bg-base-100 flex justify-center items-center shadow-md"
                  >
                    {" "}
                    <p>
                      {tagConverter[tag.split(" ").join("").toLowerCase()]}
                    </p>{" "}
                  </div>
                );
              })}{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
