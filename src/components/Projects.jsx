function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Blockchain-Based Supply Chain Transparency",
      description: "Designed a decentralized platform using Solidity, Web3, and Node.js to ensure secure and transparent supply chain tracking.",
      tags: ["Solidity", "Web3", "Node.js", "Blockchain"],
      icon: "⛓️"
    },
    {
      id: 2,
      title: "MovieMania Website",
      description: "Built a React-based movie browsing site with dynamic search and responsive UI.",
      tags: ["React", "JavaScript", "HTML/CSS"],
      icon: "🎬"
    },
    {
      id: 3,
      title: "Grocery Shop Management System",
      description: "Developed a desktop app in Python (Tkinter + SQL) for inventory and billing management.",
      tags: ["Python", "Tkinter", "SQL"],
      icon: "🛒"
    },
    {
      id: 4,
      title: "Shopify Replica – Basic E-Commerce",
      description: "Created a React + SQL e-commerce clone with product listing and cart functionality.",
      tags: ["React", "SQL", "JavaScript"],
      icon: "🛍️"
    },
    {
      id: 5,
      title: "Bank Management System",
      description: "Implemented a Python + SQL application for account management and transaction handling.",
      tags: ["Python", "SQL", "Database"],
      icon: "🏦"
    }
  ]

  return (
    <section id="projects" className="section projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-icon">{project.icon}</div>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="project-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
