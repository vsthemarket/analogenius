import Image from "next/image";
import Link from "next/link";

export default async function about() {
  return (
    <section>
      <div className="hero  bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello!</h1>
            <p className="py-6 text-gray-300">
              Analogenius is an app that uses the power of AI to help you learn
              concepts with simple analogies. I created this as a submission to
              the Supabase Launch Week 7 Hackathon, and I hope you enjoy using
              it as much as I enjoyed building it! Also, feel free to open an
              issue or submit a pull request{" "}
              <Link
                href="https://github.com/lifeofbry19/analogenius"
                className="text-indigo-400"
              >
                {" "}
                here
              </Link>{" "}
              if you have any suggestions!
            </p>

            <Image
              src="/ai_puppy.png"
              alt="AI generated image of a dog working on a laptop"
              width="500"
              height="500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
