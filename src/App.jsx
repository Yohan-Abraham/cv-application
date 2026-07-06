import './App.css';
import PersonalInfo from './components/personalInfo';
import Education from './components/education';
import Preview from './components/preview';
import Experience from './components/experience';
import { useState } from 'react';

function App() {
  const defaultEducation = {
    id: crypto.randomUUID(),
    school: 'Arizona State University',
    location: 'Tempe, Arizona',
    degree: 'Computer Science',
    startDate: '',
    endDate: '2028',
    isActive: false,
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

  const [userInfo, setUserInfo] = useState({
    name: 'Quandle Dingle',
    email: 'dingle@gmail.com',
    phone: '111-111-1111',
  });

  function handleChange(e) {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  }

  const defaultExperience = {
    id: crypto.randomUUID(),
    company: 'Microsoft',
    location: 'Vancouver, BC',
    jobTitle: 'Web Developer',
    startDate: 'July 2025',
    endDate: '',
    bulletPoints: [
      {
        id: crypto.randomUUID(),
        bulletPoint: 'hi',
      },
      {
        id: crypto.randomUUID(),
        bulletPoint: 'bye',
      },
    ], //try object with id
    isActive: false,
  };

  const [experienceInfo, setExperienceInfo] = useState([defaultExperience]);

  function handleExperience(e, id) {
    setExperienceInfo((prev) =>
      prev.map((experience) => {
        if (experience.id === id) {
          return { ...experience, [e.target.name]: e.target.value };
        } else {
          return experience;
        }
      }),
    );
  }

  function handleExperienceExpansion(id) {
    setExperienceInfo((prev) =>
      prev.map((experience) =>
        experience.id === id
          ? { ...experience, isActive: !experience.isActive }
          : experience,
      ),
    );
  }

  function handleDeleteExperience(id) {
    setExperienceInfo((prev) =>
      prev.filter((experience) => experience.id !== id),
    );
  }

  function handleNewExperience() {
    setExperienceInfo((prev) => [
      ...prev,
      { ...defaultExperience, id: crypto.randomUUID() },
    ]);
  }

  function handleAddBullet(id) {
    setExperienceInfo((prev) =>
      prev.map((experience) =>
        experience.id === id
          ? {
              ...experience,
              bulletPoints: [
                ...experience.bulletPoints,
                { id: crypto.randomUUID(), bulletPoint: 'New Point' },
              ],
            }
          : experience,
      ),
    );
  }

  function handleDeleteBullet(experienceId, bulletId) {
    setExperienceInfo((prev) => {
      return prev.map((experience) => {
        if (experience.id == experienceId) {
          return {
            ...experience,
            bulletPoints: experience.bulletPoints.filter(
              (bulletPoint) => bulletPoint.id !== bulletId,
            ),
          };
        } else {
          return experience;
        }
      });
    });
  }

  function handleBulletChange(e, experienceId, bulletId) {
    setExperienceInfo((prev) =>
      prev.map((experience) => {
        if (experience.id === experienceId) {
          return {
            ...experience,
            bulletPoints: experience.bulletPoints.map((bullet) =>
              bullet.id === bulletId
                ? { ...bullet, bulletPoint: e.target.value }
                : bullet,
            ),
          };
        }

        return experience;
      }),
    );
  }

  return (
    <div className="app">
      <PersonalInfo personalInfo={userInfo} handleChange={handleChange} />
      <Education
        educationInfo={educationInfo}
        handleEducation={handleEducation}
        handleExpansion={handleExpansion}
        handleDeleteEducation={handleDeleteEducation}
        handleNewEducation={handleNewEducation}
      />
      <Experience
        experienceInfo={experienceInfo}
        handleExperience={handleExperience}
        handleExpansion={handleExperienceExpansion}
        handleDeleteExperience={handleDeleteExperience}
        handleNewExperience={handleNewExperience}
        handleAddBullet={handleAddBullet}
        handleDeleteBullet={handleDeleteBullet}
        handleBulletChange={handleBulletChange}
      />
      <Preview
        personalInfo={userInfo}
        educations={educationInfo}
        experiences={experienceInfo}
      />
    </div>
  );
}

export default App;
