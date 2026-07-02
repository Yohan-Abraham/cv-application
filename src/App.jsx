import './App.css';
import PersonalInfo from './components/personalInfo';
import Education from './components/education';
import Preview from './components/preview';
import { useState } from 'react';

function App() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [userEducation, setUserEducation] = useState({
    school: '',
    location: '',
    degree: '',
    startDate: '',
    endDate: '',
  });

  function handleChange(e) {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  }

  function handleEducation(e) {
    setUserEducation({
      ...userEducation,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="app">
      <PersonalInfo personalInfo={userInfo} handleChange={handleChange} />
      <Education
        educationInfo={userEducation}
        handleEducation={handleEducation}
      />
      <Preview personalInfo={userInfo} education={userEducation} />
    </div>
  );
}

export default App;
