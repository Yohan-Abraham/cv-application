import '../styles/education.css';
import { Fragment, useState } from 'react';

export default function Education() {
  const defaultEducation = {
    id: crypto.randomUUID(),
    school: 'New Education',
    location: '',
    degree: '',
    startDate: '',
    endDate: '',
    isActive: true,
  };

  const [educationInfo, setEducationInfo] = useState([defaultEducation]);

  function handleEducation(e, id) {
    setEducationInfo((prevEducation) =>
      prevEducation.map((education) => {
        if (education.id === id) {
          return { ...education, [e.target.name]: e.target.value };
        } else {
          return education;
        }
      }),
    );
  }

  function handleExpansion(id) {
    setEducationInfo((prevEducation) =>
      prevEducation.map((education) =>
        education.id === id
          ? { ...education, isActive: !education.isActive }
          : education,
      ),
    );
  }

  function handleDeleteEducation(id) {
    setEducationInfo((prevEducation) =>
      prevEducation.filter((education) => education.id !== id),
    );
  }

  function handleNewEducation() {
    setEducationInfo((prevEducation) => [
      ...prevEducation,
      { ...defaultEducation, id: crypto.randomUUID() },
    ]);
  }

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
                <button type="submit">submit</button>
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
