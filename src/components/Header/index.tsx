import { useState } from "react";
import Select from "../Select";
import { BsTag } from "react-icons/bs";
import { FiUserX, FiUserCheck } from "react-icons/fi";
import { BiUserVoice } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import { RxDividerVertical } from "react-icons/rx";

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
      <div className="header-content">
        <Select
          setShowOptions={setShowOptions}
          showOptions={showOptions}
          options={selectOptions}
          value={selectValue}
          setValue={setSelectValue}
        />
        <div>
          <ul className="header-icons">
            <li className="header-icon__item">
              <BsTag size={18} color="#0B0B0B" />
            </li>
            <li className="header-icon__item">
              <FiUserX size={18} color="#A80000" />
            </li>
            <li className="header-icon__item">
              <FiUserCheck size={18} color="#0B0B0B" />
            </li>
            <li className="header-icon__item">
              <BiUserVoice size={18} color="#0B0B0B" />
            </li>
            <li className="header-icon__item">
              <CiMail size={18} color="#0B0B0B" />
            </li>
            <RxDividerVertical color="#eee" width={0.5}/>
            <li>
              <button className="header-btn">
                <span className="btn-text">Move To Video Interview I</span>
                <span className="btn-icon">
                  <GoChevronDown color="#fff" />
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
