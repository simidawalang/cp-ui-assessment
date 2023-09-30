const CandidateCard = ({ candidate }: any) => {
  return (
    <div className="candidate-card">
      <div className="candidate-details">
        <input type="checkbox" />
        <div className="candidate-initials">AS</div>
        <div>
          <p className="name">{candidate.name}</p>
          <p className="location">{candidate.location}</p>
          <p className="education">{candidate.education}</p>
          <div className="hashtags">
            {candidate.hashtags.length !== 0 &&
              candidate.hashtags.map((h: any, i: any) => (
                <span key={i}>{h}</span>
              ))}
          </div>

          <div className="pill-container">
            <span className="pill">{candidate.city}</span>
            <span className="pill">{candidate.department}</span>
            <span className="pill">{candidate.residence}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
