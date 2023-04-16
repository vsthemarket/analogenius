"use client";
import { useSupabase } from "@/app/supabase-provider";

export default function QueryForm({ setLoading, setQueryResponse, user }) {
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
      <div className="flex justify-center items-center gap-5">
        <p className="">I want to learn</p>
        <div>
          <input
            name="concept"
            type="text"
            placeholder="Concept to learn..."
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>

        {/* Analog */}
        <p>Using</p>
        <div>
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
        <input type="hidden" name="email" value={user.email} />
        <input type="submit" value="Submit" className="btn" />
      </div>
    </form>
  );
}
