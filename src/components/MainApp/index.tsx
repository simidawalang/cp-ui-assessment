import { ChangeEvent, useEffect, useState } from "react";
import { candidates } from "../../dummy-data/candidates";
import CandidateCard from "./CandidateCard";
import Input from "../Input";
import { GrNotes } from "react-icons/gr";
import { GoChevronDown } from "react-icons/go";

const MainApp = () => {
  const [filteredCandidates, setFilteredCandidates] = useState(candidates);
  const [searchValue, setSearchValue] = useState("");

  const filterCategories = [
    "Personal Information",
    "Education",
    "Work Experience",
    "Activity Filter",
    "Advanced Filter",
  ];

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue === "") {
      setFilteredCandidates(candidates);
    }

    const newList = candidates.filter(
      (c) =>
        c.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        c.location.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredCandidates(newList);
  }, [searchValue]);

  return (
    <div className="main-app__body">
      <div className="filters">
        <Input
          type="search"
          placeholder="Search by name, edu, exp or #tag"
          value={searchValue}
          onChange={handleSearch}
        />
        <div className="filter-categories">
          <div className="selected-filters">
            <span className="heading">Filters</span>
            <span>0 selected</span>
          </div>
          {filterCategories.map((c, i) => (
            <div className="category" key={i}>
              <div className="category-name">
                <GrNotes className="note" />
                {c}
              </div>
              <GoChevronDown color="#1D4ED8" />
            </div>
          ))}
        </div>
      </div>
      <div className="candidates">
        candidates
        {filteredCandidates.length !== 0 ? (
          filteredCandidates.map((c) => (
            <CandidateCard key={c.id} candidate={c} />
          ))
        ) : (
          <p>No candidate to show</p>
        )}
      </div>
    </div>
  );
};

export default MainApp;
