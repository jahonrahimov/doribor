import { FC } from "react";
import { className } from "postcss-selector-parser";

type SelectProps = {
  options: { label: string; value: string }[];
  className?: string;
};

const Select: FC<SelectProps> = (props) => {
  const { options, className = "" } = props;

  return (
    <select
      className={`${className} bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
    >
      <option selected>Туманни танланг</option>
      {options.map((item, i) => (
        <option key={i} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
