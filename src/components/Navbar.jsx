import { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('home')

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  useEffect(() => {
    const sectionIds = ['home', 'skills', 'projects', 'publications', 'education', 'achievements', 'contact']
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0.25 }
    )

    sections.forEach((sec) => observer.observe(sec))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#home" onClick={() => scrollToSection('home')}>
            CHAKRADHAR
          </a>
        </div>

        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className={`nav-link ${active === 'home' ? 'active' : ''}`} onClick={() => scrollToSection('home')}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className={`nav-link ${active === 'skills' ? 'active' : ''}`} onClick={() => scrollToSection('skills')}>
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className={`nav-link ${active === 'projects' ? 'active' : ''}`} onClick={() => scrollToSection('projects')}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#publications" className={`nav-link ${active === 'publications' ? 'active' : ''}`} onClick={() => scrollToSection('publications')}>
              Publications
            </a>
          </li>
          <li className="nav-item">
            <a href="#education" className={`nav-link ${active === 'education' ? 'active' : ''}`} onClick={() => scrollToSection('education')}>
              Education
            </a>
          </li>
          <li className="nav-item">
            <a href="#achievements" className={`nav-link ${active === 'achievements' ? 'active' : ''}`} onClick={() => scrollToSection('achievements')}>
              Achievements
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className={`nav-link nav-link-cta ${active === 'contact' ? 'active' : ''}`} onClick={() => scrollToSection('contact')}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
