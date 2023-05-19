"use client";
import { useSupabase } from "@/app/supabase-provider";

export default function QueryForm({
  loading,
  setLoading,
  setQueryResponse,
  user,
}) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());

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
      console.log(json.error);
    }
  };
  return (
    <form className="mt-10" onSubmit={handleSubmit}>
      {/* Concept */}

      <div className="flex flex-col  gap-5">
        <div className="flex flex-col justify-start items-start gap-5">
          <h3 className="font-medium text-lg">
            Write out the concept you want to learn (max 20 characters)
          </h3>
          <div>
            <input
              required
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
            Pick a category and analogy to learn your concept with
          </h3>
          <div className="flex flex-col gap-5 lg:flex-row flex-wrap ">
            {/* Categories */}
            <div className="flex flex-col justify-center items-start">
              <label className="mb-2">Sports</label>
              <select
                name="analog"
                className="select select-secondary w-full max-w-xs"
              >
                <option disabled selected>
                  Pick an analogy
                </option>
                <option>Golf</option>
                <option>Programming</option>
                <option>Basketball</option>
                <option>Fishing</option>
                <option>Soccer</option>
                <option>American Football</option>
                <option>Baseball</option>
                <option>Surfing</option>
                <option>Snowboarding</option>
                <option>Chess</option>
                <option>Video Games</option>
                <option>Music</option>
                <option>Art</option>
                <option>Martial Arts</option>
                <option>Volleyball</option>
                <option>Dance</option>
              </select>
            </div>

            <div className="flex flex-col justify-center items-start">
              <label className="mb-2">Tech</label>
              <select
                name="analog"
                className="select select-secondary w-full max-w-xs"
              >
                <option disabled selected>
                  Pick an analogy
                </option>
                <option>Golf</option>
                <option>Programming</option>
                <option>Basketball</option>
                <option>Fishing</option>
                <option>Soccer</option>
                <option>American Football</option>
                <option>Baseball</option>
                <option>Surfing</option>
                <option>Snowboarding</option>
                <option>Chess</option>
                <option>Video Games</option>
                <option>Music</option>
                <option>Art</option>
                <option>Martial Arts</option>
                <option>Volleyball</option>
                <option>Dance</option>
              </select>
            </div>

            <div className="flex flex-col justify-center items-start">
              <label className="mb-2">Entertainment</label>
              <select
                name="analog"
                className="select select-secondary w-full max-w-xs"
              >
                <option disabled selected>
                  Pick an analogy
                </option>
                <option>Golf</option>
                <option>Programming</option>
                <option>Basketball</option>
                <option>Fishing</option>
                <option>Soccer</option>
                <option>American Football</option>
                <option>Baseball</option>
                <option>Surfing</option>
                <option>Snowboarding</option>
                <option>Chess</option>
                <option>Video Games</option>
                <option>Music</option>
                <option>Art</option>
                <option>Martial Arts</option>
                <option>Volleyball</option>
                <option>Dance</option>
              </select>
            </div>
          </div>
        </div>
        <input type="hidden" name="email" value={user?.email || ""} />
        <input
          type="submit"
          value={loading ? "Loading..." : "Submit"}
          className="btn"
        />
      </div>
    </form>
  );
}
