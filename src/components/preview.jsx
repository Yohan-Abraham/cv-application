import '../styles/preview.css';

export default function Preview({ personalInfo }) {
  return (
    <section className="preview">
      <div className="personal-details">
        <h2>{personalInfo.name}</h2>
        <div style={{ display: 'flex', gap: '0.3em' }}>
          <p>{personalInfo.phone}</p>|<p>{personalInfo.email}</p>
        </div>
      </div>
    </section>
  );
}
