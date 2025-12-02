function Publications() {
  const publicationsData = [
    {
      id: 1,
      title: "Whisper AI + VITS for Multimodal Speech Translation",
      description: "Advanced speech-to-text and voice synthesis integration for real-time multilingual speech translation",
      technologies: ["Whisper AI", "VITS", "Speech Processing", "Machine Learning"],
      icon: "🎤"
    },
    {
      id: 2,
      title: "Raw Water Quality Prediction using Regression & Ensemble Models",
      description: "Predictive modeling for water quality assessment using advanced statistical and ensemble machine learning techniques",
      technologies: ["Machine Learning", "Regression", "Ensemble Models", "Data Science"],
      icon: "💧"
    }
  ]

  return (
    <section id="publications" className="section publications-section">
      <h2>Publications & Research</h2>
      <div className="publications-container">
        {publicationsData.map((pub) => (
          <div key={pub.id} className="publication-card">
            <div className="publication-header">
              <span className="publication-icon">{pub.icon}</span>
              <h3>{pub.title}</h3>
            </div>
            <p className="publication-description">{pub.description}</p>
            <div className="publication-tech">
              {pub.technologies.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
            <button className="learn-more-btn">Learn More →</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Publications
