function Skills() {
  const skillsData = [
    {
      category: "Frontend",
      skills: ["React", "JavaScript", "HTML", "CSS"],
      icon: "🎨"
    },
    {
      category: "Backend & Database",
      skills: ["Python", "SQL", "C", "C++"],
      icon: "⚙️"
    },
    {
      category: "Cloud & Virtualization",
      skills: ["VM Creation", "Azure", "AWS", "GCP"],
      icon: "☁️"
    },
    {
      category: "Blockchain",
      skills: ["Smart Contracts", "Solidity", "Web3"],
      icon: "🔗"
    },
    {
      category: "Core CS",
      skills: ["Data Structures", "Algorithms"],
      icon: "📊"
    },
    {
      category: "Other Tools",
      skills: ["Git", "GitHub"],
      icon: "🛠️"
    }
  ]

  return (
    <section id="skills" className="section skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skillGroup, index) => (
          <div key={index} className="skill-card">
            <div className="skill-header">
              <span className="skill-icon">{skillGroup.icon}</span>
              <h3>{skillGroup.category}</h3>
            </div>
            <div className="skill-tags">
              {skillGroup.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
