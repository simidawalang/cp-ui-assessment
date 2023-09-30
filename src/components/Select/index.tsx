import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import { FaAngleDown } from "react-icons/fa";

const Select = ({
  value,
  setValue,
  options,
  showOptions,
  className,
  setShowOptions,
}: {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  options: any[];
  showOptions: boolean;
  className?: string;
  setShowOptions: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      className="select"
      onClick={(e) => {
        e.stopPropagation();
        setShowOptions(true);
      }}
    >
      <div className="select-value">
        {value} <FaAngleDown color="#1D4ED8" />
      </div>
      {showOptions && (
        <div className="select-option__container">
          {options.map((o) => (
            <div
              key={o.id}
              className={`select-option ${value === o.value ? "active" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                setValue(o.value);
                setShowOptions(false);
                console.log(1);
              }}
            >
              {o.value}
              <span className="count">{o.count}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
