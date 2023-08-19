import clsx from "clsx";
import React from "react";

type ButtonProps = {
  disabled?: boolean;
  name: string;
  type?: "button" | "reset" | "submit" | undefined;
  onClick: () => void;
  className?: any;
};
const CustomButton = ({
  disabled,
  name,
  type,
  onClick,
  className,
}: ButtonProps) => {
  const basicClass =
    " w-full my-2 bg-transparent rounded-lg font-primary-font p-2 text-white border-solid border-1 border-indigo-600 h-10 ";
  return (
    <button
      type={type}
      className={clsx(className ? className : basicClass)}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default CustomButton;
