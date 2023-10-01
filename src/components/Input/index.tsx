import { ChangeEventHandler } from "react";
import { PiWarningCircleLight} from "react-icons/pi";
import { FiSearch } from "react-icons/fi";

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
      {type === "search" && <FiSearch size={20} color="#B0BABF"/>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
        {type === "search" && <PiWarningCircleLight size={20} color="#B0BABF"/>}
    </div>
  );
};

export default Input;
