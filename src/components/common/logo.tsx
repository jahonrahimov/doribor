import Link from "next/link";

const Logo = () => (
  <Link href="/" className="mr-8">
    <span className="shadow self-center md:text-xl text-[14px] md:py-2 py-1.5 pl-4 pr-1 rounded-l-3xl bg-green-500 text-white font-bold whitespace-nowrap dark:text-white">
      DORI
    </span>
    <span className="shadow self-center md:text-xl text-[14px] md:py-2 py-1.5 pr-4 pl-1 rounded-r-3xl bg-orange-500 text-white font-bold whitespace-nowrap dark:text-white">
      BOR
    </span>
  </Link>
);

export default Logo;
