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
  console.log(formRef.current);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    console.log(value);
    // const res = await fetch("/api/query", {
    //   method: "POST",
    //   body: JSON.stringify(value),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // if (res.ok) {
    //   setLoading(false);
    //   const json = await res.json();
    //   console.log(json.data);
    //   setQueryResponse(json.data);
    // }
    // if (res.error) {
    //   setLoading(false);
    //   console.log(json.error);
    //   setError(json.error);
    // }
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
    <form className="mt-10" onSubmit={handleSubmit} ref={formRef}>
      {/* Concept */}

      <div className="flex flex-col  gap-5">
        <div className="flex flex-col justify-start items-start gap-5">
          <h3 className="font-medium text-lg">
            Write out the concept you want to learn (max 20 characters)
          </h3>
          <div>
            <input
              required
              maxLength="20"
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
        <div>
          <h3 className="font-medium text-lg mb-5">
            Pick a category and analogy to learn your concept with (limited to
            one selection)
          </h3>
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

        <div className="flex flex-col justify-start items-start gap-5 mb-5">
          <h3 className="font-medium text-lg mb-2">Your Selection: </h3>
          <p className="font-medium text-xl ">
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
        <input
          type="submit"
          value={loading ? "Loading..." : "Submit"}
          className="btn bg-emerald-500 hover:bg-emerald-400 border-none mb-5"
        />
      </div>
    </form>
  );
}
