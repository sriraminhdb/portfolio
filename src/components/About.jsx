import { Container, Row, Col, Image } from 'react-bootstrap'

export default function About() {
  return (
    <section id="about">
      <Container className="py-5">
        <Row className="align-items-center">
          <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
            <Image
              src="/images/profile.jpg"
              alt="Sriramkumar Raja Natarajan"
              roundedCircle
              fluid
              className="about-image"
            />
          </Col>

          <Col xs={12} md={8}>
            <h1>Hi there <span role="img" aria-label="waving hand">👋</span></h1>
            <p className="about-text">
              I’m <strong>Sriramkumar Raja Natarajan</strong> a <strong>Full Stack Developer</strong> based in Heidelberg, Germany <span role="img" aria-label="flag">🇩🇪</span>, currently pursuing my Master's in Applied Computer Science at{' '}
              <a
                href="https://www.srh-hochschule-heidelberg.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                SRH Hochschule Heidelberg
              </a>.
            </p>

            <hr style={{ borderColor: 'rgba(255,255,255,0.3)' }} />

            <h4>🎯 Currently Seeking</h4>
            <ul className="about-list">
              <li>
                <strong>🚀 Open to Internship or Working Student opportunities in Frontend Development</strong>
              </li>
              <li>
                💡 Passionate about creating clean, responsive, and user-centric web applications using modern frontend technologies like React.js and Vue.js.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}