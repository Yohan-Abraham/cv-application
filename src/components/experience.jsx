import '../styles/experience.css';
import { Fragment } from 'react';

export default function Experience({
  experienceInfo,
  handleExperience,
  handleExpansion,
  handleDeleteExperience,
  handleNewExperience,
  handleAddBullet,
  handleDeleteBullet,
  handleBulletChange,
}) {
  return (
    <section className="experience">
      <h2>Experience</h2>
      {experienceInfo.map((experience) => {
        if (experience.isActive) {
          return (
            <Fragment key={experience.id}>
              <div className="education-container">
                <button
                  className="education-button"
                  onClick={() => handleExpansion(experience.id)}
                >
                  <div> {'v'} </div>
                  <h2>{experience.company}</h2>
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteExperience(experience.id)}
                >
                  []
                </button>
              </div>
              <form>
                <label>Company</label>
                <input
                  type="text"
                  name="company"
                  value={experience.company}
                  onChange={(e) => handleExperience(e, experience.id)}
                />
                <label>JobTitle</label>
                <input
                  type="text"
                  name="jobTitle"
                  value={experience.jobTitle}
                  onChange={(e) => handleExperience(e, experience.id)}
                />
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={experience.location}
                  onChange={(e) => handleExperience(e, experience.id)}
                />

                <label>Bullet Points</label>
                <div className="bullet-point-container">
                  {experience.bulletPoints.map((bullet) => {
                    return (
                      <Fragment key={bullet.id}>
                        <div>
                          <input
                            type="text"
                            className="bullet"
                            value={bullet.bulletPoint}
                            onChange={(e) =>
                              handleBulletChange(e, experience.id, bullet.id)
                            }
                          ></input>
                          <button
                            className="delete-bullet"
                            onClick={() =>
                              handleDeleteBullet(experience.id, bullet.id)
                            }
                          >
                            []
                          </button>
                        </div>
                      </Fragment>
                    );
                  })}
                  <button
                    type="button"
                    className="add-bullet"
                    onClick={() => handleAddBullet(experience.id)}
                  >
                    Add Bullet
                  </button>
                </div>

                <div className="date-container">
                  <div className="education-date">
                    <label>Start Date</label>
                    <input
                      type="date"
                      name="startDate"
                      value={experience.startDate}
                      onChange={(e) => handleExperience(e, experience.id)}
                    />
                  </div>
                  <div className="education-date">
                    <label>End Date</label>
                    <input
                      type="date"
                      name="endDate"
                      value={experience.endDate}
                      onChange={(e) => handleExperience(e, experience.id)}
                    />
                  </div>
                </div>
              </form>
            </Fragment>
          );
        } else {
          return (
            <Fragment key={experience.id}>
              <div className="education-container">
                <button
                  className="education-button"
                  onClick={() => handleExpansion(experience.id)}
                >
                  <div> {'>'} </div>
                  <h2>{experience.company}</h2>
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteExperience(experience.id)}
                >
                  []
                </button>
              </div>
            </Fragment>
          );
        }
      })}
      <button className="add-education" onClick={handleNewExperience}>
        Add Experience
      </button>
    </section>
  );
}
