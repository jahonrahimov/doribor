import { FC } from "react";
import Link from "next/link";

type HeroProps = {
  bg?: string;
  title: string;
  description?: string;
  buttonText?: string;
};

const Hero: FC<HeroProps> = (props) => {
  const { bg, title, description, buttonText } = props;

  return (
    <section className="bg-cover bg-left mb-8 bg-no-repeat bg-[url('/hero.png')] bg-gray-400 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>

        {description && (
          <p className="mb-8 text-md font-normal text-white lg:text-2xl sm:px-16 lg:px-48">
            {description}
          </p>
        )}

        {buttonText && (
          <Link
            href="/dorihonani-qoshish"
            className="mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {buttonText}
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Hero;
