import Link from "next/link";
import Image from "next/image";

export default function BackLink({ text, href }) {
  return (
    <div className="flex justify-start items-center">
      <Link href={href}>
        <Image src="/left-arrow.png" />
        {text}
      </Link>
    </div>
  );
}
