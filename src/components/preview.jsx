import '../styles/preview.css';

export default function Preview({ personalInfo, educations }) {
  return (
    <section className="preview">
      <div className="personal-details">
        <h1>{personalInfo.name}</h1>
        <div style={{ display: 'flex', gap: '0.3em' }}>
          <p>{personalInfo.phone}</p>
          {personalInfo.phone == '' || personalInfo.email == '' ? null : '|'}
          <p>{personalInfo.email}</p>
        </div>
      </div>

      <div className="education">
        <h2>Education</h2>
        <hr />
        {educations.map((education) => {
          return (
            <div className="education-preview-container" key={education.id}>
              <div className="spaced-between">
                <h4>{education.school}</h4>
                <p>{education.location}</p>
              </div>
              <div className="spaced-between">
                <i>{education.degree}</i>
                <i>
                  {education.startDate}
                  {education.startDate == '' || education.endDate == ''
                    ? null
                    : ' - '}
                  {education.endDate !== '' && education.startDate == ''
                    ? `Expected: ${education.endDate}`
                    : education.endDate}
                </i>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
