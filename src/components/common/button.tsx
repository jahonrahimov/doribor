import { FC } from "react";

type ButtonProps = {
  title: string;
};

const Button: FC<ButtonProps> = (props) => {
  const { title } = props;

  return (
    <div className="flex justify-center py-8">
      <a href="" className="text-[15px] underline font-semibold text-green-600">
        {title}
      </a>
    </div>
  );
};

export default Button;
