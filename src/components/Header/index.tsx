import { useState } from "react";
import Select from "../Select";

const Header = () => {
  const [showOptions, setShowOptions] = useState(false);
  const selectOptions = [
    { id: 1, value: "Applied", count: 1745 },
    { id: 2, value: "Shortlisted", count: 453 },
    { id: 3, value: "Technical Interview", count: 123 },
    { id: 4, value: "Opportunity Browsing", count: 243 },
    { id: 5, value: "Video Interview I", count: 25 },
    { id: 6, value: "Video Interview II", count: 25 },
    { id: 7, value: "Video Interview III", count: 25 },
    { id: 8, value: "Offer", count: 25 },
    { id: 9, value: "Withdrawn", count: 25 },
  ];
  const [selectValue, setSelectValue] = useState("Opportunity Browsing");

  return (
    <header className="header">
      <div>
        <h3 className="heading-text">London Internship Program</h3>
        <span className="city">London</span>
      </div>
      <Select
        setShowOptions={setShowOptions}
        showOptions={showOptions}
        options={selectOptions}
        value={selectValue}
        setValue={setSelectValue}
      />
    </header>
  );
};

export default Header;
