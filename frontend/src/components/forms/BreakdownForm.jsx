import { useState } from "react";

function BreakdownForm({ candidates, umbrellas, onSubmit }) {
  const [candidateId, setCandidateId] = useState("");
  const [umbrellaId, setUmbrellaId] = useState("");
  const [breakdownHours, setBreakdownHours] = useState([]);

  const handleAddHours = () => {
    setBreakdownHours([
      ...breakdownHours,
      { DayHrs: 0, NightHrs: 0, SundayHrs: 0 },
    ]);
  };

  const handleRemoveHours = (index) => {
    setBreakdownHours([...breakdownHours.slice(0, index), ...breakdownHours.slice(index + 1)]);
  };

  const handleHoursChange = (index, field, value) => {
    const updatedHours = [...breakdownHours];
    updatedHours[index][field] = value;
    setBreakdownHours(updatedHours);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { candidateId, umbrellaId, breakdownHours };
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Candidate:
        <select value={candidateId} onChange={(event) => setCandidateId(event.target.value)}>
          <option value="">-- Select a candidate --</option>
          {candidates.map((candidate) => (
            <option key={candidate._id} value={candidate._id}>
              {candidate.name}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Umbrella:
        <select value={umbrellaId} onChange={(event) => setUmbrellaId(event.target.value)}>
          <option value="">-- Select an umbrella --</option>
          {umbrellas.map((umbrella) => (
            <option key={umbrella._id} value={umbrella._id}>
              {umbrella.name}
            </option>
          ))}
        </select>
      </label>
      <br />
      <h3>Breakdown Hours</h3>
      {breakdownHours.map((hours, index) => (
        <div key={index}>
          <label>
            Day Hours:
            <input
              type="number"
              value={hours.DayHrs}
              onChange={(event) => handleHoursChange(index, "DayHrs", event.target.value)}
            />
          </label>
          <label>
            Night Hours:
            <input
              type="number"
              value={hours.NightHrs}
              onChange={(event) => handleHoursChange(index, "NightHrs", event.target.value)}
            />
          </label>
          <label>
            Sunday Hours:
            <input
              type="number"
              value={hours.SundayHrs}
              onChange={(event) => handleHoursChange(index, "SundayHrs", event.target.value)}
            />
          </label>
          <button type="button" onClick={() => handleRemoveHours(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddHours}>
        Add Hours
      </button>
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
