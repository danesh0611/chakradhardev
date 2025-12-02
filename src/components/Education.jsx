function Education() {
  const educationData = [
    {
      id: 1,
      institution: "SRM Institute of Science and Technology",
      degree: "B.Tech Computer Science Engineering",
      score: "CGPA: 9.65/10",
      year: "2024–2028",
      icon: "🎓"
    },
    {
      id: 2,
      institution: "PS Senior Secondary School",
      degree: "Class XII",
      score: "85%",
      year: "2022–2024",
      icon: "📚"
    },
    {
      id: 3,
      institution: "PS Senior Secondary School",
      degree: "Class X",
      score: "90%",
      year: "2010–2022",
      icon: "📖"
    }
  ]

  return (
    <section id="education" className="section education-section">
      <h2>Education</h2>
      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <div key={edu.id} className="education-item">
            <div className="timeline-marker">
              <div className="timeline-dot"></div>
              {index !== educationData.length - 1 && <div className="timeline-line"></div>}
            </div>
            <div className="education-content">
              <div className="education-header">
                <span className="education-icon">{edu.icon}</span>
                <div className="education-info">
                  <h3>{edu.institution}</h3>
                  <p className="education-degree">{edu.degree}</p>
                </div>
              </div>
              <div className="education-details">
                <span className="education-score">{edu.score}</span>
                <span className="education-year">{edu.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
