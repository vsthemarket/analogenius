"use client";
import { useSupabase } from "@/app/supabase-provider";
import { useState, useRef } from "react";

export default function QueryForm({
  loading,
  setLoading,
  setQueryResponse,
  user,
}) {
  const [analog, setAnalog] = useState("");
  const [concept, setConcept] = useState("");
  const formRef = useRef(null);
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());

    if (!value.analog) {
      value.analog = "random";
    }

    const res = await fetch("/api/query", {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      setLoading(false);
      const json = await res.json();
      console.log(json.data);
      setQueryResponse(json.data);
    }
    if (res.error) {
      setLoading(false);
      console.log(res.error);
      setError(res.error);
    }
  };
  const handleAnalogSelect = (e) => {
    // loop over other options and set value to Pick an analogy

    const analogs = formRef.current.querySelectorAll("select");
    analogs.forEach((analog) => {
      if (analog !== e.target) {
        analog.value = "Pick an analogy";
      }
    });
    setAnalog(e.target.value);
  };
  return (
    <form className="mt-5" onSubmit={handleSubmit} ref={formRef}>
      {/* Concept */}

      <div className="flex flex-col  gap-5">
        <div className="flex flex-col justify-start items-start mb-5 lg:mb-10 gap-5">
          <div className="">
            <h3 className="font-medium text-xl lg:text-2xl">
              Write out the concept you want to learn (max 30 characters)
              <div
                className="tooltip hover:tooltip-open inline-block"
                data-tip="the more specific the topic, the better the analogy produced will be"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-current flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
            </h3>
          </div>
          <div>
            <input
              required
              maxLength="30"
              onChange={(e) => setConcept(e.target.value)}
              value={concept}
              name="concept"
              type="text"
              placeholder="ex: recursion, functional programming..."
              className="input input-bordered input-primary w-full lg:min-w-[22rem]"
            />
          </div>
        </div>

        {/* Analog */}
        <div className="mb-5 lg:mb-16 flex flex-col justify-start items-start">
          <div className="">
            <h3 className="font-medium text-xl lg:text-2xl mb-5">
              Pick a category and analogy to learn your concept with (limited to
              one selection, defaults to &quot;random&quot;)
              <div
                className="tooltip hover:tooltip-open inline-block"
                data-tip="the more niche analogs will produce more detailed and helpful results"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-current flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
            </h3>
          </div>
          <div className="flex flex-col gap-5 sm:flex-row flex-wrap ">
            {/* Categories */}

            <div className="flex flex-col justify-center items-start">
              <label className="mb-2">Animated TV Shows</label>
              <select
                name="analog"
                className="select select-secondary w-full max-w-xs"
                onChange={handleAnalogSelect}
              >
                <option disabled selected>
                  Pick an analogy
                </option>
                <option>Spongebob Squarepants</option>
                <option>Rick and Morty</option>
                <option>Futurama</option>
                <option>The Simpsons</option>
                <option>Phineas and Ferb</option>
              </select>
            </div>

            <div className="flex flex-col justify-center items-start">
              <label className="mb-2">Movies and More TV Shows</label>
              <select
                name="analog"
                className="select select-secondary w-full max-w-xs"
                onChange={handleAnalogSelect}
              >
                <option disabled selected>
                  Pick an analogy
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Star Trek</option>
                <option>Lord of the Rings</option>
                <option>Avengers</option>
                <option>The Office</option>
                <option>The Matrix</option>
              </select>
            </div>

            <div className="flex flex-col justify-center items-start">
              <label className="mb-2">Entertainment/Art</label>
              <select
                name="analog"
                className="select select-secondary w-full max-w-xs"
                onChange={handleAnalogSelect}
              >
                <option disabled selected>
                  Pick an analogy
                </option>
                <option>Movie Production</option>
                <option>Music Theory</option>
                <option>Art History</option>
                <option>Classic Rock</option>
                <option>Classical Music</option>
                <option>Hip Hop</option>
                <option>Musicals</option>
              </select>
            </div>

            <div className="flex flex-col justify-center items-start">
              <label className="mb-2">Sports</label>
              <select
                name="analog"
                className="select select-secondary w-full max-w-xs"
                onChange={handleAnalogSelect}
              >
                <option disabled selected>
                  Pick an analogy
                </option>
                <option>Golf</option>
                <option>Basketball</option>
                <option>Soccer</option>
                <option>American Football</option>
                <option>Baseball</option>
                <option>Surfing</option>
                <option>Snowboarding</option>
                <option>Volleyball</option>
                <option>Endurance Sports</option>
                <option>Tennis</option>
              </select>
            </div>

            <div className="flex flex-col justify-center items-start">
              <label className="mb-2">Hobbies/Interests</label>
              <select
                name="analog"
                className="select select-secondary w-full max-w-xs"
                onChange={handleAnalogSelect}
              >
                <option disabled selected>
                  Pick an analogy
                </option>
                <option>Chess</option>
                <option>Video Games</option>
                <option>Martial Arts</option>
                <option>Dance</option>
                <option>Knitting</option>
                <option>Cooking</option>
              </select>
            </div>

            <div className="flex flex-col justify-center items-start">
              <label className="mb-2">Tech/Science/Math</label>
              <select
                name="analog"
                className="select select-secondary w-full max-w-xs"
                onChange={handleAnalogSelect}
              >
                <option disabled selected>
                  Pick an analogy
                </option>
                <option>Computer Hardware</option>
                <option>Operating Systems</option>
                <option>Quantum Mechanics</option>
                <option>Astrophysics</option>
                <option>Geometry</option>
                <option>Astronomy</option>
                <option>Calculus</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start gap-5 mb-10">
          <p className="mx-auto font-medium text-3xl ">
            I want to learn{" "}
            <span className=" border-teal-300 border-b-2 italic">
              {concept ? concept : "____"}
            </span>{" "}
            using{" "}
            <span className="border-teal-300 border-b-2 italic">
              {analog ? analog : "____"}
            </span>{" "}
            as an analogy
          </p>
        </div>

        {/* Submit */}
        <input type="hidden" name="email" value={user?.email || ""} />
        {error && <p className="text-red-500">*{error}</p>}
        <input
          type="submit"
          value={loading ? "Loading..." : "Submit"}
          disabled={loading}
          className={`btn ${
            loading ? "loading" : ""
          } bg-emerald-500 hover:bg-emerald-400 border-none mb-5 `}
        />
      </div>
    </form>
  );
}
