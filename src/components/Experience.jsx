import { Container, Row, Col } from 'react-bootstrap'

const experiences = [
  {
    logo: '/logos/beml.png',
    company: 'BEML Limited, Bengaluru',
    role: 'Intern – Software Engineer',
    period: 'July 2023 – October 2023',
    bullets: [
      'Developed responsive web interfaces improving page load times and user engagement.',
      'Collaborated with back-end developers to integrate APIs and ensure seamless data flow.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <Container className="py-5">
        <h1 className="section-title">Experience</h1>
        <Row xs={1} md={2} className="g-4">
          {experiences.map((exp, i) => (
            <Col key={i}>
              <div className="experience-card">
                <div className="experience-card-header">
                  <div className="d-flex align-items-center">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="company-logo"
                    />
                    <span className="company-label">{exp.company}</span>
                  </div>
                  <span className="experience-date">{exp.period}</span>
                </div>
                <h5>{exp.role}</h5>
                <ul className="mt-3">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}