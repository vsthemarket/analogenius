import Image from "next/image";
import Link from "next/link";

export default function Home({ user }) {
  return (
    <div className="hero-content flex flex-col text-center max-w-7xl ">
      <div className="flex flex-col lg:flex-row border-b-2 border-gray-700 mb-10 pb-10">
        <div className="max-w-6xl flex justify-start flex-col items-start ">
          <h1 className="text-5xl font-bold ">
            Welcome to <span className="text-gradient">Analogenius!</span>
          </h1>
          <p className="py-6 text-start text-md text-gray-600">
            <em>
              {" "}
              An AI-powered tool that teaches you difficult technical concepts
              with easy to understand analogies.
            </em>
          </p>

          <h2 className="mb-5 text-lg text-start">
            Sometimes, ideas or concepts in tech are just difficult to grasp.
            You can use Analogenius to better supercharge your learning in 3
            easy steps
          </h2>

          <ul className="text-gray-300 flex flex-col lg:flex-row gap-5 list-none text-lg pl-2 md:pl-0">
            <li className="text-start w-full flex-1 bg-gray-700 hover:bg-black pl-1 pb-1 ">
              <div className="bg-base-100 p-2 h-full w-full hover:translate-x-1 hover:-translate-y-1">
                <h3 className="font-medium text-black">Step One</h3>
                <p className="text-black">
                  Input a topic you want to learn in the concept text box
                </p>{" "}
                <Image src="/ai_puppy.png" width={50} height={50} alt="puppy" />
              </div>
            </li>
            <li className="text-start w-full flex-1 bg-gray-700 hover:bg-black pl-1 pb-1 ">
              <div className="bg-base-100 p-2 h-full w-full text-black hover:translate-x-1 hover:-translate-y-1">
                <h3 className="font-medium">Step Two</h3>
                <p>
                  Pick an analog with a hobby/occupation/thing you are familiar
                  with
                </p>{" "}
                <Image src="/ai_puppy.png" width={50} height={50} alt="puppy" />
              </div>
            </li>
            <li className="text-start  w-full flex-1 bg-gray-700 hover:bg-black pl-1 pb-1">
              <div className="bg-base-100 p-2 h-full w-full text-black hover:translate-x-1 hover:-translate-y-1">
                <h3 className="font-medium">Step Three</h3>

                <p>
                  Soak in the knowledge as the power of AI is harnessed to help
                  you better understand complex ideas with simple analogies
                </p>
                <Image src="/ai_puppy.png" width={50} height={50} alt="puppy" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-5 max-w-2xl ">
        <h3 className="text-2xl font-bold mb-5">
          Get started leraning new things now! Or navigate to the{" "}
          <Link href="/search" className="text-indigo-400">
            Search
          </Link>{" "}
          tab to see a list of past queries made by other users.
        </h3>
        <Link
          className="h-8 mb-5 lg:h-10 font-medium text-lg flex justify-center items-center text-white bg-indigo-400 rounded-md"
          href="/learn"
        >
          Learn something new
        </Link>
      </div>
    </div>
  );
}
