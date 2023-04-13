"use client";

export default function queryForm() {
  return (
    <form className="mt-10">
      {/* Concept */}
      <div className="flex justify-center items-center gap-5">
        <p className="">I want to learn</p>
        <div>
          <input
            name="analog"
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
            <option>Java</option>
            <option>Go</option>
            <option>C</option>
            <option>C#</option>
            <option>C++</option>
            <option>Rust</option>
            <option>JavaScript</option>
            <option>Python</option>
          </select>
        </div>
      </div>
    </form>
  );
}
