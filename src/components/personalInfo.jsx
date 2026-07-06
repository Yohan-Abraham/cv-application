import { useState } from 'react';

export default function PersonalInfo({ personalInfo, handleChange }) {
  const [isEditable, setIsEditable] = useState(true);

  function handleEditable(e) {
    e.preventDefault();
    setIsEditable(!isEditable);
  }

  if (isEditable) {
    return (
      <section className="personal">
        <h2>Personal Details</h2>
        <form>
          <label>Name</label>
          <input
            type="text"
            value={personalInfo.name}
            name="name"
            onChange={handleChange}
          ></input>

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={personalInfo.email}
            onChange={handleChange}
          ></input>

          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={personalInfo.phone}
            onChange={handleChange}
          ></input>
          <button type="submit" onClick={handleEditable}>
            Sumbit
          </button>
        </form>
      </section>
    );
  } else {
    return (
      <section className="personal">
        <h2>Personal Details</h2>
        <h2>Name: {personalInfo.name}</h2>
        <h2>Email: {personalInfo.email}</h2>
        <h2>Phone: {personalInfo.phone}</h2>
        <button onClick={handleEditable}>Edit</button>
      </section>
    );
  }
}
