import '../styles/education.css';
import { Fragment } from 'react';

export default function Education({
  educationInfo,
  handleEducation,
  handleExpansion,
  handleDeleteEducation,
  handleNewEducation,
}) {
  return (
    <section className="education">
      <h2>Education</h2>
      {educationInfo.map((education) => {
        if (education.isActive) {
          return (
            <Fragment key={education.id}>
              <div className="education-container">
                <button
                  className="education-button"
                  onClick={() => handleExpansion(education.id)}
                >
                  <div> {'>'} </div>
                  <h2>{education.school}</h2>
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteEducation(education.id)}
                >
                  []
                </button>
              </div>
              <form>
                <label>School</label>
                <input
                  type="text"
                  name="school"
                  value={education.school}
                  onChange={(e) => handleEducation(e, education.id)}
                />
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={education.location}
                  onChange={(e) => handleEducation(e, education.id)}
                />
                <label>Degree</label>
                <input
                  type="text"
                  name="degree"
                  value={education.degree}
                  onChange={(e) => handleEducation(e, education.id)}
                />
                <div className="date-container">
                  <div className="education-date">
                    <label>Start Date</label>
                    <input
                      type="date"
                      name="startDate"
                      value={education.startDate}
                      onChange={(e) => handleEducation(e, education.id)}
                    />
                  </div>
                  <div className="education-date">
                    <label>End Date</label>
                    <input
                      type="date"
                      name="endDate"
                      value={education.endDate}
                      onChange={(e) => handleEducation(e, education.id)}
                    />
                  </div>
                </div>
              </form>
            </Fragment>
          );
        } else {
          return (
            <Fragment key={education.id}>
              <div className="education-container">
                <button
                  className="education-button"
                  onClick={() => handleExpansion(education.id)}
                >
                  <div> {'v'} </div>
                  <h2>{education.school}</h2>
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteEducation(education.id)}
                >
                  []
                </button>
              </div>
            </Fragment>
          );
        }
      })}
      <button className="add-education" onClick={handleNewEducation}>
        Add Education
      </button>
    </section>
  );
}
