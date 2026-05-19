import './App.css'

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Git & GitHub',
  'Vite',
]

const projects = [
  {
    title: 'Blood Donation Support System',
    description:
      'A role-based web platform for connecting donors, managing requests, and simplifying emergency blood coordination.',
    stack: 'PHP, MySQL, Bootstrap',
  },
  {
    title: 'Portfolio CI/CD Demo',
    description:
      'A React portfolio that validates every push with GitHub Actions and is ready for automated deployment on Vercel.',
    stack: 'React, Vite, GitHub Actions',
  },
  {
    title: 'Appointment Booking Prototype',
    description:
      'A clean interface for scheduling, tracking, and reviewing user appointment requests with simple status flows.',
    stack: 'React, CSS, REST APIs',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="hero" id="home">
        <nav className="topbar" aria-label="Primary">
          <span className="brand">ACER Portfolio</span>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-copy">
          <p className="eyebrow">Week 10 CI/CD Tutorial Project</p>
          <h1>Frontend portfolio with automated build validation.</h1>
          <p className="lead">
            This React portfolio demonstrates a simple personal site structure with a
            GitHub Actions workflow that checks every push and a deployment path ready
            for Vercel.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#projects">
              View Projects
            </a>
            <a className="secondary-link" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="content-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Building clean products with practical delivery workflows.</h2>
          </div>
          <p className="section-text">
            I focus on building web applications that are easy to use, maintain, and
            deploy. This tutorial project shows not only the frontend portfolio itself,
            but also the CI/CD mindset behind modern delivery.
          </p>
        </section>

        <section className="content-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Core tools used across development and delivery.</h2>
          </div>
          <div className="pill-grid">
            {skills.map((skill) => (
              <span className="skill-pill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="content-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Selected work and practice builds.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <p className="project-stack">{project.stack}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section contact-section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Available for collaboration, feedback, and internships.</h2>
          </div>
          <div className="contact-panel">
            <div>
              <p className="contact-label">Email</p>
              <a href="mailto:acer.student@example.com">acer.student@example.com</a>
            </div>
            <div>
              <p className="contact-label">GitHub</p>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                github.com/your-profile
              </a>
            </div>
            <div>
              <p className="contact-label">Location</p>
              <p>Kathmandu, Nepal</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
