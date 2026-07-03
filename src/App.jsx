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

  function handleChange(e) {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="app">
      <PersonalInfo personalInfo={userInfo} handleChange={handleChange} />
      <Education />
      <Preview personalInfo={userInfo} />
    </div>
  );
}

export default App;
