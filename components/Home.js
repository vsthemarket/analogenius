"use client";
import QueryForm from "./QueryForm";
import { useState } from "react";

export default function Home() {
  const [hasSearched, setHasSearched] = useState(false);
  return (
    <div className="flex flex-col justify-start items-center pt-24 gap-10 min-h-[calc(100vh-53px)]  bg-base-200">
      {!hasSearched && (
        <div className="hero-content flex flex-col text-center max-w-7xl">
          <div className="flex flex-col lg:flex-row">
            <div className="max-w-md flex justify-start flex-col items-start w-2/3">
              <h1 className="text-5xl font-bold text-indigo-500">
                Hello there
              </h1>
              <p className="py-6">
                Analogenius is an AI-powered tool that teaches you difficult
                concepts with easy to understand analogies.
              </p>
              <ol className=" list-decimal text-lg ">
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
            <div className="w-2 bg-gray-200 h-full"></div>
            <div className=" max-w-xl">
              <p>
                Create an account and sign in to take advantage of Analogenius
                best features, such as saving your favorite responses, creating
                your own analogs, and adding a like to responses generate by
                other users!
              </p>
              <button className="btn btn-primary mt-5">Login</button>
            </div>
          </div>
          <div>
            <QueryForm />
          </div>
        </div>
      )}
      {hasSearched && (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-indigo-500">Results</h1>
          <p className="py-6">
            Analogenius is an AI-powered tool that teaches you difficult
            concepts with easy to understand analogies.
          </p>
        </div>
      )}
    </div>
  );
}
