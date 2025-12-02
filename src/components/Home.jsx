function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>K S CHAKRADHAR DANESH</h1>
        <p className="hero-subtitle">B.Tech Computer Science Engineering Student at SRMIST, Chennai</p>
        
        <div className="hero-tags">
          <span className="tag">Web Developer</span>
          <span className="tag">Data Science Enthusiast</span>
          <span className="tag">Technical Lead, CHiPSET Club</span>
          <span className="tag">Passionate Technophile</span>
        </div>

        <div className="hero-description">
          <p>Computer Science student skilled in <strong>React, Python, C/C++, and SQL</strong>, with experience in developing full-stack applications.</p>
          
          <div className="hero-highlights">
            <div className="highlight-item">
              <h3>🚀 Projects</h3>
              <p>Built multiple projects and management systems showcasing strong problem-solving and coding ability.</p>
            </div>
            
            <div className="highlight-item">
              <h3>📊 DSA Skills</h3>
              <p>Solved 190+ DSA problems across LeetCode, GFG, and Code360 to strengthen algorithmic skills.</p>
            </div>
            
            <div className="highlight-item">
              <h3>🤝 Leadership</h3>
              <p>Actively involved in technical clubs, hackathons, and workshops, gaining teamwork and leadership experience.</p>
            </div>
          </div>
        </div>

        <button className="cta-button" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
          View My Work
        </button>
      </div>
    </section>
  )
}

export default Home
