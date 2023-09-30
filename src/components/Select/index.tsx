const Select = ({
  value,
  options,
  showOption,
}: {
  value: string;
  options: any[];
  showOption: boolean;
}) => {
  return (
    <div className="select">
      <span className="select-value">{value}</span>
      {showOption && (
        <div className="select-option__container">
          {options.map((o) => (
            <div key={o.id} className="select-option">
              {o.value}
              <span>{o.count}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
