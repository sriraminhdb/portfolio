import { Container, Row, Col } from 'react-bootstrap'

const projects = [
  {
    image: '/images/llm-screenshot.png',
    title: 'LLM Benchmarking Framework',
    period: 'April 2025 – May 2025',
    tech: 'React.js, Java',
    desc: 'Developed a web app for benchmarking multiple LLM APIs. Built modular tools for evaluating and comparing AI model outputs.',
  },
  {
    image: '/images/doubts-screenshot.png',
    title: 'Programming Doubts Discussion Platform',
    period: 'February 2025 – March 2025',
    tech: 'React.js, Vitest, Cypress',
    desc: 'Collaborated in a team of 3 to build a platform where users can post and discuss programming questions. Used Vitest for unit testing and Cypress for E2E tests.',
  },
  {
    image: '/images/finance-screenshot.png',
    title: 'Finance Management Project',
    period: 'January 2025 – February 2025',
    tech: 'React.js, Python, FastAPI',
    desc: 'Built an expense management microservice architecture. Designed and implemented the transaction service and frontend for the budget service.',
  },
  {
    image: '/images/lost-track-screenshot.png',
    title: 'Lost and Track',
    period: 'November 2024 – December 2024',
    tech: 'Vue.js',
    desc: 'Developed a lost-and-found web app in a team of 4. Implemented a matching algorithm to simplify item tracking.',
  },
  {
    image: '/images/petfoods-screenshot.png',
    title: 'Pet Foods Website',
    period: 'June 2024 – July 2024',
    tech: 'HTML, CSS, JavaScript, Bootstrap',
    desc: 'Developed a responsive website for a pet foods company. Applied the rule of thirds in banner design for visual appeal.',
  },
    {
    image: '/images/medical-screenshot.png',
    title: 'Medical Management System',
    period: 'May 2024 – June 2024',
    tech: 'HTML, CSS, Thymeleaf',
    desc: 'Key member of a 5-person team building a comprehensive medical management portal. Focused on front-end UX and dynamic rendering with Thymeleaf.',
  }
]

export default function Projects() {
  return (
    <section id="projects">
      <Container className="py-5">
        <h1 className="section-title">Projects</h1>
        <Row xs={1} md={2} className="g-4">
          {projects.map((p, i) => (
            <Col key={i}>
              <div className="experience-card">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    className="project-img mb-3"
                  />
                ) : (
                  <div className="project-image-placeholder mb-3" />
                )}

                <div className="experience-card-header">
                  <div>
                    <strong>{p.title}</strong>
                    <span className="ms-2">{p.tech}</span>
                  </div>
                  <span className="experience-date">{p.period}</span>
                </div>

                <p className="mt-3">{p.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
