import '../styles/education.css';
import { useState } from 'react';

export default function Education({ educationInfo, handleEducation }) {
  const [isEditable, setIsEditable] = useState(true);

  function handleEditable(e) {
    e.preventDefault();
    setIsEditable(!isEditable);
  }

  if (isEditable) {
    return (
      <section className="education">
        <h2>Education</h2>
        <form>
          <label>School</label>
          <input
            type="text"
            name="school"
            value={educationInfo.school}
            onChange={handleEducation}
          />
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={educationInfo.location}
            onChange={handleEducation}
          />
          <label>Degree</label>
          <input
            type="text"
            name="degree"
            value={educationInfo.degree}
            onChange={handleEducation}
          />
          <div className="date-container">
            <div className="education-date">
              <label>Start Date</label>
              <input
                type="date"
                name="startDate"
                value={educationInfo.startDate}
                onChange={handleEducation}
              />
            </div>
            <div className="education-date">
              <label>End Date</label>
              <input
                type="date"
                name="endDate"
                value={educationInfo.endDate}
                onChange={handleEducation}
              />
            </div>
          </div>
          <button type="submit" onClick={handleEditable}>
            submit
          </button>
        </form>
      </section>
    );
  } else {
    return (
      <section className="education">
        <h2>Education</h2>
        <h2>School: {educationInfo.school}</h2>
        <h2>Location: {educationInfo.location}</h2>
        <h2>Degree: {educationInfo.degree}</h2>
        <h2>Start Date: {educationInfo.startDate}</h2>
        <h2>End Date: {educationInfo.endDate}</h2>
        <button onClick={handleEditable}>Edit</button>
      </section>
    );
  }
}
