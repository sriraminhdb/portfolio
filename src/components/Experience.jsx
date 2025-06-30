import { Container, Row, Col } from 'react-bootstrap'

const experiences = [
  {
    logo: '/logos/flink.png',
    company: 'Flink SE, Mannheim',
    role: 'Working Student – Operations Associate',
    period: 'May 2024 – August 2024',
    bullets: [
      'Managed inventory control for groceries and beverages to ensure accuracy and efficiency.',
      'Coordinated staff shift assignments and effectively addressed customer complaints.',
      'Tracked delivery status to ensure timely service and customer satisfaction.',
    ],
  },
  {
    logo: '/logos/beml.png',
    company: 'BEML Limited, Bengaluru',
    role: 'Intern – IT Support',
    period: 'July 2023 – October 2023',
    bullets: [
      'Maintained and managed IT infrastructure, ensuring secure, reliable daily operations.',
      'Partnered with the IT Security team to identify, eliminate, and prevent security risks.',
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