import './App.css';
import PersonalInfo from './components/personalInfo';
import Education from './components/education';
import Preview from './components/preview';
import { useState } from 'react';

function App() {
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

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  function handleChange(e) {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
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
      <Preview personalInfo={userInfo} educations={educationInfo} />
    </div>
  );
}

export default App;
