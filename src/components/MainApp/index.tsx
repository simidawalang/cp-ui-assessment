import { ChangeEvent, useEffect, useState } from "react";
import { candidates } from "../../dummy-data/candidates";
import CandidateCard from "./CandidateCard";
import Input from "../Input";

const MainApp = () => {
  const [filteredCandidates, setFilteredCandidates] = useState(candidates);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // id: 6,
  // name: "Aaliyah Sanderson",
  // location: "Riyadh, Saudi Arabia",
  // education: "Bachelor - Cambridge University (2023 - 2023)",
  // hashtags: ["#top_candidate", "#top_candidate"],
  // city: "New York",
  // department: "Marketing",
  // residence: "London",
  // viewsCount: 5,
  // programCount: 5,

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
        Filters
        <Input
          type="search"
          placeholder="Search by name, edu, exp or #tag"
          value={searchValue}
          onChange={handleSearch}
        />
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
