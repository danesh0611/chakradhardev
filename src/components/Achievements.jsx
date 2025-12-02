function Achievements() {
  const achievementsData = [
    {
      id: 1,
      category: "Competitions",
      title: "Smart India Hackathon (SIH) 2025",
      description: "Participated in India's largest hackathon competition",
      date: "Oct 2024 – Present",
      icon: "🏆"
    },
    {
      id: 2,
      category: "Problem Solving",
      title: "190+ DSA Problems Solved",
      description: "Solved across LeetCode, GeeksforGeeks, and Code360",
      date: "Ongoing",
      icon: "💻"
    },
    {
      id: 3,
      category: "Certifications",
      title: "JavaScript Programming",
      description: "Certified by GeeksforGeeks",
      date: "Completed",
      icon: "📜"
    },
    {
      id: 4,
      category: "Certifications",
      title: "HTML, CSS & Java",
      description: "Certified by Great Learning",
      date: "Completed",
      icon: "📜"
    },
    {
      id: 5,
      category: "Workshops",
      title: "Advanced Technical Workshops",
      description: "Machine Learning (IITM+HCL), Blockchain, Azure AI, Linux Essentials",
      date: "Various",
      icon: "🎓"
    },
    {
      id: 6,
      category: "Awards",
      title: "Best Project Award",
      description: "Class 12 project recognition",
      date: "2022",
      icon: "⭐"
    }
  ]

  const categories = {
    "Competitions": { color: "#fbbf24", bgColor: "rgba(251, 191, 36, 0.1)" },
    "Problem Solving": { color: "#fbbf24", bgColor: "rgba(251, 191, 36, 0.1)" },
    "Certifications": { color: "#d97706", bgColor: "rgba(217, 119, 6, 0.1)" },
    "Workshops": { color: "#fbbf24", bgColor: "rgba(251, 191, 36, 0.1)" },
    "Awards": { color: "#fbbf24", bgColor: "rgba(251, 191, 36, 0.1)" }
  }

  return (
    <section id="achievements" className="section achievements-section">
      <h2>Achievements & Certifications</h2>
      <div className="achievements-grid">
        {achievementsData.map((achievement) => (
          <div key={achievement.id} className="achievement-card">
            <div className="achievement-icon">{achievement.icon}</div>
            <div className="achievement-badge" style={{ backgroundColor: categories[achievement.category].bgColor }}>
              {achievement.category}
            </div>
            <h3>{achievement.title}</h3>
            <p className="achievement-description">{achievement.description}</p>
            <span className="achievement-date">{achievement.date}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Achievements
