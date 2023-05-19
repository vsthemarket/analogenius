"use client";
import Image from "next/image";
import QueryForm from "./QueryForm";
import { useState } from "react";
import LoadingScreen from "./LoadingScreen";
import SuccessToast from "./SuccessToast";
import ErrorToast from "./ErrorToast";
import { tagConverter } from "../utils/tagConverter";

export default function Learn({ user }) {
  const [queryResponse, setQueryResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-full flex justify-center items-center max-w-7xl">
      {!queryResponse && (
        <div className=" flex flex-col max-w-7xl ">
          <QueryForm
            setLoading={setLoading}
            setQueryResponse={setQueryResponse}
            user={user}
            loading={loading}
          />
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
              {queryResponse?.tags?.map((tag, idx) => {
                return (
                  <div
                    key={idx}
                    className=" h-12 p-2 w-fit ml-2 mr-2 text-2xl rounded-md bg-base-100 flex justify-center items-center shadow-md"
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
