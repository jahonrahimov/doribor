import { FC } from "react";

type CardProps = {
  name: string;
  schedule: string;
  phone: string;
  location: string;
  key: number;
};

const Card: FC<CardProps> = (props) => {
  const { name, schedule, phone, location, key } = props;

  return (
    <div key={key} className="bg-white px-4 py-6 rounded-md shadow text-center">
      <div className="text-md font-semibold mb-2">{name}</div>
      <div className="text-sm mb-6">Иш вақти {schedule}</div>
      <div className="max-w-[300px] mx-auto">
        <a
          href={`tel:${phone}`}
          className="w-full mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <div className="w-[20px] h-[20px] mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
              <path
                fill="#ffffff"
                d="M795 936q-122 0-242.5-60T336 720q-96-96-156-216.5T120 261q0-19.286 12.857-32.143T165 216h140q13.611 0 24.306 9.5Q340 235 343 251l27 126q2 14-.5 25.5T359 422L259 523q56 93 125.5 162T542 802l95-98q10-11 23-15.5t26-1.5l119 26q15.312 3.375 25.156 15.188Q840 740 840 756v135q0 19.286-12.857 32.143T795 936ZM229 468l81-82-23-110H180q0 39 12 85.5T229 468Zm369 363q41 19 89 31t93 14V769l-103-21-79 83ZM229 468Zm369 363Z"
              />
            </svg>
          </div>
          <div className="text-indigo font-semibold">Кунгирок килиш</div>
        </a>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${location}`}
          target="_blank"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <div className="w-[20px] h-[20px] mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
              <path
                fill="#ffffff"
                d="M450 646h60V526h120v-60H510V346h-60v120H330v60h120v120Zm30 251q133-121 196.5-219.5T740 504q0-117.79-75.292-192.895Q589.417 236 480 236t-184.708 75.105Q220 386.21 220 504q0 75 65 173.5T480 897Zm0 79Q319 839 239.5 721.5T160 504q0-150 96.5-239T480 176q127 0 223.5 89T800 504q0 100-79.5 217.5T480 976Zm0-472Z"
              />
            </svg>
          </div>

          <div className="text-indigo font-semibold">Google харитада очиш</div>
        </a>
      </div>
    </div>
  );
};

export default Card;
