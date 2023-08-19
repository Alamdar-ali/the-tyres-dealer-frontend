import React, { ChangeEvent } from "react";
import clsx from "clsx";
type Props = {
  disabled?: boolean;
  id?: string;
  name?: string;
  placeholder?: string;
  readonly?: boolean;
  label?: string;
  className?: any;
  onChange: any;
  value: string;
  type: string;
  helperText?: string;
  error?: boolean;
};
const CustomInput = ({
  disabled,
  id,
  name,
  label,
  className,
  value,
  onChange,
  type,
  placeholder,
  readonly,
  error,
  helperText,
}: Props) => {
  const basicClass =
    "w-full my-2 bg-transparent rounded-lg font-primary-font p-2 text-white border-solid border-1 border-indigo-600 h-10 focus:border border-solid";
  return (
    <div>
      <label className="text-white font-primary-font">{label}</label>
      <input
        id={id}
        name={name}
        className={clsx(className ? className : basicClass)}
        type={type}
        value={value}
        onChange={onChange}
      ></input>
      <span className="text-red font-medium font-primary-font text-sm">
        {helperText}
      </span>
    </div>
  );
};

export default CustomInput;
