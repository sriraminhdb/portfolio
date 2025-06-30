import { Container, Row, Col } from 'react-bootstrap'

const educations = [
  {
    logo: '/logos/srh.png',
    institution: 'SRH Hochschule Heidelberg - Heidelberg, Germany',
    degree: 'Master of Science in Applied Computer Science',
    period: 'April 2024 – Present',
    details: 'Grade: 1.8 / 4.0',
  },
  {
    logo: '/logos/vtu.png',
    institution: 'Visvesvaraya Technological University - Bengaluru, India',
    degree: 'Bachelor of Engineering in Electronics and Communication Engineering',
    period: 'August 2019 – May 2023',
    details: '',
  },
]

export default function Education() {
  return (
    <section id="education">
      <Container className="py-5">
        <h1 className="section-title">Education</h1>
        <Row xs={1} md={2} className="g-4">
          {educations.map((edu, i) => (
            <Col key={i}>
              <div className="experience-card">
                <div className="experience-card-header">
                  <div className="d-flex align-items-center">
                    <img
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      className="company-logo"
                    />
                    <span className="company-label">
                      {edu.institution}
                    </span>
                  </div>
                  <span className="experience-date">{edu.period}</span>
                </div>
                <h5>{edu.degree}</h5>
                {edu.details && <p className="mt-2">{edu.details}</p>}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}