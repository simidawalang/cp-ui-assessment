import { ChangeEventHandler } from "react";

const Input = ({
  type,
  value,
  onChange,
  placeholder,
}: {
  type: string;
  value: string | number;
  onChange: ChangeEventHandler;
  placeholder: string;
}) => {
  return (
    <div className="input">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
