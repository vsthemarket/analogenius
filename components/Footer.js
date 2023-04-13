import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer items-center absolute p-4 bg-neutral text-neutral-content">
      <div className="flex justify-center items-center w-full ">
        <Image
          height="20"
          width="20"
          alt="supabse logo"
          src="/supabase-logo-icon.png"
        />
        <p>
          Powered by{" "}
          <Link href="https://supabase.com/" className=" text-indigo-400">
            Supabase
          </Link>{" "}
          created by{" "}
          <Link
            href="https://github.com/lifeofbry19"
            className=" text-indigo-400"
          >
            Bryant Young
          </Link>
        </p>
      </div>
    </footer>
  );
}
