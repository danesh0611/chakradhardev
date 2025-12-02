function Contact() {
  const contactLinks = [
    {
      id: 1,
      platform: "Email",
      value: "chakradhardanesh@gmail.com",
      icon: "✉️",
      href: "mailto:chakradhardanesh@gmail.com",
      color: "#fbbf24"
    },
    {
      id: 2,
      platform: "Phone",
      value: "9710717142",
      icon: "📱",
      href: "tel:9710717142",
      color: "#fbbf24"
    },
    {
      id: 3,
      platform: "LinkedIn",
      value: "chakradhar-danesh",
      icon: "💼",
      href: "https://linkedin.com/in/chakradhar-danesh",
      color: "#fbbf24"
    },
    {
      id: 4,
      platform: "GitHub",
      value: "danesh0611",
      icon: "🐙",
      href: "https://github.com/danesh0611",
      color: "#fbbf24"
    },
    {
      id: 5,
      platform: "LeetCode",
      value: "chakradhar2006",
      icon: "⚡",
      href: "https://leetcode.com/u/chakradhar2006",
      color: "#fbbf24"
    }
  ]

  return (
    <section id="contact" className="section contact-section">
      <h2>Get In Touch</h2>
      
      <div className="contact-header">
        <h3 className="contact-name">K.S. Chakradhar Danesh</h3>
        <p className="contact-tagline">Let's connect and collaborate on amazing projects!</p>
      </div>

      <div className="contact-grid">
        {contactLinks.map((link) => (
          <a 
            key={link.id} 
            href={link.href}
            target={link.href.startsWith('http') ? "_blank" : "_self"}
            rel={link.href.startsWith('http') ? "noopener noreferrer" : ""}
            className="contact-card"
          >
            <div className="contact-icon">{link.icon}</div>
            <h4 className="contact-platform">{link.platform}</h4>
            <p className="contact-value">{link.value}</p>
            <span className="contact-arrow">→</span>
          </a>
        ))}
      </div>

      <div className="contact-cta">
        <p>Feel free to reach out via any of the channels above. I'm always open to new opportunities and interesting conversations!</p>
      </div>
    </section>
  )
}

export default Contact
